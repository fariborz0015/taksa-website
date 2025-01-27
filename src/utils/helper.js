import { ApiConstants } from '@/constants'
export const roleCheck = ({ roles, roleToCheck }) => {
  return roles?.some((item) => {
    return item.roleName === roleToCheck
  })
}

export const landLinkMaker = (params = { token, landUuid }) => {
  const json = JSON.stringify(params)
  const base64 = btoa(json)
  return  'http://45.156.184.188:1050/land?utm=' + base64
}

export const loginLinkMaker = (params = { token }) => {
  const json = JSON.stringify(params)
  const base64 = btoa(json)
  return ApiConstants.dashboardUrl + 'login?utm=' + base64
}

export function getCharacterColor(char) {
  return `#${Math.floor(char.charCodeAt() * 16771).toString(16)}`
}

export function sortByattantion({ mainArray, schemaArray, key }) {
  if (mainArray.length != schemaArray.length) {
    return mainArray
  }

  let sortedArray = mainArray.sort((a, b) => {
    const indexA = schemaArray?.findIndex((x) => a?.uuid == x.uuid)
    const indexB = schemaArray?.findIndex((x) => b?.uuid == x.uuid)
    if (indexA < indexB) {
      return -1
    }
    if (indexA > indexB) {
      return 1
    }
    return 0
  })

  return sortedArray
}
