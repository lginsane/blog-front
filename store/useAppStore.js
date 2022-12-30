import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      isMobile: false,
      useInfo: {
        name: '迷之de小孩灬',
      },
      highLightIndex: 1,
      typeIndex: 0,
      typeList: [
        { name: '全部', value: '/' },
        { name: '全部1', value: '/qb' },
      ]
    }
  },
  actions: {
    setIsMobile(val) {
      this.isMobile = val
    },
    setHighLightIndex(val) {
      this.highLightIndex = val
    },
    setTypeIndex(val) {
      this.typeIndex = val
    },
    setTypeList(val) {
      this.typeList = val
    }
  },
})
