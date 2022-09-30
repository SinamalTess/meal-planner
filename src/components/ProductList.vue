<template>
    <va-list v-for="(product, index) in products" :key="index">
        <va-list-item>
            <va-list-item-section>
                <va-image class="flex md6 lg4" :src="product.img"> </va-image>
            </va-list-item-section>
            <va-list-item-section>
                {{ product.name }}
            </va-list-item-section>
            <va-list-item-section icon>
                <va-button
                    icon="add"
                    size="small"
                    color="success"
                    @click="() => onRemoveProduct(product.name)"
                    >add</va-button
                >
            </va-list-item-section>
        </va-list-item>
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
