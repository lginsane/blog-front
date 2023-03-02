import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      // 用户信息
      userInfo: {
        name: '测试用户',
        avatar: require('@/assets/images/avatar.jpg'),
      }
    }
  },
  actions: {
    setUserInfo(val) {
      this.userInfo = val
    }
  },
})
