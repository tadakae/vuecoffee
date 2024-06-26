import './components/assets/main.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'



import { ElIcon } from 'element-plus';
import App from './App.vue'

const app = createApp(App)

app.component('ElIcon', ElIcon);



app.use(ElementPlus)
app.mount('#app')