<template>
  <transition name="wx-fade">
    <div id="toast" v-if="state.visible">
      <div class="weui-mask_transparent"></div>
      <div class="weui-toast">
        <i class="weui-icon_toast" :class="[state.isLoading ? 'weui-loading' : 'weui-icon-success-no-circle']"></i>
        <p class="weui-toast__content">{{state.text || (state.isLoading ? '数据加载中' : '已完成')}}</p>
      </div>
    </div>
  </transition>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    name: "WxToast",
    setup() {
      const state = reactive({
        visible: false,
        isLoading: false,
        text: ''
      })
      return {
        state
      }
    }
  }
</script>

<style scoped>
</style>
