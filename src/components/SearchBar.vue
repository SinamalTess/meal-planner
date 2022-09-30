<template>
    <va-input v-model="searchInput" placeholder="Search Ingredient"></va-input>
    <va-button @click="onSearch">Search</va-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FoodData } from '../services/foodData'

const emit = defineEmits(['ingredients'])

const searchInput = ref('')

const onSearch = () => {
    const { value } = searchInput
    const foodData = new FoodData()
    const emitIngredients = (data: string) => {
        emit('ingredients', data)
    }
    foodData.fetchIngredient(value, emitIngredients)
}
</script>
