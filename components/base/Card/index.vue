<template>
  <div :class="classes" :style="stylesWrap" class="lg-card">
    <h3 v-if="title" class="lg-card-header">{{ title }}</h3>
    <div :style="stylesBody" class="lg-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LgCard',
  components: {},
  props: {
    title: {
      type: String,
      default: () => '',
    },
    hover: Boolean,
    shadow: Boolean,
    padding: {
      type: [String, Number],
      default: '20px',
    },
    borderRadius: {
      type: [String, Number],
      default: '0px',
    },
  },
  computed: {
    classes() {
      return {
        [`lg-card-hover`]: this.hover,
        [`lg-card-shadow`]: this.shadow,
      }
    },
    stylesWrap() {
      return {
        borderRadius:
          typeof this.borderRadius === 'number'
            ? `${this.borderRadius}px`
            : this.borderRadius,
      }
    },
    stylesBody() {
      return {
        padding:
          typeof this.padding === 'number' ? `${this.padding}px` : this.padding,
      }
    },
  },
}
</script>

<style lang="less">
.lg-card {
  background-color: #fff;
  transition: all 0.2s linear;
  .lg-card-shadow {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  }
  .lg-card-hover:hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  .lg-card-header {
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px solid @colorBorderLight;
    color: @colorTextTitle;
  }
  .lg-card-body {
    height: 100%;
  }
}
</style>
