import { routes } from "../routes"
import { notFoundRoute } from "../routes/notFoundRoute"

function routerHandler(event: FetchEvent) {
  const url = new URL(event.request.url)

  const route = routes[url.pathname] || notFoundRoute

  return route(event)
}

function handleEvent(event: FetchEvent) {
  return routerHandler(event)
}

export function eventListener(event: FetchEvent) {
  event.respondWith(handleEvent(event))
}
