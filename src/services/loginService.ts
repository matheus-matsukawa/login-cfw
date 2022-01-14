import { User } from "../dtos"
import { jsonResponse } from "../utils"
import { createToken } from "../utils/createToken"
import { kvSimulationGet } from "../utils/kvSimulationGet"

export const loginService = async (bodyReq: User) => {
  try {
    const db = await kvSimulationGet()
    const userFound = db.users.find((user: User) => user.name === bodyReq.name)

    if (!userFound) {
      return jsonResponse({ body: { error: "User not found" }, status: 404 })
    }

    if (userFound.password !== bodyReq.password) {
      return jsonResponse({
        body: { error: "Invalid password" },
        status: 400
      })
    }

    const token = {
      token: await createToken({ name: bodyReq.name })
    }

    return jsonResponse({ body: token, status: 200 })
  } catch (err: any) {
    return jsonResponse({ body: err.message, status: 404 })
  }
}
