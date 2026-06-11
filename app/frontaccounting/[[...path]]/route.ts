import { NextRequest, NextResponse } from 'next/server';
import https from 'https';

export const runtime = 'nodejs';

const BLUEHOST_IP = '162.241.217.174';
const TARGET_HOST = 'www.accotax.co';

function makeRequest(
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
    ? `/frontaccounting/${pathStr}${search}`
    : `/frontaccounting/${search}`;

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
    result = await makeRequest(req.method, targetPath, reqHeaders, bodyBuf);

    // Follow redirects internally so the browser stays at /frontaccounting/
    let hops = 0;
    while ([301, 302, 303, 307, 308].includes(result.status) && hops < 5) {
      const location = Array.isArray(result.headers['location'])
        ? result.headers['location'][0]
        : result.headers['location'];
      if (!location) break;
      let redirectPath: string;
      try {
        const url = new URL(location, `https://${TARGET_HOST}`);
        redirectPath = url.pathname + url.search;
      } catch {
        redirectPath = location;
      }
      const redirectMethod = [301, 302, 303].includes(result.status) ? 'GET' : req.method;
      const redirectHeaders = { ...reqHeaders };
      delete redirectHeaders['content-length'];
      result = await makeRequest(redirectMethod, redirectPath, redirectHeaders);
      hops++;
    }
  } catch {
    return new NextResponse('Upstream error', { status: 502 });
  }

  const responseHeaders = new Headers();
  const skipHeaders = ['transfer-encoding', 'connection', 'keep-alive', 'location'];
  for (const [key, value] of Object.entries(result.headers)) {
    if (skipHeaders.includes(key.toLowerCase())) continue;
    if (key.toLowerCase() === 'set-cookie') {
      const cookies = Array.isArray(value) ? value : [value as string];
      cookies.forEach((cookie) => {
        const rewritten = cookie
          .replace(/Path=\/frontaccounting2\//gi, 'Path=/frontaccounting/')
          .replace(/Path=\/frontaccounting2$/gi, 'Path=/frontaccounting');
        responseHeaders.append(key, rewritten);
      });
      continue;
    }
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
