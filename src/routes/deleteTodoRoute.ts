import { getParams, jsonResponse } from "../utils"
import { deleteTodo } from "../services/deleteTodo"

export const deleteTodoRoute = async (event: any) => {
  if (event.request.method === "DELETE") {
    try {
      const params = getParams({
        url: event.request.url
      })

      if (!params.userId || !params.todoId) {
        return jsonResponse({
          body: { error: "Params not found" },
          status: 404
        })
      }

      // console.log('params', params);

      return await deleteTodo(params)
    } catch (err: any) {
      return jsonResponse({ body: err.message, status: 404 })
    }
  } else {
    return jsonResponse({ body: "Expected DELETE!", status: 403 })
  }
}
