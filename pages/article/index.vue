<template>
  <div class="article-page">
    <div class="lg-container">
      <div class="lg-row">
        <div class="article-sidebar lg-col-md-15">
          <UserInfo></UserInfo>
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
import { ref, reactive, computed, onMounted } from 'vue'
import UserInfo from '@/components/page/UserInfo/index.vue'
import List from '@/components/page/List/index.vue'
export default {
  name: 'ArticlePage',
  components: {
    UserInfo,
    List,
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
