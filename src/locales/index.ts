import { createI18n } from "vue-i18n";

import zh from "./zh";
import en from "./en";

export default createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: { zh, en }
})

