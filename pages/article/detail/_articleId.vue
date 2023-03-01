<template>
  <div class="article-detail">
    <div class="lg-container">
      <div class="lg-row">
        <div class="article-detail-sidebar lg-col-md-15">
          <hot-article style="margin-bottom: 20px"></hot-article>
          <article-nav :content="article.content" />
        </div>
        <div class="article-detail-container lg-col-md-45">
          <card padding="0" style="margin-bottom: 20px">
            <bill-board
              :poster="article.coverImg"
              :title="article.title"
              :title-sub="
                article.createTime | dateFormatFilter('YYYY 年 MM 月 DD 日')
              "
            >
              <div class="tags">
                <el-tag
                  v-for="(tag, index) in article.tags"
                  :key="index"
                  effect="plain"
                  >{{ tag }}</el-tag
                >
                <!-- <btn
                  v-if="isLiked"
                  :loading="isLikeLoading"
                  shape="rect"
                  theme="gradient"
                  icon="like"
                  @click="collectArticle(0)"
                ></btn>
                <btn
                  v-if="!isLiked"
                  :loading="isLikeLoading"
                  shape="rect"
                  theme="gradient"
                  icon="unLike"
                  @click="collectArticle(1)"
                ></btn> -->
              </div>
            </bill-board>
          </card>
          <card padding="20px" style="margin-bottom: 20px">
            <md-preview :content="article.content" :is-bg-show="false" />
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
import HotArticle from '@/components/page/HotArticle/index.vue'
import ArticleNav from '@/components/page/ArticleNav/index.vue'
import MdPreview from '@/components/base/MdPreview'
import Card from '@/components/base/Card'
import BillBoard from '@/components/kit/BillBoard'
export default {
  name: 'ArticleDetail',
  components: {
    HotArticle,
    ArticleNav,
    Card,
    MdPreview,
    BillBoard
  },
  setup() {
    const article = reactive({
      id: 'summarize-3',
      title: '测试标题',
      coverImg: require('@/assets/images/article/summarize-2.webp'),
      createTime: '2023-03-01 20:10:47',
      desc: '你现在所经历的挫折与失败，它只属于现在，把它交给时间。你会发现一切都是最好的安排！',
      tags: ['标签'],
      types: ['总结'],
      content:
        '# 测试标题 \n 内容一级标题内容一级标题内容 \n ## 二级标题 \n 二级标题内容二级标题\n内容二级标题内容二级标题内容二级标题\n内容二级标题内容二级标题内容 \n ### 三级标题 \n 三级标题内容三级标题内\n容三级标题内容三级标题内容三级标题\n内容三级标题内容三级标题内容三级标题内容 \n #### 四级标题 \n 四级标题内容四级标\n题内容四级标题内容四级标\n题内容四级标题内容 \n ### 三级标题 \n 三级标题内容三级标题内\n容三级标题内容三级标题内容三级标题\n内容三级标题内容三级标题内容三级标题内容 \n #### 四级标题 \n 四级标题内容四级标\n题内容四级标题内容四级标\n题内容四级标题内容 \n ### 三级标题 \n 三级标题内容三级标题内\n容三级标题内容三级标题内容三级标题\n内容三级标题内容三级标题内容三级标题内容 \n #### 四级标题 \n 四级标题内容四级标\n题内容四级标题内容四级标\n题内容四级标题内容 \n ##### 五级标题 \n 五级标题内容五级\n标题内容五级标题内容五\n级标题内容五级标题内容\n五级标题内容五级标题内容 \n ###### 六级标题 \n 六级标题 \n - 内容 \n - 内容2',
    })
    return {
      article,
    }
  },
}
</script>

<style lang="less">
.article-detail {
  height: 100%;
  &-sidebar {
  }
  &-container {
    .tags {
      .el-tag {
        background-color: transparent;
        border-color: @colorPrimary;
        color: @colorPrimary;
      }
    }
  }
}
</style>
