<template>
  <div>
    <wx-button @click="handleAlert">无标题弹窗</wx-button>
    <wx-button @click="handleConfirm">选择弹窗</wx-button>
    <wx-button @click="handleToast">显示toast</wx-button>
    <wx-button @click="handleLoading">显示加载中</wx-button>
    <wx-button @click="handleActionSheet">actionSheet</wx-button>
    <wx-button @click="handleTopTips">TopTips</wx-button>
  </div>
</template>

<script>
  import actionSheet from '../components/actionSheet/main'
  import topTips from '../components/topTips/main'
  import {inject} from 'vue'
  export default {
    name: "example-dialog",
    setup() {
      const wxAlert = inject('wxAlert')
      const wxConfirm = inject('wxConfirm')
      const wxToast = inject('wxToast')
      const wxLoading = inject('wxLoading')

      function handleAlert() {
        wxAlert('这是一个无标题的弹窗')
      }
      function handleConfirm() {
        wxConfirm('你要确定吗?', {
          title: '警告'
        }).then(() => {
          console.log('点击了确定')
        }).catch(() => {
          console.log('点击了取消')
        })
      }
      function handleToast() {
        wxToast('success')
      }
      function handleLoading() {
        let loading = wxLoading()
        setTimeout(() => {
          loading.hide()
        }, 1500)
      }
      function handleActionSheet() {
        actionSheet(['张三', '李四', '王五'], {title: '选择一个人物'}).then(res => {
          console.log(res)
        })
      }
      function handleTopTips() {
        topTips('警告, 危险操作!')
      }
      return {
        handleAlert,
        handleConfirm,
        handleToast,
        handleLoading,
        handleActionSheet,
        handleTopTips
      }
    }
  }
</script>

<style>

</style>
