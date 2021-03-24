<template>
  <transition name="wx-fade">
    <div class="js_dialog" id="iosDialog1" v-if="state.visible">
      <div class="weui-mask"></div>
      <div class="weui-dialog">
        <div class="weui-dialog__hd" v-if="state.type !== 'alert'"><strong class="weui-dialog__title">{{state.title}}</strong></div>
        <div class="weui-dialog__bd">{{state.text}}</div>
        <div class="weui-dialog__ft">
          <a href="javascript:" class="weui-dialog__btn weui-dialog__btn_default"
             v-if="state.type !== 'alert'"
             @click="cancel">{{state.cancelText}}</a>
          <a href="javascript:" class="weui-dialog__btn weui-dialog__btn_primary" @click="close">{{state.confirmText}}</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    name: "WxDialog",
    setup() {
      const state = reactive({
        visible: false,
        title: '提示',
        text: '',
        confirmText: '确定',
        cancelText: '取消',
        resolve: () => null,
        reject: () => null,
        fadeOut: false,
        type: '' // alert confirm
      })
      // 展示窗口
      function show() {
        state.visible = true
      }
      // 关闭窗口并resolve
      function close() {
        state.visible = false
        state.resolve()
      }
      function cancel() {
        state.visible = false
        state.reject()
      }
      return {
        state,
        close,
        cancel,
        show
      }
    }
  }
</script>

<style scoped>
  /*vue3修改了class名: https://github.com/vuejs/rfcs/blob/master/active-rfcs/0018-transition-class-change.md*/
</style>
