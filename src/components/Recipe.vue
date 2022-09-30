<template>
  <div>
    <h1>Build your own recipe</h1>
    <SearchBar @products="logProducts" />
    <ProductList :products="products" @remove-product="removeProduct"/>
  </div>
</template>

<script setup lang="ts">
import ProductList from './ProductList.vue'
import SearchBar from './SearchBar.vue'
import { reactive } from 'vue'

let products = reactive([])

const logProducts = (product: {}) => {
  products.push(...product)
}

const removeProduct = (name: string) => {
  const index = products.findIndex(product => product.name === name)
  products.splice(index, 1)
}

</script>
