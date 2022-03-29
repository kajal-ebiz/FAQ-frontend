import { axiosGet } from '../axios/config'

export const getFaq = (data?: Object) => {
  return axiosGet('/faq', data)
}
