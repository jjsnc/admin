const TokenKey = 'admin-token'
const PermissionMenus = 'permission_menus'

export function getToken() {
  return localStorage.getItem(TokenKey)
}

export function setToken(token: any) {
  return localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return localStorage.removeItem(TokenKey)
}

export function getMenus() {
  return localStorage.getItem(PermissionMenus)
}

export function setMenus(Menus: any) {
  return localStorage.setItem(PermissionMenus, Menus)
}
