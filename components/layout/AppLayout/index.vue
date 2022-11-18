<template>
  <div :class="classes">
    <app-header></app-header>
    <div class="app-main">
      <slot></slot>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import { computed } from '@nuxtjs/composition-api'
import AppHeader from '../AppHeader/index.vue'
import AppFooter from '../AppFooter/index.vue'
import { useAppStore } from '@/store/useAppStore'
export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
  },
  setup() {
    const appStore = useAppStore()
    const classes = computed(() => {
      return appStore.isMobile ? 'app-layout app-mobile' : 'app-layout'
    })
    return {
      classes,
    }
  },
}
</script>

<style lang="less">
.app-layout {
  .app-main {
    padding-top: @heightHeader + 20;
    padding-bottom: @heightFooter + 20;
    margin-bottom: -@heightFooter;
    min-height: 100vh;
  }
}
</style>
