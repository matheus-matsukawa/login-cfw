/**
 * Função cujo objetivo é formatar como será o retorno dos dados.
 * @param {Object} data -> Dado que será retornado.
 * @return {Response} -> Response com os dados formatados.
 */
export function jsonResponse(data: JsonResponseType) {
  const headers = {
    "Content-Type": "application/json",
    "Cache-Control": "max-age=31536000",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods":
      "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD, CONNECT, TRACE",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Max-Age": "86400"
  }

  return new Response(JSON.stringify(data.body), {
    headers,
    status: data.status
  })
}
