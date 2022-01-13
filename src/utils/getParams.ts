//Rota para pegar os parametros vindos na url
type RequestDTO = {
  url: string
}

/**
 * Função cujo objetivo é retornar todos os paramêtros contidos
 * na URL.
 * @param { token } -> Objeto que contém a UR
 * @returns Paramêtros da URL
 */
export function getParams({ url }: RequestDTO) {
  const urlService = new URL(url)

  const paramsService = new URLSearchParams(urlService.search)

  const returnObject: any = {}

  for (const pair of paramsService.entries()) {
    returnObject[pair[0]] = pair[1]
  }

  return returnObject
}
