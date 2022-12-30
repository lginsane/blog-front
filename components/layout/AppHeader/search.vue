<template>
  <div class="app-search">
    <div class="app-search-button" @click="switchOpenNav">
      <i class="el-icon-search"></i>
      <span class="title">搜索</span>
      <span v-if="$device.isWindows" class="keyboard">Ctrl+K</span>
      <span v-if="$device.isMacOS" class="keyboard">⌘+K</span>
    </div>
    <div v-if="isOpen" class="search-screen" @click="switchOpenNav">
      <div class="search-modal" @click.stop="">
        <header class="search-bar">
          <el-input
            v-model="keyword"
            placeholder="请输入搜索内容"
            clearable
          ></el-input>
          <el-button class="cancel-btn" type="text" @click="handleCancel"
            >取消</el-button
          >
        </header>
        <div v-if="searchList.length" class="search-list">
          <div
            v-for="(item, index) in searchList"
            :key="index"
            class="search-item"
          >
            <div class="search-item-type">{{ item.title }}</div>
            <div class="search-item-wrap">
              <div
                v-for="(it, i) in item.list"
                :key="i"
                class="search-item-content shadow-block"
              >
                <div class="search-item-content__name">{{ it.name }}</div>
                <div class="search-item-content__tag">{{ it.tag }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isEmpty" class="search-empty">没有搜索结果</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from '@nuxtjs/composition-api'
export default {
  name: 'AppSearch',
  setup() {
    const isOpen = ref(false)
    const switchOpenNav = () => {
      isOpen.value = !isOpen.value
      if (isOpen.value) {
        document.body.style = 'overflow: hidden;'
      } else {
        document.body.style = ''
      }
    }
    const isEmpty = computed(() => {
      return !!searchList.value.length && keyword.value
    })
    const keyword = ref('')
    const searchList = ref([
      {
        title: '技术馆',
        list: [
          {
            name: '文章名称',
            tag: '标签',
          },
          {
            name: '文章名称',
          },
          {
            name: '文章名称',
            tag: '标签',
          },
          {
            name: '文章名称',
          },
          {
            name: '文章名称',
            tag: '标签',
          },
          {
            name: '文章名称',
          },
          {
            name: '文章名称',
            tag: '标签',
          },
          {
            name: '文章名称',
          },
        ],
      },
      {
        title: '日记馆',
        list: [
          {
            name: '文章名称',
            tag: '标签',
          },
          {
            name: '文章名称',
          },
        ],
      },
      {
        title: '音乐馆',
        list: [
          {
            name: '文章名称',
            tag: '标签',
          },
          {
            name: '文章名称',
          },
        ],
      },
      {
        title: '美食馆',
        list: [
          {
            name: '文章名称',
          },
        ],
      },
    ])
    const handleSearch = () => {}
    const handleCancel = () => {
      switchOpenNav()
    }
    return {
      isOpen,
      switchOpenNav,
      keyword,
      searchList,
      isEmpty,
      handleSearch,
      handleCancel,
    }
  },
}
</script>

<style lang="less">
.app-search {
  height: @heightHeader;
  display: flex;
  align-items: center;
  padding: 0 8px;
  &-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    .el-icon-search {
      color: @colorText-1;
    }
    .title {
      display: none;
    }
    .keyboard {
      display: none;
    }
    @media screen and (min-width: @breakpoints-md) {
      border: 1px solid #f9f9f9;
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 10px;
      border-radius: 8px;
      background-color: #f9f9f9;
      &:hover {
        border: 1px solid @colorPrimary;
      }
      .title {
        font-size: 13px;
        color: @colorText-2;
        margin-left: 4px;
        margin-right: 12px;
        line-height: 1;
        display: inline-block;
      }
      .keyboard {
        border: 1px solid @colorBorder;
        color: @colorText-2;
        padding: 0 6px;
        display: inline-flex;
        align-items: center;
        height: 22px;
        border-radius: 4px;
        font-size: 12px;
      }
    }
  }
  @media screen and (min-width: @breakpoints-lg) {
    padding-left: 32px;
  }
  @media screen and (min-width: @breakpoints-md) {
    padding-left: 24px;
    flex-grow: 1;
  }
}
.search-screen {
  background-color: rgba(101, 108, 133, 0.8);
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 200;
}
.search-modal {
  background-color: #f9f9f9;
  border-radius: 6px;
  flex-direction: column;
  position: relative;
  box-shadow: inset 1px 1px 0 0 hsla(0, 0%, 100%, 0.5), 0 3px 8px 0 #555a64;
  border-radius: 6px;
  margin: 60px auto auto;
  max-width: 560px;
  .search-bar {
    display: flex;
    align-items: center;
    padding: 10px;
    .cancel-btn {
      margin-left: 15px;
      font-size: 16px;
      color: @colorPrimary;
      width: 50px;
      display: none;
      @media screen and (max-width: @breakpoints-md) {
        display: block;
      }
    }
  }
  .search-list {
    max-height: 50vh;
    min-height: 150px;
    padding: 0 10px;
    overflow-x: scroll;
    @media screen and (max-width: @breakpoints-md) {
      max-height: calc(100vh - 60px);
    }
  }
  .search-empty {
    margin: 40px 0 0;
    font-size: 14px;
    color: @colorText-2;
    text-align: center;
  }
  .search-item {
    padding-bottom: 8px 0 0;
    &-type {
      color: @colorPrimary;
      margin-bottom: 4px;
      font-size: 14px;
    }
    &-wrap {
      margin-bottom: 10px;
    }
    &-content {
      background-color: #fff;
      height: 40px;
      border-radius: 4px;
      padding: 6px 10px;
      margin-bottom: 4px;
      height: 56px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      &__name {
        color: @colorText-1;
        font-size: 13px;
        font-weight: bold;
      }
      &__tag {
        color: @colorText-2;
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: @breakpoints-md) {
    border-radius: 0;
    box-shadow: none;
    height: 100vh;
    margin: 0;
    max-width: 100%;
    width: 100%;
  }
}
</style>
