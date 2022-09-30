<template>
    <va-input v-model="searchInput" placeholder="Search Ingredient"></va-input>
    <va-button @click="onSearch">Search</va-button>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['ingredients'])

const searchInput = ref('')

const onSearch = () => {
    const { value } = searchInput
    const prefix = 'us.'
    const url = new URL(`https://${prefix}openfoodfacts.org/cgi/search.pl`)
    const params = {
        json: true,
        action: 'process',
        tagtype_0: 'categories',
        tag_contains_0: 'contains',
        tag_0: value,
    }
    url.search = new URLSearchParams(params).toString()

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            const name = data.products[0].product_name_en
            emit('ingredients', name)
        })
        .catch((error) => {
            console.log(error)
        })
}
</script>
