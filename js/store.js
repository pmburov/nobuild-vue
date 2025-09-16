import { defineStore } from "/js/vendor/pinia.esm-browser.js"
import { ref } from "/js/vue.js"

export const useGlobalStore = defineStore("globalStore", () => {
  /** @type {import('vue').Ref<'dark' | 'light' | 'system'>} */
  const theme = ref("dark")

  const count = ref(0)

  return {
    count,
    theme,
  }
})
