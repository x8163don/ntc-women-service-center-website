(function(){"use strict";var t={2822:function(t,e,n){var r=n(144),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("Header"),e("div",{staticClass:"main_content"},[e("router-view")],1),e("Footer")],1)},i=[],a=function(){var t=this;t._self._c;return t._m(0)},s=[function(){var t=this,e=t._self._c;return e("header",[e("div",{staticClass:"logo"},[e("a",{attrs:{href:"/"}},[e("img",{attrs:{src:n(5982)}})])]),e("nav",[e("div",{staticClass:"navitem navitem-arrow"},[e("a",{attrs:{href:"#"}},[t._v("關於我們")]),e("ul",{staticClass:"navitem_list bg-red"},[e("li",[e("a",{attrs:{href:"/about/introduce"}},[t._v("介紹與參訪預約")])]),e("li",[e("a",{attrs:{href:"/about/booking"}},[t._v("會議室租借")])]),e("li",[e("a",{attrs:{href:"/about/traffic"}},[t._v("交通資訊")])])])]),e("div",{staticClass:"navitem navitem-arrow"},[e("a",{attrs:{href:"#"}},[t._v("活動報報")]),e("ul",{staticClass:"navitem_secondlist"},[e("li",[e("a",{attrs:{href:"/activity/exhibition"}},[t._v("主題展覽")])]),e("li",[e("a",{attrs:{href:"/activity"}},[t._v("講座與課程")])]),e("li",[e("a",{attrs:{href:"/trips"}},[t._v("菁桐女路")])])])]),e("a",{staticClass:"navitem",attrs:{href:"/gender"}},[t._v("性別平等專區")]),e("a",{staticClass:"navitem",attrs:{href:"/download"}},[t._v("下載專區")]),e("a",{staticClass:"navitem",attrs:{href:"/volunteer"}},[t._v("志工服務")])])])}],c={data(){return{links:[{to:"/about",showText:"關於我們"},{to:"/news",showText:"最新消息"},{to:"/activity",showText:"活動報報"},{to:"/growing",showText:"成長小屋"},{to:"/power",showText:"女力加油站"},{to:"/videos",showText:"性平影音"},{to:"/angel",showText:"微光天使"},{to:"/exhibitions",showText:"線上展覽"}]}}},u=c,f=n(3736),l=(0,f.Z)(u,a,s,!1,null,"103e43f6",null),d=l.exports,h=function(){var t=this;t._self._c;return t._m(0)},m=[function(){var t=this,e=t._self._c;return e("footer",[e("div",{staticClass:"info"},[e("p",[t._v("新北市婦女服務中心")]),e("br"),t._v(" 地址"),e("br"),t._v(" 新北市板橋區區運路111號3樓"),e("br"),e("br"),t._v(" 服務時間"),e("br"),t._v(" 週一至週五08:30-17:30 (週六、週日暨國定假日休館)"),e("br"),e("br"),t._v(" 聯絡資訊"),e("br"),t._v(" 電話：02-8951-9029"),e("br"),t._v(" 傳真：02-8951-9239"),e("br"),t._v(" 電子信箱：ntwsc9029@gmail.com"),e("br"),e("br"),t._v(" 指導單位：新北市政府"),e("br"),t._v(" 主辦單位：新北市婦女服務中心(社團法人新北市志願服務協會承辦)"),e("br")]),e("div",{staticClass:"webmap"},[e("ul",[e("p",[t._v("網站地圖")]),e("br"),e("li",[e("a",{attrs:{href:"/about/introduce"}},[t._v("介紹與參訪預約")])]),e("li",[e("a",{attrs:{href:"/about/booking"}},[t._v("會議室租借")])]),e("li",[e("a",{attrs:{href:"/about/traffic"}},[t._v("交通資訊")])]),e("li",[e("a",{attrs:{href:"/activity/exhibition"}},[t._v("主題展覽")])]),e("li",[e("a",{attrs:{href:"/activity"}},[t._v("講座與課程")])]),e("li",[e("a",{attrs:{href:"/gender"}},[t._v("性別平等專區")])]),e("li",[e("a",{attrs:{href:"/download"}},[t._v("下載專區")])]),e("li",[e("a",{attrs:{href:"/volunteer"}},[t._v("志工服務")])])]),e("div",{staticClass:"img_icon"},[e("a",{attrs:{href:"https://www.facebook.com/NTWSC/posts/1387567328310264"}},[e("img",{attrs:{src:n(7408)}})]),e("a",{attrs:{href:"https://www.youtube.com/channel/UCMzQZyh84q_60M9Hu3YJAqg/videos"}},[e("img",{attrs:{src:n(3083)}})])])])])}],v={},p=v,A=(0,f.Z)(p,h,m,!1,null,null,null),b=A.exports,g={components:{Header:d,Footer:b}},w=g,C=(0,f.Z)(w,o,i,!1,null,null,null),y=C.exports,k=n(8345);const _=()=>Promise.all([n.e(504),n.e(970)]).then(n.bind(n,4970)),x=()=>Promise.all([n.e(504),n.e(48)]).then(n.bind(n,3048)),E=()=>n.e(646).then(n.bind(n,3646)),P=()=>n.e(987).then(n.bind(n,6987)),L=()=>n.e(432).then(n.bind(n,3432)),I=()=>Promise.all([n.e(504),n.e(518)]).then(n.bind(n,1518)),B=()=>Promise.all([n.e(504),n.e(511)]).then(n.bind(n,8511)),O=()=>n.e(550).then(n.bind(n,3550)),S=()=>n.e(66).then(n.bind(n,3066)),T=()=>n.e(303).then(n.bind(n,6303)),G=()=>n.e(903).then(n.bind(n,8903));r.ZP.use(k.ZP);const N=[{path:"/",name:"Home",component:x},{path:"/about/introduce",name:"Introduce",component:E},{path:"/about/booking",name:"Booking",component:P},{path:"/about/traffic",name:"Traffic",component:L},{path:"/activity/exhibition",name:"Exhibitions",component:I},{path:"/activity",name:"Activities",component:B},{path:"/volunteer",name:"Volunteer",component:T},{path:"/gender",name:"GenderEquality",component:O},{path:"/download",name:"WomanPower",component:S},{path:"/post/:id",name:"PostDetail",component:_},{path:"/trips/",name:"Trips",component:G},{path:"*",name:"Home",component:x}],D=new k.ZP({mode:"history",base:"/",routes:N});var Q=D,H=n(3391);r.ZP.use(H.Z);var J=new H.Z({icons:{iconfont:"md"}});r.ZP.config.productionTip=!1,new r.ZP({router:Q,vuetify:J,render:t=>t(y)}).$mount("#app")},7408:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAhJJREFUaEPtmlFqwkAQhhvEJ5F6hPRNRMEb1J6g3qD2Br1B7QnqDao38Aa1J7CgiG9NT1ADeQuY/pMmkII62SGaUXZBl002ZL6ZnZnd7DpXSWk2m261Wn1Gs49fI72utN5ArmkYhi/r9dojGR3663Q6A1RvSoXmxHpcLBZjJ7HEF9db831Y5saBNcYQ8kGzoDlkmxDIzxn4BMeyIZCI63UO9y2INiud0iI+4GcU/6MoimP/jtKLc4LjPKG6NlHWKUB8CD4KgmDkeR4lMra02+0ZYG7ZjpkORwUBwPd2u+2vVqtPE6G0gfhIVN10CnG2ILDG3XK5JJ8wLmosAogPQMSOKylqQCB8PJGTQNAzakBoEpfHN1zXbdRqtXtEKDcLjfYA7X/XOKUUHrUoUmFYsUIkS4dXCFjI2ucYIKx/HGPpUAoIfGCI4UOr0cJKWSDGmZsjtiD7NJQnh0jCq7UIpwFrEWHm5hQrcvY8fsC9eN99yvb1ep0+iBgVdSAIBD3kmHcjCnRWByL96qkORJr1NYKIsr5GkDl8pHsJPiL68qnKIq1Wq1upVOam1qD+IpBDL8qTY+xc64AGrUXspFHTpNE6e6IBG7Vs1BKkWJsQBUrLPnJRCZH29Yw2HhWGX7/wIxwl+cik8EM1ZYDEh2pomEgX/LuGWAkgf8ecUmGSPYsh2nTwTOwzJwKhwwd08GyY7oz9AtoHw52T/ZFsAAAAAElFTkSuQmCC"},3083:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAABPVJREFUaEPtWllS20AQRSx/UCEnQPxRLBU4QcwJAifAnCDJCUJuACfAPkGcE+CcIKZYir+IEwQK/lic96Z6VK32SLaJEXKCqihkzWimX3dPT/cbRRPqWl1d3Yui6It/1O1226enp5u6D+/jOJ6fm5v7hdt51bZ9cnLSsn3L+h3ZiQAmAZgF9XwXAjb6AP4BwLWyhA7N0wNkbW1tCx2/qc4JgCz63yFrPDw8bJyfn3cqBYTCwCptWOV9yCrW/dCnCaB1Y7GP+E2FuAsu2jg7O2sGrL+PZ+/4HPNxHGd5KLOOd3ak/zGs/amfknoswheWl5fXp6amflqrBKxxfXNzEydJcsW+bJ+dnT2CUOuBiRsQdNcAThUGwb9C4D1RZLpW8Xwgtw0CEa1QO14rfLSLQWMTDNLJc97J4NHCisDPD0S0n2DCNyIN7xmlXKSCUJfQYOwllf6/leRNuhSA0y0++DH0etMu/GwWsSYOuEom3EKoGoQ+8v0gsLO2BQhXfOtdsTQgAsaGY1qjx2/zgIjLdT1AvLsJS7ZLcy0/sRWQz0PhtvJARKPcsb2f94Rb0W7QtSpjEbtWbOTJs5xfI69AJOf7631ERym9m/93FvFh1oZf7XKlht9B10hgLTDE8m/Lpyx2E0VO1UC7yx58ySBpziHecbla6a5lAWvXVPeZkoDJIdoO1R7TAYAYv9M650WAiFVSLRswPWE7kAa51AdgWBK4cD9SIJJWU3tMt5nFUtjcS2qaLUkyE+Zcfje3L0mmzXyMVmhxbD0fnnWenMYXCVnVttw0vqoC58n1bwKR0MdwWMMfi6hQpfdixsJaYxBgNdq6vb1t+nLArV0vlSw61hOa4nkxoQeY+ArAtn0QcUDGEESK09c3DgjCHcm2eAAtVLGLo6uiAI9VRWH7ybQbBXiqfi9Vrh3udUAgKSXz+Pj4WdKDXGHRXkejpon6AqMfq077GMORcqO6mMZkgGhiIG+Sp1gwL3V/BWI04CyiI5bacCboZp6Y1lyspNlDRbgci5DASyiTkHieCMyI6fw/itr4z31jnX3NaYHrTyAp56RHMPxT5txkWJcwQPbv7+/3Ly4uHAheAa7ZpfNQ5laI5dcFmR+jdCAFay9zAtBvvdpznKGB0B8hTFtcgi7mS9VL3DdSDamTL22RPCCm7M0wmSsrKzt0aeRXBz6/stXlU4Bo+j8l5Wwlp13WcFx1gHHHeyAoNhQPrI8S0jmM233HWK6Wt8xm6UAMc6J54CAQLXCRsioPZGlpKZ6enqYVGd2YV6Xuq61eeSBFEXKsgIROA0LgMinKIPuIpkwH9d8CdnGoNQL5rmXTdqL6A1s8Ox4rIHmLvSdpHAOLpOFXh+WRAoESMkxi3j5SEH6Z3vN8nlcqsOwZbItxUran8z+0ObrVAwnmUQW5lhW4jgk6Nicq2hAxtvsAADt1LXQwyra7u7tFnY/ZBQ6F8Dy/JkAOckvdAiCZTzo4kHC4Nf1RTR4QuoQFzb1iZmaGvEF6cVED6KamfHwjxqYl6qr7tiMfAp9s0FzBiCIaaEEb/PyCF1MGfnLBTy2chngVuRaau/L+FTLceHJyco/60EDknqk7PaaD/xH+FlihekuILJx3XdNBbTQEa4LABFV5dA23rtHCGYIOmuGXCiOtp58Lsa1Xgp85oRNdpIcuFQq1NKtJyWB1wcOgtv3I7Q9u4KAGeBUDlQAAAABJRU5ErkJggg=="},5982:function(t,e,n){t.exports=n.p+"img/logo.948c1c25.png"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(f--,1);var u=o();void 0!==u&&(e=u)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{48:"15d45436",66:"4762ca36",303:"fdd3e7d7",432:"89abce87",504:"b15e7016",511:"51b746ca",518:"a7c2c6b7",550:"87fdbfea",646:"2c4e3d4e",903:"fe5b6776",970:"ecf4a828",987:"5b7f9d9d"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{48:"08cc37d3",66:"4ee100b3",303:"d87232cf",432:"3904d6f1",511:"93c30c1b",518:"5b092b33",550:"905eb1a7",646:"2b7187d7",903:"84808564",987:"5e7e614d"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="ntc-women-service-center-website:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),f=0;f<u.length;f++){var l=u[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[o];var d=function(e,n){s.onerror=s.onload=null,clearTimeout(h);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=a,i.href=e,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),s=n.p+a;if(e(a,s))return o();t(r,s,null,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={48:1,66:1,303:1,432:1,511:1,518:1,550:1,646:1,903:1,987:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),s=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],s=r[1],c=r[2],u=0;if(a.some((function(e){return 0!==t[e]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var f=c(n)}for(e&&e(r);u<a.length;u++)i=a[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self["webpackChunkntc_women_service_center_website"]=self["webpackChunkntc_women_service_center_website"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2822)}));r=n.O(r)})();