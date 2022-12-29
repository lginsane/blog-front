<template>
  <div class="article-wrap">
    <ul
      v-infinite-scroll="initLoad"
      infinite-scroll-disabled="disabled"
      class="article-list"
    >
      <li v-for="(item, index) in data" :key="index" class="article-item">
        <div class="article-item-header">
          <div class="title">{{item.title}}</div>
        </div>
        <div class="article-item-content">
          <div class="desc">{{item.desc}}</div>
          <div class="coverImg"></div>
        </div>
        <div class="article-item-footer">
          <div class="time">2020-10-10</div>
          <div class="type">分类</div>
          <div class="tag">标签</div>
        </div>
      </li>
    </ul>
    <p v-if="loading" class="tc text">加载中...</p>
    <p v-if="noMore" class="tc text">没有更多了</p>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    load: {
      type: Function,
      default: () => {
        return function() {}
      }
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    noMore: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    initLoad() {
      this.load && this.load()
    },
  },
}
</script>

<style lang="less">
.article-wrap {
  height: 100%;
  .article-list {
    height: 100%;
  }
  .article-item {
    background-color: #fff;
    margin-bottom: 5px;
    border-radius: 4px;
    padding: 5px 20px;
    &-header {
      padding: 10px 0;
      .title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
      }
    }
    &-content {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid #efefef;
      padding: 15px 0;
      @media screen and (max-width: @breakpoints-md) {
        flex-direction: column;
      }
      .desc {
        font-size: 16px;
        color: #666;
        min-height: 50px;
      }
      .coverImg {
        width: 300px;
        height: 180px;
        object-fit: cover;
        background-color: #eee;
        @media screen and (max-width: @breakpoints-md) {
          width: 100%;
        }
      }
    }
    &-footer {
      display: flex;
      align-items: center;
      height: 36px;
      .time {
        color: #666;
        font-size: 14px;
        margin-right: 10px;
      }
      .tag {
        color: #666;
        font-size: 14px;
        margin-right: 10px;
      }
      .type {
        color: #666;
        font-size: 14px;
        margin-right: 10px;
      }
    }
  }
  .text {
    color: @colorText-2;
    font-size: 14px;
    padding: 10px 0;
  }
}
</style>
