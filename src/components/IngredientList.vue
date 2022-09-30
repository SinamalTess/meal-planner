<template>
    <va-list v-for="(ingredient, index) in ingredients" :key="index">
        <va-list-item>{{ ingredient.name }}</va-list-item>
        <va-button
            size="small"
            color="danger"
            @click="() => onRemoveIngredient(ingredient.name)"
            >remove</va-button
        >
    </va-list>
</template>

<script setup lang="ts">
const props = defineProps({
    ingredients: Array,
})

const emit = defineEmits(['removeIngredient'])

const onRemoveIngredient = (name: string) => {
    emit('removeIngredient', name)
}
</script>
