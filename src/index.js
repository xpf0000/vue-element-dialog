import BaseDialog from './components/BaseDialog'
function install(Vue, config = { size: '' }) {
  if (install.installed) return
  install.installed = true
  Vue.prototype.$baseDialog = function (
    component,
    data = {},
    width = '50%',
    className = ''
  ) {
    let dialog = new BaseDialog(component)
    dialog.global('store', this.$store)
    dialog.data(data)
    dialog.width(width)
    dialog.size(config.size)
    dialog.className(className)
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
export { BaseDialog }
