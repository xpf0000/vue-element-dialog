import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import BaseDialog from '@/components/BaseDialog'
Vue.use(BaseDialog)
Vue.use(ElementUI, {
  size: 'small'
})
new Vue({
  el: '#app',
  render: (h) => h(App)
})
