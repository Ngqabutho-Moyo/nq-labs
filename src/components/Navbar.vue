<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts">
import { RouterLink } from 'vue-router';
import Dropdown from './Dropdown.vue';

export default {
  name: 'navbar',
  components: {
    Dropdown,
    RouterLink
  },
  data: () => {
    return {
      services: [
        {
          title: 'Data Science',
          link: 'data-science',
        },
        {
          title: 'Mobile App Development',
          link: 'mobile-apps',
        },
        {
          title: 'Web Development',
          link: 'web-apps',
        },
      ]
    }
  }
}
</script>

<template>
  <nav class="font-serif bg-cyan-400">
    <div class="mx-auto max-w-7xl">
      <div class="flex h-15 items-center justify-between">
        <div>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <div class="menu-item">
                <a href="/" class=" text-black">Home</a>
              </div>
              <div class="menu-item">
                <a href="portfolio" class=" text-black">Portfolio</a>
              </div>
              <div class="menu-item">
                <a href="contact-us" class=" text-black">Contact
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
nav .menu-item:hover {
  background-color: white;
  border-bottom-color: #019cf0;
}

/* nav .menu-item.active, */
/* nav .menu-item:hover {
  background-color: white;
  border-bottom-color: #06bbf1;
} */

nav .menu-item {
  color: inherit;
  text-decoration: none;
}
</style>
