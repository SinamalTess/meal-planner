<template>
  <va-list v-for="(ingredient, index) in ingredients" :key="index">
    <va-list-item>{{ ingredient.name }}</va-list-item>
  </va-list>
</template>

<script setup>
  import { reactive } from 'vue';

  const ingredients = reactive([
    {name: 'Tomato'},
    {name: 'Salad'},
  ])
</script>