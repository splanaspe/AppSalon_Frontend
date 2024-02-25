<script setup>
    import { useAppointmentsStore } from '@/stores/appointments';

    const appointments = useAppointmentsStore()

    defineProps({
        service:{
            type: Object,
            required: true
        }
    })

</script>
<template>
    <div
        class="p-5 space-y-5 rounded-lg cursor-pointer"
        :class="appointments.isServiceSelected(service._id) ? 'bg-blue-500 text-white' : 'bg-white'"
        @click="appointments.onServiceSelected(service)"
    >
        <p class="text-2xl font-light">{{service.nombre}} </p>
        <p 
        :class="appointments.isServiceSelected(service._id) ?  'text-white' : 'text-blue-600'"
            class="text-4xl font-black "
        > {{ service.precio }} €</p>
    </div>

</template>
<style scoped>


</style>