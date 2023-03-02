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
          <card class="message-form" style="margin-bottom: 20px">
            <title-bar :bottom="20" title="交流专区 文明发言"></title-bar>
            <comment-box
              type="message"
              :article-id="article.id"
              @on-success="handleCommentsSuccess"
            />
          </card>

          <div>
            <card
              v-if="commentsList.length"
              padding="20px"
              style="margin-bottom: 20px"
            >
              <comment-item
                :comments-list="commentsList"
                type="message"
                @on-fresh="requestCommentsList"
              />
            </card>
            <CardEmpty
              v-else
              text="暂无评论"
              style="height: 300px; margin-bottom: 20px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import HotArticle from '@/components/page/HotArticle/index.vue'
import ArticleNav from '@/components/page/ArticleNav/index.vue'
import MdPreview from '@/components/base/MdPreview'
import Card from '@/components/base/Card'
import BillBoard from '@/components/kit/BillBoard'
import CommentItem from '@/components/kit/CommentItem/index.vue'
import CommentBox from '@/components/kit/CommentBox'
import TitleBar from '@/components/kit/TitleBar'
import CardEmpty from '@/components/kit/CardEmpty'
export default {
  name: 'ArticleDetail',
  components: {
    HotArticle,
    ArticleNav,
    Card,
    MdPreview,
    BillBoard,
    CommentItem,
    CommentBox,
    TitleBar,
    CardEmpty,
  },
  setup() {
    const article = reactive({
      id: 1,
      title: '测试标题',
      coverImg: require('@/assets/images/article/summarize-2.webp'),
      createTime: '2023-03-01 20:10:47',
      desc: '你现在所经历的挫折与失败，它只属于现在，把它交给时间。你会发现一切都是最好的安排！',
      tags: ['标签'],
      types: ['总结'],
      content:
        '# 测试标题 \n 内容一级标题内容一级标题内容 \n ## 二级标题 \n 二级标题内容二级标题\n内容二级标题内容二级标题内容二级标题\n内容二级标题内容二级标题内容 \n ### 三级标题 \n 三级标题内容三级标题内\n容三级标题内容三级标题内容三级标题\n内容三级标题内容三级标题内容三级标题内容 \n #### 四级标题 \n 四级标题内容四级标\n题内容四级标题内容四级标\n题内容四级标题内容 \n ### 三级标题 \n 三级标题内容三级标题内\n容三级标题内容三级标题内容三级标题\n内容三级标题内容三级标题内容三级标题内容 \n #### 四级标题 \n 四级标题内容四级标\n题内容四级标题内容四级标\n题内容四级标题内容 \n ### 三级标题 \n 三级标题内容三级标题内\n容三级标题内容三级标题内容三级标题\n内容三级标题内容三级标题内容三级标题内容 \n #### 四级标题 \n 四级标题内容四级标\n题内容四级标题内容四级标\n题内容四级标题内容 \n ##### 五级标题 \n 五级标题内容五级\n标题内容五级标题内容五\n级标题内容五级标题内容\n五级标题内容五级标题内容 \n ###### 六级标题 \n 六级标题 \n - 内容 \n - 内容2',
    })
    const commentsList = ref([
      {
        address: 'CHINA',
        articleId: 17,
        avatar: require('@/assets/images/avatar.jpg'),
        chlidComment: [],
        comment: '测试评论',
        createdAt: '2022-07-06T06:09:35.059Z',
        deletedAt: null,
        id: 1025,
        ip: '106.38.39.198',
        nickname: '测试用户',
        role: 'viewer',
        upId: null,
        updatedAt: '2022-07-06T06:09:35.059Z',
        userId: 424,
      },
    ])

    const handleCommentsSuccess = () => {}
    const requestCommentsList = () => {}
    return {
      article,
      commentsList,
      handleCommentsSuccess,
      requestCommentsList,
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
