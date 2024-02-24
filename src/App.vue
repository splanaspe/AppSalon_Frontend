<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>
<template>
  <div class="md:flex h-screen">
    <div class="h-64 md:h-auto bg-cover bg-center md:w-1/3 bg-app"> 
    </div>
    <div class="md:2/3 px-10 py-5 min-h-full"> 
      <RouterView></RouterView>
    </div>

  </div>
</template>
