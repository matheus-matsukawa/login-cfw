/**
 * Função cujo objetivo é resolver o problema do CORS
 * @param {FetchEvent} event -> Evento com a requisição.
 * @return {Response} -> Resposta do evento.
 */
export function corsListener(event: FetchEvent) {
  const response = corsHandler(event.request)
  if (response) {
    event.respondWith(response)
  }
}

/**
 * Função cujo objetivo é responder utilizando o CORS se o método da requisição
 * for OPTIONS
 * @param {Request} request -> Request
 * @return {Response} -> Resposta utilizando o CORS
 */
function corsHandler(request: Request) {
  if (request.method.toUpperCase() === "OPTIONS") {
    return respondWithCors()
  }
}

/**
 * Função cujo objetivo é response impedido o bloqueio de CORS.
 */
// https://www.npmjs.com/package/cors#enabling-cors-pre-flight
// https://github.com/expressjs/cors/blob/master/lib/index.js#L163
// https://developers.cloudflare.com/workers/examples/cors-header-proxy
function respondWithCors() {
  return new Response(null, {
    status: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    headers: {
      ...CORS,
      // Safari (and potentially other browsers) need content-length 0,
      // for 204 or they just hang waiting for a body
      "Content-Length": "0"
    }
  })
}

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods":
    "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, CONNECT, TRACE",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Max-Age": "86400"
}
