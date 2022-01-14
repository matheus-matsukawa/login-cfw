import { testeRoute } from "./testeRoute"
import { createTokenRoute } from "./createTokenRoute"
import { loginRoute } from "./loginRoute"
import { createUser } from "./createUser"
import { readUser } from "./readUser"
import { updateUser } from "./updateUser"
import { deleteUser } from "./deleteUser"

export const routes: any = {
  "/rotaDeTeste": testeRoute,
  "/createtoken": createTokenRoute,
  "/login": loginRoute,
  "/create": createUser,
  "/read": readUser,
  "/update": updateUser,
  "/delete": deleteUser
}
