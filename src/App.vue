<template>
  <div id="app">
    <el-button @click="show">显示弹窗</el-button>
  </div>
</template>

<script>
  import DialogView from '@/views/addEdit'
  export default {
    name: 'App',
    mounted() {},
    methods: {
      show() {
        this.$baseDialog(DialogView)
          .title('AAA-BBB')
          .className('CCCC')
          .width('700px')
          .show()
      }
    }
  }
</script>
<style>
  #app {
    height: 100vh;
  }
</style>
