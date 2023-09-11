import axios from 'axios'
import { defineStore } from 'pinia'
import { register } from '@/network/register'

export default defineStore('user', {
  state: () => ({
    userLoggedIn: true,
    formOpen: false
  }),
  getters: {
    formHidden(state) {
      return !state.formOpen ? 'hidden' : ''
    }
  },
  actions: {
    //注册用户

    async registerUser(values) {
      const userCred = await register(values)
    }
  }
})
