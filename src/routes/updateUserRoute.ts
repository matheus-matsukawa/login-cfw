import { getParams, jsonResponse } from "../utils"
import { updateUser } from "../services/updateUser"

export const updateUserRoute = async (event: any) => {
  if (event.request.method === "PATCH") {
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

      const bodyReq = await event.request.json()

      return await updateUser(params, bodyReq)
    } catch (err: any) {
      return jsonResponse({ body: err.message, status: 404 })
    }
  } else {
    return jsonResponse({ body: "Expected PATCH!", status: 403 })
  }
}
