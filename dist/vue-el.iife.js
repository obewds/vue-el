var VueEl=function(n,e,l,o){"use strict";const a=e.defineComponent({__name:"VueEl",props:{tag:{type:String,required:!0,validator:t=>l.elementTags.includes(t)},text:{type:String,default:""}},setup(t){function c(r){return o.isEmptyOrUnsupportedElement(r)}return(r,i)=>c(t.tag)?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[],64)):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.tag),{key:1},{default:e.withCtx(()=>[t.text?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.createTextVNode(e.toDisplayString(t.text),1)],64)):e.renderSlot(r.$slots,"default",{key:1},()=>[e.createTextVNode("VueEl")])]),_:3}))}});return n.VueEl=a,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}}),n}({},Vue,VueValidators,VueComponentHelpers);