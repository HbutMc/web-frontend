<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import useGlobalStore from '@/stores/Global';
import ToggleDark from '@/components/ToggleDark.vue';
import ToggleLang from '@/components/ToggleLang.vue';

const { t } =  useI18n();
const global = useGlobalStore();

interface NavPage {
  path: string,
  name: string,
}

const navPages: NavPage[] = [
  {
    path: '/',
    name: t('navbar.home'),
  },
  {
    path: '/wiki',
    name: t('navbar.wiki'),
  },
  {
    path: '/server',
    name: t('navbar.server'),
  },
  {
    path: '/gallery',
    name: t('navbar.gallery'),
  },
  {
    path: '/shame',
    name: t('navbar.shame'),
  },
]
</script>

<template>
  <div class="flex container gap-4 px-5 nav-bg-color text-color">

    <div v-if="!global.isWide">
    </div>

    <div class="brand">湖工大MC社</div>

    <div v-if="global.isWide" class="flex gap-3">
      <div v-for="(item, index) in navPages" :key="index">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </div>
    </div>

    <div v-if="global.isWide" class="ms-auto flex gap-3">
      <ToggleDark />
      <ToggleLang />
    </div>

    <div v-else class="ms-auto">
    </div>

  </div>
</template>

<style>
.container {
  height: 60px;
  align-items: center;
}
.brand {
  font-weight: bold;
  font-size: 20px;
}

</style>
