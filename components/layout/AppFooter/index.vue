<template>
  <div class="app-footer">
    <div class="lg-container">
      <div class="app-footer-content">
        <p>©2022 By {{ blogName }}</p>
        <p>Hi, welcome to my blog!</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useAppStore } from '@/store/useAppStore'
export default {
  name: 'AppFooter',
  setup() {
    const appStore = useAppStore()
    const blogName = ref(appStore.useInfo.name)
    return {
      blogName,
    }
  },
}
</script>

<style lang="less">
.app-footer {
  position: relative;
  width: 100%;
  height: @heightFooter;
  background-color: #06060b;
  color: @colorFooterText;
  font-size: 12px;
  .app-footer-content {
    height: @heightFooter;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 14px;
    color: @colorFooterText;
    p {
      margin-top: 5px;
    }
  }
}
</style>
