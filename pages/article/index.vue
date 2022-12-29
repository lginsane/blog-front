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
        <div class="article-container lg-col-md-45">
          <List
            :data="articleList"
            :load="initLoad"
            :loading="loading"
            :disabled="disabled"
            :no-more="noMore"
          ></List>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from 'vue'
import Card from '@/components/base/Card/index.vue'
import List from '@/components/page/List/index.vue'
export default {
  name: 'ArticlePage',
  components: {
    Card,
    List,
  },
  setup() {
    const articleList = ref([])
    const state = reactive({
      page: 1,
      pageSize: 10,
    })
    const loading = ref(false)
    const noMore = computed(() => articleList.value.length >= 20)
    const disabled = computed(() => loading.value || noMore.value)
    function initLoad() {
      loading.value = true
      setTimeout(() => {
        for (let i = 0; i < state.pageSize; i++) {
          articleList.value.push({
            id: i,
            title: '标题',
            desc: '描述'
          })
        }
        state.page++
        loading.value = false
      }, 2000);
    }
    return {
      articleList,
      initLoad,
      loading,
      disabled,
      noMore,
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
}
</style>
