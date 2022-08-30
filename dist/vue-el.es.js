import { defineComponent as m, openBlock as r, createElementBlock as n, Fragment as o, createBlock as i, resolveDynamicComponent as u, withCtx as c, createTextVNode as a, toDisplayString as p, renderSlot as s } from "vue";
import { elementTags as d } from "@obewds/vue-validators";
import { isEmptyOrUnsupportedElement as y } from "@obewds/vue-component-helpers";
const f = /* @__PURE__ */ a("VueEl"), S = /* @__PURE__ */ m({
  __name: "VueEl",
  props: {
    tag: {
      type: String,
      required: !0,
      validator: (e) => d.includes(e)
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
    return (t, g) => l(e.tag) ? (r(), n(o, { key: 0 }, [], 64)) : (r(), i(u(e.tag), { key: 1 }, {
      default: c(() => [
        e.text ? (r(), n(o, { key: 0 }, [
          a(p(e.text), 1)
        ], 64)) : s(t.$slots, "default", { key: 1 }, () => [
          f
        ])
      ]),
      _: 3
    }));
  }
});
export {
  S as VueEl
};
