<template>
  <div class="home-page">
    <div class="lg-container">
      <section class="banner">
        <h1><rotating-text :words="words" width="2.4em" />的个人博客</h1>
        <p class="description">回忆美好，充实未来！</p>
        <nuxt-link class="go-article" to="/article">进入博客 <i class="iconfont icon-youjiantou"></i></nuxt-link>
      </section>
      <section class="introduce">
        <h3 class="introduce-title">网站介绍</h3>
        <p class="introduce-description">主要介绍网站各个模块用到了哪些技术</p>
        <ul class="introduce-box">
          <li v-for="(info, index) in introduceList" :key="index">
            <h6 class="title">- {{ info.title }}</h6>
            <p class="content">{{ info.content }}</p>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
import RotatingText from '@/components/kit/RotatingText'
export default {
  name: 'IndexPage',
  loading: true,
  components: {
    RotatingText
  },
  data() {
    return {
      bannerImg: '',
      words: [
        { label: '梁傲', color: '#38B9CC' },
        { label: '梁傲', color: '#42d392' }
      ],
      introduceList: [
        {
          title: '前端服务',
          content: '采用 Nuxt.js 实现一套 SSR 服务端渲染的博客系统',
        },
        {
          title: '后台管理',
          content: '采用vue3 + vite + naive-ui 开发后台管理系统进行实时编辑。',
        },
        {
          title: '接口开发',
          content: '使用nestjs作为开发框架、mysql 作为数据库',
        },
      ],
    }
  },
  methods: {
    handleGoGithub() {},
    handleGoBlog() {},
  },
}
</script>

<style lang="less">
.home-page {
  height: 100%;
  .banner {
    height: 400px;
    // background-color: #fff;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    h1 {
      font-size: 48px;
      color: @colorTextTitle;
    }
    .description {
      font-size: 24px;
      margin-top: 20px;
      color: @colorTextSub;
    }
    .go-article {
      margin-top: 40px;
      font-size: 16px;
      background-color: @colorPrimary;
      border-radius: 6px;
      padding: 8px 16px;
      color: #f1f1f1;
    }
  }
  .introduce {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    padding: 50px 0;
    &-title {
      font-size: 32px;
      color: @colorTextTitle;
    }
    &-description {
      font-size: 20px;
      margin-top: 20px;
      color: @colorTextContent;
      margin-bottom: 10px;
    }
    &-box {
      .title {
        font-size: 16px;
        color: @colorTextTitle;
        margin-top: 24px;
      }
      .content {
        font-size: 14px;
        color: @colorText-1;
        margin-top: 10px;
      }
    }
  }
}
</style>
