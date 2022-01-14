import { jsonResponse } from "../utils"
import { deleteUser } from "../services/deleteUser"

export const deleteRoute = async (event: FetchEvent) => {
  if (event.request.method !== "DELETE") {
    return jsonResponse({ body: "Expected DELETE", status: 403 })
  }

  try {
    return deleteUser(event)
  } catch (e) {
    return jsonResponse({ body: e, status: 400 })
  }
}
