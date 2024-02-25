<script setup>
    import SelectedService from '@/components/SelectedService.vue';
    import { useAppointmentsStore } from '@/stores/appointments';

    const appointments = useAppointmentsStore()

</script>
<template>
    <h2 class="text-4xl font-extrabold text-white "> Detalles Cita y Resumen</h2>
    <p class="text-white text-lg"> Verifica la infomación y confirma tu cita </p>
    <h3 class="text-3xl font-extrabold text-white"> Servicios </h3>
    <div class="grid gap-5"> 
        <SelectedService
            v-for="service in appointments.services"
            :key="service._id"
            :service="service"
        >
            
        </SelectedService>
        <p class="font-black text-right text-white text-2xl"> Total a pagar: {{ appointments.totalAmount }}</p>
    </div>

</template>
<style scoped>


</style>