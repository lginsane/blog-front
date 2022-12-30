<template>
  <div class="article-page">
    <div class="lg-container">
      <div class="lg-row">
        <div class="article-sidebar lg-col-md-15">
          <user-info style="margin-bottom: 20px"></user-info>
          <type-list></type-list>
        </div>
        <div class="article-container lg-col-md-45">
          <article-list
            :data="articleList"
            :load="initLoad"
            :loading="loading"
            :disabled="disabled"
            :no-more="noMore"
          ></article-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from 'vue'
import UserInfo from '@/components/page/UserInfo/index.vue'
import ArticleList from '@/components/page/ArticleList/index.vue'
import TypeList from '@/components/page/TypeList/index.vue'
export default {
  name: 'ArticlePage',
  components: {
    UserInfo,
    ArticleList,
    TypeList
  },
  setup() {
    const articleList = ref([])
    const state = reactive({
      page: 1,
      pageSize: 10,
    })
    const loading = ref(true)
    const noMore = computed(() => articleList.value.length >= 50)
    const disabled = computed(() => loading.value || noMore.value)
    function initLoad() {
      loading.value = true
      setTimeout(() => {
        for (let i = 0; i < state.pageSize; i++) {
          articleList.value.push({
            id: i,
            title: '标题' + ((state.page - 1) * 10 + i),
            desc: '描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述'
          })
        }
        state.page++
        console.log('page:', state.page)
        loading.value = false
      }, 2000);
    }
    onMounted(() => {
      initLoad()
    })
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

  }
}
</style>
