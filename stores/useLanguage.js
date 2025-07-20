import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', {
  state: () => ({
    currentLocale: 'pt-BR',
    availableLocales: [
      { code: 'pt-BR', name: 'Português', flag: '🇧🇷' },
      { code: 'en-US', name: 'English', flag: '🇺🇸' }
    ]
  }),

  getters: {
    currentLanguage: (state) => {
      return state.availableLocales.find(locale => locale.code === state.currentLocale)
    }
  },

  actions: {
    setLanguage(locale) {
      this.currentLocale = locale
      // Salvar no localStorage
      if (process.client) {
        localStorage.setItem('preferred-language', locale)
      }
    },

    initLanguage() {
      if (process.client) {
        const saved = localStorage.getItem('preferred-language')
        if (saved && this.availableLocales.some(locale => locale.code === saved)) {
          this.currentLocale = saved
        }
      }
    }
  }
}) 