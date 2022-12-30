<template>
  <card title="目录" padding="10px 0 0">
    <div class="wrap">
      <div
        v-if="navList && navList.nav && navList.nav.length > 0"
        id="mdAnchorNavWrap"
        class="md-anchor-nav-wrap"
      >
        <div id="mdAnchorFloatBar" class="md-anchor-float-bar"></div>
        <md-nav-anchor :list="navList.nav" :offset-top-list="offsetTopList" />
      </div>
    </div>
  </card>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import compileMd from '@/utils/compileMd.js'
import MdNavAnchor from '@/components/kit/MdNavAnchor'
import Card from '@/components/base/Card'
import { throttle } from '@/utils/tools'
import { useAppStore } from '@/store/useAppStore'
export default {
  name: 'ArticleNav',
  components: { Card, MdNavAnchor },
  props: {
    content: {
      type: String,
      default: () => '',
    },
  },
  setup(props) {
    const appStore = useAppStore()
    const idPrefix = 'titleAnchor-'
    const offsetTopList = ref([])
    const windowHeight = ref(0)
    const navList = computed(() => {
      return compileMd(props.content || '')
    })
    const scrollHandler = () => {
      const mdAnchorNavWrap = document.getElementById('mdAnchorNavWrap')
      const mdAnchorFloatBar = document.getElementById('mdAnchorFloatBar')
      const distance = 80
      const headerList = getHeaderList()
      // 对所有的y值为正标的题，按y值升序排序。第一个标题就是当前处于阅读中的段落的标题。也即要高亮的标题
      const readingVO = headerList
        .filter(function (item) {
          return item.y > distance
        })
        .sort(function (a, b) {
          return a.y - b.y
        })[0]

      // TODO 如果已经到最底部了 继续下滑 readingVO 会取到 undefined , 报错 所以 这里需要判断下
      if (!readingVO) return
      const floatBarHeight = headerList
        .slice(0, readingVO.index)
        .reduce(function (preValue, curValue) {
          if (typeof preValue === 'number') {
            return preValue + curValue.navTitleClientHeight
          } else {
            return preValue.navTitleClientHeight + curValue.navTitleClientHeight
          }
        }, 0)
      appStore.setHighLightIndex({ index: readingVO.index })
      console.log('mdAnchorFloatBar')
      console.log(mdAnchorFloatBar)
      mdAnchorFloatBar.style.top = `${floatBarHeight}px`
      mdAnchorFloatBar.style.height = `${readingVO.navTitleClientHeight}px`
      mdAnchorNavWrap.style.marginTop = `${Math.min(
        -floatBarHeight + (windowHeight.value / 2 - 100),
        0
      )}px`
    }
    const getHeaderList = () => {
      const list = []
      const t = document.documentElement.scrollTop || document.body.scrollTop
      for (let i = 0; i < navList.value.length; i++) {
        const contentTitle = document.getElementById(`${idPrefix}${i}`)
        const navTitle = document.querySelector(`a[id="#${idPrefix}${i}"]`)
        if (!navTitle) {
          continue
        }
        list.push({
          y: contentTitle.getBoundingClientRect().top,
          navTitleClientHeight: navTitle.clientHeight,
          contentTitleOffsetTopList:
            contentTitle.getBoundingClientRect().top + t,
          index: i,
        })
      }
      offsetTopList.value = list.map((item) => item.contentTitleOffsetTopList)
      return list
    }
    const throttleScroll = throttle(() => {
      scrollHandler()
    })
    onMounted(() => {
      windowHeight.value = document.documentElement.clientHeight || document.body.clientHeight
      window.addEventListener('scroll', throttleScroll)
    })
    onUnmounted(() => {
      window.removeEventListener('scroll', throttleScroll)
    })

    return {
      navList,
      offsetTopList,
      windowHeight,
      throttleScroll
    }
  }
}
</script>

<style lang="less" scoped>
.wrap {
  overflow: hidden;
}

.md-anchor-nav-wrap {
  margin-top: 0;
  position: relative;
  transition: margin 0.2s ease;
  // padding-top: 10px;
}

.md-anchor-float-bar {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  height: 28px;
  width: 100%;

  &::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    width: 4px;
    height: 100%;
    background-color: @colorPrimary;
  }
}
</style>
