import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './locales'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'

import './assets/tailwind.css'
import 'element-plus/dist/index.css'
import '@/styles/theme.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(ElementPlus)

app.mount('#app')
