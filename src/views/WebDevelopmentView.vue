<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="font-serif bg-cyan-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
        <main>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h1 class="text-3xl font-bold mb-4 ">Web Development</h1>
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
              In order for businesses to attract new customers whilst retaining existing ones, they should maintain a strong and persistent online presence. We offer web application solutions for businesses who wish to stay ahead of the curve.
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
                  <li>&#8226; 5 to 10 pages</li>
                  <li>&#8226; Rudimentary functionality (contact form, social media integration)</li>
                  <li>&#8226; Rudimentary content management system (CMS)</li>
                  </ul>
                  <p class="mt-5 ">$500</p>
                </Card>
                <Card>
                  <ul class=""><strong>Standard</strong>
                  <li>&#8226; 11 to 20 screens</li>
                  <li>&#8226; Rudimentary functionality (contact form, social media integration)</li>
                  <li>&#8226; User authentication</li>
                  <li>&#8226; Custom CMS</li>
                  <li>&#8226; Rudimentary backend development</li>
                  </ul>
                  <p class="mt-5 ">$750</p>
                </Card>
                <Card>
                  <ul class=""><strong>Enterprise</strong>
                  <li>&#8226; 20+ screens</li>
                  <li>&#8226; Advanced functionality (custom APIs, machine learning integration)</li>
                  <li>&#8226; User authentication</li>
                  <li>&#8226; Custom CMS</li>
                  <li>&#8226; Advanced backend development</li>
                  <li>&#8226; Advanced search engine optimization</li>
                  </ul>
                  <p class="mt-5 ">$1350</p>
                </Card>               
            </div>
          </div>
        </main>
      </div>
    </div>
  </section>
</template>
