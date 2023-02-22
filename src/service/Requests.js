import BackEndReq from "./Api"

export const loginByPhoneAndPasswordRequest = async (params) => {
  return await BackEndReq.post(`app/auth/login`, params)
}
export const loginByEmailAndPasswordRequest = async (params) => {
  return await BackEndReq.post(`app/auth/email/login`, params)
}
export const sendOtpRequest = async (params) => {
  return await BackEndReq.post(`app/auth/register/checkexsistuser`, params)
}
export const sendOtpRequestToEmail = async (params) => {
  return await BackEndReq.post(`app/auth/email/register/checkexsistuser`, params)
}
export const registerByPhoneAndPasswordRequest = async (params) => {
  return await BackEndReq.post(`app/auth/register/registercomplete`, params)
}
export const registerByEmailAndPasswordRequest = async (params) => {
  return await BackEndReq.post(`app/auth/email/register/registercomplete`, params)
}
export const requestLandRequest = async (params) => {
  return await BackEndReq.post(`app/landrequest/req`, params)
}
export const getUserListRequest = async (params) => {
  return await BackEndReq.get(`admin/userlist?page`, {
    params:params
  })
}
export const getProfile = async () => {
  return await BackEndReq.get(`app/auth/user`)
}
