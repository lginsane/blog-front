<template>
  <div class="user-app-wrap">
    <div v-if="userInfo && userInfo.name" class="user-content">
      <img v-if="userInfo.avatar" :src="userInfo.avatar" alt="">
      <span class="name">{{ userInfo.name }}</span>
    </div>
    <nuxt-link v-else to="/signIn" size="small" class="login-box"> 登录 </nuxt-link>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from 'vue'
import { useUserStore } from '@/store/useUserStore'
export default {
  name: 'AppUser',
  setup() {
    const userStore = useUserStore()
    const proxy = getCurrentInstance().proxy
    const userInfo = ref(userStore.userInfo)
    console.log('res', proxy)
    return { userInfo }
  },
}
</script>
<style lang="less">
  .user-app-wrap {
    .user-content {
      font-size: 13px;
      cursor: pointer;
      color: @color;
      .name {
        color: @colorText-1;
      }
      img {
        width: 40px;
        height: 40px;
        display: inline-block;
        object-fit: cover;
        border-radius: 50%;
        border: 1px solid #eee;
        margin-right: 4px;
      }
    }
    .login-box {
      color: #fff;
      font-size: 12px;
      margin-left: 10px;
      padding: 6px 15px;
      background: @colorReverse;
      border-radius: 15px;
    }
  }
</style>
