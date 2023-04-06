import { ApiConstants } from '@/constants'
export const roleCheck = ({ roles, roleToCheck }) => {
  return roles.some((item) => {
    return item.roleName === roleToCheck
  })
}

export const landLinkMaker = (params = { token, landUuid }) => {
  const json = JSON.stringify(params)
  const base64 = btoa(json)
  return ApiConstants.baseUrl + '/land?utm=' + base64
}

export const loginLinkMaker = (params = { token }) => {
  const json = JSON.stringify(params)
  const base64 = btoa(json)
  return ApiConstants.dashboardUrl + 'login?utm=' + base64
}
