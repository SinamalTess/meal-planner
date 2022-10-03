import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'en',
    legacy: false,
    allowComposition: true,
    messages: {
        en: {  },
        fr: {  },
    },
})

const app = createApp(App)
app.use(createVuestic())
app.use(i18n)
app.mount('#app')
