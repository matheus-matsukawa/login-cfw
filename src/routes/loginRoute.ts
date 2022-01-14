import { User } from "../dtos"
import { jsonResponse } from "../utils"
import { loginService } from "../services"
import { createToken } from "../utils/createToken"

const db = [
  {
    name: "otavio",
    password: "otavio123"
  },
  {
    name: "felipe",
    password: "felipe123"
  },
  {
    name: "matheus",
    password: "matheus123"
  }
]

export async function loginRoute(event: any) {
  if (event.request.method === "POST") {
    try {
      const bodyReq: User = await event.request.json()
      const userFind = db.find(user => user.name === bodyReq.name)

      if (!userFind) {
        return jsonResponse({ body: { error: "User not found" }, status: 404 })
      }

      if (userFind.password !== bodyReq.password) {
        return jsonResponse({
          body: { error: "Invalid password" },
          status: 400
        })
      }

      const token = {
        token: await createToken({ name: bodyReq.name })
      }

      const res = await loginService(token, 200)

      return jsonResponse({ body: res.body, status: res.status })
    } catch (err: any) {
      return jsonResponse({ body: err.message, status: 404 })
    }
  } else {
    return jsonResponse({ body: "Expected POST!", status: 403 })
  }
}
