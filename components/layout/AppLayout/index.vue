<template>
  <div class="app-layout">
    <app-header></app-header>
    <div class="app-main">
      <slot></slot>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '../AppHeader/index.vue'
import AppFooter from '../AppFooter/index.vue'
export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>

<style lang="scss"></style>
