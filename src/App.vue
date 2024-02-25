<script setup>
import {RouterView } from 'vue-router'

</script>
<template>
  <div class="md:flex h-screen">
    <div class="h-full overscroll-y-none md:h-auto bg-cover bg-center  md:w-1/3"> 
        <img class=" h-32 md:h-full" src="./../public/img/1.jpg"> 
    </div>
    <div class="md:2/3 px-10 py-5 min-h-full  overscroll-y-auto w-full"> 
      <RouterView></RouterView>
    </div>

  </div>
</template>
