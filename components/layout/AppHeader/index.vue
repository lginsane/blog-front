<template>
  <div class="app-header shadow-bottom">
    <div class="lg-container">
      <div class="app-header-container">
        <AppLogo></AppLogo>
        <div class="app-header-content">
          <AppSearch></AppSearch>
          <AppMenu></AppMenu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from './menu'
import AppSearch from './search'
import AppLogo from './logo'
export default {
  name: 'AppHeader',
  components: {
    AppMenu,
    AppSearch,
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
  &-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: @heightHeader;
  }
  &-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
  }
}
</style>
