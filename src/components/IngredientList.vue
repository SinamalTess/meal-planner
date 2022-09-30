<template>
  <va-list v-for="(ingredient, index) in ingredients" :key="index">
    <va-list-item>{{ ingredient.name }}</va-list-item>
  </va-list>
</template>

<script setup lang="ts">
  export interface Ingredient {
    name: string
  }

  const props = defineProps({
    ingredients: Array
  })
</script>