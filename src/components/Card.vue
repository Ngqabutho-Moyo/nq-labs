<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  bg: {
    type: String,
    default: 'bg-cyan-100'
  }
})

</script>

<template>
  <div v-bind:class="`${bg} p-6 rounded-lg shadow-md`">
    <slot></slot>
  </div>
</template>
