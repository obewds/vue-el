import { defineComponent, openBlock, createElementBlock, Fragment, createBlock, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, renderSlot } from "vue";
import { elementTags } from "@obewds/vue-validators";
import { isEmptyOrUnsupportedElement } from "@obewds/vue-component-helpers";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("VueEl");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VueEl",
  props: {
    tag: {
      type: String,
      required: true,
      validator: (prop) => elementTags.includes(prop)
    },
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    function emptyElementOrUnsupportedError(tag) {
      return isEmptyOrUnsupportedElement(tag);
    }
    return (_ctx, _cache) => {
      return emptyElementOrUnsupportedError(__props.tag) ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [], 64)) : (openBlock(), createBlock(resolveDynamicComponent(__props.tag), { key: 1 }, {
        default: withCtx(() => [
          __props.text ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(__props.text), 1)
          ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
            _hoisted_1
          ])
        ]),
        _: 3
      }));
    };
  }
});
export { _sfc_main as VueEl };
