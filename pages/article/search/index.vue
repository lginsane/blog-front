<template>
  <div class="article-search-page">
    <div class="lg-container">
      <div class="filter-bar">
        <filter-search
          v-model="formData.typeId"
          :options="typeList"
          title="分类"
          icon="icon-fenlei"
          label-key="name"
          value-key="id"
          @on-change="changeParam"
        ></filter-search>
        <filter-search
          v-model="formData.tagId"
          :options="tagList"
          multiple
          title="标签"
          icon="icon-biaoqian_o"
          label-key="name"
          value-key="id"
          @on-change="changeParam"
        >
        </filter-search>
        <div class="search-bar">
          <el-input
            v-model="formData.keyword"
            placeholder="请输入搜索内容"
            clearable
          ></el-input>
          <!-- <i class="iconfont icon-search"></i> -->
          <el-button class="search-btn">搜索</el-button>
        </div>
      </div>
      <div class="lg-row">
        <div class="article-sidebar lg-col-md-15">
          <hot-article></hot-article>
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
import ArticleList from '@/components/page/ArticleList/index.vue'
import HotArticle from '@/components/page/HotArticle/index.vue'
import FilterSearch from '@/components/kit/FilterSearch'
export default {
  name: 'ArticleSearchPage',
  components: {
    ArticleList,
    HotArticle,
    FilterSearch,
  },
  setup() {
    const formData = reactive({
      typeId: ['rm'],
      tagId: ['zj'],
      keyword: ''
    })
    const typeList = ref([
      {
        id: 'rm',
        name: '入门',
      },
      {
        id: 'gj',
        name: '工具',
      },
      {
        id: 'zj',
        name: '总结',
      },
    ])
    const tagList = ref([
      {
        id: 'zj',
        name: '年度总结',
      },
      {
        id: 'sjk',
        name: '数据库',
      },
      {
        id: 'vue',
        name: 'Vue',
      },
      {
        id: 'git',
        name: 'Git',
      },
    ])
    const articleList = ref([])
    const state = reactive({
      page: 1,
      pageSize: 10,
      sum: 10,
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
          coverImg: require('@/assets/images/article/summarize-2.webp'),
        },
        {
          id: 'summarize-3',
          title: 'Pinia 入门',
          desc: 'Vue 的存储库，允许跨组件/页面共享状态',
          types: ['入门知识'],
          tags: ['Vue'],
          time: '2022-05-06 16:17:59',
          coverImg: require('@/assets/images/article/pinia.jpg'),
        },
        {
          id: 'summarize-1',
          title: '盘点我的2021',
          desc: '自负是进步的敌人！',
          types: ['总结'],
          tags: ['年度总结'],
          time: '2021-12-29 15:33:30',
          coverImg: require('@/assets/images/article/summarize-1.webp'),
        },
        {
          id: 'mongodb',
          title: 'MongoDB入门',
          desc: '基于分布式文件存储的数据库',
          types: ['入门知识'],
          tags: ['数据库'],
          time: '2021-11-12 18:34:12',
          coverImg: require('@/assets/images/article/mongoDB.jpeg'),
        },
        {
          id: 'git',
          title: 'Git 总结',
          desc: '免费的开源的分布式版本控制系统',
          types: ['工具'],
          tags: ['Git'],
          time: '2021-10-31 20:19:05',
          coverImg: require('@/assets/images/article/git.png'),
        },
      ]
      loading.value = false
    }
    function changeParam() {
      state.page = 1
      initLoad()
    }
    onMounted(() => {
      initLoad()
    })
    return {
      formData,
      typeList,
      tagList,
      changeParam,
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
.article-search-page {
  height: 100%;
  .search-bar {
    display: flex;
    align-items: center;
    padding: 10px;
    // .icon-search {
    //   margin-left: 30px;
    //   font-size: 24px;
    //   color: @colorPrimary;
    // }
    .search-btn {
      margin-left: 30px;
      display: flex;
      align-items: center;
      .icon-search {
        margin-right: 10px;
      }
    }
  }
  .filter-bar {
    background-color: #fff;
    margin-bottom: 20px;
    padding: 20px 20px 20px 22px;
    position: relative;
    &:after {
      background: @colorCol;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 2px;
    }
  }
  .article-sidebar {
    margin-bottom: 20px;
  }
}
</style>
