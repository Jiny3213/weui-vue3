<template>
  <transition name="wx-fade">
    <div class="weui-toptips weui-toptips_warn" v-if="state.visible">{{state.text}}</div>
  </transition>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    name: "TopTips",
    setup() {
      const state = reactive({
        visible: false,
        text: ''
      })
      return {
        state
      }
    }
  }
</script>

<style>
.weui-toptips {
  display: block;
}
</style>
