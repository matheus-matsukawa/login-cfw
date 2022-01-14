import { createTokenRoute } from "./createTokenRoute"
import { loginRoute } from "./loginRoute"
import { createUserRoute } from "./createUserRoute"
import { readUserRoute } from "./readUserRoute"
import { updateUserRoute } from "./updateUserRoute"
import { deleteUserRoute } from "./deleteUserRoute"

export const routes: any = {
  "/createtoken": createTokenRoute,
  "/login": loginRoute,
  "/create": createUserRoute,
  "/read": readUserRoute,
  "/update": updateUserRoute,
  "/delete": deleteUserRoute
}

/* 
USERS
create user: POST para /users (JÁ EXISTE/ATUALIZAR) - Felipe
  Verificar dados obrigatórios
  Verificar validade dos dados(email único)

read user: GET para /users?id=IDUSUARIO (JÁ EXISTE) Otávio

update user: PATCH para /users?id=IDUSUARIO (JÁ EXISTE/ATUALIZAR) Otávio
  Id não pode ser alterado

destroy user: DELETE para /users?id=IDUSUARIO (JÁ EXISTE/ATUALIZAR)

TO-DOS
create todo: POST para /todos?id=IDUSUARIO(NOVO) - Matheus
  verificar o que é obrigatório
  
read todo: GET para /todos?id=IDUSUARIO&todoid=TODOID(NOVO) - Matheus

update todo: PATCH para /todos?id=IDUSUARIO&todoid=TODOID(NOVO) Felipe

destroy todo: DELETE para /todos?id=IDUSUARIO&todoid=TODOID(NOVO) Otávio
*/
