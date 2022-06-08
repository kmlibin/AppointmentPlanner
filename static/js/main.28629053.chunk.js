(this["webpackJsonpreact-challenge"]=this["webpackJsonpreact-challenge"]||[]).push([[0],{31:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(19),i=n.n(a),s=n(17),j=n(4),r=n(11),o=n(2),u=n(1),l=function(t){var e=t.contacts,n=t.onChange;return Object(u.jsxs)("select",{onChange:n,children:[Object(u.jsx)("option",{value:"",children:"Select a contact"}),e.map((function(t){return Object(u.jsx)("option",{value:t.name,children:t.name},t.phone)}))]})},b=function(t){var e=t.contacts,n=t.title,c=t.setTitle,a=t.contact,i=t.setContact,s=t.date,r=t.setDate,o=t.time,b=t.setTime,O=t.handleSubmit;return Object(u.jsxs)("form",{onSubmit:O,children:[Object(u.jsx)("input",{type:"text",value:n,onChange:function(t){return c(t.target.value)},placeholder:"Type of Appointment"}),Object(u.jsx)("input",{type:"date",value:s,min:function(){var t=(new Date).toLocaleDateString("en-US").split("/"),e=Object(j.a)(t,3),n=e[0],c=e[1],a=e[2];return"".concat(a,"-").concat(n.padStart(2,"0"),"-").concat(c.padStart(2,"0"))}(),onChange:function(t){return r(t.target.value)}}),Object(u.jsx)("input",{type:"time",value:o,onChange:function(t){return b(t.target.value)}}),Object(u.jsx)(l,{contacts:e,value:a,onChange:function(t){return i(t.target.value)}}),Object(u.jsx)("input",{type:"submit"})]})},O=function(t){var e=t.value,n=Object.values(e);return Object(u.jsx)("div",{className:"tile-container",children:n.map((function(t,e){return 0===e?Object(u.jsx)("p",{className:"tile-title",children:t},e):Object(u.jsx)("p",{className:"tile",children:t},e)}))})},d=function(t){var e=t.objArr;return Object(u.jsx)("div",{children:e.map((function(t,e){return Object(u.jsx)(O,{value:t},e)}))})},h=function(t){var e=t.appointments,n=t.contacts,a=t.addAppointment,i=Object(c.useState)(""),s=Object(j.a)(i,2),r=s[0],o=s[1],l=Object(c.useState)(""),O=Object(j.a)(l,2),h=O[0],p=O[1],m=Object(c.useState)(""),x=Object(j.a)(m,2),v=x[0],f=x[1],g=Object(c.useState)(""),S=Object(j.a)(g,2),C=S[0],A=S[1];return Object(u.jsxs)("div",{children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Add Appointment"}),Object(u.jsx)(b,{title:r,setTitle:o,contact:h,setContact:p,date:v,setDate:f,time:C,setTime:A,handleSubmit:function(t){t.preventDefault(),a(r,h,v,C),o(""),p(""),f(""),A("")},contacts:n})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Appointments"}),Object(u.jsx)(d,{objArr:e})]})]})},p=function(t){var e=t.name,n=t.setName,c=t.phone,a=t.setPhone,i=t.email,s=t.setEmail,j=t.handleSubmit;return Object(u.jsxs)("form",{onSubmit:j,children:[Object(u.jsx)("input",{type:"text",value:e,onChange:function(t){n(t.target.value)},required:!0,placeholder:"Client Name"}),Object(u.jsx)("input",{type:"tel",value:c,pattern:"^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$",onChange:function(t){a(t.target.value)},placeholder:"Phone Number"}),Object(u.jsx)("input",{type:"email",value:i,onChange:function(t){s(t.target.value)},required:!0,placeholder:"Client Email"}),Object(u.jsx)("input",{type:"submit"})]})},m=function(t){var e=t.contacts,n=t.addContact,a=Object(c.useState)(""),i=Object(j.a)(a,2),s=i[0],r=i[1],o=Object(c.useState)(""),l=Object(j.a)(o,2),b=l[0],O=l[1],h=Object(c.useState)(""),m=Object(j.a)(h,2),x=m[0],v=m[1],f=Object(c.useState)(!1),g=Object(j.a)(f,2),S=g[0],C=g[1];Object(c.useEffect)((function(){void 0!==e.find((function(t){return t.name===s}))?C(!0):C(!1)}),[s,e,S]);return Object(u.jsxs)("div",{children:[Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Add Contact"}),Object(u.jsx)(p,{name:s,phone:b,email:x,setName:r,setPhone:O,setEmail:v,handleSubmit:function(t){t.preventDefault(),S||(n(s,b,x),r(""),O(""),v(""))}})]}),Object(u.jsx)("hr",{}),Object(u.jsxs)("section",{children:[Object(u.jsx)("h2",{children:"Contacts"}),Object(u.jsx)(d,{objArr:e})]})]})};var x=function(){var t=Object(c.useState)([]),e=Object(j.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)([]),l=Object(j.a)(i,2),b=l[0],O=l[1],d="/contacts",p="/appointments";return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("nav",{children:[Object(u.jsx)(r.b,{to:d,activeClassName:"active",children:"Contacts"}),Object(u.jsx)(r.b,{to:p,activeClassName:"active",children:"Appointments"})]}),Object(u.jsx)("main",{children:Object(u.jsxs)(o.d,{children:[Object(u.jsx)(o.b,{exact:!0,path:"/",children:Object(u.jsx)(o.a,{to:d})}),Object(u.jsx)(o.b,{path:d,children:Object(u.jsx)(m,{addContact:function(t,e,n){a((function(c){return[].concat(Object(s.a)(c),[{name:t,phone:e,email:n}])}))},contacts:n})}),Object(u.jsx)(o.b,{path:p,children:Object(u.jsx)(h,{addAppointment:function(t,e,n,c){O((function(a){return[].concat(Object(s.a)(a),[{title:t,contact:e,date:n,time:c}])}))},appointments:b,contacts:n})})]})})]})};i.a.render(Object(u.jsx)(r.a,{children:Object(u.jsx)(x,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.28629053.chunk.js.map