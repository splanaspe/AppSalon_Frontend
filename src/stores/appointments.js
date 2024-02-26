import {ref, computed, onMounted} from 'vue'
import {defineStore} from 'pinia'


export const useAppointmentsStore = defineStore('appointments', () => {

    const services = ref([])
    const date = ref({})
    const hours = ref([])
    const time = ref('')

    onMounted(() => {
        const startHour = 10
        const endHour = 19
        for(let hour=startHour; hour <= endHour; hour++){
            hours.value.push(hour+':00')
        }
    })

    function onServiceSelected(service){
        if(services.value.some(selectedService => selectedService._id === service._id)){
            services.value = services.value.filter(selectedService => selectedService._id !== service._id)
        } else{
            if(services.value.length === 2){
                alert("Máximo 2 servicios por cita")
                return
            }
            services.value.push(service)
        }
    }

    const isServiceSelected = computed( () => {
        return (id) => services.value.some(service => service._id === id)
    })

    const totalAmount = computed( () => {
        return services.value.reduce( (total, service) => total + service.precio, 0 )
    })

    const noServicesSelected= computed( () => services.value.length === 0)

    const isValidReservation = computed( () => {
        return services.value.length !==0 && date.value.length !==0 && time.value.length !==0
    })

    const createAppointment = () => {
        const appointment = {
            services: services.value.map( service => service._id),
            date: date.value,
            time: time.value,
            totalAmount: totalAmount
        }

        console.log(appointment)
    }

    return {
        onServiceSelected,
        isServiceSelected,
        services,
        totalAmount,
        noServicesSelected,
        date,
        hours,
        time,
        isValidReservation,
        createAppointment
    }
})