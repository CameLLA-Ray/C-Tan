import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => ({
    isOpen: false,
    addMessage: false
  }),
  getters: {
    hiddenClass(state) {
      return !state.isOpen ? 'hidden' : ''
    },
    changeAddMessage(state) {
      return !state.addMessage
    }
  }
})
