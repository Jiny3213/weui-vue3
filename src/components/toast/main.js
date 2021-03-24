import {createApp} from 'vue'
import WxToast from './WxToast.vue'
let instance

function initInstance() {
  if(instance) return
  let el = document.body.appendChild(document.createElement('div'))
  let component = createApp(WxToast)
  instance = component.mount(el)
}

export default {
  toast(text='') {
    initInstance()
    instance.state.text = text
    instance.state.isLoading = false
    instance.state.visible = true
    setTimeout(() => {
      instance.state.visible = false
    }, 1500)
  },
  loading(text='') {
    initInstance()
    instance.state.text = text
    instance.state.isLoading = true
    instance.state.visible = true
    return {
      hide() {
        instance.state.visible = false
      }
    }
  }
}
