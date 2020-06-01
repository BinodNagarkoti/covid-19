(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{103:function(e,a,t){},15:function(e,a,t){e.exports={container:"Cards_container__3bjn6","MuiCard-root":"Cards_MuiCard-root__30flU",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recoverd:"Cards_recoverd__2A92G",deaths:"Cards_deaths__Qdjzq"}},219:function(e,a,t){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},221:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(84),f=t.n(c),o=(t(103),t(248)),l=t(7),d=t.n(l),i=t(11),u=t(85),s=t(86),b=t(96),m=t(95),p=t(242),h=t(244),v=t(245),E=t(246),g=t(15),x=t.n(g),y=t(40),_=t.n(y),w=t(41),C=t.n(w),k=function(e){var a=e.data,t=a.confirmed,n=a.deaths,c=a.recovered,f=a.lastUpdate;return r.a.createElement("div",{className:x.a.container},r.a.createElement(p.a,{container:!0,justify:"center"},r.a.createElement(p.a,{item:!0,component:h.a,color:"primary",xs:12,md:3,className:C()(x.a.card,x.a.infected)},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Total Infected"),r.a.createElement(E.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:t.value,duration:2,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(f).toDateString()),r.a.createElement(E.a,{variant:"body2"}," Total Number of active case of COVID-19"))),r.a.createElement(p.a,{item:!0,component:h.a,xs:12,md:3,className:C()(x.a.card,x.a.recoverd)},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Total Recoverd"),r.a.createElement(E.a,{varariant:"h5"},r.a.createElement(_.a,{start:0,end:c.value,duration:2,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(f).toDateString()),r.a.createElement(E.a,{variant:"body2"}," Total Number of recovered from COVID-19"))),r.a.createElement(p.a,{item:!0,component:h.a,xs:12,md:3,className:C()(x.a.card,x.a.deaths)},r.a.createElement(v.a,null,r.a.createElement(E.a,{color:"textSecondary",gutterBottom:!0},"Total Deaths"),r.a.createElement(E.a,{varariant:"h5"},r.a.createElement(_.a,{start:0,end:n.value,duration:2,separator:","})),r.a.createElement(E.a,{color:"textSecondary"},new Date(f).toDateString()),r.a.createElement(E.a,{variant:"body2"}," Total Number of death caused by COVID-19")))))},O=t(38),j=t(54),D=t(223),S=t(42),N=t.n(S),B="https://covid19.mathdro.id/api",I=function(){var e=Object(i.a)(d.a.mark((function e(a){var t,n,r,c,f,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=B,a&&(t="".concat(B,"/countries/").concat(a)),e.prev=2,e.next=5,N.a.get(t);case 5:return n=e.sent,r=n.data,c=r.confirmed,f=r.recovered,o=r.deaths,l=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:f,deaths:o,lastUpdate:l});case 14:e.prev=14,e.t0=e.catch(2),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(a){return e.apply(this,arguments)}}(),M=function(){var e=Object(i.a)(d.a.mark((function e(){var a,t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(B,"/daily"));case 3:return a=e.sent,t=a.data,n=t.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(d.a.mark((function e(){var a,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.a.get("".concat(B,"/countries"));case 3:return a=e.sent,t=a.data.countries,e.abrupt("return",t.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),A=t(92),P=t.n(A),G=function(e){var a,t=0;for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t+=1,Math.random()<1/t&&(a=n));return a},V=function(){return"#".concat(Math.random().toString(16).substr(2,6))},z=function(){return function(){var e={red:{50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",hex:"#f44336",a100:"#ff8a80",a200:"#ff5252",a400:"#ff1744",a700:"#d50000"},pink:{50:"#fce4ec",100:"#f8bbd0",200:"#f48fb1",300:"#f06292",400:"#ec407a",500:"#e91e63",600:"#d81b60",700:"#c2185b",800:"#ad1457",900:"#880e4f",hex:"#e91e63",a100:"#ff80ab",a200:"#ff4081",a400:"#f50057",a700:"#c51162"},purple:{50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",hex:"#9c27b0",a100:"#ea80fc",a200:"#e040fb",a400:"#d500f9",a700:"#aa00ff"},deepPurple:{50:"#ede7f6",100:"#d1c4e9",200:"#b39ddb",300:"#9575cd",400:"#7e57c2",500:"#673ab7",600:"#5e35b1",700:"#512da8",800:"#4527a0",900:"#311b92",hex:"#673ab7",a100:"#b388ff",a200:"#7c4dff",a400:"#651fff",a700:"#6200ea"},indigo:{50:"#e8eaf6",100:"#c5cae9",200:"#9fa8da",300:"#7986cb",400:"#5c6bc0",500:"#3f51b5",600:"#3949ab",700:"#303f9f",800:"#283593",900:"#1a237e",hex:"#3f51b5",a100:"#8c9eff",a200:"#536dfe",a400:"#3d5afe",a700:"#304ffe"},blue:{50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",hex:"#2196f3",a100:"#82b1ff",a200:"#448aff",a400:"#2979ff",a700:"#2962ff"},lightBlue:{50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",hex:"#03a9f4",a100:"#80d8ff",a200:"#40c4ff",a400:"#00b0ff",a700:"#0091ea"},cyan:{50:"#e0f7fa",100:"#b2ebf2",200:"#80deea",300:"#4dd0e1",400:"#26c6da",500:"#00bcd4",600:"#00acc1",700:"#0097a7",800:"#00838f",900:"#006064",hex:"#00bcd4",a100:"#84ffff",a200:"#18ffff",a400:"#00e5ff",a700:"#00b8d4"},teal:{50:"#e0f2f1",100:"#b2dfdb",200:"#80cbc4",300:"#4db6ac",400:"#26a69a",500:"#009688",600:"#00897b",700:"#00796b",800:"#00695c",900:"#004d40",hex:"#009688",a100:"#a7ffeb",a200:"#64ffda",a400:"#1de9b6",a700:"#00bfa5"},green:{50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",hex:"#4caf50",a100:"#b9f6ca",a200:"#69f0ae",a400:"#00e676",a700:"#00c853"},lightGreen:{50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",hex:"#8bc34a",a100:"#ccff90",a200:"#b2ff59",a400:"#76ff03",a700:"#64dd17"},lime:{50:"#f9fbe7",100:"#f0f4c3",200:"#e6ee9c",300:"#dce775",400:"#d4e157",500:"#cddc39",600:"#c0ca33",700:"#afb42b",800:"#9e9d24",900:"#827717",hex:"#cddc39",a100:"#f4ff81",a200:"#eeff41",a400:"#c6ff00",a700:"#aeea00"},yellow:{50:"#fffde7",100:"#fff9c4",200:"#fff59d",300:"#fff176",400:"#ffee58",500:"#ffeb3b",600:"#fdd835",700:"#fbc02d",800:"#f9a825",900:"#f57f17",hex:"#ffeb3b",a100:"#ffff8d",a200:"#ffff00",a400:"#ffea00",a700:"#ffd600"},amber:{50:"#fff8e1",100:"#ffecb3",200:"#ffe082",300:"#ffd54f",400:"#ffca28",500:"#ffc107",600:"#ffb300",700:"#ffa000",800:"#ff8f00",900:"#ff6f00",hex:"#ffc107",a100:"#ffe57f",a200:"#ffd740",a400:"#ffc400",a700:"#ffab00"},orange:{50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",hex:"#ff9800",a100:"#ffd180",a200:"#ffab40",a400:"#ff9100",a700:"#ff6d00"},deepOrange:{50:"#fbe9e7",100:"#ffccbc",200:"#ffab91",300:"#ff8a65",400:"#ff7043",500:"#ff5722",600:"#f4511e",700:"#e64a19",800:"#d84315",900:"#bf360c",hex:"#ff5722",a100:"#ff9e80",a200:"#ff6e40",a400:"#ff3d00",a700:"#dd2c00"},brown:{50:"#efebe9",100:"#d7ccc8",200:"#bcaaa4",300:"#a1887f",400:"#8d6e63",500:"#795548",600:"#6d4c41",700:"#5d4037",800:"#4e342e",900:"#3e2723",hex:"#795548"},grey:{50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",hex:"#9e9e9e"},blueGrey:{50:"#eceff1",100:"#cfd8dc",200:"#b0bec5",300:"#90a4ae",400:"#78909c",500:"#607d8b",600:"#546e7a",700:"#455a64",800:"#37474f",900:"#263238",hex:"#607d8b"},black:{hex:"#000000"},white:{hex:"#ffffff"}},a=e[G(e)];return a[G(a)]}()},F=function(e){var a=e.data,t=a.recovered,c=a.deaths,f=a.confirmed,o=e.country,l=Object(n.useState)([]),u=Object(O.a)(l,2),s=u[0],b=u[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,M();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=s.length?r.a.createElement(j.b,{data:{labels:s.map((function(e){return e.date})),datasets:[{data:s.map((function(e){return e.confirmed})),label:"Infected",borderColor:"".concat(V()),fill:!0},{data:s.map((function(e){return e.deaths})),label:"Deaths",borderColor:"".concat(V()),backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,p=f?r.a.createElement(j.a,{data:{labels:["infected","recovered","deaths"],datasets:[{label:"People",backgroundColor:["rgba(0,0,255,0.5)","rgba(0,255,0,0.5)","rgba(255,0,0,0.5)"],data:[f.value,t.value,c.value]}]},options:{legends:{display:!1},title:{display:!0,text:"Current State in ".concat(o)}}}):null;return r.a.createElement("div",{className:P.a.container},r.a.createElement(D.a,{style:{width:"100vw"}},o?p:m))},U=t(251),J=t(249),Q=t(250),W=t(247),Z=(t(219),Object(W.a)((function(e){return{formControl:{margin:e.spacing(1),marginBottom:50,minWidth:220},selectEmpty:{marginTop:e.spacing(2)}}}))),q=function(e){var a=e.handleCountryChange,t=Z(),c=Object(n.useState)([]),f=Object(O.a)(c,2),o=f[0],l=f[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,T();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(U.a,{className:t.formControl},r.a.createElement(Q.a,{shrink:!0,htmlFor:"selectCountry-placeholder"},"select Country"),r.a.createElement(J.a,{defaultValue:"",inputProps:{name:"select Country",id:"selectCountry-placeholder"},onChange:function(e){return a(e.target.value)}},r.a.createElement("option",{value:""}," Global "),o.map((function(e){return r.a.createElement("option",{key:e,value:e}," ",e," ")}))))},L=t(26),R=t(0),X=t(55),Y=t.n(X),$=function(){return r.a.createElement("div",{className:Y.a.container},r.a.createElement(E.a,null," ","By ",r.a.createElement("a",{href:"https://github.com/BinodNagarkoti"},"Binod Nagarkoti")),r.a.createElement(E.a,{className:Y.a.social_link},r.a.createElement(R.b.Provider,{value:{color:"#385898",size:"25px"}},r.a.createElement("a",{href:"https://www.facebook.com/Binodb/",name:"facebook"},r.a.createElement(L.a,null))),r.a.createElement(R.b.Provider,{value:{color:"rgb(29, 161, 242)",size:"25px"}},r.a.createElement("a",{href:"https://twitter.com/binod1365",name:"Twitter"},r.a.createElement(L.d,null))),r.a.createElement(R.b.Provider,{value:{color:"#003f67",size:"25px"}},r.a.createElement("a",{href:"https://www.linkedin.com/in/binod-nagarkoti-496245128?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0rrxJXsqT0SQGAfwBMDI7A%3D%3D",name:"LinkedIn"},r.a.createElement(L.c,null))),r.a.createElement(R.b.Provider,{value:{color:"black",size:"25px"}},r.a.createElement("a",{href:"https://github.com/BinodNagarkoti",name:"Github"},r.a.createElement(L.b,null)))),r.a.createElement(E.a,{color:"textSecondary"}," May 31 2020 "))},H=t(56),K=t.n(H),ee=t(93),ae=t.n(ee),te=t(220),ne=function(e){Object(b.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).handleCountryChange=function(){var e=Object(i.a)(d.a.mark((function e(a){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(a);case 2:t=e.sent,n.setState({data:t,country:a});case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),n.state={data:{},country:"",color:""},n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I();case 2:a=e.sent,this.setState({data:a,color:"".concat(z())}),document.body.style.backgroundColor="".concat(z());case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,a=e.data,t=e.country;return a.confirmed?r.a.createElement("div",{className:K.a.container},r.a.createElement("img",{className:K.a.image,src:ae.a,alt:"COVID-19"}),r.a.createElement(k,{data:a}),r.a.createElement(q,{handleCountryChange:this.handleCountryChange}),r.a.createElement(F,{data:a,country:t}),r.a.createElement($,null)):r.a.createElement("div",null,r.a.createElement("h1",{style:{textAlign:"center"}},"Fetching COVID-19 Data"),r.a.createElement(te,null))}}]),t}(n.Component),re=t(94),ce=Object(re.a)({palette:{type:"light"}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));f.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{theme:ce},r.a.createElement(ne,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},55:function(e,a,t){e.exports={container:"Footer_container__st7Zp",app:"Footer_app__2b3lT",social_link:"Footer_social_link__28GMC"}},56:function(e,a,t){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},92:function(e,a,t){e.exports={container:"Charts_container__1mZfu"}},93:function(e,a,t){e.exports=t.p+"static/media/covid-19.6ce9074d.png"},98:function(e,a,t){e.exports=t(221)}},[[98,1,2]]]);
//# sourceMappingURL=main.255f82f2.chunk.js.map