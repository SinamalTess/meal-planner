<template>
    <va-list v-for="(product, index) in products" :key="index">
        <va-list-item>{{ product.name }}</va-list-item>
        <va-button
            size="small"
            color="success"
            @click="() => onRemoveProduct(product.name)"
            >add</va-button
        >
    </va-list>
</template>

<script setup lang="ts">
const props = defineProps({
    products: Array,
})

const emit = defineEmits(['removeProduct'])

const onRemoveProduct = (name: string) => {
    emit('removeProduct', name)
}
</script>
