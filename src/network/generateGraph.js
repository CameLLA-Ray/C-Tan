import { request } from './request'

export function generateGraph(data) {
  return request({
    url: '/graph/generate',
    method: 'post',
    data
  })
}
