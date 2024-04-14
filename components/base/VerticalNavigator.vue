
<script>
import { defineComponent } from '@vue/composition-api'



export default defineComponent({
    data() {
        return {
            activeTab: 1
        }
    },
    props: {
        active: Number,
        mode: String
    },
    methods: {
        setStep(number) {
            const scrollState = useScrollState()
            scrollState.setState(number)
            this.activeTab = scrollState.$state.state
            if (number == 1) {
                window.scrollTo(0, (window.innerHeight / 2) * 0)
            } else if(number == 2) {
                window.scrollTo(0, (window.innerHeight / 2) * 2)
            } else if (number == 3) {
                window.scrollTo(0, (window.innerHeight / 2) * 4)
            } else if (number ==4 ){
                window.scrollTo(0, (window.innerHeight / 2) * 6)
            } else if (number ==5) {
                window.scrollTo(0, (window.innerHeight / 2) * 8)
            }
        },
        getClasses() {
            const classes = []
            if(this.$props.mode == 'dark') {
                classes.push('dark')
            }
            if (this.$props.mode == 'light') {
                classes.push('light')
            }
            return classes.join('')
        },
        getGlobalStep(){
            const scrollState = useScrollState();
            const globalStep = scrollState.$state.state;
            return globalStep
        }
    },
})
</script>


<template>
    <div class="navigator-container">
        <ul class="navigator-list" :class="getClasses()">
            <div @click="setStep(1)" :class="getGlobalStep() == 1 ? 'active' : ''" class="home"></div>
            <div @click="setStep(2)" :class="getGlobalStep() == 2 ? 'active' : ''" class="about"></div>
            <div @click="setStep(3)" :class="getGlobalStep() == 3 ? 'active' : ''" class="projects"></div>
            <div @click="setStep(4)" :class="getGlobalStep() == 4 ? 'active' : ''" class="skills"></div>
            <div @click="setStep(5)" :class="getGlobalStep() == 5 ? 'active' : ''" class="contact"></div>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.navigator-container {
    position: absolute;
    right: 32px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3000;
    @media screen and (max-width: 768px) {
        display: none;
    }
    .navigator-list {
        height: 200px;
        width: 30px;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        & > div {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            opacity: 1 !important;
            transition: all .2s linear;
        }
        &.light {
            background-color: #ffffff26;
            & > div {
                background-color: #7A8998;
                &.active {
                    background-color: #41B883;
                }
                &:hover {
                    box-shadow: inset 0 0 0 3px #41B883;
                }
            }
        }
        &.dark {
            background-color: #1B263126;
            & > div {
                background-color: #7A8998;
                &.active {
                    background-color: #41B883;
                }
                &:hover {
                    box-shadow: inset 0 0 0 3px #41B883;
                }
            }
        }
    }
}
</style>