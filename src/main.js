import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { pinia } from './store'

import "lib-flexible/flexible.js"

const app = createApp(App)
app.use(pinia).use(router).mount('#app')
