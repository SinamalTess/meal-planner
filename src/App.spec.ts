import { render, fireEvent } from '@testing-library/vue'
import App from './App.vue'
import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
        en: {
            placeholder: 'Hello',
        },
        ja: {
            placeholder: 'こんにちは',
        },
    },
})

test('shows a header', async () => {
    const { getByText } = render(App, {
        global: {
            plugins: [i18n],
        },
    })


    const header = getByText(/Build your own/)

    expect(header).toBeInTheDocument()
})
