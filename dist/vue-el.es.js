import { defineComponent as m, openBlock as r, createElementBlock as n, Fragment as o, createBlock as i, resolveDynamicComponent as u, withCtx as c, createTextVNode as a, toDisplayString as p, renderSlot as d } from "vue";
import { elementTags as s } from "@obewds/vue-validators";
import { isEmptyOrUnsupportedElement as y } from "@obewds/vue-component-helpers";
const x = /* @__PURE__ */ m({
  __name: "VueEl",
  props: {
    tag: {
      type: String,
      required: !0,
      validator: (e) => s.includes(e)
    },
    text: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    function l(t) {
      return y(t);
    }
    return (t, f) => l(e.tag) ? (r(), n(o, { key: 0 }, [], 64)) : (r(), i(u(e.tag), { key: 1 }, {
      default: c(() => [
        e.text ? (r(), n(o, { key: 0 }, [
          a(p(e.text), 1)
        ], 64)) : d(t.$slots, "default", { key: 1 }, () => [
          a("VueEl")
        ])
      ]),
      _: 3
    }));
  }
});
export {
  x as VueEl
};
