import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueBaseDialog from '/dist/VueBaseDialog.umd'
// const BaseDialog = require('/dist/VueBaseDialog.umd')
console.log('VueBaseDialog: ', VueBaseDialog)
Vue.use(VueBaseDialog)
Vue.use(ElementUI, {
  size: 'small'
})
new Vue({
  el: '#app',
  render: (h) => h(App)
})
