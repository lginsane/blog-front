<template>
  <div class="no-data-wrap">
    <SvgIcon :style="{ color, fontSize: size + 'px' }" icon="empty-data" />
  </div>
</template>

<script>
import SvgIcon from '@/components/base/SvgIcon/SvgIcon.vue'
export default {
  name: 'NoData',
  components: { SvgIcon },
  props: {
    size: {
      type: [Number, String],
      default: 150
    },
    color: {
      type: String,
      default: '#cdcdcd'
    }
  }
}
</script>

<style lang="less" scoped>
.no-data-wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
