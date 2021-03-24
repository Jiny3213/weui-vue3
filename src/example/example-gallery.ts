import {render, h, reactive, ref} from 'vue'
export default {
  name: "example-gallery",
  setup() {
    const msg = ref('hahhahahahaha')
    const count = ref(0)
    const handleAdd = function () {
      count.value++
    }
    return () =>
      h('div', {}, [
      h('h1', {onClick: handleAdd}, `这是一个标题, ${msg.value}, ${count.value}`),
      h('a', {href: 'https://baidu.com', target: '_blank'}, [
        h('img', {
          src: 'https://www.baidu.com/img/flexible/logo/pc/result.png',
          style: 'border: 1px solid #000000',
        }, '')
      ])
    ])
  },
  render() {
    return
  }
}
