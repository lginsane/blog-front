<template>
  <div class="article-detail">
    <div class="lg-container">
      <div class="lg-row">
        <div class="article-detail-sidebar lg-col-md-15">
          <user-info style="margin-bottom: 20px"></user-info>
          <article-nav :content="article.content" />
        </div>
        <div class="article-detail-container lg-col-md-45">
          <card padding="20px" style="margin-bottom: 20px">
            <md-preview :content="article.content" :is-bg-show="true" />
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import UserInfo from '@/components/page/UserInfo/index.vue'
import ArticleNav from '@/components/page/ArticleNav/index.vue'
import MdPreview from '@/components/base/MdPreview'
import Card from '@/components/base/Card'
export default {
  name: 'ArticleDetail',
  components: {
    UserInfo,
    ArticleNav,
    Card,
    MdPreview
  },
  setup() {
    const article = reactive({
      content: '# 基础语法 \n 任何在声明的顶层的绑定 (包括变量，函数声明，以及 import 引入的内容) 都能在模板中直接使用 \n ### 基础语法3 \n 内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n ### 基础语法2 \n 内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容\n ### 基础语法4 \n 内容'
    });
    return {
      article
    }
  },
}
</script>

<style lang="less">
.article-detail-page {
  height: 100%;
  &-sidebar {

  }
}
</style>
