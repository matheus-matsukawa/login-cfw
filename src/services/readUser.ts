import { User } from "../dtos"
import { jsonResponse } from "../utils"
import { kvSimulationGet } from "../utils/kvSimulationGet"

export const readUser = async (params: any) => {
  try {
    const db = await kvSimulationGet()

    const userFound = db.users.find((user: User) => user.id === params.id)

    return jsonResponse({ body: userFound, status: 200 })
  } catch (err: any) {
    return jsonResponse({ body: err.message, status: 404 })
  }
}
