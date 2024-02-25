<script setup>
    import {formatCurrency} from '../helpers/index.js'
    defineProps({
        service:{
            type: Object,
            required: true
        }
    })

</script>
<template>
    <div
        class="p-5 space-y-5 rounded-lg cursor-pointer bg-white"
    >
        <p class="text-2xl font-light">{{service.nombre}} </p>
        <p class="text-4xl font-black text-blue-600"> {{ service.precio }} €</p>
    </div>

</template>
<style scoped>


</style>