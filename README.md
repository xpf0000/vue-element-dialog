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

// 支持3种加载方式
import DialogView from '...'
this.$baseDialog(DialogView)
this.$baseDialog(import('....'))
this.$baseDialog(require('...'))

// 方法
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
