<template>
    <div>
        <SearchBar @ingredients="logIngredients" />
        <IngredientList :ingredients="ingredients" />
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
  console.log(name)
  ingredients.push({name})
}

</script>
