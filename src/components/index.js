import WxButton from './WxButton.vue'
import WxDialog from "./dialog/main"
import WxToast from "./toast/main"
import '../assets/css/transition.css'
import {provide} from 'vue'
export default {
  install(app) {
    app.component('WxButton', WxButton) // 这里尝试遍历文件名
    app.provide('wxConfirm', WxDialog.confirm)
    app.provide('wxAlert', WxDialog.alert)
    app.provide('wxToast', WxToast.toast)
    app.provide('wxLoading', WxToast.loading)
  }
}
