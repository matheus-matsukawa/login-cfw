import { getParams, jsonResponse } from "../utils"
import { readUser } from "../services/readUser"

export const readUserRoute = async (event: any) => {
  if (event.request.method === "GET") {
    try {
      const params = getParams({
        url: event.request.url
      })

      if (!params.id) {
        return jsonResponse({
          body: { error: "User ID not found" },
          status: 404
        })
      }

      return await readUser(params)
    } catch (err: any) {
      return jsonResponse({ body: err.message, status: 404 })
    }
  } else {
    return jsonResponse({ body: "Expected GET!", status: 403 })
  }
}
