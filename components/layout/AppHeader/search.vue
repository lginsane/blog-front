<template>
  <div class="app-search">
    <div class="app-search-button">
      <i class="el-icon-search"></i>
      <span class="title">搜索</span>
      <span class="keyboard">Ctrl+K</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSearch',
}
</script>

<style lang="less">
.app-search {
  height: @heightHeader;
  display: flex;
  align-items: center;
  .app-search-button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: 0 10px;
    border-radius: 8px;
    background-color: #f9f9f9;
    border: 1px solid #f9f9f9;
    box-sizing: border-box;
    &:hover {
      border: 1px solid @colorPrimary;
    }
    cursor: pointer;
    .el-icon-search {
      color: @colorText-2;
    }
    .title {
      font-size: 13px;
      color: @colorText-2;
      margin-left: 4px;
      margin-right: 12px;
      line-height: 1;
    }
    .keyboard {
      border: 1px solid @colorBorder;
      color: @colorText-2;
      padding: 0 6px;
      display: inline-flex;
      align-items: center;
      height: 22px;
      border-radius: 4px;
      font-size: 12px;
    }
  }
}
</style>
