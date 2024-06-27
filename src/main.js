import './components/assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


import { ElIcon } from 'element-plus';
import App from './App.vue'

const app = createApp(App)

app.component('ElIcon', ElIcon);

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(autoAnimatePlugin)
app.mount('#app')
