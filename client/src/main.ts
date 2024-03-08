import { createApp } from 'vue'
import router from './routes/index.ts'
import App from './App.vue'

createApp(App).use(router).mount('#app')
