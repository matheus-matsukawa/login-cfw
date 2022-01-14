import { getParams, jsonResponse } from "../utils"
import { teste } from "../services"
export async function testeRoute(event: any) {
  if (event.request.method === "POST") {
    //verificando o tipo de rota
    try {
      const params = getParams(event.request.url) //exemplo de como pegar os parametros da url caso necessário
      const body = await event.request.json() //exemplo de como se pega o body
      const res = await teste(body)
      return jsonResponse({ body: res.body, status: res.status }) //exemplo de retorno de conteúdo e status
    } catch (err: any) {
      return jsonResponse({ body: err.message, status: 404 }) //exemplo de tratamento
    }
  } else {
    return jsonResponse({ body: "Expected POST!", status: 403 }) //exemplo de retorno caso não seja o método esperado
  }
}
