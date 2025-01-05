<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { RouterLink } from 'vue-router';
import Dropdown from './Dropdown.vue';

export default{
  name:'navbar',
  components:{
    Dropdown,
    RouterLink
  },
  data:()=>{
    return{
      services:[
        {
          title:'Data Science',
          link:'data-science',
        },
        {
          title:'Mobile App Development',
          link:'mobile-apps',
        },
        {
          title:'Web Development',
          link:'web-apps',
        },
      ]
    }
  }
}
</script>

<template>
  <nav class="bg-cyan-400">
    <div class="mx-auto max-w-7xl">
      <div class="flex h-15 items-center justify-between">
        <div>
          <!-- Logo -->
          <!-- <a class="flex flex-shrink-0 items-center mr-4" href="#"> -->
          <!-- <img class="h-10 w-auto content-start" v-bind:src="'/src/assets/img/nqlabs3.png'" alt="NQ Labs" /> -->
          <!-- </a> -->
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <div class="menu-item">
                <a href="/"
                class="font-serif text-black">Home</a>
              </div>
                <div class="font-serif">
                  <Dropdown title="Services" :items="services"></Dropdown>
                </div>
              <div class="menu-item">
                <a href="#" class="font-serif text-black">Contact
                  Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
nav {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

nav .menu-item {
  color: lightblue;
  padding: 10px 30px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

nav .menu-item.active,
/* nav .menu-item:hover {
  background-color: white;
  border-bottom-color: #06bbf1;
} */

nav .menu-item {
  color: inherit;
  text-decoration: none;
}
</style>
