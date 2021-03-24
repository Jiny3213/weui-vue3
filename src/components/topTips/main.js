import {createApp, h, defineComponent, reactive, BaseTransition} from 'vue'
import WxActionSheet from "./TopTips.vue"
let instance

// 纯函数编写vue组件很艰难, 日后再尝试
// const WxActionSheet = {
//   props: {
//     text: {
//       type: String,
//       default: 'asdasdasd'
//     }
//   },
//   setup(props) {
//     const text = props.text
//     const state = reactive({
//       visible: true,
//       text: ''
//     })
//     return () => h('div', {class: 'weui-toptips weui-toptips_warn', style: {display: 'block'}}, text)
//   },
// }

// 初始化实例
function initInstance() {
  if(instance) return
  let temp = document.body.appendChild(document.createElement('div'))
  let component = createApp(WxActionSheet)
  instance = component.mount(temp)
}

export default function(text) {
  initInstance()
  instance.text = text
  instance.state.text = text || ''
  instance.state.visible = true
  setTimeout(() => {
    instance.state.visible = false
  }, 1500)
}
