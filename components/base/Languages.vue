<template>
    <div class="languages-container">
        <img src="assets/languages.svg" @click="toggleLanguageMenu" />
        <ul class="select-language" v-show="isMenuOpen">
            <li class="pt-br" @click="changeLanguage('pt-BR')">
                <img src="assets/brazil.svg" />
                <span class="language">pt-BR</span>
            </li>
            <li class="en-us" @click="changeLanguage('en-US')">
                <img src="assets/usa.svg" />
                <span class="language">en-US</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { useLanguageStore } from '~/stores/useLanguage'
import { useI18n } from '~/composables/useI18n'

export default {
    data() {
        return {
            isMenuOpen: false
        }
    },
    computed: {
        languageStore() {
            return useLanguageStore()
        },
        i18n() {
            return useI18n()
        }
    },
    methods: {
        toggleLanguageMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        changeLanguage(locale) {
            this.languageStore.setLanguage(locale);
            this.i18n.setLocale(locale);
            this.isMenuOpen = false;
        }
    },
    mounted() {
        // Fechar menu quando clicar fora
        document.addEventListener('click', (e) => {
            if (!this.$el.contains(e.target)) {
                this.isMenuOpen = false;
            }
        });
    }
}
</script>

<style lang="scss" scoped>
.languages-container {
    position: relative;
    
    img {
        cursor: pointer;
    }
    
    .select-language {
        transition: all .2s linear;
        position: absolute;
        top: 20px;
        padding-top: 20px;
        right: 0;
        width: 130px;
        background-color: white;
        border-radius: 5px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        li {
            background-color: white;
            padding: 8px 16px;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            gap: 10px;
            &:hover {
                background-color: #f1f1f1;
            }
            img {
                width: 30px;
            }
            &:nth-child(1) {
                border-radius: 5px 5px 0 0;
            }
            &:nth-child(2) {
                border-radius: 0 0 5px 5px;
            }
        }
    }
}
</style>