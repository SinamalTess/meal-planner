import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

const app = createApp(App)
app.use(createVuestic())
app.mount('#app')