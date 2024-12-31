<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import useGlobalStore from '@/stores/Global';

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
  <div class="flex container gap-4 px-5">

    <div v-show="!global.isWide">菜单</div>

    <div>湖工大MC社</div>

    <div v-show="global.isWide" class="flex gap-3">
      <div v-for="(item, index) in navPages" :key="index">
        <router-link :to="item.path">
          {{ item.name }}
        </router-link>
      </div>
    </div>

    <div class="ms-auto">
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </div>

  </div>
</template>

<style>
.container {
  height: 60px;
  align-items: center;
}

</style>
