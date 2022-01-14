import { User } from "../dtos"
import { jsonResponse } from "../utils"
import { kvSimulationGet } from "../utils/kvSimulationGet"

export const readUser = async () => {
  try {
    const db = await kvSimulationGet()

    db.users.forEach((user: User) => delete user.password)

    return jsonResponse({ body: db.users, status: 200 })
  } catch (err: any) {
    return jsonResponse({ body: err.message, status: 404 })
  }
}
