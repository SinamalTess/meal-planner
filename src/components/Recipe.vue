<template>
    <div>
        <h1>Build your own recipe</h1>
        <SearchBar @products="addProducts" />
        <ProductList :products="state.products" @remove-product="removeProduct" />
    </div>
</template>

<script setup lang="ts">
import ProductList from './ProductList.vue'
import SearchBar from './SearchBar.vue'
import { reactive } from 'vue'
import { Product } from '../type/Product'

let state = reactive<{ products: Product[] }>({ products: [] })

const addProducts = (newProducts: Product[]) => {
    console.log(newProducts)
    state.products = newProducts
}

const removeProduct = (name: string) => {
    const index = state.products.findIndex((product) => product.name === name)
    state.products.splice(index, 1)
}
</script>
