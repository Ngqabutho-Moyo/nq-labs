<script setup lang="ts">
import Card from '@/components/Card.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="font-serif py-10 px-10">
    <div class="grid grid-cols-2 gap-2">
      <div>
        <img src="/src/assets/img/nqlabs2.png">
      </div>
      <div>
        <div class="mb-10">
          <h1 class="text-3xl text-cyan-600"><strong>About</strong></h1>
          <p>Welcome to NQ Labs, a pioneering software development company that
            specializes in
            artificial intelligence applications whilst dabbling in web and mobile applications. Committed to advancing
            the frontiers of
            knowledge, we also actively contribute to academic research in data science and artificial intelligence,
            driving innovation and excellence in these fields.</p>
        </div>
        <div class="mb-10">
          <h2 class="text-3xl text-cyan-600"><strong>Mission Statement</strong></h2>
          <p>Empowering businesses to thrive in a rapidly changing world by crafting
            innovative,
            AI-driven solutions that transform the way they operate, interact, and grow.</p>
        </div>
        <div class="mb-10">
          <h1 class="text-3xl text-cyan-600"><strong>Core Values</strong></h1>
          <p><strong>1. Innovation:</strong> We foster a culture ofcreativity,
            experimentation, and
            continuous learning to stay ahead ofthe curve.</p>
          <p><strong>2. Customer Obsession:</strong> We put our clients at the heart of
            everything we
            do, delivering tailored solutions that meet their unique needs and exceed their expectations.</p>
          <p><strong>3. Collaboration:</strong> We believe in success through teamwork,
            hence we
            foster a culture ofopen communication, active listening, ad mutual respect among our team members, clints
            and partners.</p>
        </div>
      </div>
    </div>
    <div class="py-10">
      <h1 class="text-3xl text-cyan-600"><strong>Our Services</strong></h1>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <Card>
        <h1 class="text-1xl "><strong>Data Analytics</strong></h1>
        <p>We process and clean data, and apply machine learning algorithms in order to gain insights
          and help businesses in their decision-making.</p>
        <div class="mt-3 mb-8">
          <RouterLink to="data-science"><button
              class=" inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-600">Read More
            </button></RouterLink>
        </div>
      </Card>
      <Card>
        <h1 class="text-1xl "><strong>Mobile App Development</strong></h1>
        <p>We build mobile applications that are tailor-made to solve business problems.</p>
        <div class="mt-3 mb-8">
          <RouterLink to="mobile-apps"><button
              class=" inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-600">Read More</button>
          </RouterLink>
        </div>
      </Card>
      <Card>
        <h1 class="text-1xl "><strong>Web Development</strong></h1>
        <p>We design and deploy websites and web apps with custom functionality aimed at
          satisfying
          business needs.</p>
        <div class="mt-3 mb-8">
          <RouterLink to="web-apps"><button
              class=" inline-block bg-cyan-500 text-white rounded-lg px-4 py-2 hover:bg-cyan-600">Read More
            </button></RouterLink>
        </div>
      </Card>
    </div>
    <div class="py-10">
      <h1 class="text-3xl text-cyan-600"><strong>Our Portfolio</strong></h1>
      <div class="grid grid-cols-3 gap-3">
        <p class="py-10"><img src="/src/assets/img/clients/laboserv4.png"></p>
        <p class="py-10"><img src="/src/assets/img/clients/pp3.png" style="width: 225px; height: 120px;"></p>
      </div>
    </div>
    <div class="py-5">
      <h1 class="text-3xl text-cyan-600"><strong>Contact Us</strong></h1>
    </div>
    <div class="grid grid-cols-3 gap-3">
      <Card bg="bg-white">
        <i class="pi pi-envelope"></i>&emsp;nqlabsai@gmail.com
      </Card>
      <Card bg="bg-white">
        <i class="pi pi-phone"></i>&emsp;+263 78 129 4119
      </Card>
      <Card bg="bg-white">
        <i class="pi pi-linkedin"></i>&emsp;<a href="https://www.linkedin.com/in/ngqabutho-moyo-217a4a1b8/">https://www.linkedin.com/in/ngqabutho-moyo-217a4a1b8/</a>
      </Card>
    </div>  
  </div>
</template>
