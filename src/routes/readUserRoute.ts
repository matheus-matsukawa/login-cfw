import { jsonResponse } from "../utils"
import { readUser } from "../services/readUser"

export const readUserRoute = async (event: any) => {
  if (event.request.method === "GET") {
    try {      
      return await readUser()
    } catch (err: any) {
      return jsonResponse({ body: err.message, status: 404 })
    }
  } else {
    return jsonResponse({ body: "Expected GET!", status: 403 })
  }
}
