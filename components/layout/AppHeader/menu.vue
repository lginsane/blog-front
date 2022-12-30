<template>
  <div class="app-menu flex">
    <div class="app-menu-btn">
      <div
        class="app-menu-btn-wrap"
        :class="isOpen && 'active'"
        @click="switchOpenNav"
      >
        <span class="top"></span>
        <span class="middle"></span>
        <span class="bottom"></span>
      </div>
    </div>
    <ul class="app-menu-list">
      <li v-for="nav in navList" :key="nav.path" class="app-menu-item">
        <nuxt-link
          :to="nav.path"
          class="app-menu-item__link"
          active-class="active"
        >
          {{ nav.name }}
        </nuxt-link>
      </li>
    </ul>
    <transition name="fade">
      <div v-if="isOpen" class="app-menu-screen">
        <ul class="app-menu-screen-list">
          <li
            v-for="nav in navList"
            :key="nav.path"
            class="app-menu-screen-item"
            @click="switchOpenNav"
          >
            <nuxt-link
              :to="nav.path"
              class="app-menu-screen-item__link"
              active-class="active"
            >
              {{ nav.name }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, watch } from '@nuxtjs/composition-api'
export default {
  name: 'AppMenu',
  setup() {
    const activePath = ref('')
    const isOpen = ref(false)
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
        name: '技术馆',
        path: '/article',
      },
      {
        name: '关于我',
        path: '/about',
      },
      // {
      //   name: '日记馆',
      //   path: '/diary',
      // },
      // {
      //   name: '音乐馆',
      //   path: '/music',
      // },
      // {
      //   name: '美食馆',
      //   path: '/fine-food',
      // },
    ])
    const switchOpenNav = () => {
      isOpen.value = !isOpen.value
      if (isOpen.value) {
        document.body.style = 'overflow: hidden;'
      } else {
        document.body.style = ''
      }
    }
    return {
      navList,
      activePath,
      isOpen,
      switchOpenNav,
    }
  },
}
</script>

<style lang="less">
.app-menu {
  &-list {
    display: none;
    @media screen and (min-width: @breakpoints-md) {
      display: flex;
    }
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
        background: @colorPrimary;
        transition: all 0.3s ease;
      }
      &:hover {
        background: @colorPrimary;
        background-clip: text;
        -webkit-background-clip: text;
        color: @colorPrimary;
        &::after {
          width: 100%;
          left: 0;
        }
      }
      &.active {
        color: transparent;
        color: @colorPrimary;
        // font-weight: 600;
        background: @colorPrimary;
        -webkit-background-clip: text;
        &::after {
          width: 100%;
          left: 0;
        }
      }
    }
  }
  &-screen {
    position: fixed;
    top: calc(@heightHeader + 1px);
    height: calc(100vh - @heightHeader - 1px);
    right: 0;
    left: 0;
    padding: 0 32px;
    width: 100%;
    background-color: #ffffff;
    overflow-y: auto;
    transition: background-color 0.5s;
    pointer-events: auto;
    @media screen and (min-width: @breakpoints-md) {
      display: none;
    }
    &-list {
      display: flex;
      flex-direction: column;
    }
    &-item {
      line-height: @heightHeader;
      display: inline-block;
      &__link {
        display: block;
        line-height: @heightHeader;
        position: relative;
        text-align: center;
        font-size: 15px;
        cursor: pointer;
        transition: color 0.25s ease;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 0;
          border-radius: 2px;
          background: @colorText-3;
          transition: all 0.3s ease;
          width: 100%;
        }
        &.active {
          color: @colorPrimary;
          font-weight: 600;
          -webkit-background-clip: text;
          &::after {
            width: 100%;
            left: 0;
            height: 2px;
            background: @colorPrimary;
          }
        }
      }
    }
  }
  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: @heightHeader;
    &-wrap {
      position: relative;
      width: 16px;
      height: 14px;
      overflow: hidden;
      .top,
      .middle,
      .bottom {
        position: absolute;
        width: 16px;
        height: 1px;
        background-color: @colorText-1;
        transition: top 0.25s, background-color 0.5s, transform 0.25s;
      }
      .top {
        top: 0;
        left: 0;
        transform: translate(0);
      }
      .middle {
        top: 6px;
        left: 0;
        transform: translate(8px);
      }
      .bottom {
        top: 12px;
        left: 0;
        transform: translate(4px);
      }
      &.active {
        .top,
        .middle,
        .bottom {
          background-color: @colorText-2;
          transition: top 0.25s, background-color 0.25s, transform 0.25s;
        }
        .top {
          top: 6px;
          transform: translate(0) rotate(225deg);
        }
        .middle {
          top: 6px;
          transform: translate(16px);
        }
        .bottom {
          top: 6px;
          transform: translate(0) rotate(135deg);
        }
      }
    }
    @media screen and (min-width: @breakpoints-md) {
      display: none;
    }
  }
}
</style>
