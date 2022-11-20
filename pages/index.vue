<template>
  <div class="home-page">
    <div class="lg-container">
      <div class="lg-row">
        <div class="lg-col-3 global-sidebar">
          <Card title="个人信息"></Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/base/Card/index.vue'
export default {
  name: 'IndexPage',
  loading: true,
  components: {
    Card,
  },
}
</script>

<style lang="less">
.home-page {
  height: 1500px;
}
</style>
