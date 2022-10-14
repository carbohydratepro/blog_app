import { createApp } from 'vue'
import App from '../components/App.vue'
import Antd from 'ant-design-vue'
import router from '../config/router'
import 'ant-design-vue/dist/antd.css'
import 'ant-design-vue/dist/antd.variable.css'
import '../config/axios'

document.addEventListener('DOMContentLoaded', () => {
  createApp(App).use(router).use(Antd).mount('#app')
})