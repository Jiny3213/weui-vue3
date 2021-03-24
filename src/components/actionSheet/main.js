import {createApp} from 'vue'
import WxActionSheet from "./WxActionSheet.vue"
let instance

function initInstance() {
  if(instance) return
  let temp = document.body.appendChild(document.createElement('div'))
  let component = createApp(WxActionSheet)
  instance = component.mount(temp)
}

export default function(list, options) {
  initInstance()
  instance.state.cells = list
  instance.state.visible = true
  if(options && options.title) {
    instance.state.title = options.title
  }
  return new Promise(resolve => {
    instance.state.resolve = resolve
  })
}
