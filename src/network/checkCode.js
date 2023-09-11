import { request } from './request'

export function getCode(data) {
  return request({
    url: '/user/code',
    method: 'post',
    data
  })
}
