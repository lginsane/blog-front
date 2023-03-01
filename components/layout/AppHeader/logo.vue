<template>
  <div class="app-logo">
    <router-link to="/">{{ blogName }}</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAppStore } from '@/store/useAppStore'

export default {
  name: 'AppLogo',
  setup() {
    const appStore = useAppStore()
    const blogName = ref(appStore.bloggerInfo.name)
    return {
      blogName,
    }
  },
}
</script>

<style lang="less">
.app-logo {
  font-size: 20px;
  font-weight: bold;
}
</style>
