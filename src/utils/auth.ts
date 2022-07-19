const TokenKey = 'admin-token'
const Routes = 'admin-routes'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token: any) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

export function setRoutes(setRoutes: any) {
  return localStorage.setItem(Routes, setRoutes)
}

export function getRoutes() {
  return localStorage.getItem(Routes)
}
