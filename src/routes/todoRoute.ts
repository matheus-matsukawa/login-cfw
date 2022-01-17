import { jsonResponse } from "../utils";
import { updateTodo } from "../services/updateTodo";

export async function todoRoute(event: FetchEvent) {
    if (event.request.method === "PATCH") {
        try {
            const response = await updateTodo(event);
            return jsonResponse({body: response, status: 200})
        } catch (err) {
            jsonResponse({ body: err, status: 404 })
        }
    } else {
        jsonResponse({body: "Expected POST method", status: 403})
    }
}