import { buildMetadataFromHeaders, registerLogs } from "@lucas54neves/logflare"
import { jsonResponse } from "../utils"

/**
 * Funcao cujo objetivo é rotear uma rota desconhecida
 * @param {Request} request -> Requisição
 */
export async function notFoundRoute(event: FetchEvent) {
  const sourceKey = "8f706b9e-82f8-4dc1-a812-c347b94764ec"

  const apiKey = "LfyAMZaQk_y7"

  const requestData = {
    rMeth: event.request.method,
    rUrl: event.request.url,
    uAgent: event.request.headers.get("user-agent"),
    rHost: event.request.headers.get("host"),
    cfRay: event.request.headers.get("cf-ray"),
    cIP: event.request.headers.get("cf-connecting-ip"),
    rCf: event.request.cf,
    requestMetadata: buildMetadataFromHeaders(event.request.headers)
  }

  const bodyData = {
    message: `${event.request.url} do not found!`,
    category: "url-not-found"
  }

  const response = jsonResponse({
    body: bodyData,
    status: 404
  })

  const responseData = {
    status: response.status,
    body: bodyData,
    headers: buildMetadataFromHeaders(response.headers)
  }

  const message = `${requestData.rMeth} | ${requestData.rUrl} | ${responseData.status} | ${requestData.cIP} | ${requestData.uAgent}`

  await registerLogs({
    credentials: { apiKey, sourceKey },
    message,
    request: requestData,
    response: responseData
  })

  return response
}


