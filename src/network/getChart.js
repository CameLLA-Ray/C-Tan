import { request } from './request'

export function getChart(data) {
  return request({
    url: '/graph/get?chartType=' + data.chartType,
    method: 'get'
  })
}
