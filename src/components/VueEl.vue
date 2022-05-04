<script setup lang="ts">

    import { elementTags } from '@obewds/vue-validators'
    import { isEmptyOrUnsupportedElement } from '@obewds/vue-component-helpers'

    const props = defineProps({
        tag: {
            type: String,
            required: true,
            validator: (prop: string): boolean => (elementTags).includes(prop),
        },
        text: {
            type: String,
            default: '',
        },
    })

    function emptyElementOrUnsupportedError(tag: string): boolean {

        return isEmptyOrUnsupportedElement(tag)

    }

</script>


<template>

    <template v-if="emptyElementOrUnsupportedError(tag)"></template>

	<template v-else>

		<component :is="tag">
			<template v-if="text">
				{{ text }}
			</template>
			<template v-else>
				<slot>VueEl</slot>
			</template>
		</component>

	</template>

</template>
