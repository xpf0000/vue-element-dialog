import BaseDialog from './components/BaseDialog'
import { AllDialog } from './components/BaseDialog'
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
  Vue.prototype.$baseDialogCloseAll = function () {
    for (let uid in AllDialog) {
      AllDialog[uid].close()
    }
  }
}

const plugin = {
  install
}

export default plugin
export { BaseDialog }
