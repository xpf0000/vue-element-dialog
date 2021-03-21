import BaseDialog from '../src/components/BaseDialog'
function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.prototype.$baseDialog = function (component) {
    let dialog = new BaseDialog(component)
    dialog.global('store', this.$store)
    return dialog
  }
}

const plugin = {
  install
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue
}
if (GlobalVue) {
  GlobalVue.use(plugin)
}

export default plugin
export {
  BaseDialog
}
