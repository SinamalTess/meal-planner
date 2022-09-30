<template>
    <va-select v-model="language" :options="options" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const language = ref('en')
const options = ['en', 'fr']
</script>
