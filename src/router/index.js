import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AppointmentsLayout from './../views/appointments/AppointmentsLayout.vue';
import NewAppointmentLayout from './../views/appointments/NewAppointmentLayout.vue';
import ServicesView from './../views/appointments/ServicesView.vue'
import AppointmentView from './../views/appointments/AppointmentView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reservaciones',
      name: 'appointments',
      component: AppointmentsLayout,
      children: [
        {
          path: 'nueva',
          name: '',
          component: () => NewAppointmentLayout,
          children: [
            {
              path: '',
              name: 'new-appointment',
              component: () => ServicesView
            },
            {
              path: 'detalles',
              name: 'appointment-details',
              component: () => AppointmentView
            }
          ]
        }
      ]
    }
  ]
})

export default router
