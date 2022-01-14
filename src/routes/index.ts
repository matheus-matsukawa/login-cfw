import { testeRoute } from "./testeRoute"
import { createTokenRoute } from "./createTokenRoute"
import { loginRoute } from "./loginRoute"
import { createUserRoute } from "./createUserRoute"
import { readUserRoute } from "./readUserRoute"
import { updateUserRoute } from "./updateUserRoute"
import { deleteUserRoute } from "./deleteUserRoute"

export const routes: any = {
  "/rotaDeTeste": testeRoute,
  "/createtoken": createTokenRoute,
  "/login": loginRoute,
  "/create": createUserRoute,
  "/read": readUserRoute,
  "/update": updateUserRoute,
  "/delete": deleteUserRoute
}
