(this["webpackJsonptomato-work"]=this["webpackJsonptomato-work"]||[]).push([[4],{770:function(e,t,a){"use strict";var n=a(1),c=a.n(n),i=a(4),l=a.n(i),o=a(0),r=a(2),s=a.n(r),d=a(52),f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a};t.a=function(e){return o.createElement(d.a,null,(function(t){var a,n=t.getPrefixCls,i=t.direction,r=e.prefixCls,d=e.type,u=void 0===d?"horizontal":d,m=e.orientation,h=void 0===m?"center":m,p=e.className,b=e.children,v=e.dashed,O=e.plain,y=f(e,["prefixCls","type","orientation","className","children","dashed","plain"]),N=n("divider",r),C=h.length>0?"-".concat(h):h,E=!!b,j=s()(p,N,"".concat(N,"-").concat(u),(a={},l()(a,"".concat(N,"-with-text"),E),l()(a,"".concat(N,"-with-text").concat(C),E),l()(a,"".concat(N,"-dashed"),!!v),l()(a,"".concat(N,"-plain"),!!O),l()(a,"".concat(N,"-rtl"),"rtl"===i),a));return o.createElement("div",c()({className:j},y,{role:"separator"}),b&&o.createElement("span",{className:"".concat(N,"-inner-text")},b))}))}},774:function(e,t,a){},778:function(e,t,a){"use strict";a.r(t);var n=a(203),c=a(50),i=a(12),l=a(0),o=a.n(l),r=(a(774),a(770)),s=a(1),d=a.n(s),f=a(4),u=a.n(f),m=a(3),h=a(5),p=a(23),b=a(2),v=a.n(b),O=a(46),y=a(8),N=l.forwardRef((function(e,t){var a,n=e.prefixCls,c=void 0===n?"rc-switch":n,i=e.className,o=e.checked,r=e.defaultChecked,s=e.disabled,d=e.loadingIcon,f=e.checkedChildren,u=e.unCheckedChildren,b=e.onClick,N=e.onChange,C=e.onKeyDown,E=Object(p.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),j=Object(O.a)(!1,{value:o,defaultValue:r}),w=Object(h.a)(j,2),k=w[0],g=w[1];function x(e,t){var a=k;return s||(g(a=e),null===N||void 0===N||N(a,t)),a}var S=v()(c,i,(a={},Object(m.a)(a,"".concat(c,"-checked"),k),Object(m.a)(a,"".concat(c,"-disabled"),s),a));return l.createElement("button",Object.assign({},E,{type:"button",role:"switch","aria-checked":k,disabled:s,className:S,ref:t,onKeyDown:function(e){e.which===y.a.LEFT?x(!1,e):e.which===y.a.RIGHT&&x(!0,e),null===C||void 0===C||C(e)},onClick:function(e){var t=x(!k,e);null===b||void 0===b||b(t,e)}}),d,l.createElement("span",{className:"".concat(c,"-inner")},k?f:u))}));N.displayName="Switch";var C=N,E=a(64),j=a.n(E),w=a(140),k=a(52),g=a(43),x=a(22),S=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var c=0;for(n=Object.getOwnPropertySymbols(e);c<n.length;c++)t.indexOf(n[c])<0&&Object.prototype.propertyIsEnumerable.call(e,n[c])&&(a[n[c]]=e[n[c]])}return a},P=l.forwardRef((function(e,t){var a,n=e.prefixCls,c=e.size,i=e.loading,o=e.className,r=void 0===o?"":o,s=e.disabled,f=S(e,["prefixCls","size","loading","className","disabled"]);Object(x.a)("checked"in f||!("value"in f),"Switch","`value` is not a valid prop, do you mean `checked`?");var m=l.useContext(k.b),h=m.getPrefixCls,p=m.direction,b=l.useContext(g.b),O=h("switch",n),y=l.createElement("div",{className:"".concat(O,"-handle")},i&&l.createElement(j.a,{className:"".concat(O,"-loading-icon")})),N=v()(r,(a={},u()(a,"".concat(O,"-small"),"small"===(c||b)),u()(a,"".concat(O,"-loading"),i),u()(a,"".concat(O,"-rtl"),"rtl"===p),a));return l.createElement(w.a,{insertExtraNode:!0},l.createElement(C,d()({},f,{prefixCls:O,className:N,disabled:s||i,ref:t,loadingIcon:y})))}));P.__ANT_SWITCH=!0,P.displayName="Switch";var I=P,T=a(13);t.default=function(){var e=Object(l.useState)({isMatterNotify:!0,isTaskNotify:!0}),t=Object(i.a)(e,2),a=t[0],s=t[1];function d(e,t){var i={0:"isTaskNotify",1:"isMatterNotify"};Object(T.J)(Object(n.a)({},i[e],t)).then((function(l){l.data.success&&s(Object(c.a)(Object(c.a)({},a),{},Object(n.a)({},i[e],t)))}))}return Object(l.useEffect)((function(){Object(T.x)().then((function(e){e.data.success&&s(Object(c.a)({},e.data.data))}))}),[]),o.a.createElement("div",{className:"notification"},o.a.createElement(r.a,{orientation:"left"},"\u6d88\u606f\u901a\u77e5"),o.a.createElement("div",{className:"list"},o.a.createElement("div",{className:"left"},o.a.createElement("h4",{className:"title"},"\u5f85\u529e\u4efb\u52a1"),o.a.createElement("p",{className:"description"},"\u5f00\u901a\u540e\u5c06\u4ee5\u7ad9\u5185\u4fe1\u7684\u5f62\u5f0f\u901a\u77e5\u5e76\u4e14\u901a\u77e5\u5230\u90ae\u7bb1\uff0c \u5426\u5219\u53ea\u4f1a\u7ad9\u5185\u4fe1\u901a\u77e5")),o.a.createElement(I,{checked:a.isTaskNotify,onChange:d.bind(null,0)})),o.a.createElement("div",{className:"list"},o.a.createElement("div",{className:"left"},o.a.createElement("h4",{className:"title"},"\u63d0\u9192\u4e8b\u9879"),o.a.createElement("p",{className:"description"},"\u5f00\u901a\u540e\u5c06\u4ee5\u7ad9\u5185\u4fe1\u7684\u5f62\u5f0f\u901a\u77e5\u5e76\u4e14\u901a\u77e5\u5230\u90ae\u7bb1\uff0c \u5426\u5219\u53ea\u4f1a\u7ad9\u5185\u4fe1\u901a\u77e5")),o.a.createElement(I,{checked:a.isMatterNotify,onChange:d.bind(null,1)})))}}}]);
//# sourceMappingURL=4.a959efa7.chunk.js.map