<template>
    <form @submit.prevent>
        <va-input
            v-model="searchInput"
            :placeholder="t('placeholder')"
        ></va-input>
        <va-button @click="onSearch" type="submit" :loading="isLoading"
            >Search</va-button
        >
    </form>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { FoodData } from '../services/FoodData'
import { useI18n } from 'vue-i18n'

const emit = defineEmits(['products'])

const searchInput = ref('')
const isLoading = ref(false)
const { t, locale } = useI18n({
    messages: {
        fr: {
            placeholder: 'Rechercher un ingredient',
        },
        en: {
            placeholder: 'Search Ingredient',
        },
    },
})

const onSearch = () => {
    const prefix = locale.value === 'en' ? 'us' : locale.value

    const foodData = new FoodData(prefix)

    emit('products', [])
    const { value } = searchInput
    isLoading.value = true
    const emitProducts = (data: any) => {
        const products = data.slice(0, 5).map((product) => ({
            name: product.product_name_en ?? 'No name for this product',
            img: product.image_url,
        }))
        emit('products', products)
        isLoading.value = false
    }
    foodData.fetchProducts(value, emitProducts)
}
</script>
