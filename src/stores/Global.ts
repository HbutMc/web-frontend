import { defineStore } from "pinia";

const useGlobalStore = defineStore('global', {
  state: () => ({
    isDarkMode: false,
    isEnglish: false,
    isWide: window.innerWidth >= 768,
  }),
  actions: {
    toggleDark() {
      this.isDarkMode = !this.isDarkMode;
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
