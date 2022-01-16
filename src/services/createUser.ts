import { kvSimulationGet } from "../utils/kvSimulationGet"
import { kvSimulationPut } from "../utils/kvSimulationPut"
import { createUuid } from "../utils/createUuid";
export async function createUser(event: FetchEvent) {
  try {
    const user = await event.request.json()
    if (!(user.name && user.password && user.email)) return { body: "É preciso passar nome, senha e email", status: 403 };
    const db = await kvSimulationGet()
    console.log("db ==== " , typeof(db.users) )
    const found = db.users.find(element => element.email === user.email);
    if (found) return { body: "Email já existente", status: 403 }
    user.id = createUuid();
    db.users.push(user)
    const put = await kvSimulationPut(db)
    return { body: put, status: 200 }
  } catch (err) {
    return { body: "Expected payload " + err, status: 404 }
  }
}
