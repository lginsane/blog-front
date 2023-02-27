<template>
  <div class="article-wrap">
    <ul
      v-infinite-scroll="initLoad"
      infinite-scroll-disabled="disabled"
      class="article-list"
    >
      <li v-for="(item, index) in data" :key="index" class="article-item">
        <div class="article-item-header">
          <div class="title">
            <router-link
              :to="{ path: `/article/detail/${item.id}` }"
              class="router-title"
            >
              {{ item.title }}
            </router-link>
          </div>
        </div>
        <el-divider></el-divider>
        <div class="article-item-content">
          <div class="desc">{{ item.desc }}</div>
          <div class="coverImg">
            <img :src="item.coverImg" />
          </div>
        </div>
        <div class="article-item-footer">
          <div class="time inline-flex items-center">
            <i class="iconfont icon-time"></i>
            {{ item.time }}
          </div>
          <div v-if="item.types && item.types.length" class="type-box inline-flex items-center">
            <i class="iconfont icon-fenlei"></i>
            <span v-for="(type, j) in item.types" :key="j" class="type">
             {{type}}
            </span>
          </div>
          <div v-if="item.tags && item.tags.length" class="tag-box inline-flex items-center">
            <i class="iconfont icon-biaoqian_o"></i>
            <span v-for="(tag, i) in item.tags" :key="i" class="tag">
              {{tag}}
            </span>
          </div>
        </div>
      </li>
    </ul>
    <el-skeleton :loading="getSkeletonLoading" animated>
      <template slot="template">
        <div v-for="item in 3" :key="item" class="skeleton-item">
          <div class="skeleton-item-header">
            <el-skeleton-item class="title" variant="h1" />
          </div>
          <el-divider></el-divider>
          <div class="skeleton-item-content">
            <div class="desc">
              <el-skeleton-item variant="span" />
              <el-skeleton-item variant="span" />
              <el-skeleton-item variant="span" />
              <el-skeleton-item variant="span" />
              <el-skeleton-item variant="span" />
            </div>
            <el-skeleton-item variant="image" class="coverImg" />
          </div>
          <div class="skeleton-item-footer">
            <el-skeleton-item
              variant="span"
              class="time"
            />
            <el-skeleton-item
              variant="span"
              class="type"
            />
            <el-skeleton-item
              variant="span"
              class="tag"
            />
          </div>
        </div>
      </template>
    </el-skeleton>
    <p v-if="getLoading" class="tc text">加载中...</p>
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
        return function () {}
      },
    },
    loading: {
      type: Boolean,
      default: true,
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
  computed: {
    getSkeletonLoading() {
      return this.loading && this.data.length === 0
    },
    getLoading() {
      return this.loading && this.data.length > 0
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

  .skeleton-item {
    background-color: #fff;
    margin-bottom: 5px;
    border-radius: 4px;
    padding: 20px;

    &-header {
      .title {
        width: 50%;
        height: 32px;
      }
    }

    &-content {
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: @breakpoints-md) {
        flex-direction: column;
      }

      .desc {
        flex: 1;
      }
      .coverImg {
        width: 300px;
        min-width: 300px;
        height: 180px;
        margin-left: 15px;
        @media screen and (max-width: @breakpoints-md) {
          width: 100%;
          margin-left: 0;
          margin-top: 15px;
        }
      }
    }

    &-footer {
      display: flex;
      align-items: center;
      margin-top: 15px;
      .time {
        width: 100px;
        margin-right: 15px
      }
      .type, .tag {
        width: 80px;
        margin-right: 10px
      }
    }
  }

  .article-item {
    background-color: #fff;
    margin-bottom: 5px;
    border-radius: 4px;
    padding: 20px;

    &-header {
      .title {
        font-size: 24px;
        font-weight: bold;
        color: #333;
      }
    }

    &-content {
      display: flex;
      justify-content: space-between;

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
        min-width: 300px;
        height: 180px;
        margin-left: 15px;
        object-fit: cover;
        background-color: #eee;
        img {
          width: 100%;
          height: 100%;
          display: inline-block;
        }
        @media screen and (max-width: @breakpoints-md) {
          width: 100%;
          margin-left: 0;
          margin-top: 15px;
        }
      }
    }

    &-footer {
      display: flex;
      align-items: center;
      margin-top: 15px;

      .iconfont {
        margin-right: 3px;
      }

      .time {
        color: #666;
        font-size: 14px;
        margin-right: 15px;
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
