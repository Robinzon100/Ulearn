import cookie from "cookie"

export function ParseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}