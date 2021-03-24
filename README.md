# Weui-Vue3
基于vue-next的weui组件库

## install
```
npm  install wv3
```

## usage
```
// main.js
import wv3 form 'weui-vue3'
app.use(wv3)

// some-page.vue
import {inject} from 'vue'
setup() {
  const wxToast = inject('wxToast')
  wxToast('success')
}
```
