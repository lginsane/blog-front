<template>
  <div class="article-type-page">
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
  name: 'ArticleTypePage',
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
      sum: 10
    })
    const loading = ref(true)
    const noMore = computed(() => articleList.value.length >= state.sum)
    const disabled = computed(() => loading.value || noMore.value)
    function initLoad() {
      loading.value = true
      state.sum = 6
      articleList.value = [
        {
          id: 'summarize-3',
          title: '盘点我的2022',
          desc: '你现在所经历的挫折与失败，它只属于现在，把它交给时间。你会发现一切都是最好的安排！',
          types: ['总结'],
          tags: ['年度总结'],
          time: '2023-01-03 15:33:30',
          coverImg: require('@/assets/images/article/summarize-2.webp')
        },
        {
          id: 'summarize-3',
          title: 'Pinia 入门',
          desc: 'Vue 的存储库，允许跨组件/页面共享状态',
          types: ['入门知识'],
          tags: ['Vue'],
          time: '2022-05-06 16:17:59',
          coverImg: require('@/assets/images/article/pinia.jpg')
        },
        {
          id: 'summarize-1',
          title: '盘点我的2021',
          desc: '自负是进步的敌人！',
          types: ['总结'],
          tags: ['年度总结'],
          time: '2021-12-29 15:33:30',
          coverImg: require('@/assets/images/article/summarize-1.webp')
        },
        {
          id: 'mongodb',
          title: 'MongoDB入门',
          desc: '基于分布式文件存储的数据库',
          types: ['入门知识'],
          tags: ['数据库'],
          time: '2021-11-12 18:34:12',
          coverImg: require('@/assets/images/article/mongoDB.jpeg')
        },
        {
          id: 'git',
          title: 'Git 总结',
          desc: '免费的开源的分布式版本控制系统',
          types: ['工具'],
          tags: ['Git'],
          time: '2021-10-31 20:19:05',
          coverImg: require('@/assets/images/article/git.png')
        }
      ]
      loading.value = false
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
.article-type-page {
  height: 100%;
  .article-sidebar {
    margin-bottom: 20px;

  }
}
</style>
