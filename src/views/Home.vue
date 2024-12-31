<script setup lang="ts">
import {FileServerAddr} from '@/config/config';
import fileClient from '@/utils/fileClient';
import {LogError} from '@/utils/httputil';
import {ref} from 'vue';


interface Image {
  filename: string,
  title: string,
  description: string,
}

const images = ref<Image[]>([])
fileClient.get('/hbutmc/carousel/metadata.json').then(resp => {
  images.value = resp.data
}).catch(LogError)
</script>

<template>
  <el-carousel class="carousel">
    <el-carousel-item
      v-for="item in images" :key="item.title"
    >
      <img
      :src="`${FileServerAddr}/hbutmc/carousel/${item.filename}`"
      :alt="item.title"
      class="carousel-img"
      />
    </el-carousel-item>
  </el-carousel>

</template>

<style>
.carousel {
  height: 100vh;
}
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: brightness(70%);
}
</style>
