<template>
  <Card title="个人信息" :shadow="true">
    <div class="site-wrap">
      <div class="site-author site-overview-item">
        <div class="site-author-image">
          <img :src="userInfo.avatar" alt="" />
        </div>
        <div class="site-author-name">{{ userInfo.name }}</div>
        <div class="site-author-desc">{{ userInfo.signature }}</div>
      </div>
      <div class="site-author-links site-overview-item">
        <div
          v-for="(link, index) in userInfo.links"
          :key="index"
          class="links-item"
        >
          <!-- <span class="icon"></span> -->
          <i class="icon iconfont" :style="{color: link.color}" :class="link.icon"></i>
          <span class="name">{{ link.title }}</span>
        </div>
      </div>
    </div>
  </Card>
</template>

<script>
import { reactive } from 'vue'
import Card from '@/components/base/Card/index.vue'
export default {
  name: 'UserInfo',
  components: {
    Card,
  },
  setup() {
    const userInfo = reactive({
      avatar: 'https://lginsane.github.io/images/avatar.jpeg',
      name: '迷之de小孩灬',
      signature: '努力不一定成功，不努力一定不会成功！',
      links: [
        {
          title: '微信',
          url: '',
          icon: 'icon-weixin',
          color: '#49b75e'
        },
        {
          title: '掘金',
          url: '',
          icon: 'icon-juejin',
          color: '#0084ff'
        },
        {
          title: 'github',
          url: '',
          icon: 'icon-github',
          color: '#000'
        },
        {
          title: 'gitee',
          url: '',
          icon: 'icon-gitee',
          color: '#bf0c07'
        },
      ],
    })
    return {
      userInfo,
    }
  },
}
</script>

<style lang="less">
.site-wrap {
  .site-overview-item:not(:first-child) {
    margin-top: 10px;
    border-top: 1px solid #eee;
    padding-top: 10px;
  }
  .site-author {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-image {
      width: 120px;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
        border: 1px solid #eee;
        padding: 2px;
        transition: transform 1s ease-out;
        border-radius: 50%;
        &:hover {
          transform: rotateZ(360deg);
        }
      }
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
      cursor: pointer;
      .icon {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
      }
      .name {
        color: #666;
        font-size: 12px;
      }
    }
  }
}
</style>
