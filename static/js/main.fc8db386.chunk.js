(window["webpackJsonpscoutbase-code-challenge"]=window["webpackJsonpscoutbase-code-challenge"]||[]).push([[0],{39:function(e,n,t){e.exports=t(56)},44:function(e,n,t){},45:function(e,n,t){},46:function(e,n,t){},49:function(e,n,t){},50:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(32),c=t.n(r),o=(t(44),t(23)),i=t(14),u=t(15),s=t(8);t(45);function m(){return l.a.createElement("div",{id:"home-page"},l.a.createElement("h2",null,"Front-end task of Code Challenge for Scoutbase"),l.a.createElement("p",null,"This task is for demonstrating your understanding of HTML, CSS, Javascript, React & related libraries."),l.a.createElement("p",null,"If you\u2019re doing the front-end only, you must use the https://countries.trevorblades.com endpoint for GraphQL API."),l.a.createElement("p",null,"Preferred libraries:"),l.a.createElement("ol",null,l.a.createElement("li",null,"`styled-components` for styling"),l.a.createElement("li",null,"`apollo-client` for consuming GraphQL API"),l.a.createElement("li",null,"`react-router` or any alternative to implement routing")),l.a.createElement("p",null,"Instructions:"),l.a.createElement("ol",null,l.a.createElement("li",null,"Create a `create-react-app` repo."),l.a.createElement("li",null,"Add a router with routes:",l.a.createElement("ul",null,l.a.createElement("li",null,"`/` - for displaying basic links for the other routes"),l.a.createElement("li",null,"`/countries` - for requesting GraphQL API and rendering the list"),l.a.createElement("li",null,"`/countries/(:code)` - for requesting GraphQL API and rendering the properties of a continent"))),l.a.createElement("li",null,"Design is totally by you."),l.a.createElement("li",null,"Countries list at `/countries` must contain the list of countries and the languages spoken in that country. Both in English and native languages. It should also contain the continent it is located in."),l.a.createElement("li",null,"`/countries/(:code)` must render the currency and a area code (phone) of that country."),l.a.createElement("li",null,"Routes must be fully loadable with a direct link. `/countries/CI` must render the page for Ivory Coast, for example."),l.a.createElement("li",null,"End.")))}var d=t(20),E=t(17);t(46);function h(){var e=Object(d.a)(["\n    {\n        countries {\n            name\n            code\n            continent {\n                name\n            }\n            languages {\n                code\n                native\n                name\n            }\n        }\n    }\n    "]);return h=function(){return e},e}function p(e){var n=e.history,t=Object(E.a)(Object(u.b)(h())),r=t.loading,c=t.error,o=t.data,i=c?[]:o.countries;return l.a.createElement("div",{id:"country-list"},r||c?l.a.createElement("div",null,"Loading..."):l.a.createElement(a.Fragment,null,i.map(function(e){return l.a.createElement("div",{className:"country",onClick:function(t){return a=e.code,n.push("/countries/".concat(a));var a}},l.a.createElement("div",{className:"code"},e.code),l.a.createElement("div",{className:"name"},e.name," (",e.continent.name,")"),l.a.createElement("div",{className:"languages"},e.languages.map(function(e){return"".concat(e.native," (").concat(e.name,")")}).join(", ")))})))}t(49);function v(){var e=Object(d.a)(['\n    {\n        country(code: "','") {\n            name\n            code\n            phone\n            currency\n        }\n    }\n  ']);return v=function(){return e},e}function f(e){var n=e.match,t=Object(E.a)(Object(u.b)(v(),n.params.code)),r=t.loading,c=t.error,o=t.data,i=c?null:o.country;return l.a.createElement("div",{id:"country-details"},r||c?l.a.createElement("div",null,"Loading..."):l.a.createElement(a.Fragment,null,l.a.createElement("h2",null,i.name),l.a.createElement("div",{className:"currency"},l.a.createElement("div",{className:"label"},"Currency"),i.currency||"None"),l.a.createElement("div",{className:"phone"},l.a.createElement("div",{className:"label"},"Phone code"),"+",i.phone||"000")))}t(50);var g=new u.a({uri:"https://countries.trevorblades.com"});var y=function(){return l.a.createElement(o.a,null,l.a.createElement(s.a,{client:g},l.a.createElement("div",{className:"App"},l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{exact:!0,to:"/",activeClassName:"active"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{exact:!0,to:"/countries",activeClassName:"active"},"Countries list"))))),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:"/",component:m}),l.a.createElement(i.a,{path:"/countries/:code",component:f}),l.a.createElement(i.a,{path:"/countries",component:p}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[39,1,2]]]);
//# sourceMappingURL=main.fc8db386.chunk.js.map