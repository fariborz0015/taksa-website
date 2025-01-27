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
export const getLandListRequest = async (params) => {
  return await BackEndReq.get(`app/land/list`, {
    params:params
  })
}
export const getProfile = async () => {
  return await BackEndReq.get(`app/auth/user`)
}

 
export const getChatLandsMessages = async (params) => {
  return await BackEndReq.get(`app/message/land/list`, { params: params });
};
export const getSupportMessagesRequest = async (params) => {
  return await BackEndReq.get(`app/message/superadmin/get`, { params: params });
};
export const sendChatMessage = async (params) => {
  return await BackEndReq.post(`app/message/land/send`, params);
};
 
export const sendMessageToSupport = async (params) => {
  return await BackEndReq.post(`app/message/superadmin/send`, params);
};
 
export const getEventsList = async (params) => {
  return await BackEndReq.get(`app/website/news/list`, { params: params });
};
export const getEventsDetails = async (params) => {
  return await BackEndReq.get(`app/website/news/detail`, { params: params });
};