import { defineStore } from "pinia";
import { switchTheme } from '@/utils/theme';

const useGlobalStore = defineStore('global', {
  state: () => ({
    isDarkMode: false,
    isEnglish: false,
    isWide: window.innerWidth >= 768,
  }),
  actions: {
    toggleDark() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        switchTheme('dark')
      } else {
        switchTheme('light')
      }
    },
    toggleLang() {
      this.isEnglish = !this.isEnglish;
    },
    updateWidth(width: number) {
      this.isWide = width >= 768;
    }
  }
})

export default useGlobalStore;
