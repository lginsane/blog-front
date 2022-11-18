<template>
  <div class="app-menu flex">
    <div class="menu-task"></div>
    <ul class="app-menu-list">
      <li v-for="nav in navList" :key="nav.path" class="app-menu-item">
        <nuxt-link
          :to="nav.path"
          class="app-menu-item__link"
          :active-class="activePath === nav.path ? 'active' : ''"
        >
          {{ nav.name }}
        </nuxt-link>
      </li>
    </ul>
    <AppSearch></AppSearch>
  </div>
</template>

<script>
import { ref, watch } from '@nuxtjs/composition-api'
import AppSearch from './search.vue'
export default {
  name: 'AppMenu',
  components: { AppSearch },
  setup() {
    const activePath = ref('')
    if (process.client) {
      watch(
        () => window.$nuxt.$route,
        (val) => {
          activePath.value = val.path
        },
        {
          deep: true,
          immediate: true,
        }
      )
    }
    const navList = ref([
      {
        name: '首页',
        path: '/',
      },
      {
        name: '技术馆',
        path: '/article',
      },
      {
        name: '日记馆',
        path: '/diary',
      },
      {
        name: '音乐馆',
        path: '/music',
      },
      {
        name: '美食馆',
        path: '/fine-food',
      },
    ])
    return {
      navList,
      activePath,
    }
  },
}
</script>

<style lang="less">
.app-menu {
  padding: 0 10px;
  &-list {
    display: flex;
    margin-right: 10px;
  }
  &-item {
    line-height: @heightHeader;
    display: inline-block;
    &__link {
      display: block;
      line-height: @heightHeader;
      position: relative;
      padding: 0 20px;
      font-size: 16px;
      cursor: pointer;
      transition: color 0.25s ease;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        height: 2px;
        width: 0;
        border-radius: 2px;
        background-image: @color;
        transition: all 0.3s ease;
      }
      &:hover {
        background: @color;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        color: @colorPrimary;
        &::after {
          width: 100%;
          left: 0;
        }
      }
      &.active {
        color: transparent;
        color: @colorPrimary;
        font-weight: 600;
        background: @color;
        -webkit-background-clip: text;
        &::after {
          width: 100%;
          left: 0;
        }
      }
    }
  }
}
</style>
