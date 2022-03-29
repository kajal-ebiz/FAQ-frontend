import axios from 'axios'

export default axios

export const axiosPost = (url: string, data: any) => {
  return axios.post(`${process.env.REACT_APP_API_URL}${url}`, data)
}

export const axiosGet = (url: string, data: any) => {
  return axios.get(`${process.env.REACT_APP_API_URL}${url}`, {
    params: data,
  })
}

export const axiosDelete = (url: string) => {
  return axios.delete(`${process.env.REACT_APP_API_URL}${url}`)
}

export const axiosPatch = (url: string, data: any) => {
  return axios.patch(`${process.env.REACT_APP_API_URL}${url}`, data)
}
