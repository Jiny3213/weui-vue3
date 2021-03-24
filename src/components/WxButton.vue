<template>
  <a href="javascript:"
     :class="[
      metaClass,
      typeClass,
      props.size === 'mini' ? 'weui-btn_mini' : '',
      props.loading ? 'weui-btn_loading' : '',
      props.disabled ? 'weui-btn_disabled' : '',
     ]">
    <i class="weui-loading" v-if="props.loading"></i>
    <img :src="props.imgSrc" class="weui-btn_cell__icon" v-if="props.imgSrc">
    <slot></slot>
  </a>
</template>

<script>
  import {reactive, watchEffect} from 'vue'
  export default {
    name: "wx-button",
    props: {
      loading: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'normal'
      },
      line: {
        type: Boolean,
        default: false
      },
      imgSrc: {
        type: String,
        default: ''
      }
    },
    setup(props) {
      const state = reactive({
        metaClass: 'weui-btn', // default class
        typeClass: 'weui-btn_default' // default class
      })
      // line button
      if(props.line) {
        state.metaClass = 'weui-btn_cell'
        if(props.type === 'primary') {
          state.typeClass = 'weui-btn_cell-primary'
        }
        else if(props.type === 'warn') {
          state.typeClass = 'weui-btn_cell-warn'
        }
        else {
          state.typeClass = 'weui-btn_cell-default'
        }
      }
      // normal or mini button
      else {
        if(props.type === 'primary') {
          state.typeClass = 'weui-btn_primary'
        }
        else if(props.type === 'warn') {
          state.typeClass = 'weui-btn_warn'
        }
      }
      return {
        // need to be judge
        metaClass: state.metaClass,
        typeClass: state.typeClass,
        props // can not unwarp, else lost reactive!
      }
    }
  }
</script>

<style scoped>

</style>
