<template>
  <div class="button-sp-area">
    <wx-button>默认按钮</wx-button>
    <wx-button type="primary">主要按钮</wx-button>
    <wx-button type="primary" loading>加载按钮</wx-button>
    <wx-button type="primary" disabled>禁用按钮</wx-button>
    <wx-button type="primary" :loading="state.buttonLoading" @click="handleClick">互动按钮</wx-button>
    <wx-button type="warn">警告按钮</wx-button>
    <br>
    <wx-button size="mini">小按钮</wx-button>
    <wx-button size="mini" type="primary">小按钮</wx-button>
    <wx-button size="mini" type="warn">小按钮</wx-button>
    <br>
    <wx-button line>行按钮</wx-button>
    <wx-button line :img-src="logo">图标行按钮</wx-button>
    <wx-button line type="primary">强调行按钮</wx-button>
    <wx-button line type="warn">警告行按钮</wx-button>
  </div>

</template>

<script>
  import {reactive} from 'vue'
  import WxButton from '../components/WxButton.vue'
  import logo from '../assets/logo.png'
  export default {
    name: "example-button",
    components: {
      WxButton,
    },
    setup() {
      const state = reactive({
        buttonLoading: false
      })
      function handleClick() {
        state.buttonLoading = true
        setTimeout(() => {
          state.buttonLoading = false
        }, 2000)
      }
      return {
        state,
        handleClick,
        logo
      }
    }
  }
</script>

<style scoped>

</style>
