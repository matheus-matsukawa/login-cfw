import { User } from "../dtos"
import { jsonResponse } from "../utils"

export const updateUser = async (params: Object) => {
  try {
    

  } catch (err: any) {
    return jsonResponse({ body: err.message, status: 404 })
  }
}
