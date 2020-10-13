<template>
  <div id="app">
    <Navbar
      name="Wildo Codak" 
      :navLinks="[
        {
          name: 'Home',
          link: '/home',
          dropdown: false,
        },

        { name: 'About', 
        link: '/about', 
        dropdown: false },

        {
          name: 'Contacts',
          link: '/contact',
          dropdown: true,
          dropdownLinks: [ 
            { name: 'A', link: '/pA', dropdown: false },
            { name: 'B', link: '/pB', dropdown: false },
          ],
        },
        {
          name: 'Projects',
          link: '/projects',
          dropdown: false,
        },
      ]"
    />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
}
</style>
