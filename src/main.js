import { createApp } from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '../../jingdong/normalize.css'
import './style/index.scss'

createApp(App).use(store).use(router).mount('#app')
