import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      isMobile: false,
      useInfo: {
        name: '迷之de小孩灬',
      },
    }
  },
  actions: {
    setIsMobile(val) {
      this.isMobile = val
    },
  },
})
