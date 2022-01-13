function favIconHandler(event: FetchEvent) {
  if (new URL(event.request.url).pathname === "/favicon.ico") {
    return new Response(null, {
      status: 301, // ou 204 No Content
      headers: {
        "Content-Type": "image/x-icon",
        "Cache-Control": "public, max-age=15552000"
      }
    })
  }
}

export function favIconListener(event: FetchEvent) {
  const response = favIconHandler(event)
  if (response) {
    event.respondWith(response)
  }
}
