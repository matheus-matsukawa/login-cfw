export async function kvSimulationGet() {
    const response = await fetch(
      `https://s3.wasabisys.com/wasabi.e-inscricao.tech/ei/estagiarios/mock.json`,
      { method: "GET" }
    )
    if (response.status == 404) {
      return null
    } else {
      return response.json()
    }
  }