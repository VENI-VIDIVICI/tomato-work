(this["webpackJsonptomato-work"]=this["webpackJsonptomato-work"]||[]).push([[6],{776:function(e,t,a){"use strict";var n=a(1),r=a.n(n),c=a(3),l=a.n(c),o=a(0),i=a(2),s=a.n(i),u=a(62),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){return o.createElement(u.a,null,(function(t){var a,n=t.getPrefixCls,c=t.direction,i=e.prefixCls,u=e.type,p=void 0===u?"horizontal":u,f=e.orientation,d=void 0===f?"center":f,b=e.className,h=e.children,y=e.dashed,E=e.plain,v=m(e,["prefixCls","type","orientation","className","children","dashed","plain"]),O=n("divider",i),g=d.length>0?"-".concat(d):d,j=!!h,w=s()(b,O,"".concat(O,"-").concat(p),(a={},l()(a,"".concat(O,"-with-text"),j),l()(a,"".concat(O,"-with-text").concat(g),j),l()(a,"".concat(O,"-dashed"),!!y),l()(a,"".concat(O,"-plain"),!!E),l()(a,"".concat(O,"-rtl"),"rtl"===c),a));return o.createElement("div",r()({className:w},v,{role:"separator"}),h&&o.createElement("span",{className:"".concat(O,"-inner-text")},h))}))}},783:function(e,t,a){"use strict";a.r(t);var n=a(20),r=a(0),c=a.n(r),l=a(197),o=a.n(l),i=a(58),s=a(51),u=a(149),m=a(15),p=a(174),f=a(776),d=a(744),b=a(746),h=a(57);t.default=Object(i.b)((function(e){return{userInfo:e.user.userInfo}}))(Object(s.g)((function(e){var t=e.userInfo,a=Object(u.a)(""),l=Object(r.useState)(""),i=Object(n.a)(l,2),s=i[0],y=i[1],E=a.value.trim(),v=Object(r.useCallback)((function(){E.length<6?p.b.warn("\u5bc6\u7801\u81f3\u5c116\u4f4d"):Object(m.I)({password:o()(E)})}),[E]),O=Object(r.useCallback)((function(){s?Object(m.J)({sckey:s}):p.b.warn("\u8bf7\u6b63\u786e\u586b\u5199SCKEY")}),[s]);return Object(r.useEffect)((function(){Object(m.x)().then((function(e){var t;e.data.success&&y((null===(t=e.data.data)||void 0===t?void 0:t.serverChanSckey)||"")}))}),[]),c.a.createElement("div",{className:"account-setting"},c.a.createElement(f.a,{orientation:"left"},"\u4fee\u6539\u5bc6\u7801"),c.a.createElement(d.a,{layout:"vertical",style:{width:"300px"}},c.a.createElement(d.a.Item,{label:"\u767b\u5f55\u540d"},c.a.createElement(b.a,{defaultValue:t.loginName,readOnly:!0,disabled:!0})),c.a.createElement(d.a.Item,{label:"\u5bc6\u7801"},c.a.createElement(b.a,Object.assign({type:"password",maxLength:32},a))),c.a.createElement(d.a.Item,null,c.a.createElement(h.a,{type:"primary",onClick:v},"\u63d0\u4ea4"))),c.a.createElement(f.a,{orientation:"left"},"Server\u9171\u914d\u7f6e"),c.a.createElement(d.a,{layout:"vertical",style:{width:"300px"}},c.a.createElement(d.a.Item,{label:"SCKEY"},c.a.createElement(b.a,{maxLength:100,value:s,onChange:function(e){return y(e.target.value)}}),c.a.createElement("div",{style:{textAlign:"right",marginTop:"5px"}},c.a.createElement("a",{href:"http://sc.ftqq.com",target:"_blank",rel:"noopener noreferrer"},"\u5982\u4f55\u83b7\u53d6\uff1f"))),c.a.createElement(d.a.Item,null,c.a.createElement(h.a,{type:"primary",onClick:O},"\u63d0\u4ea4"))))})))}}]);
//# sourceMappingURL=6.e0e74ee6.chunk.js.map