import axios from 'axios'
import { ApiConstants } from '../constants'

const BackEndReq = axios.create()

BackEndReq.defaults.baseURL = ApiConstants.baseUrl
BackEndReq.defaults.timeout = ApiConstants.timeOut
BackEndReq.defaults.headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json;charset=UTF-8',
  //   Authorization: 'Bearer ' + Cookies.get('token') ?? 'niiiiiss',
}
BackEndReq.setToken = function (token) {
  BackEndReq.defaults.headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    ...(token ? { Authorization: 'Bearer ' + token } : {}),
  }
}

BackEndReq.interceptors.response.use(
  (response) => {
    return response
  },
  (err) => {
    return Promise.reject(err)
  },
)

export default BackEndReq
