import { User, Todo } from "../dtos"
import { jsonResponse, kvSimulationGet, kvSimulationPut } from "../utils"

export const deleteTodo = async (params: any) => {
  try {
    const db = await kvSimulationGet()

    const userFound: User = db.users.find(
      (user: User) => user.id === params.userId
    )
    db.users['to-dos'] = userFound["to-dos"].find(
      (todo: Todo) => todo.id !== params.todoId
    )

    // await kvSimulationPut(db)

    console.log('db', db);
    
    return jsonResponse({
      body: { todo: db },
      status: 200
    })
  } catch (err: any) {
    return jsonResponse({ body: err.message, status: 404 })
  }
}
