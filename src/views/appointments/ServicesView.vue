<script setup>
    import { onMounted } from 'vue';
    import { userServicesStore } from '@/stores/services';
    import ServicesAPI from '@/api/ServicesAPI';
    import ServiceItem from '@/components/ServiceItem.vue';
    
    const store = userServicesStore(); 

</script>
<template>
    <div>
        <h2 class="text-4xl font-extrabold text-white mt-10"> Servicios</h2>
        <p class="text-white text-lg mt-5"> Elige al menos un servicio para tu cita </p>
        <div class="grid grid-cols-2 gap-5 mt-5"> 
            <ServiceItem 
                v-for="service in store.services"
                :key="service._id"
                :service="service"
            > 
            </ServiceItem>
        </div>
    </div>

</template>
<style scoped>


</style>