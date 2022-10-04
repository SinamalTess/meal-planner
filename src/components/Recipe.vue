<template>
  <ProductView :minimized="!state.activeProduct" :product="state.activeProduct"></ProductView>
  <div>
      <slot name="title"></slot>
      <SearchBar @products="addProducts" />
      <ProductList
            :products="state.products"
            @remove-product="removeProduct"
            @click-product="showSideBar"
        />
    </div>
</template>

<script setup lang="ts">
import ProductList from './ProductList.vue'
import SearchBar from './SearchBar.vue'
import { reactive } from 'vue'
import { Product } from '../type/Product'
import ProductView from './ProductView.vue'

interface State {
    products: Product[]
    activeProduct: Product | null
}

let state = reactive<State>({
    products: [],
    activeProduct: null,
})

const addProducts = (newProducts: Product[]) => {
    state.products = newProducts
}

const removeProduct = (name: string) => {
    const index = state.products.findIndex((product) => product.name === name)
    state.products.splice(index, 1)
}

const showSideBar = (name: string) => {
    state.activeProduct = {
        name,
        img: '',
    }
}
</script>
