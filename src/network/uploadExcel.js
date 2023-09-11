import { request } from '../network/request'

export function uploadExcel(data) {
  return request({
    url: '/entryInfo/get/schema/excel',
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data; boundary=<10>'
    },
    data
  })
}
