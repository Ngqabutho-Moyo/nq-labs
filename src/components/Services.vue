<script setup lang=ts>
import { RouterLink } from 'vue-router'
import { defineProps, ref, computed } from 'vue'

const props=defineProps({
    service:Object,
})

</script>

<template>
    <div class='bg-white rounded-xl shadow-md relative'>
        <div class="p-4">
            <div class="mb-6">
                <h3 class="text-xl font-bold">{{ service.title }}</h3>
            </div>
        </div>
    </div>
</template>