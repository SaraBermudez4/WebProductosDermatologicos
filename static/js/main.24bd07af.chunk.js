(this["webpackJsonpprodutos-dermatologicos"]=this["webpackJsonpprodutos-dermatologicos"]||[]).push([[0],{35:function(e,c,a){"use strict";a.r(c);var t=a(0),r=a.n(t),l=a(6),s=a.n(l),i=a(8),o=a(1),n=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:"TuPiel"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#pedirAhora",children:"Pedir ahora"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link",href:"#",children:"Nosotros"})})]})})]})})})},d=a(38),j=a.p+"static/media/banner1.4340ef5b.jpg",b=a.p+"static/media/banner2.c66435af.jpg",m=a.p+"static/media/banner3.6ff9caf6.jpg",O=a.p+"static/media/banner4.86ef8420.jpg",h=a.p+"static/media/banner5.c374c71b.jpg",x=function(){return Object(o.jsxs)(d.a,{children:[Object(o.jsx)(d.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100",src:j,alt:"First slide"})}),Object(o.jsx)(d.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100",src:b,alt:"Second slide"})}),Object(o.jsx)(d.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100",src:m,alt:"Third slide"})}),Object(o.jsx)(d.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100",src:O,alt:"First slide"})}),Object(o.jsx)(d.a.Item,{children:Object(o.jsx)("img",{className:"d-block w-100",src:h,alt:"First slide"})})]})},u=a(13),p="PEDIR_DOMICILIO",v="CANCELAR_DOMICILIO",g="VALIDAR_DOMICILIO",N=function(e){return{type:g,payload:e}},f=a(12),y=a(5),I=a(24),C=a.n(I),w=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=Object(t.useState)(e),a=Object(u.a)(c,2),r=a[0],l=a[1];return[r,function(e){var c=e.target;l(Object(y.a)(Object(y.a)({},r),{},Object(f.a)({},c.name,c.value)))},function(){l(e)}]}({nombre:"",apellido:[],correo:[],direccion:[],productos:[]}),c=Object(u.a)(e,3),a=c[0],r=c[1],l=c[2],s=a.nombre,n=a.apellido,d=a.correo,j=a.direccion,b=a.productos,m=Object(i.b)(),O=function(e){m(function(e){return{type:p,payload:e}}(e))},h=function(e){m(N(e))},x=Object(i.c)((function(e){return e.error}));return Object(o.jsx)("div",{className:"card mt-5",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l(),""!==s.trim()&&""!==n.trim()&&""!==d.trim()&&""!==j.trim()&&""!==b.trim()?(h(!1),O({id:C()(),nombre:s,apellido:n,correo:d,direccion:j,productos:b})):h(!0)},children:[Object(o.jsx)("h1",{children:" Pedir productos"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"form-group row mt-3",children:[Object(o.jsx)("label",{className:"col-sm-4 col-lg-2 col-form-label",children:"Nombre"}),Object(o.jsx)("div",{className:"form-group col-sm-8 col-lg-4",children:Object(o.jsx)("input",{type:"text",name:"nombre",className:"form-control",autoComplete:"off",value:s,onChange:r})}),Object(o.jsx)("label",{className:"col-sm-4 col-lg-2 col-form-label",children:"Apellido"}),Object(o.jsx)("div",{className:"form-group col-sm-8 col-lg-4",children:Object(o.jsx)("input",{type:"text",name:"apellido",className:"form-control",autoComplete:"off",value:n,onChange:r})})]}),Object(o.jsxs)("div",{className:"orm-group row",children:[Object(o.jsx)("label",{className:"col-sm-4 col-lg-3 col-form-label",children:"Correo"}),Object(o.jsx)("div",{className:"mb-4 mb-lg-0",children:Object(o.jsx)("input",{type:"text",name:"correo",className:"form-control",placeholder:"Tu correo",autoComplete:"off",value:d,onChange:r})})]}),Object(o.jsxs)("div",{className:"orm-group row",children:[Object(o.jsx)("label",{className:"col-sm-4 col-lg-3 col-form-label",children:"Direcci\xf3n"}),Object(o.jsx)("div",{className:"mb-4 mb-lg-0",children:Object(o.jsx)("input",{type:"text",name:"direccion",className:"form-control",placeholder:"Tu direcci\xf3n",autoComplete:"off",value:j,onChange:r})})]}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("label",{className:"col-sm-4 col-lg-3 col-form-label",children:"Productos"}),Object(o.jsx)("div",{className:"form-group",children:Object(o.jsx)("textarea",{name:"productos",className:"form-control",autoComplete:"off",value:b,onChange:r})})]}),Object(o.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Guardar"})]}),x.error?Object(o.jsx)("div",{className:"alert alert-danger text-center p2",children:"Todos los campos son obligatorios"}):null]})})},_=function(){var e=Object(i.b)(),c=Object(i.c)((function(e){return e.domicilios}));return Object(o.jsx)("div",{className:"card mt-5",children:Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("h2",{className:"card-title text-center",children:"Pedidos"}),Object(o.jsx)("div",{className:"lista-citas",children:Object(o.jsxs)("table",{className:"table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{scope:"col",children:"Nombre"}),Object(o.jsx)("th",{scope:"col",children:"Apellido"}),Object(o.jsx)("th",{scope:"col",children:"Correo"}),Object(o.jsx)("th",{scope:"col",children:"Direcci\xf3n"}),Object(o.jsx)("th",{scope:"col",children:"Productos"})]})}),Object(o.jsx)("tbody",{children:c.domicilios.map((function(c){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:c.nombre}),Object(o.jsx)("td",{children:c.apellido}),Object(o.jsx)("td",{children:c.correo}),Object(o.jsx)("td",{children:c.direccion}),Object(o.jsx)("td",{children:c.productos}),Object(o.jsx)("td",{children:Object(o.jsx)("button",{className:"btn btn-danger",onClick:function(){var a;e((a=c.id,{type:v,payload:a}))},children:"Borrar \xd7"})})]},c.id)}))})]})})]})})},S=a(14),k=a(25),D={domicilios:[]},T={error:!1},A=Object(S.a)({domicilios:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case p:return Object(y.a)(Object(y.a)({},e),{},{domicilios:[].concat(Object(k.a)(e.domicilios),[c.payload])});case v:return Object(y.a)(Object(y.a)({},e),{},{domicilios:e.domicilios.filter((function(e){return e.id!==c.payload}))});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case g:return Object(y.a)(Object(y.a)({},e),{},{error:c.payload});default:return e}}}),E=function(){var e=localStorage.getItem("domicilios");return null===e?[]:JSON.parse(e)}(),P=Object(S.b)(A,E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());P.subscribe((function(){!function(e){var c=JSON.stringify(e.domicilios);localStorage.setItem("domicilios",c)}({domicilios:P.getState().domicilios})}));var L=P,R=function(){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light bottom",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:"TuPiel"}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link disabled","aria-current":"page",href:"#",children:"Hecho por Sara Bermudez Alvarez"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link disabled",href:"#pedirAhora",children:"Copyright 2021"})})]})})]})})};var J=function(){return Object(o.jsx)(i.a,{store:L,children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(n,{}),Object(o.jsx)(x,{}),Object(o.jsx)("div",{className:"container text-center",children:Object(o.jsxs)("div",{className:"row mt-3",children:[Object(o.jsx)("div",{className:"col",id:"pedirAhora",children:Object(o.jsx)(w,{})}),Object(o.jsx)("div",{className:"col",children:Object(o.jsx)(_,{})})]})}),Object(o.jsx)(R,{})]})})};a(34);s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(J,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.24bd07af.chunk.js.map