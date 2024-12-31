<script setup lang="ts">
import { Moon, SunOne } from '@icon-park/vue-next';
import useGlobalStore from '@/stores/Global';

const global = useGlobalStore();

</script>

<template>
  <div @click="global.toggleDark">
    <Moon v-if="global.isDarkMode" />
    <SunOne v-else />
  </div>
</template>
