<template>
    <button v-if="text" :type="type" :disabled="disabled" :class="{ disabled }">
        {{ text }}
    </button>
    <button v-else :type="type" :disabled="disabled" :class="{ disabled }">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        text: String,
        type: String,
        disabled: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style scoped>
button.disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
</style>