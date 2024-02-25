<script setup>
    import { useAppointmentsStore } from '@/stores/appointments';
    
    const appointments = useAppointmentsStore()
    
    defineProps({
        service:{
            type: Object
        }
    })
    

</script>
<template>
    <div class="border border-gray-500 rounded-lg p-5 flex justify-between items-center">
        <div>
            <p class="text-2xl font-extrabold text-white"> {{ service.nombre }} </p> 
            <p class="text-3xl font-black text-blue-500"> {{ service.precio }} € </p>       
        </div>
        <button
            type="button"
            @click="appointments.onServiceSelected(service)"
            class="inline-flex text-sm font-semibold shadow-sm px-3 py-2 hover:bg-red-700 ring-inset ring-1 ring-red-300 items-center rounded-md bg-red-600 text-white"
        >
            Eliminar
        </button>
    </div>



</template>