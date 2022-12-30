import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      isMobile: false,
      useInfo: {
        name: '迷之de小孩灬',
      },
      highLightIndex: 0
    }
  },
  actions: {
    setIsMobile(val) {
      this.isMobile = val
    },
    setHighLightIndex(val) {
      this.highLightIndex = val
    }
  },
})
