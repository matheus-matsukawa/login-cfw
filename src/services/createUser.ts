import { kvSimulationGet } from "../utils/kvSimulationGet";
import { kvSimulationPut } from "../utils/kvSimulationPut";

export async function createUser(event: FetchEvent) {
    try {
        const user = await event.request.json();
        const db = await kvSimulationGet();
        const put = await kvSimulationPut(db.users.concat(user));
        return { body: put, status: 200 };
    } catch(err) {
        return { body:"Expected payload " + err, status: 404 };
    }
}