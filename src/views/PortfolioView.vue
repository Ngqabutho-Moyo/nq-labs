<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="font-serif bg-cyan-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
        <div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h1 class="text-3xl font-bold mb-4 ">Portfolio</h1>            
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <img src="/src/assets/img/clients/laboserv4.png">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
