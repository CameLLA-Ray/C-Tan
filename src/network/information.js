import { request } from './request'

export function information(data) {
  return request({
    url: '/user/save/info',
    method: 'post',
    data
  })
}
