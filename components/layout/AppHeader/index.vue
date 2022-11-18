<template>
  <div class="app-header shadow-bottom">
    <div class="lg-container">
      <div class="app-header__content">
        <AppLogo></AppLogo>
        <AppMenu></AppMenu>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from './menu'
import AppLogo from './logo'
export default {
  name: 'AppHeader',
  components: {
    AppMenu,
    AppLogo,
  },
}
</script>

<style lang="less">
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  background-color: rgba(255, 255, 255, 0.9);
  color: @colorTextTitle;
  transition: color 0.2s;
  transition: transform 0.8s;
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: @heightHeader;
  }
}
</style>
