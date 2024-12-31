<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import useGlobalStore from '@/stores/Global';

import ToggleDark from '@/components/ToggleDark.vue';

const { t } =  useI18n();
const global = useGlobalStore();

const navPages = [
  {
    path: '/',
    name: t('navbar.home'),
  },
  {
    path: '/wiki',
    name: t('navbar.wiki'),
  },
  {
    path: 'server',
    name: t('navbar.server'),
  },
]
</script>

<template>
  <div class="flex container gap-4 px-5 bg-gray-300">

    <div v-show="!global.isWide">菜单</div>

    <div>湖工大MC社</div>

    <div v-show="global.isWide" class="flex gap-3">
      <div v-for="(item, index) in navPages" :key="index">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </div>
    </div>

    <div v-if="global.isWide" class="ms-auto flex">
      详细内容列表
    </div>

    <div v-else class="ms-auto">
      菜单 <ToggleDark />
    </div>

  </div>
</template>

<style>
.container {
  height: 60px;
  align-items: center;
  position: fixed;
  top: 0;
}

</style>
