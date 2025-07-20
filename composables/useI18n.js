import { ref, computed } from 'vue'
import { useLanguageStore } from '~/stores/useLanguage'

// Importar traduções
import ptBR from '~/locales/pt-BR.json'
import enUS from '~/locales/en-US.json'

// Importar projetos traduzidos
import projectsPtBR from '~/data/projects-pt-BR.json'
import projectsEnUS from '~/data/projects-en-US.json'

const translations = {
  'pt-BR': ptBR,
  'en-US': enUS
}

const projects = {
  'pt-BR': projectsPtBR,
  'en-US': projectsEnUS
}

export const useI18n = () => {
  const languageStore = useLanguageStore()
  
  const currentLocale = computed(() => languageStore.currentLocale)
  
  const t = (key) => {
    const keys = key.split('.')
    let translation = translations[currentLocale.value]
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k]
      } else {
        // Fallback para pt-BR se a tradução não existir
        translation = translations['pt-BR']
        for (const fallbackKey of keys) {
          if (translation && translation[fallbackKey]) {
            translation = translation[fallbackKey]
          } else {
            return key // Retorna a chave se não encontrar tradução
          }
        }
        break
      }
    }
    
    return translation || key
  }
  
  const setLocale = (locale) => {
    languageStore.setLanguage(locale)
  }
  
  const getProjects = () => {
    return projects[currentLocale.value] || projects['pt-BR']
  }
  
  return {
    t,
    setLocale,
    currentLocale,
    getProjects
  }
} 