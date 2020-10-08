(this["webpackJsonpspacex-stats"]=this["webpackJsonpspacex-stats"]||[]).push([[0],{19:function(e,t,a){"use strict";function n(e){return{type:"ALL_LAUNCHES",launches:e}}function c(){return function(e){return fetch("https://api.spacexdata.com/v4/launches").then((function(e){return e.json()})).then((function(t){e(n(t))}))}}function r(e){return{type:"ALL_ROCKETS",rockets:e}}function l(){return function(e){return fetch("https://api.spacexdata.com/v4/rockets").then((function(e){return e.json()})).then((function(t){e(r(t))}))}}function i(e){return{type:"CHANGE_FILTER",filter:e}}a.r(t),a.d(t,"getLaunches",(function(){return n})),a.d(t,"loadLaunches",(function(){return c})),a.d(t,"getRockets",(function(){return r})),a.d(t,"loadRockets",(function(){return l})),a.d(t,"changeFilter",(function(){return i}))},29:function(e,t,a){e.exports=a(40)},38:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),i=a(12),o=a(9),s=a(28),u=a(8),m={launches:[],rockets:[{id:null,name:"",images:[]}],filter:"all"},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;if("ALL_LAUNCHES"===t.type)return Object(u.a)(Object(u.a)({},e),{},{launches:t.launches});if("ALL_ROCKETS"===t.type){var a=[];return t.rockets.map((function(e){return a.push({id:e.id,name:e.name,images:e.flickr_images})})),Object(u.a)(Object(u.a)({},e),{},{rockets:a})}if("CHANGE_FILTER"===t.type){var n=t.filter;return Object(u.a)(Object(u.a)({},e),{},{filter:n})}return Object(u.a)({},e)},h=(a(38),a(4)),p=a(2),v=a(13),f=a(14),E=a(16),k=a(15),b=a(26),g=a.n(b),y=a(19),N=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleFilter=function(t){(0,e.props.changeFilter)(t.target.getAttribute("data-key"))},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".sidenav");g.a.Sidenav.init(e,{})}},{key:"render",value:function(){var e=this,t=this.props.rockets.map((function(t){return c.a.createElement("li",{key:t.id},c.a.createElement(h.c,{"data-testid":"".concat(t.name,"-tab"),className:"Starship"===t.name?"nav-link disabled":"nav-link",to:"/launches/".concat(t.name),onClick:e.handleFilter,"data-key":t.id},t.name))}));return c.a.createElement("div",null,c.a.createElement("nav",{className:"deep-orange accent-1"},c.a.createElement("div",{className:"nav-contain browser-default"},c.a.createElement(h.c,{"data-testid":"logo-link",className:"brand browser-default",to:"/"},"SpaceX Stats"),c.a.createElement("a",{href:"#menu","data-target":"mobile-demo",className:"sidenav-trigger"},c.a.createElement("i",{className:"material-icons"},"menu")),c.a.createElement("ul",{id:"nav-mobile",className:"hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(h.c,{"data-testid":"all-tab",className:"nav-link",to:"/launches/all",onClick:this.handleFilter,"data-key":"all",href:"#all"},"All")),t,c.a.createElement("li",null,c.a.createElement(h.c,{"data-testid":"upcoming-tab",className:"nav-link",to:"/launches/upcoming",onClick:this.handleFilter,"data-key":"upcoming",href:"#upcoming"},"Upcoming")),c.a.createElement("li",null,c.a.createElement(h.c,{"data-testid":"previous-tab",className:"nav-link",to:"/launches/previous",onClick:this.handleFilter,"data-key":"previous",href:"#previous"},"Previous"))))),c.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},c.a.createElement("li",null,c.a.createElement(h.c,{"data-testid":"all-tab",className:"nav-link",to:"/launches/all",onClick:this.handleFilter,"data-key":"all",href:"#all"},"All")),t,c.a.createElement("li",null,c.a.createElement(h.c,{"data-testid":"upcoming-tab",className:"nav-link",to:"/launches/upcoming",onClick:this.handleFilter,"data-key":"upcoming",href:"#upcoming"},"Upcoming")),c.a.createElement("li",null,c.a.createElement(h.c,{"data-testid":"previous-tab",className:"nav-link",to:"/launches/previous",onClick:this.handleFilter,"data-key":"previous",href:"#previous"},"Previous"))))}}]),a}(c.a.Component),j=Object(o.b)((function(e){return{rockets:e.rockets}}),(function(e){return{changeFilter:function(t){e(Object(y.changeFilter)(t))}}}))(Object(p.f)(N)),O=function(e){Object(E.a)(a,e);var t=Object(k.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleFilter=function(t){(0,e.props.changeFilter)(t.target.getAttribute("data-key"))},e}return Object(f.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.loadRockets)()}},{key:"render",value:function(){var e=this,t=this.props.rockets.map((function(t){return c.a.createElement(h.c,{to:"/launches/".concat(t.name),onClick:e.handleFilter,key:t.id+t.name,"data-key":t.id},c.a.createElement("div",{className:"img__wrap","data-key":t.id},c.a.createElement("img",{"data-key":t.id,className:"img__img",src:t.images[0],alt:t.name}),c.a.createElement("div",{className:"img__description","data-key":t.id},c.a.createElement("div",{className:"img__text","data-key":t.id},t.name))))}));return c.a.createElement("div",{className:"jumbotron"},c.a.createElement("div",{className:"container"},c.a.createElement("h1",{"data-testid":"home-title"},"SpaceX Stats"),c.a.createElement("p",{style:{fontSize:"1.5rem"},"data-testid":"home-details"},"View your favourite SpaceX launches, filter by your favourite rocket and relive History!"),c.a.createElement("div",{"data-testid":"home-images",className:"home-images"},t)))}}]),a}(n.Component),F=Object(o.b)((function(e){return{rockets:e.rockets}}),y)(Object(p.f)(O));var w=function(){return c.a.createElement("div",{className:"preloader-wrapper big active preloader"},c.a.createElement("div",{className:"spinner-layer spinner-red"},c.a.createElement("div",{className:"circle-clipper left"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"gap-patch"},c.a.createElement("div",{className:"circle"})),c.a.createElement("div",{className:"circle-clipper right"},c.a.createElement("div",{className:"circle"}))))},A=Object(n.lazy)((function(){return a.e(3).then(a.bind(null,45))})),C=Object(n.lazy)((function(){return Promise.all([a.e(4),a.e(5)]).then(a.bind(null,44))}));var _=function(){return c.a.createElement(h.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(j,null),c.a.createElement(p.a,{exact:!0,path:"/",component:F}),c.a.createElement(n.Suspense,{fallback:w()},c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/launches",component:A}),c.a.createElement(p.a,{path:"/:launch_id",component:C})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=Object(i.c)(d,Object(i.a)(s.a));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(o.a,{store:S},c.a.createElement(_,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.cb6e4b3b.chunk.js.map