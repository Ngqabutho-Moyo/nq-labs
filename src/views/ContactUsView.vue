<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="font-serif bg-cyan-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
        <!-- Sidebar -->
        <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl">Email:</h3>
            <p id='email' class="my-2 bg-cyan-100 p-2 mb-10">
              nqlabsai@gmail.com
            </p>
            <h3 class="text-xl">Call/WhatsApp:</h3>
            <p class="my-2 bg-cyan-100 p-2">+263 78 129 4119</p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<style>
#email {
    text-align: left;
}
</style>