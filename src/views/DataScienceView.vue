<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Card from '@/components/Card.vue';
</script>

<template>
  <section id="data-science" class="font-serif bg-cyan-50">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-2 md:grid-cols-70/30 w-full gap-6">
        <div>
          <div class="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <h1 class="text-3xl font-bold mb-4 ">Data Analytics</h1>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-3xl font-bold mb-4 ">
              <strong>Overview</strong>
            </h1>
            <p class="mb-4 ">
              Data has become a currency in the modern business world. As such, it has become imperative for businesses
              to leverage its power in order to maximize the value of their products and services. We process and clean
              data, and apply machine learning algorithms, on-premise or in the cloud, in order to gain insights and
              help
              businesses in their decision-making. Our services include:
            </p>
            <ol class=" ml-5">
              <li>1. Data Engineering</li>
              <ul class=" ml-8">
                <li>i.Data cleaning</li>
                <li>ii.Data transformation</li>
                <li>iii.Data warehousing</li>
              </ul>
              <li>2. Data Analysis and Reporting</li>
              <ul class="ml-8">
                <li>i.Data visualization</li>
                <li>ii.Report generation with Microsoft Power BI</li>
              </ul>
              <li>3. Machine Learning</li>
              <ul class="ml-8">
                <li>i.Descriptive analytics</li>
                <li>ii.Predictive analytics</li>
              </ul>
            </ol>

          </div>
          <div class="bg-white p-6 rounded-lg shadow-md mt-6">
            <h1 class="text-3xl font-bold mb-4 ">
              <strong>Packages</strong>
            </h1>
            <div class="grid grid-cols-3 gap-10">
              <Card>
                <ul><strong>Basic</strong>
                  <li>&#8226; Data exploration and visualization</li>
                  <li>&#8226; Rudimentary data cleaning and preprocessing</li>
                  <li>&#8226; Rudimentary machine learning models (e.g. linear regression, decision trees)</li>
                </ul>
                <!-- <p class="mt-5 ">$800</p> -->
              </Card>
              <Card>
                <ul><strong>Standard</strong>
                  <li>&#8226; Advanced data exploration and visualization</li>
                  <li>&#8226; Data cleaning, preprocessing and feature engineering</li>
                  <li>&#8226; Intermediate machine learning models (e.g. random forests, support vector machines)</li>
                  <li>&#8226; Data insights and recommendations with actionable steps</li>
                  <li>Rudimentary data reporting using Microsoft Power BI</li>
                </ul>
                <!-- <p class="mt-5 ">$1 550</p> -->
              </Card>
              <Card>
                <ul><strong>Enterprise</strong>
                  <li>&#8226; Advanced data exploration and visualization</li>
                  <li>&#8226; Custom data cleaning, preprocessing and feature engineering</li>
                  <li>&#8226; Advanced machine learning models (deep learning, natural language processing)</li>
                  <li>&#8226; Comprehensive data insights and recommendations with strategic planning</li>
                  <li>Advanced data reporting using Microsoft Power BI</li>
                </ul>
                <!-- <p class="mt-5 ">$2 250</p> -->
              </Card>
            </div>
          </div>
        </div>
        <!-- Sidebar -->
        <!-- <aside>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h1 class="text-xl">Email:</h1>
            <p class="my-2 bg-cyan-100 p-2 mb-10">
              nqlabsai@gmail.com
            </p>
            <h1 class="text-xl">Call/WhatsApp:</h1>
            <p class="my-2 bg-cyan-100 p-2">+263 78 129 4119</p>
          </div>
        </aside> -->
      </div>
    </div>
  </section>
</template>

<!-- <style>
#data-science {
  background-image: url('/src/assets/img/services/ds/ds2.jpg');
  background-size: cover;
  background-position:center;
  background-repeat: no-repeat;
}
</style> -->
