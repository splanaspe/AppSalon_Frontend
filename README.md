# Proyecto MEVN (Frontend)
Proyecto FullStack MEVN para una App de citas de un salón de peluquería. Este repositorio es el frontend y usamos: VueJs, Vue-Router, Pinia, Tailwindcss

# Dependencias
- Usamos Vue-Router y Pinia
- Tailwindcss
  
### vue-taiwind-datepicker
  
```javascript
npm vue-tailwind-datepicker
```
Añadimos en tailwind.config.js
```javascript
"./node_modules/vue-tailwind-datepicker/**/*.js/"
...
colors:{
    "vtd-primary" : colors.blue
}
```
Renderizamos en el componente:
```javascript
<VueTailwindDatePicker
    i18n="es-mx"
    as-single
    no-input
    :formatter="formatter"
    v-model="appointments.date"
/>

// en el script definimos formatter para que datepicker pueda leerlo
const formatter = ref({
        date: 'DD/MM/YYYY',
        month: 'MMM'
    })

// appointments.date es el store de las citas, definimos esto:
const date = ref({})
    const hours = ref([])

    onMounted(() => {
        const startHour = 10
        const endHour = 19
        for(let hour=startHour; hour <= endHour; hour++){
            hours.value.push(hour+':00')
        }
    })
```
[Official npm website documentation](https://www.npmjs.com/package/vue-tailwind-datepicker)
[Website](https://vue-tailwind-datepicker.com/theming-options.html)