<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { RouterView } from 'vue-router';
// import HomeView from '@/views/HomeView.vue';
import DataScienceView from '@/views/DataScienceView.vue';
</script>

<template>
  <Navbar></Navbar>
  <RouterView></RouterView>
  <!-- <HomeView></HomeView> -->
   <!-- <DataScienceView></DataScienceView> -->
</template>
