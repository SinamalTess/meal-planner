<template>
  <va-input v-model="value" placeholder="Search Ingredient"></va-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('')
</script>