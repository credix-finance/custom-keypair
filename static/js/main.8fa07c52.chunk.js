(this["webpackJsonpcredix-mvp"]=this["webpackJsonpcredix-mvp"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(5),i=n.n(r),o=(n(20),n(21),n(1)),s=function(){return Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsx)("div",{className:"logo-and-tag-line",children:Object(o.jsx)("span",{className:"tag-line",children:"CUSTOM KEYPAIR"})}),Object(o.jsx)("div",{className:"balance-wallet-container"})]})},l=(n(23),function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"footer footer-left",children:Object(o.jsx)("a",{href:"https://github.com/credix-finance/custom-keypair",target:"_blank",rel:"noreferrer",children:"GitHub"})}),Object(o.jsx)("div",{className:"footer footer-right",children:Object(o.jsx)("a",{href:"https://credix.finance",target:"_blank",rel:"noreferrer",children:"made with \u2764 by credix.finance"})})]})}),d=n(3),j=n(42),u=(n(24),function(){var e=Object(c.useState)("ab"),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)("click on 'get key'"),i=Object(d.a)(r,2),s=i[0],l=i[1],u=Object(c.useState)(""),b=Object(d.a)(u,2),h=b[0],p=b[1],O=Object(c.useState)(!1),f=Object(d.a)(O,2),x=f[0],g=f[1],m=Object(c.useState)(!1),v=Object(d.a)(m,2),y=v[0],k=v[1],w=[];return Object(o.jsxs)("div",{className:"airdrop-container",children:[Object(o.jsx)("h3",{children:"Generate a keypair for which the public key starts with letters of your choice \ud83c\udf89"}),Object(o.jsxs)("div",{className:"airdrop-wrapper",children:[Object(o.jsx)("p",{className:"red",children:"All code runs in your browser; no-one, except for you has access to the generated keypair. Feel free to fork on Github and run locally."}),Object(o.jsx)("h3",{children:"Goal word"}),Object(o.jsx)("p",{children:"Enter the word your public key should start with (the longer the word, the longer the wait)."}),Object(o.jsx)("input",{name:"goalWord",type:"text",value:n,onChange:function(e){a(e.target.value)},className:"airdrop-pk-input stake-input borrower-pk credix-button MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary balance-button"}),Object(o.jsxs)("label",{children:["Case sensitive:",Object(o.jsx)("input",{name:"caseSensitive",type:"checkbox",checked:y,onChange:function(e){k(e.target.checked)}})]}),Object(o.jsx)(j.a,{variant:"contained",className:"stake-submit MuiButton-containedPrimary balance-button credix-button sol-airdrop",onClick:function(){l("calculating..."),g(!0);for(var e=0;e<4;e++){var t=new Worker("/createKey.js");t.addEventListener("message",(function(e){l(e.data.publicKey),p(e.data.privateKey),g(!1),w.forEach((function(e,t){e.terminate()}))}),!1),t.postMessage({goalWord:n,caseSensitive:y}),w.push(t),console.log(w)}},disabled:x,children:"GET KEY"}),Object(o.jsx)("h3",{children:"Public Key:"}),Object(o.jsx)("p",{children:s}),Object(o.jsx)("a",{className:"download-keypair",href:"data:text/json;charset=utf-8,".concat(encodeURIComponent(JSON.stringify(h))),download:"id.json",disabled:x,children:"Download keypair"})]})]})}),b=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(s,{}),Object(o.jsx)(u,{}),Object(o.jsx)(l,{})]})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(b,{})}),document.getElementById("root")),h()}},[[27,1,2]]]);
//# sourceMappingURL=main.8fa07c52.chunk.js.map