<template>
  <div class="empty-container">
    <div class="empty-wrap">{{ title }}</div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'LgEmpty',
  props: {
    text: {
      type: String,
      default: '暂无数据',
    },
  },
  setup() {
    const textArr = ref()
    return {
      textArr,
    }
  },
}
</script>
