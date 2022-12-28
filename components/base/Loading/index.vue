<template>
  <div v-show="getShow" class="loading-wrap">加载中</div>
</template>

<script>
import { computed } from 'vue'
export default {
  name: 'LgLoading',
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const getShow = computed(() => {
      return props.isShow
    })
    return { getShow }
  },
}
</script>
