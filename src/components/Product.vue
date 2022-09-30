<template>
  <h1>{{msg}}</h1>
</template>

<script setup>
  const props = defineProps({
    msg: String
  })
</script>