import { testeRoute } from "./testeRoute"
import { createTokenRoute } from "./createTokenRoute"
import { loginRoute } from "./loginRoute"

export const routes: any = {
  "/rotaDeTeste": testeRoute,
  "/createtoken": createTokenRoute,
  "/login": loginRoute
}
