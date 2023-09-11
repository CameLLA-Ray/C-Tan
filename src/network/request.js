import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://81.71.154.68:8080/api/v1'
  })

  instance.defaults.headers.common['authorization'] = localStorage.getItem('token')
  console.log(localStorage.getItem('token'))
  return instance(config)
}
