import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/css/transition.css'
import 'weui'
import router from "./router"
import WV3 from './components/index'
const app = createApp(App)
app.use(router)
app.use(WV3)
app.mount('#app')

