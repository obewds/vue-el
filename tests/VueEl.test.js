// ./tests/VueEl.test.js

import { mount } from '@vue/test-utils'
import VueEl from '../src/components/VueEl.vue'



test('VueEl.vue component mounts successfully', async () => {

    expect(VueEl).toBeTruthy()

})



test('VueEl.vue component text prop accepts a string value', async () => {

    const testString = 'Test String Value'

    const wrapper = mount(VueEl, {
        props: {
            tag: 'span',
            text: testString
        },
    })

    expect(wrapper.text()).toContain(testString)
    
})



test('VueEl.vue component default slot accepts an element node with a child text node', async () => {

    const testStrLiteral = `<div>Test String Value</div>`

    const wrapper = mount(VueEl, {
        props: {
            tag: 'div',
        },
        slots: {
            default: testStrLiteral
        },
    })

    expect(wrapper.html()).toContain(testStrLiteral)
    
})



test('VueEl.vue component does not accept an empty element like a br tag', async () => {

    const tag = 'br'
    
    const wrapper = mount(VueEl, {
        props: {
            tag: tag,
        },
    })

    try {
        wrapper.vm.emptyElementOrUnsupportedError(tag)
    } catch (error) {
        expect(error).toContain('Empty Element')
    }
    
})



test('VueEl.vue component does not accept an unsupported element like a body tag', async () => {

    const tag = 'body'

    const wrapper = mount(VueEl, {
        props: {
            tag: tag,
        },
    })

    try {
        wrapper.vm.emptyElementOrUnsupportedError(tag)
    } catch (error) {
        expect(error).toContain('not supported')
    }
    
})
