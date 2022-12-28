<template>
  <div class="article-page">
    <div class="lg-container">
      <div class="lg-row">
        <div class="article-sidebar lg-col-md-15">
          <Card title="个人信息" :shadow="true">
            <div class="site-wrap">
              <div class="site-author site-overview-item">
                <div class="site-author-image"></div>
                <div class="site-author-name">梁傲</div>
                <div class="site-author-desc">作者描述</div>
              </div>
              <div class="site-author-links site-overview-item">
                <div class="links-item">
                  <span class="icon"></span>
                  <span class="name">github</span>
                </div>
                <div class="links-item">
                  <span class="icon"></span>
                  <span class="name">github</span>
                </div>
                <div class="links-item">
                  <span class="icon"></span>
                  <span class="name">github</span>
                </div>
                <div class="links-item">
                  <span class="icon"></span>
                  <span class="name">github</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div class="article-wrap lg-col-md-45">
          <div class="article-list">
            <div
              v-for="item in articleList"
              :key="item.id"
              class="article-item"
            >
              <div class="article-item-header">
                <div class="title">标题</div>
              </div>
              <div class="article-item-content">
                <div class="desc">描述</div>
                <div class="coverImg"></div>
              </div>
              <div class="article-item-footer">
                <div class="time">2020-10-10</div>
                <div class="type">分类</div>
                <div class="tag">标签</div>
              </div>
            </div>
          </div>
          <Loading :isShow="isLoading"></Loading>
          <div v-if="noMore && !isLoading" class="no-more-wrap">没有更多了</div>
          <div v-if="!noMore && !isLoading" class="more-btn">查看更多</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs } from 'vue'
import Card from '@/components/base/Card/index.vue'
import Loading from '@/components/base/Loading/index.vue'
export default {
  name: 'ArticlePage',
  components: {
    Card,
    Loading,
  },
  setup() {
    const articleList = ref([])
    const state = reactive({
      page: 1,
      pageSize: 10,
      isLoading: false,
      isError: false,
      noMore: false,
    })
    function load() {
      state.isLoading = true
      for (let i = 0; i < state.pageSize; i++) {
        articleList.value.push({
          id: i,
        })
      }
      if (articleList.value.length > 30) {
        state.noMore = true
      }
      state.page++
      state.isLoading = false
    }
    onMounted(() => {
      load()
    })
    return {
      articleList,
      ...toRefs(state),
    }
  },
}
</script>

<style lang="less">
.article-page {
  height: 100%;
  .article-sidebar {
    margin-bottom: 20px;
    .site-overview-item:not(:first-child) {
      margin-top: 10px;
      border-top: 1px solid #eee;
      padding-top: 10px;
    }
    .site-wrap {
    }
    .site-author {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 1px solid #eee;
        padding: 2px;
      }
      &-name {
        font-size: 16px;
        font-weight: bold;
        padding: 10px 0;
      }
      &-desc {
        color: #666;
        font-size: 13px;
      }
    }
    .site-author-links {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .links-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: red;
        }
        .name {
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
  .article-wrap {
  }
  .article-list {
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
}
</style>
