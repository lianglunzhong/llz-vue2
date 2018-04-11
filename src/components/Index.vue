<template>
  <div class="index">
    <el-row>
      <el-col :span="18" :offset="3">
        <el-button type="default">default</el-button>
      </el-col>
      <el-col :span="18" :offset="3">
        <el-button type="primary">primary</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      msg: 'This is app index.'
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .index {
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-row {
      width: 100%;
      .el-col {
        margin-top: 10px;
        margin-bottom: 10px;
        button {
          width: 100%;
        }
      }
    }
  }
</style>
