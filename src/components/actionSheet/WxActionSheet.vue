<template>
  <div>
    <transition name="wx-fade">
      <div class="weui-mask" v-if="state.visible"></div>
    </transition>

    <transition name="wx-slide">
      <div class="weui-actionsheet" v-if="state.visible">
        <div class="weui-actionsheet__title">
          <p class="weui-actionsheet__title-text">{{state.title}}</p>
        </div>
        <div class="weui-actionsheet__menu">
          <div class="weui-actionsheet__cell"
               v-for="(item, index) in state.cells"
               :key="index"
               @click="close(index)">{{item}}</div>
        </div>
        <div class="weui-actionsheet__action">
          <div class="weui-actionsheet__cell" @click="close(-1)">取消</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {reactive} from 'vue'
  export default {
    name: "WxActionSheet",
    setup() {
      const state = reactive({
        visible: false,
        title: '',
        cells: [],
        resolve: index => index
      })
      function close(index) {
        state.visible = false
        state.resolve(index)
      }
      return {
        state,
        close
      }
    }
  }
</script>

<style>
.weui-actionsheet {
  transform: translate(0, 0);
}

/*写在其他地方会失效, 不知道是什么bug*/
.wx-slide-enter-from,
.wx-slide-leave-to {
  transform: translate(0, 100%);
}
.wx-slide-enter-to,
.wx-slide-leave-from {
  transform: translate(0, 0);
}
.wx-slide-enter-active,
.wx-slide-leave-active {
  transition: all 0.2s ease;
}
</style>
