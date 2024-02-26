<script setup>
    import {ref} from 'vue'
    import SelectedService from '@/components/SelectedService.vue';
    import { useAppointmentsStore } from '@/stores/appointments';
    import VueTailwindDatePicker from 'vue-tailwind-datepicker'

    const appointments = useAppointmentsStore()

    const formatter = ref({
        date: 'DD/MM/YYYY',
        month: 'MMM'
    })

</script>
<template>
    <h2 class="text-4xl font-extrabold text-white "> Detalles Cita y Resumen</h2>
    <p class="text-white text-lg"> Verifica la infomación y confirma tu cita </p>
    <h3 class="text-3xl font-extrabold text-white"> Servicios </h3>
    <p v-if="appointments.noServicesSelected" class="text-white text-2xl"> No hay servicios seleccionados </p>
    <div  v-else class="grid gap-5"> 
        <SelectedService
            v-for="service in appointments.services"
            :key="service._id"
            :service="service"
        >
            
        </SelectedService>
        <p class="font-black text-right text-white text-2xl"> Total a pagar: {{ appointments.totalAmount }}</p>
    </div>

    <div v-if="!appointments.noServicesSelected" class="pb-36">
        <h3 class="text-3xl font-extrabold text-white" > Fecha y Hora </h3>
        <div class="md:flex gap-5 items-start">
            <div class="w-full lg:w-96 mt-2 bg-white flex justify-center rounded-lg">
                <VueTailwindDatePicker
                    i18n="es-mx"
                    as-single
                    no-input
                    :formatter="formatter"
                    v-model="appointments.date"
                />

            </div>
            <div class=" flex-1 grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10 lg:mt-0">
                <button
                    v-for="hour in appointments.hours"
                    class="block text-blue-500 rounded-lg text-xl font-black p-3 bg-white"
                >
                    {{ hour }}
                </button>
            </div>
        </div>
    </div >

</template>
<style scoped>


</style>