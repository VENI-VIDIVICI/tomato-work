(this["webpackJsonptomato-work"]=this["webpackJsonptomato-work"]||[]).push([[5],{779:function(e,t,a){},782:function(e,t,a){"use strict";a.r(t);var n=a(20),c=a(0),r=a.n(c),l=(a(779),a(11)),u=a.n(l),o=a(111),s=a(57),i=a(15);t.default=function(){var e=Object(c.useRef)(null),t=Object(c.useState)([]),a=Object(n.a)(t,2),l=a[0],d=a[1],b=Object(c.useState)([{title:"",dataIndex:"hasRead",width:12,className:"unread-row",render:function(e){return!e&&r.a.createElement("i",{className:"unread-dot"},"\u25cf")}},{title:"\u6807\u9898\u5185\u5bb9",dataIndex:"content"},{title:"\u63d0\u4ea4\u65f6\u95f4",dataIndex:"createdAt",width:150},{title:"\u7c7b\u578b",dataIndex:"title",width:130}]),f=Object(n.a)(b,1)[0],m=Object(c.useCallback)((function(e){return Object(i.p)(e).then((function(e){return e.data.success&&e.data.data.rows.forEach((function(e){e.createdAt=u()(e.createdAt).format("YYYY-MM-DD HH:mm")})),e}))}),[]),h=Object(c.useCallback)((function(t){var a=l.join();2===t&&(a="all"),Object(i.D)(a).then((function(t){t.data.success&&(d([]),e.current.getTableData())}))}),[l,e,d]);return Object(c.useEffect)((function(){e.current.getTableData()}),[e]),r.a.createElement("div",{className:"inner-message"},r.a.createElement(o.a,{ref:e,getTableData:m,columns:f,rowSelection:{selectedRowKeys:l,onChange:function(e){return d(e)}}}),r.a.createElement("div",{className:"action-group"},r.a.createElement(s.a,{onClick:h.bind(null,1),disabled:l.length<=0},"\u6807\u8bb0\u5df2\u8bfb"),r.a.createElement(s.a,{onClick:h.bind(null,2)},"\u5168\u90e8\u5df2\u8bfb")))}}}]);
//# sourceMappingURL=5.c977ec5c.chunk.js.map