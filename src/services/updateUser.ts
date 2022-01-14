import { User } from "../dtos"
import { jsonResponse, kvSimulationGet, kvSimulationPut } from "../utils"

export const updateUser = async (params: any, bodyReq: User) => {
  try {
    const db = await kvSimulationGet()

    const userFound: User = db.users.find(
      (user: User) => user.name === params.name
    )

    userFound.password = bodyReq.password
    await kvSimulationPut(db)

    return jsonResponse({
      body: { message: "Changes made successfully" },
      status: 200
    })
  } catch (err: any) {
    return jsonResponse({ body: err.message, status: 404 })
  }
}
