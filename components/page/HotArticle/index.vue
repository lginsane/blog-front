<template>
  <Card title="热门文章" :shadow="true"  padding="0">
    <ul v-if="hotArticle.length > 0" class="card-rank-list">
      <li v-for="(blog, index) in hotArticle" :key="index" class="rank-item">
        <router-link
          :to="{ path: `/article/detail/${blog.id}` }"
          active-class="current"
          class="rank-item-link"
        >
          <div class="rank-item-title">{{ blog.title }}</div>
          <div class="rank-item-number">
            <i class="iconfont icon-yanjing"></i>
            <span class="number">{{ blog.readVolume }}</span>
          </div>
        </router-link>
      </li>
    </ul>
    <lg-empty v-else></lg-empty>
  </Card>
</template>

<script>
import LgEmpty from '../Empty/index'
import Card from '@/components/base/Card'
export default {
  name: 'HotArticle',
  components: {
    LgEmpty,
    Card,
  },
  data() {
    return {
      hotArticle: [
        {
          id: 1,
          title: '盘点我的2022',
          readVolume: 3000,
        },
        {
          id: 2,
          title: '盘点我的2021',
          readVolume: 2000,
        },
      ],
    }
  },
}
</script>
<style lang="less">
.card-rank-list {
  position: relative;
  .rank-item {
    padding: 0 15px;
    z-index: 1;
  }

  .rank-item-link {
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    height: 40px;
    color: @colorTextSub;
    line-height: 40px;
    text-decoration: none;
    border-bottom: 1px solid lighten(@colorBorderLight, 2%);
    .rank-item-title {
      margin-right: 30px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .rank-item-number {
      flex: none;
      .svg-icon {
        color: #808695 !important;
      }
    }
  }

  .rank-item-link:hover {
    color: @colorTextTitle;
    .svg-icon {
      color: @colorTextTitle !important;
    }
  }

  .current {
    color: @colorTextTitle;
  }
}
</style>
