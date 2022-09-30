<template>
    <form @submit.prevent>
        <va-input
            v-model="searchInput"
            placeholder="Search Ingredient"
        ></va-input>
        <va-button @click="onSearch" type="submit" :loading="isLoading">Search</va-button>
    </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { FoodData } from '../services/foodData'

const emit = defineEmits(['ingredients'])

const searchInput = ref('')
const isLoading = ref(false)

const foodData = new FoodData()

const onSearch = () => {
    const { value } = searchInput
    isLoading.value = true
    const emitIngredients = (data: string) => {
        emit('ingredients', data)
        isLoading.value = false
    }
    foodData.fetchIngredient(value, emitIngredients)
}
</script>
