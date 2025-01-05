<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Card from '@/components/Card.vue';
import 'primeicons/primeicons.css'
</script>

<template>
  <section class="font-serif bg-cyan-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h1 class="text-3xl font-bold mb-4 ">Mobile Application Development</h1>
            <!-- <div class="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <i class="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
              <p class="text-orange-700">Boston, MA</p>
            </div> -->
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="">
              <strong>Overview</strong>
            </h3>
            <p class="mb-4 ">
              As more and more people buy mobile phones and use them to transact, companies are taking the initiative to offer convenience to their customer base on a mobile platform. We build mobile applications for big and small businesses on both Android and iOS platforms.
            </p>
            <!-- <h3 class="text-cyan-800 text-lg font-bold mb-2">Salary</h3>
            <p class="mb-4">$70k - $80K / Year</p> -->
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="">
              <strong>Pricing</strong>
            </h3>
            <div class="grid grid-cols-3 gap-10">       
                <Card>
                  <ul class=""><strong>Basic</strong>
                  <li>&#8226; 5 to 10 screens</li>
                  <li>&#8226; Rudimentary input (text fields, radio buttons, checkboxes) and output (text, images, graphs)</li>
                  <li>&#8226; Android only</li>
                  </ul>
                  <p class="mt-5 " icon="pi pi-check">$700</p>
                </Card>
                <Card>
                  <ul class=""><strong>Standard</strong>
                  <li>&#8226; 11 to 20 screens</li>
                  <li>&#8226; Rudimentary input (text fields, radio buttons, checkboxes) and output (text, images, graphs)</li>
                  <li>&#8226; Rudimentary features (user authentication, API integration)</li>
                  <li>&#8226; Android and iOS</li>
                  </ul>
                  <p class="mt-5 ">$950</p>
                </Card>
                <Card>
                  <ul class=""><strong>Enterprise</strong>
                  <li>&#8226; 20+ screens</li>
                  <li>&#8226; Rudimentary input (text fields, radio buttons, checkboxes) and output (text, images, graphs)</li>
                  <li>&#8226; Advanced features (machine learning, IoT)</li>
                  <li>&#8226; Analytics integration</li>
                  <li>&#8226; Android and iOS</li>
                  </ul>
                  <p class="mt-5 ">$1 450</p>
                </Card>               
            </div>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-lg shadow-md">

            <h3 class="text-xl">Email:</h3>

            <p class="my-2 bg-cyan-100 p-2 mb-10">
              nqlabsai@gmail.com
            </p>

            <h3 class="text-xl">Call/WhatsApp:</h3>

            <p class="my-2 bg-cyan-100 p-2">+263 78 129 4119</p>
          </div>

          <!-- Manage -->
          <!-- <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 class="text-xl font-bold mb-6">Manage Job</h3>
            <a href="add-job.html"
              class="bg-cyan-500 hover:bg-cyan-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">Edit
              Job</a>
            <button
              class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block">
              Delete Job
            </button>
          </div> -->
        </aside>
      </div>
    </div>
  </section>
</template>
