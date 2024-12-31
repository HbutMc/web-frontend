<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import {onMounted} from 'vue';
import useGlobalStore from './stores/Global';

const global = useGlobalStore();

onMounted(() => {
  window.addEventListener('resize', () => {
    global.updateWidth(window.innerWidth)
  })
})
</script>

<template>

  <header>
    <NavBar />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    页脚
  </footer>

</template>
