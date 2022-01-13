import { corsListener, eventListener, favIconListener } from "./listeners"

addEventListener("fetch", corsListener)

addEventListener("fetch", favIconListener)

addEventListener("fetch", eventListener)
