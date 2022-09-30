<template>
    <div>
        <SearchBar @ingredients="logIngredients" />
        <IngredientList :ingredients="ingredients" @remove-ingredient="removeIngredient"/>
    </div>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import IngredientList from './components/IngredientList.vue'
import SearchBar from './components/SearchBar.vue'
import { reactive } from 'vue'

let ingredients = reactive([])

const logIngredients = (name: string) => {
  ingredients.push({name})
}

const removeIngredient = (name: string) => {
  const index = ingredients.findIndex(ingredient => ingredient.name === name)
  ingredients.splice(index, 1)
}

</script>
