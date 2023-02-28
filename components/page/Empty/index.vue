<template>
  <div class="empty-container">
    <div class="empty-wrap">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'LgEmpty',
  props: {
    text: {
      type: String,
      default: '暂无数据',
    },
  },
  setup() {},
}
</script>

<style lang="less">
.empty-container {
  padding: 30px 0;
  width: 100%;
  text-align: center;
  .empty-wrap {
    font-size: 14px;
    color: @colorText-2;
  }
}
</style>
