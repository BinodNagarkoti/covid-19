(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{119:function(e,t,a){e.exports={container:"Charts_container__1mZfu"}},120:function(e,t,a){e.exports=a.p+"static/media/covid-19.6ce9074d.png"},137:function(e,t,a){e.exports=a(259)},142:function(e,t,a){},257:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},259:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(8),o=a.n(c),i=(a(142),a(296)),l=a(80),u=a(299),s=a(297),d=a(11),m=a.n(d),p=a(123),f=a(14),v=a(111),b=a(112),h=a(124),E=a(122),g=a(288),x=a(292),y=a(126),_=a(35),w=a.n(_),C=a(36),k=a.n(C),O=a(29),j=a.n(O),D=function(e){var t=e.data,a=t.confirmed,n=t.deaths,c=t.recovered,o=t.updated_at,i=t.active,l=t.critical;return r.a.createElement("div",{className:j.a.container},r.a.createElement(g.a,{container:!0,justify:"center"},r.a.createElement(g.a,{item:!0,color:"primary",xs:12,md:2,className:k()(j.a.card)},r.a.createElement(x.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Confirmed"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(w.a,{start:0,end:null!==a&&void 0!==a?a:0,duration:2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"}," Total Number of active case of COVID-19"))),r.a.createElement(g.a,{item:!0,xs:12,md:2,className:k()(j.a.card)},r.a.createElement(x.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Recoverd"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(w.a,{start:0,end:null!==c&&void 0!==c?c:0,duration:2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"}," Total Number of recovered from COVID-19"))),r.a.createElement(g.a,{item:!0,xs:12,md:2,className:k()(j.a.card)},r.a.createElement(x.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Critical"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(w.a,{start:0,end:null!==l&&void 0!==l?l:0,duration:2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"}," Total Number of Critical caused by COVID-19"))),r.a.createElement(g.a,{item:!0,xs:12,md:2,className:k()(j.a.card)},r.a.createElement(x.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(w.a,{start:0,end:null!==n&&void 0!==n?n:0,duration:2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"}," Total Number of death caused by COVID-19"))),r.a.createElement(g.a,{item:!0,color:"primary",xs:12,md:2,className:k()(j.a.card)},r.a.createElement(x.a,null,r.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},"Active"),r.a.createElement(y.a,{variant:"h5"},r.a.createElement(w.a,{start:0,end:null!==i&&void 0!==i?i:0,duration:2,separator:","})),r.a.createElement(y.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(y.a,{variant:"body2"}," Total Number of active case of COVID-19")))))},N=a(46),S=a(117),B=a(293),I=a(38),A=a.n(I),M=a(39),T="https://corona-api.com/",P=T,V=function(){var e=Object(f.a)(m.a.mark((function e(){var t,a,n=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:"",P="".concat(T,"/timeline"),e.prev=2,e.next=5,A.a.get(P);case 5:t=e.sent,a=t.data.data,M.a().key((function(e){return new Date(e.updated_at).getMonth()})).rollup((function(e){return{confirmed:M.b(e,(function(e){return e.confirmed})),deaths:M.b(e,(function(e){return e.deaths})),active:M.b(e,(function(e){return e.active})),recovered:M.b(e,(function(e){return e.recovered}))}})).entries(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(f.a)(m.a.mark((function e(){var t,a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("".concat(T,"/countries"));case 2:return t=e.sent,a=t.data.data,n=a.map((function(e){return e.latest_data.critical})),r=n.reduce((function(e,t){return e+t})),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(m.a.mark((function e(){var t,a,n,r,c,o,i,l=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=l.length>0&&void 0!==l[0]?l[0]:"",P=t?"".concat(T,"/countries/").concat(t):"".concat(T,"/timeline"),e.prev=2,e.next=5,A.a.get(P);case 5:if(a=e.sent,n=a.data.data,r=t?n.latest_data:n[0],!t){e.next=12;break}e.t0=n.critial,e.next=15;break;case 12:return e.next=14,G();case 14:e.t0=e.sent;case 15:return c=e.t0,o=t?n.updated_at:n[0].updated_at,i=t?r.calculated:0,e.abrupt("return",{confirmed:r.confirmed,recovered:r.recovered,deaths:r.deaths,active:r.active,critical:c,calculated:i,updated_at:o});case 21:e.prev=21,e.t1=e.catch(2),console.log(e.t1);case 24:case"end":return e.stop()}}),e,null,[[2,21]])})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(f.a)(m.a.mark((function e(t){var a,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P=t?"".concat(T,"/countries/").concat(t):"".concat(T,"/timeline"),e.prev=1,e.next=4,A.a.get(P);case 4:return a=e.sent,n=a.data.data,r=t?n.timeline:n,c=r.map((function(e){return{recovered:e.recovered,active:e.active,deaths:e.deaths,date:e.date,loading:!1}})),e.abrupt("return",c);case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(f.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.get("".concat(T,"/countries"));case 3:return t=e.sent,a=t.data.data,n=a.filter((function(e){return e.latest_data.confirmed>0})),e.abrupt("return",n.map((function(e){return{name:e.name,code:e.code}})));case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),R=a(119),W=a.n(R),Z=function(e){var t=e.country,a=Object(n.useState)([]),c=Object(N.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)([]),u=Object(N.a)(l,2),s=u[0],d=u[1];Object(n.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,F(t);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=d,e.next=8,V(t);case 8:e.t3=e.sent,(0,e.t2)(e.t3),console.table(s);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var p=o.length?r.a.createElement(S.a,{data:{labels:o.map((function(e){return e.date})),datasets:[{data:o.map((function(e){return e.active})),label:"Active",borderColor:"rgba(0,0,255,0.5)",backgroundColor:"rgba(0,0,255,0.5)",fill:!0},{data:o.map((function(e){return e.recovered})),label:"Recovered",borderColor:"rgba(0,187,0,0.5)",backgroundColor:"rgba(0,255,0,0.5)",fill:!0},{data:o.map((function(e){return e.deaths})),label:"Deaths",borderColor:"rgba(255,0,0,0.5)",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:W.a.container},r.a.createElement(B.a,{style:{width:"100vw",backgroundColor:"#e0e0e0",borderRadius:"10px",boxShadow:"6px 6px 14px 0 rgba(0, 0, 0, 0.253) , -8px -8px 18px 0 rgba(255, 255, 255, 0.76) "}},p))},Q=a(300),U=a(298),q=a(294),L=(a(257),Object(q.a)((function(e){return{formControl:{margin:e.spacing(1),marginBottom:50,minWidth:220}}}))),X=function(e){var t=e.handleCountryChange,a=L(),c=Object(n.useState)([]),o=Object(N.a)(c,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){(function(){var e=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l,e.next=3,J();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[l]),r.a.createElement(Q.a,{className:a.formControl},r.a.createElement(U.a,{native:!0,label:"Country",inputProps:{name:"Country",id:""},onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{"aria-label":"None",value:""},"Global"),i.map((function(e){return r.a.createElement("option",{key:e.code,value:e.code},e.name)}))))},$=a(295),H=a(47),K=a(0),Y=a(81),ee=a.n(Y),te=function(){return r.a.createElement("div",{className:ee.a.container},r.a.createElement(y.a,null,"By"," ",r.a.createElement($.a,{underline:"none",color:"primary",href:"https://github.com/BinodNagarkoti"},"Binod Nagarkoti")),r.a.createElement(y.a,{className:ee.a.social_link},r.a.createElement(K.b.Provider,{value:{color:"#385898",size:"25px"}},r.a.createElement($.a,{underline:"none",href:"https://www.facebook.com/Binodb/",name:"facebook"},r.a.createElement(H.a,null))),r.a.createElement(K.b.Provider,{value:{color:"rgb(29, 161, 242)",size:"25px"}},r.a.createElement($.a,{underline:"none",href:"https://twitter.com/binod1365",name:"Twitter"},r.a.createElement(H.d,null))),r.a.createElement(K.b.Provider,{value:{color:"#003f67",size:"25px"}},r.a.createElement($.a,{underline:"none",href:"https://www.linkedin.com/in/binod-nagarkoti-496245128?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0rrxJXsqT0SQGAfwBMDI7A%3D%3D",name:"LinkedIn"},r.a.createElement(H.c,null))),r.a.createElement(K.b.Provider,{value:{color:"black",size:"25px"}},r.a.createElement($.a,{underline:"none",href:"https://github.com/BinodNagarkoti",name:"Github"},r.a.createElement(H.b,null)))),r.a.createElement(y.a,{color:"textSecondary"}," May 31 2020 "))},ae=a(66),ne=a.n(ae),re=a(120),ce=a.n(re),oe=a(258),ie=function(e){Object(h.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleCountryChange=function(){var e=Object(f.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:a=e.sent,n.setState({data:Object(p.a)({loading:null===a||void 0===a?void 0:a.loading},a),country:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={data:{loading:!0},country:""},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return(null===t||void 0===t?void 0:t.loading)?r.a.createElement("main",{className:ne.a.loading},r.a.createElement("h1",{style:{textAlign:"center"}},"Fetching COVID-19 Data"),r.a.createElement(oe,null)):r.a.createElement("main",{className:ne.a.container},r.a.createElement("div",{className:ne.a.image},r.a.createElement("img",{src:ce.a,alt:"COVID-19"})),r.a.createElement(D,{data:t}),r.a.createElement(X,{handleCountryChange:this.handleCountryChange}),r.a.createElement(Z,{data:t,country:a}),r.a.createElement(te,null))}}]),a}(n.Component),le=a(121),ue=Object(le.a)({palette:{type:"light"}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.Online,null,r.a.createElement(i.a,{theme:ue},r.a.createElement(ie,null))),r.a.createElement(l.Offline,null,r.a.createElement(u.a,{severity:"error"},r.a.createElement(s.a,null," No Internet ")," Sorry! There is no"," ",r.a.createElement("strong",null,"internet Connection")))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports={container:"Cards_container__3bjn6","MuiCard-root":"Cards_MuiCard-root__30flU",card:"Cards_card__eGUfZ"}},66:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1",loading:"App_loading__wCN4P"}},81:function(e,t,a){e.exports={container:"Footer_container__st7Zp",app:"Footer_app__2b3lT",social_link:"Footer_social_link__28GMC"}}},[[137,1,2]]]);
//# sourceMappingURL=main.853f316b.chunk.js.map