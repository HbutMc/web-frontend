<script setup lang="ts">
import { Translate } from '@icon-park/vue-next';

interface Language {
  id: string,
  name: string,
}

const languages: Language[] = [
  {id: "zh", name: "简体中文"},
  {id: "en", name: "English"},
]
</script>

<template>
  <el-dropdown>
    <Translate />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="item in languages" :key="item.id">
          {{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
