import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // 用户信息
      userInfo: {
        name: '测试用户',
        avatar: 'https://lginsane.github.io/images/avatar.jpeg'
      }
    }
  },
  actions: {
    setUserInfo(val) {
      this.userInfo = val
    }
  },
})
