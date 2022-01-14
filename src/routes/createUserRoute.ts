import { jsonResponse } from "../utils";

import { createUser } from "../services/createUser";
export async function createUserRoute(event: FetchEvent) {
    if (event.request.method === "POST") {
        try {
            const response = await createUser(event);
            return jsonResponse({body: response, status: 200})
        } catch (err) {
            jsonResponse({ body: err, status: 404 })
        }
    } else {
        jsonResponse({body: "Expected POST method", status: 403})
    }
}