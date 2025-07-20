import { useLanguageStore } from '~/stores/useLanguage'

export default defineNuxtPlugin(() => {
  const languageStore = useLanguageStore()
  
  // Inicializar idioma quando o plugin carregar
  languageStore.initLanguage()
}) 