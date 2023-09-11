import { request } from './request'

export function getActivity() {
  return request({
    url: '/entryInfo/get/list/activity'
  })
}
