//Rota para configuração de init adaptativa ao projeto
type RequestDTO = {
  method: string
  headers?: {
    authorization: string
  }
  body?: unknown
}

type ResponseDTO = {
  method: string
  headers: {
    Accept: string
    "Content-Type": string
  }
  body?: string
}

/**
 * Função cujo objetivo é componentizar o init.
 * @param {string, any, string} -> Método da requisição, body caso seja um método post ou put e um authorization necessário para acesso a API responsável por gerenciar os dados do banco de dados.
 * @return {object} -> Resposta com o headers a ser utilizado.
 */
export function createInit({ method, body, headers }: RequestDTO): ResponseDTO {
  const newHeaders: any = {
    Accept: "application/json",
    "Content-Type": "application/json"
  }

  if (headers) {
    if (headers.authorization) {
      newHeaders["Authorization"] = headers.authorization
    }
  }

  if (body) {
    return {
      method,
      headers: newHeaders,
      body: JSON.stringify(body)
    }
  } else {
    return {
      method,
      headers: newHeaders
    }
  }
}
