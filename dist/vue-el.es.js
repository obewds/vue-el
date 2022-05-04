import { defineComponent, openBlock, createElementBlock, Fragment, createBlock, resolveDynamicComponent, withCtx, createTextVNode, toDisplayString, renderSlot } from "vue";
var elementTags = [
  "style",
  "title",
  "address",
  "article",
  "aside",
  "footer",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "main",
  "nav",
  "section",
  "blockquote",
  "dd",
  "div",
  "dl",
  "dt",
  "figcaption",
  "figure",
  "li",
  "menu",
  "ol",
  "p",
  "pre",
  "ul",
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "cite",
  "code",
  "data",
  "dfn",
  "em",
  "i",
  "kbd",
  "mark",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "time",
  "u",
  "var",
  "audio",
  "map",
  "video",
  "iframe",
  "object",
  "picture",
  "portal",
  "svg",
  "math",
  "canvas",
  "del",
  "ins",
  "caption",
  "colgroup",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "tr",
  "button",
  "datalist",
  "fieldset",
  "form",
  "label",
  "legend",
  "meter",
  "optgroup",
  "option",
  "output",
  "progress",
  "select",
  "textarea",
  "details",
  "dialog",
  "summary"
];
var emptyElementTags = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr"
];
var unsupportedElementTags = [
  "body",
  "head",
  "html",
  "noscript",
  "script",
  "slot",
  "template"
];
function isEmptyElement(tag) {
  const t = tag.toLowerCase();
  const isEmptyElement2 = emptyElementTags.includes(t);
  if (isEmptyElement2) {
    console.error("The <" + tag + "> tag is an Empty Element. Since Empty Elements do not have child node capabilities, they are not available as tags for this component.");
    return true;
  } else {
    return false;
  }
}
function isEmptyOrUnsupportedElement(tag) {
  const t = tag.toLowerCase();
  const isTagEmpty = isEmptyElement(t);
  const isTagUnsupported = isUnsupportedElement(t);
  return isTagEmpty || isTagUnsupported ? true : false;
}
function isUnsupportedElement(tag) {
  const t = tag.toLowerCase();
  const isUnsupportedElement2 = unsupportedElementTags.includes(t);
  if (isUnsupportedElement2) {
    console.error("The <" + tag + "> element tag is not supported for rendering by this component.");
    return true;
  } else {
    return false;
  }
}
const _hoisted_1 = /* @__PURE__ */ createTextVNode("VueEl");
const _sfc_main = /* @__PURE__ */ defineComponent({
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
