import { kvSimulationGet } from "../utils/kvSimulationGet"
import { kvSimulationPut } from "../utils/kvSimulationPut"
import { User } from "../dtos"
import { jsonResponse } from "../utils"

export const deleteUser = async (event: FetchEvent) => {
  const url = new URL(event.request.url)
  const username = url.pathname.split(":")[1]

  const db = await kvSimulationGet()
  const size = db.users.length
  db.users = db.users.filter((user: User) => user.name !== username)

  if (size === db.users.length) {
    throw "Coudn't find user"
  }
  try {
    await kvSimulationPut(db)

    return jsonResponse({ body: `User ${username} removed`, status: 200 })
  } catch (e) {
    throw "Coudn't connect with database"
  }
}
