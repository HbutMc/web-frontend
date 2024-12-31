<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import {onMounted} from 'vue';
import useGlobalStore from './stores/Global';
import Footer from './components/Footer.vue';

const global = useGlobalStore();

onMounted(() => {
  window.addEventListener('resize', () => {
    global.updateWidth(window.innerWidth)
  })
})
</script>

<template>

  <header class="header">
    <NavBar />
  </header>

  <main class="main">
    <RouterView />
  </main>

  <footer>
    <Footer />
  </footer>

</template>

<style>
.header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}
.main {
  min-height: 100vh;
  padding-top: 60px;
}
</style>
