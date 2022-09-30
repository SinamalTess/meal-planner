<template>
    <form @submit.prevent>
        <va-input
            v-model="searchInput"
            placeholder="Search Ingredient"
        ></va-input>
        <va-button @click="onSearch" type="submit" :loading="isLoading"
            >Search</va-button
        >
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FoodData } from '../services/FoodData'

const emit = defineEmits(['products'])

const searchInput = ref('')
const isLoading = ref(false)

const foodData = new FoodData()

const onSearch = () => {
    const { value } = searchInput
    isLoading.value = true
    const emitProducts = (data: any) => {
        const products = data.slice(0, 5).map((product) => ({
            name: product.product_name_en ?? 'No name for this product',
        }))
        emit('products', products)
        isLoading.value = false
    }
    foodData.fetchProducts(value, emitProducts)
}
</script>
