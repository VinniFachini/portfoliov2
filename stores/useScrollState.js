import { defineStore } from 'pinia'

export const useScrollState = defineStore({
  id: 'scrollState',
  state: () => ({
    state: 1
  }),
  actions: {
    setState(item) {
      this.state = item
    }
  }
})