<template>
    
    <button v-if="text" :type="type">
        {{ text }}
    </button>
    <button v-else :type="type">
        <slot></slot>
    </button>


</template>

<script>
export default {
    props: {
        text: String,
        type: String,
    }
}
</script>