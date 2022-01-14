import { User } from "../dtos"
import { jsonResponse } from "../utils"
import { loginService } from "../services"

export async function loginRoute(event: any) {
  if (event.request.method === "POST") {
    try {
      const bodyReq: User = await event.request.json()
      return await loginService(bodyReq)
    } catch (err: any) {
      return jsonResponse({ body: err.message, status: 404 })
    }
  } else {
    return jsonResponse({ body: "Expected POST!", status: 403 })
  }
}
