## vue elementu-ui dialog扩展

### 安装
```js
npm install @xpf0000/vue-element-dialog
```

### 使用
```js
// 引用
import Vue from 'vue'
import VueBaseDialog from '@xpf0000/vue-element-dialog'
Vue.use(VueBaseDialog)

// 弹出组件中

methods: {
// 弹窗底部确定按钮触发
      onSubmit() {
// 触发回调 返回(数据, 是否关闭弹窗 默认true 关闭)
        this.callBack && this.callBack('454545')
      }
}

// 使用
import DialogView from '...'
this.$baseDialog(DialogView)
.data({ a: 0 })
.title('弹窗标题')
.width('600px')
.className('class-name')
.noFooter()
.global('router', this.$router)
.show()
.then(res => {
})
```
