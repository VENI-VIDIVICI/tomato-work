(this["webpackJsonptomato-work"]=this["webpackJsonptomato-work"]||[]).push([[6],{783:function(e,t,a){"use strict";var n=a(0),r=a(2),c=a.n(r),l=a(52);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var s=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){return n.createElement(l.a,null,(function(t){var a,r=t.getPrefixCls,l=e.prefixCls,u=e.type,m=void 0===u?"horizontal":u,f=e.orientation,p=void 0===f?"center":f,b=e.className,d=e.children,v=e.dashed,y=s(e,["prefixCls","type","orientation","className","children","dashed"]),h=r("divider",l),O=p.length>0?"-".concat(p):p,E=c()(b,h,"".concat(h,"-").concat(m),(i(a={},"".concat(h,"-with-text").concat(O),d),i(a,"".concat(h,"-dashed"),!!v),a));return n.createElement("div",o({className:E},y,{role:"separator"}),d&&n.createElement("span",{className:"".concat(h,"-inner-text")},d))}))}},792:function(e,t,a){"use strict";a.r(t);var n=a(14),r=a(0),c=a.n(r),l=a(189),o=a.n(l),i=a(38),s=a(68),u=a(131),m=a(15),f=a(780),p=a(783),b=a(774),d=a(776),v=a(48);t.default=Object(i.b)((function(e){return{userInfo:e.user.userInfo}}))(Object(s.g)((function(e){var t=e.userInfo,a=Object(u.a)(""),l=Object(r.useState)(""),i=Object(n.a)(l,2),s=i[0],y=i[1],h=a.value.trim(),O=Object(r.useCallback)((function(){h.length<6?f.a.warn("\u5bc6\u7801\u81f3\u5c116\u4f4d"):Object(m.I)({password:o()(h)})}),[h]),E=Object(r.useCallback)((function(){s?Object(m.J)({sckey:s}):f.a.warn("\u8bf7\u6b63\u786e\u586b\u5199SCKEY")}),[s]);return Object(r.useEffect)((function(){Object(m.x)().then((function(e){var t;e.data.success&&y((null===(t=e.data.data)||void 0===t?void 0:t.serverChanSckey)||"")}))}),[]),c.a.createElement("div",{className:"account-setting"},c.a.createElement(p.a,{orientation:"left"},"\u4fee\u6539\u5bc6\u7801"),c.a.createElement(b.a,{layout:"vertical",style:{width:"300px"}},c.a.createElement(b.a.Item,{label:"\u767b\u5f55\u540d"},c.a.createElement(d.a,{defaultValue:t.loginName,readOnly:!0,disabled:!0})),c.a.createElement(b.a.Item,{label:"\u5bc6\u7801"},c.a.createElement(d.a,Object.assign({type:"password",maxLength:32},a))),c.a.createElement(b.a.Item,null,c.a.createElement(v.a,{type:"primary",onClick:O},"\u63d0\u4ea4"))),c.a.createElement(p.a,{orientation:"left"},"Server\u9171\u914d\u7f6e"),c.a.createElement(b.a,{layout:"vertical",style:{width:"300px"}},c.a.createElement(b.a.Item,{label:"SCKEY"},c.a.createElement(d.a,{maxLength:100,value:s,onChange:function(e){return y(e.target.value)}}),c.a.createElement("div",{style:{textAlign:"right",marginTop:"5px"}},c.a.createElement("a",{href:"http://sc.ftqq.com",target:"_blank",rel:"noopener noreferrer"},"\u5982\u4f55\u83b7\u53d6\uff1f"))),c.a.createElement(b.a.Item,null,c.a.createElement(v.a,{type:"primary",onClick:E},"\u63d0\u4ea4"))))})))}}]);
//# sourceMappingURL=6.ce94926c.chunk.js.map