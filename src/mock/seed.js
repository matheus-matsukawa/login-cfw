const fetch = require("node-fetch")
const db = require("./userData")

async function seed(body) {
  await fetch(
    `https://s3.wasabisys.com/wasabi.e-inscricao.tech/ei/estagiarios/mock.json`,
    {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(body)
    }
  )
}

seed(db)
