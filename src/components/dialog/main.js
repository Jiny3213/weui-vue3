import {createApp} from 'vue'
import WxDialog from './WxDialog.vue'
let instance

function initInstance() {
  if(instance) return
  let temp = document.body.appendChild(document.createElement('div'))
  let component = createApp(WxDialog)
  instance = component.mount(temp)
}

export default {
  confirm(text, options=undefined) {
    initInstance()
    instance.state.type = 'confirm'
    instance.state.text = text
    if(options) {
      instance.state.title = options.title || '提示'
      instance.state.confirmText = options.confirmText || '确定'
      instance.state.cancelText = options.cancelText || '取消'
    }
    instance.show()
    return new Promise((resolve, reject) => {
      instance.state.resolve = resolve
      instance.state.reject = reject
    })
  },
  alert(text, options=undefined) {
    initInstance()
    instance.state.type = 'alert'
    instance.state.text = text
    if(options) {
      instance.state.confirmText = options.confirmText || '确定'
    }
    instance.show()
    return new Promise(resolve => {
      instance.state.resolve = resolve
    })
  }
}
