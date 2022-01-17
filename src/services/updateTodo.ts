import { kvSimulationGet } from "../utils";
import { kvSimulationPut } from "../utils";
export async function updateTodo(event: FetchEvent) {
    try {
        let url = event.request.url;
        url = url.slice(url.indexOf("?") + 1);
        const todo = new URLSearchParams(url);
        const user = todo.get("id");
        const todoId = todo.get("todoid");
        const data = await event.request.json();
        if (user && todoId && (data.name || data.description)) {
            const db = await kvSimulationGet();
            db.users.find(element => {
                if (element.id === user) {
                    console.log("\nACHEI: ", element.id);
                    element["to-dos"].find(element => {
                        if (element.id === todoId) {
                            data.name ? element.name = data.name : null;
                            data.description ? element.description = data.description : null
                            element.date = new Date();
                            kvSimulationPut(db);
                        }
                    })
                }
            })
            return { body: "Atualização feita com sucesso", status: 200 };
        } else {
            return { body: "userID e todoID necessários!", status: 403 };
        }
    } catch (err) {
        return { body: `Erro inesperado: ${err} `, status: 404 };
    }
}