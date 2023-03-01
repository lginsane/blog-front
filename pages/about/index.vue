<template>
  <div class="about-page">
    <div class="lg-container">
      <div class="banner">
        <h1 class="page-title">关于我</h1>
        <div class="links">
          <div v-for="(link, index) in links" :key="index" class="links-item">
            <i
              class="icon iconfont"
              :style="{ color: link.color }"
              :class="link.icon"
            ></i>
            <span class="name">{{ link.title }}</span>
          </div>
        </div>
      </div>

      <div class="about-box shadow-block">
        <section>
          <h3>基本信息</h3>
          <ul>
            <li>梁傲(迷之de小孩灬/lginsane)/男/汉/1998</li>
            <li>专科/计算机应用技术/濮阳职业技术学院</li>
            <li>18437331966/lg18437331966@163.com</li>
            <!-- <li>个人博客：</li> -->
            <li>职业专长：前端开发，Vue/Nodejs</li>
          </ul>
        </section>
        <section>
          <h3>个人爱好</h3>
          <ul>
            <li>游戏：王者荣耀/炉石传说/金铲铲之战......</li>
            <li>音乐：全民K歌</li>
            <li>尝试各种美食</li>
          </ul>
        </section>
        <section>
          <h3>教育经历</h3>
          <ul>
            <li>
              <h6>2021-2023</h6>
              <p>本科/计算机科学与技术/湖北师范大学（成考）</p>
            </li>
            <li>
              <h6>2015-2018</h6>
              <p>专科/计算机应用技术/濮阳职业技术学院</p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      links: [
        {
          title: '微信',
          url: '',
          icon: 'icon-weixin',
          color: '#49b75e',
        },
        {
          title: '掘金',
          url: '',
          icon: 'icon-juejin',
          color: '#0084ff',
        },
        {
          title: 'github',
          url: '',
          icon: 'icon-github',
          color: '#000',
        },
        {
          title: 'gitee',
          url: '',
          icon: 'icon-gitee',
          color: '#bf0c07',
        },
      ],
    }
  },
}
</script>

<style lang="less">
.about-page {
  height: 100%;
  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
  .page-title {
    font-size: 36px;
    color: @colorTextTitle;
  }
  .links {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    &-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      margin-right: 50px;
      &:last-child {
        margin-right: 0;
      }
      .icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
      }
      .name {
        color: #666;
        font-size: 12px;
      }
    }
  }
  .about-box {
    background-color: #fff;
    padding: 50px 0;
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-bottom: 50px;
      &:last-child {
        margin-bottom: 0;
      }
      h3 {
        color: @colorText-1;
        font-size: 20px;
        margin-bottom: 15px;
      }
      ul {
        li {
          margin-bottom: 10px;
          font-size: 16px;
          color: @colorTextSub;
          list-style: initial;
          h6 {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
