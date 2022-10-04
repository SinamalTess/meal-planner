<template>
  <Navbar />
    <Recipe>
        <template #title>
            <h1>Build your own recipe</h1>
        </template>
    </Recipe>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Recipe from './components/Recipe.vue';
import Navbar from './components/Navbar.vue'
</script>
