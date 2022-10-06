import { createApp } from 'vue'
import App from './hello.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import 'ant-design-vue/dist/antd.variable.css'


document.addEventListener('DOMContentLoaded', () => {
  const selector = '#js-hello-vue';
  if(document.querySelector(selector)){
    createApp(App).use(Antd).mount(selector);
  }
})