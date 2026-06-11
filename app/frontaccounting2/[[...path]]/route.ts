import { NextRequest, NextResponse } from 'next/server';
import https from 'https';

export const runtime = 'nodejs';

const BLUEHOST_IP = '162.241.217.174';
const TARGET_HOST = 'www.accotax.co';

function proxyRequest(
  method: string,
  path: string,
  headers: Record<string, string>,
  body?: Buffer
): Promise<{ status: number; headers: Record<string, string | string[]>; body: Buffer }> {
  return new Promise((resolve, reject) => {
    const options: https.RequestOptions = {
      hostname: BLUEHOST_IP,
      port: 443,
      path,
      method,
      headers,
      servername: TARGET_HOST,
      rejectUnauthorized: false,
    };

    const req = https.request(options, (res) => {
      const chunks: Buffer[] = [];
      res.on('data', (chunk: Buffer) => chunks.push(chunk));
      res.on('end', () => {
        resolve({
          status: res.statusCode || 200,
          headers: res.headers as Record<string, string | string[]>,
          body: Buffer.concat(chunks),
        });
      });
      res.on('error', reject);
    });

    req.on('error', reject);
    if (body && body.length > 0) req.write(body);
    req.end();
  });
}

async function handler(
  req: NextRequest,
  context: { params: Promise<{ path?: string[] }> }
) {
  const params = await context.params;
  const pathSegments = params.path || [];
  const pathStr = pathSegments.join('/');
  const search = req.nextUrl.search;
  const targetPath = pathStr
    ? `/frontaccounting2/${pathStr}${search}`
    : `/frontaccounting2/${search}`;

  const reqHeaders: Record<string, string> = {
    Host: TARGET_HOST,
    'X-Forwarded-Proto': 'https',
  };

  for (const h of ['cookie', 'content-type', 'accept', 'accept-language', 'user-agent']) {
    const v = req.headers.get(h);
    if (v) reqHeaders[h] = v;
  }

  let bodyBuf: Buffer | undefined;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    const ab = await req.arrayBuffer();
    bodyBuf = Buffer.from(ab);
    if (bodyBuf.length > 0) reqHeaders['content-length'] = String(bodyBuf.length);
  }

  let result;
  try {
    result = await proxyRequest(req.method, targetPath, reqHeaders, bodyBuf);
  } catch {
    return new NextResponse('Upstream error', { status: 502 });
  }

  const responseHeaders = new Headers();
  const skipHeaders = ['transfer-encoding', 'connection', 'keep-alive'];
  for (const [key, value] of Object.entries(result.headers)) {
    if (skipHeaders.includes(key.toLowerCase())) continue;
    if (Array.isArray(value)) {
      value.forEach((v) => responseHeaders.append(key, v));
    } else if (value) {
      responseHeaders.set(key, value);
    }
  }

  return new NextResponse(new Uint8Array(result.body), {
    status: result.status,
    headers: responseHeaders,
  });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;
export const HEAD = handler;
