<script setup lang="ts">

    type VueElProps = {
        text?: string | undefined
    }

    const props = withDefaults(
        defineProps<VueElProps>(), {
            text: ''
        }
    )

</script>


<template>

    <div>
        <template v-if="text">
            {{ text }}
        </template>
        <template v-else>
            <slot>VueEl</slot>
        </template>
    </div>

</template>
