<template>
    <va-sidebar position="right" width="50%" :minimized="minimized" minimized-width="0">
        <va-sidebar-item v-if="product">
            <va-sidebar-item-content>
                <va-sidebar-item-title>
                    Hey {{ product.name }}
                </va-sidebar-item-title>
            </va-sidebar-item-content>
        </va-sidebar-item>
    </va-sidebar>
</template>

<script setup>
  const props = defineProps(['product', 'minimized'])
</script>
