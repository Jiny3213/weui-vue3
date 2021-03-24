<template>
  <div>
    <img src="../assets/logo.png" alt="vue-logo">
    <h1>weui-vue3</h1>
    <p>君がいた夏は、遠い夢の中</p>
    <p>空に消えてった、打ち上げ花火</p>
    <router-link to="/button">
      <wx-button>按钮</wx-button>
    </router-link>
    <br>
    <router-link to="/dialog">
      <wx-button>常用交互</wx-button>
    </router-link>
    <br>
    <router-link to="/gallery">图片预览组件</router-link>
  </div>
</template>

<script>
  import WxButton from "../components/WxButton.vue"
  import {reactive, inject} from 'vue'
  export default {
    name: "home",
      // 学习picker源码
      // https://www.cnblogs.com/haha1212/p/8393243.html
    setup() {
      const state = reactive({
        isShow: false
      })
      const wxToast = inject('wxToast')
      const wxAlert = inject('wxAlert')
      function handleClick() {
        // wxToast('插件成功!')
        wxAlert('哈哈哈')
      }
      return {
        state,
        handleClick
      }
    }
      // picker使用了html模板, 无法直接在vue中使用?? 报错如下
      // Failed to load module script: The server responded with a non-JavaScript MIME type of "text/html". Strict MIME type checking is enforced for module scripts per HTML spec.
  }
</script>

<style scoped>

</style>
