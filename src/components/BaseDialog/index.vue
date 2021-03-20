<template>
  <el-dialog
    :title="title"
    :visible.sync="show"
    :width="width"
    :custom-class="className"
    :close-on-click-modal="false"
    :destroy-on-close="true"
    @closed="closed"
  >
    <div ref="contentWapper"></div>
    <div v-if="footerShow" slot="footer" class="dialog-footer">
      <el-button @click="show = false">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
  /**
   * @author 徐鹏飞 250881478@qq.com
   * @desc 全局通用弹窗组件
   */
  import Vue from 'vue'
  export default {
    data() {
      return {
        footerShow: true, // 是否显示底部footer
        show: false, // 是否显示
        title: '', // 弹窗标题
        width: '50%', // 弹窗宽度
        component: null, // 弹窗展示的内部组件
        data: {}, // 传递给内部组件的数据
        className: '', // 弹窗的扩展类名
        global: {}
      }
    },
    watch: {},
    created() {},
    mounted() {
      if (!this.component) {
        return
      }
      // 动态挂载内部需要展示的组件
      let that = this
      this.$nextTick(function () {
        let tmpl = Vue.extend(that.component)
        let opt = {
          data: that.data
        }
        for (let k in that.global) {
          opt[k] = that.global[k]
        }
        that.vm = new tmpl(opt).$mount(that.$refs.contentWapper)
        that.vm.callBack = that.callBack
      })
    },
    methods: {
      closed() {
        this.vm.$destroy()
        this.$el.remove()
      },
      close() {
        this.show = false
      },
      /**
       * 点击确定时的方法, 调用内部组件的onSubmit方法
       */
      onSubmit() {
        this.vm.onSubmit && this.vm.onSubmit()
      }
    }
  }
</script>
