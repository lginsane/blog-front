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
        { name: '全部', value: '/', number: 5 },
        { name: '入门知识', value: '/rm', number: 2 },
        { name: '工具', value: '/gj', number: 1 },
        { name: '总结', value: '/zj', number: 2 }
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
