(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(15),c=a.n(l),i=(a(93),a(95),a(97),a(51),a(8)),o=a(9),u=a(11),s=a(10),m=a(6),h=a(24),f=a.n(h),d=a(47),E=a(18),p=a.n(E),v=a(3),g={Dhaka:["Dhaka City","Dhaka (District)","Faridpur","Gazipur","Gopalganj","Kishoreganj","Madaripur","Manikganj","Munshigonj","Narayanganj","Narshingdi","Rajbari","Shariatpur","Tangail"],Rangpur:["Dinajpur","Gaibandha","Kurigram","Lalmonirhat","Nilphamari","Panchagar","Rangpur","Thakurgaon"],Chittagong:["Chattogram","Cox\u2019s bazar","Cumilla","B. Baria","Laksmipur","Chandpur","Bandarban","Feni","Khagrachhari","Noakhali","Rangamati"],Barishal:["Barguna","Barishal","Bhola","Jhalokathi","Potuakhali","Pirojpur"],Khulna:["Bagerhat","Chuadanga","Jessore","Jhenaidah","Khulna","Kushtia","Magura","Meherpur","Narail","Satkhira"],Sylhet:["Hobiganj","Moulovi Bazar","Sunamganj","Sylhet"],Mymensingh:["Jamalpur","Mymensingh","Netrokona","Sherpur"],Rajshahi:["Bogra","Joypurhat","Naogaon","Natore","Chapainawabganj","Pabna","Rajshahi","Sirajganj"]};function b(e){return function(){var t,a=Object(m.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(m.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(s.a)(this,t)}}var y=function(e){Object(u.a)(a,e);var t=b(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"renderDivisionCards",value:function(){return this.props.divisionalCount.map(function(e){return r.a.createElement(v.c,{key:e.name,className:"cascading-admin-card"},r.a.createElement("div",{className:"admin-up"},r.a.createElement("h2",{style:D.cardStyle},e.name),r.a.createElement("div",{style:D.divStyle},e.prev_count===e.count?r.a.createElement("div",{style:D.countText},e.count):r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("div",{style:D.countText},e.count),r.a.createElement("div",{style:{fontSize:"1.1em",paddingLeft:"5px",color:"gray",fontWeight:300}},"(".concat(e.count-e.prev_count>0&&"+").concat(e.count-e.prev_count,")"))))),r.a.createElement("br",null))})}},{key:"render",value:function(){var e=this.renderDivisionCards();return r.a.createElement(v.l,{className:"mb-4"},r.a.createElement(v.f,{xl:"3",md:"10",className:"mb-r"},e.slice(0,2)),r.a.createElement(v.f,{xl:"3",md:"6",className:"mb-r"},e.slice(2,4)),r.a.createElement(v.f,{xl:"3",md:"6",className:"mb-r"},e.slice(4,6)),r.a.createElement(v.f,{xl:"3",md:"6",className:"mb-r"},e.slice(6)))}}]),a}(n.Component),D={divStyle:{textAlign:"center",padding:"5%"},cardStyle:{background:"#98C9C5",color:"#fff",margin:"0px",padding:"3%",textAlign:"center"},countText:{fontSize:"1.6em",fontWeight:300}},k=a(87);function j(e){return function(){var t,a=Object(m.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(m.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(s.a)(this,t)}}var C={textAlign:"center"},x=function(e){Object(u.a)(a,e);var t=j(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"getDivisionalData",value:function(e){var t=this.props.districtData;if(0===t.length)return[];var a=t.filter(function(t){return-1!==e.findIndex(function(e){return e===t.name})}),n=[];return e.forEach(function(e){if(-1===a.findIndex(function(t){return t.name===e})){var t={};t.name=e,t.count=0,t.prev_count=0,t.id=e,n.push(t)}}),[].concat(Object(k.a)(a),n)}},{key:"renderTableRows",value:function(e){var t=this.getDivisionalData(e);return 0===t.length?null:t.map(function(e,t){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),e.count===e.prev_count?r.a.createElement("td",null,e.count):r.a.createElement("td",null,e.count," ",r.a.createElement("span",{style:{fontSize:"0.9em",display:"inline-block",marginLeft:"6px",fontWeight:500,color:"gray"}},"(",e.count-e.prev_count>0&&"+",e.count-e.prev_count,")")))})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.l,{className:"mb-4"},r.a.createElement(v.f,{md:"4"},r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement("h4",{style:C},"Dhaka Division"),r.a.createElement(v.m,{hover:!0},r.a.createElement(v.o,{color:"blue-grey lighten-4"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"District Name"),r.a.createElement("th",null,"Covid-19 Positive"))),r.a.createElement(v.n,null,this.renderTableRows(g.Dhaka)))))),r.a.createElement(v.f,{md:"4",className:"mb-4"},r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement("h4",{style:C},"Chittagong Division"),r.a.createElement(v.m,{hover:!0},r.a.createElement(v.o,{color:"blue lighten-5"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"District Name"),r.a.createElement("th",null,"Covid-19 Positive"))),r.a.createElement(v.n,null,this.renderTableRows(g.Chittagong)))))),r.a.createElement(v.f,{md:"4",className:"mb-4"},r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement("h4",{style:C},"Khulna Division"),r.a.createElement(v.m,{hover:!0},r.a.createElement(v.o,{color:"blue lighten-5"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"District Name"),r.a.createElement("th",null,"Covid-19 Positive"))),r.a.createElement(v.n,null,this.renderTableRows(g.Khulna))))))),r.a.createElement(v.l,{className:"mb-4"},r.a.createElement(v.f,{md:"6"},r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement("h4",{style:C},"Rajshahi Division"),r.a.createElement(v.m,{hover:!0},r.a.createElement(v.o,{color:"blue-grey lighten-4"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"District Name"),r.a.createElement("th",null,"Covid-19 Positive"))),r.a.createElement(v.n,null,this.renderTableRows(g.Rajshahi)))))),r.a.createElement(v.f,{md:"6",className:"mb-4"},r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement("h4",{style:C},"Rangpur Division"),r.a.createElement(v.m,{hover:!0},r.a.createElement(v.o,{color:"blue lighten-5"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"District Name"),r.a.createElement("th",null,"Covid-19 Positive"))),r.a.createElement(v.n,null,this.renderTableRows(g.Rangpur))))))),r.a.createElement(v.l,{className:"mb-4"},r.a.createElement(v.f,{md:"4",className:"mb-4"},r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement("h4",{style:C},"Barishal Division"),r.a.createElement(v.m,{hover:!0},r.a.createElement(v.o,{color:"blue lighten-5"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"District Name"),r.a.createElement("th",null,"Covid-19 Positive"))),r.a.createElement(v.n,null,this.renderTableRows(g.Barishal)))))),r.a.createElement(v.f,{md:"4"},r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement("h4",{style:C},"Sylhet Division"),r.a.createElement(v.m,{hover:!0},r.a.createElement(v.o,{color:"blue-grey lighten-4"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"District Name"),r.a.createElement("th",null,"Covid-19 Positive"))),r.a.createElement(v.n,null,this.renderTableRows(g.Sylhet)))))),r.a.createElement(v.f,{md:"4",className:"mb-4"},r.a.createElement(v.c,null,r.a.createElement(v.d,null,r.a.createElement("h4",{style:C},"Mymensingh Division"),r.a.createElement(v.m,{hover:!0},r.a.createElement(v.o,{color:"blue lighten-5"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"District Name"),r.a.createElement("th",null,"Covid-19 Positive"))),r.a.createElement(v.n,null,this.renderTableRows(g.Mymensingh))))))))}}]),a}(n.Component),R=a(32);function w(e){return function(){var t,a=Object(m.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(m.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(s.a)(this,t)}}var N=function(e){Object(u.a)(a,e);var t=w(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).label={},n.state={label:{}},n}return Object(o.a)(a,[{key:"getChartData",value:function(){var e=this.props.districtData,t=Object.keys(e),a=[],n=t.map(function(t,a){return e[t].name});n&&(a=n);var r=[],l=t.map(function(t,a){return e[t].count});return l&&(r=l),{labels:a,datasets:[{label:"Infected",data:r,backgroundColor:"rgba(245, 74, 85, 0.5)"}]}}},{key:"render",value:function(){var e=this.getChartData();return r.a.createElement(v.l,{className:"mb-4"},r.a.createElement(v.f,{md:"12",className:"mb-4"},r.a.createElement(v.c,{className:"mb-4"},r.a.createElement(v.d,null,r.a.createElement(R.a,{data:e,height:350,options:{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{barPercentage:1,gridLines:{display:!0,color:"rgba(0, 0, 0, 0.01)"}}],yAxes:[{gridLines:{display:!0,color:"rgba(0, 0, 0, 0.1)"},ticks:{beginAtZero:!0}}]}}})))))}}]),a}(n.Component);function O(e){return function(){var t,a=Object(m.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(m.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(s.a)(this,t)}}var S=function(e){Object(u.a)(a,e);var t=O(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"renderDivisionRows",value:function(){return this.props.divisionalCount.map(function(e,t){return r.a.createElement("tr",{key:e.name},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.name),e.count===e.prev_count?r.a.createElement("td",null,e.count):r.a.createElement("td",null,e.count," ",r.a.createElement("span",{style:{fontSize:"0.9em",display:"inline-block",marginLeft:"6px",fontWeight:500,color:"gray"}},"(",e.count-e.prev_count>0&&"+",e.count-e.prev_count,")")))})}},{key:"render",value:function(){var e=this.props.divisionalCount,t={labels:e.map(function(e){return e.name}),datasets:[{data:e.map(function(e){return e.count}),backgroundColor:["#F7464A","#46BFBD","#FDB45C","#949FB1","#4D5360","#1121C1","#7721C1","#BB7A5E"],hoverBackgroundColor:["#FF5A5E","#5AD3D1","#FFC870","#A8B3C5","#616774","#4421C1","#9921C1","#FFAA5E"]}]};return r.a.createElement(v.l,{className:"mb-4"},r.a.createElement(v.f,{md:"12",lg:"4",className:"mb-4"},r.a.createElement(v.c,{className:"mb-4"},r.a.createElement(v.e,null,"Divisional Chart"),r.a.createElement(v.d,null,r.a.createElement(R.b,{data:t,height:300,options:{responsive:!0}}),r.a.createElement("br",null),r.a.createElement("br",null)))),r.a.createElement(v.f,{md:"12",lg:"8",className:"mb-4"},r.a.createElement(v.c,{className:"mb-4"},r.a.createElement(v.e,null,"Division At a Glance"),r.a.createElement(v.m,{hover:!0},r.a.createElement(v.o,{color:"blue lighten-5"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"Division Name"),r.a.createElement("th",null,"Covid-19 Positive"))),r.a.createElement(v.n,null,this.renderDivisionRows())))))}}]),a}(n.Component);function A(e){return function(){var t,a=Object(m.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(m.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(s.a)(this,t)}}var B=function(e){Object(u.a)(a,e);var t=A(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={districtData:[],divisionalCount:[],totalInfected:null,totalDeath:null,totalRecovered:null,lastUpdate:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.fetchData(),this.fetchCount()}},{key:"fetchData",value:function(){var e=Object(d.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://corona-bd.herokuapp.com/district");case 3:t=e.sent,a=this.getDivisionalCount(g,t.data.data),this.setState({districtData:t.data.data,divisionalCount:a,lastUpdate:t.data.updated_on}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"fetchCount",value:function(){var e=Object(d.a)(f.a.mark(function e(){var t,a;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://covid19.mathdro.id/api/countries/BD");case 3:t=e.sent,a=t.data,this.setState({totalDeath:a.deaths.value,totalInfected:a.confirmed.value,totalRecovered:a.recovered.value}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));return function(){return e.apply(this,arguments)}}()},{key:"getDivisionalCount",value:function(e,t){var a=Object.keys(e),n=[];return a.forEach(function(a){var r=0,l=0;t.forEach(function(t){-1!==e[a].findIndex(function(e){return e===t.name})&&(r+=t.count,l+=t.prev_count)}),n.push({name:a,count:r,prev_count:l})}),n=n.sort(function(e,t){return t.count-e.count})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h1",{style:{textAlign:"center"}},r.a.createElement("span",null,r.a.createElement("b",null,"Covid Bangladesh"))," ","- Statistics"),r.a.createElement("h3",{style:{textAlign:"center"}},"Infected: ",r.a.createElement("b",null,this.state.totalInfected),"\xa0 Death:"," ",r.a.createElement("b",null,this.state.totalDeath)),r.a.createElement("h3",{style:{textAlign:"center"}},"Recovered: ",r.a.createElement("b",null,this.state.totalRecovered)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y,{districtData:this.state.districtData,divisionalCount:this.state.divisionalCount}),r.a.createElement("hr",null),r.a.createElement(N,{districtData:this.state.districtData}),r.a.createElement(x,{districtData:this.state.districtData}),r.a.createElement(S,{districtData:this.state.districtData,divisionalCount:this.state.divisionalCount}))}}]),a}(n.Component),P=function(){return r.a.createElement(v.g,{style:{margin:"0 auto"},color:"cyan",className:"text-center font-small darken-3"},r.a.createElement("div",{className:"pt-1"},r.a.createElement(v.b,{outline:!0,color:"white",rel:"noopener noreferrer",tag:"a",href:"https://github.com/Aflan-63/covid-bangladesh-responsive",target:"_blank"},"Source Code"),r.a.createElement("hr",{className:"my4"})),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginRight:"8%"}},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/ifazahmed",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(v.h,{fab:!0,icon:"linkedin",className:"mr-3"})),r.a.createElement("a",{href:"https://github.com/Aflan-63",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(v.h,{fab:!0,icon:"github"}))),r.a.createElement("div",{style:{fontSize:"1.1em"},className:"pb-3"},"Aflan")),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",marginRight:"20px"}},r.a.createElement("div",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/ahmed-sadman",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(v.h,{fab:!0,icon:"linkedin",className:"mr-3"})),r.a.createElement("a",{href:"https://github.com/ahmedsadman",rel:"noopener noreferrer",target:"_blank"},r.a.createElement(v.h,{fab:!0,icon:"github"}))),r.a.createElement("div",{style:{fontSize:"1.1em"},className:"pb-3"},"Samyo"))),r.a.createElement("p",{className:"footer-copyright py-3 text-center"},r.a.createElement("span",{className:"text-center",style:{color:"rgba(255, 255, 255, 0.8)",margin:0,padding:0}},"All data provided by the public API"," ",r.a.createElement("a",{href:"https://github.com/ahmedsadman/covid19-bd",target:"_blank",rel:"noopener noreferrer"},"covid19-bd"))))},T={container:{zIndex:100,bottom:0,left:0,right:0,position:"fixed",height:"auto",padding:"0.5% 2%",color:"white",textAlign:"center",backgroundColor:"rgba(7, 47, 95, 0.9)",boxShadow:"2px 2px 3px gray",fontSize:"90%"}},_=function(e){return e.show?r.a.createElement("div",{style:T.container},e.children):null};function F(e){return function(){var t,a=Object(m.a)(e);if(function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}()){var n=Object(m.a)(this).constructor;t=Reflect.construct(a,arguments,n)}else t=a.apply(this,arguments);return Object(s.a)(this,t)}}var I=function(e){Object(u.a)(a,e);var t=F(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).hideAlert=function(){n.setState({showAlertBox:!1})},n.state={showAlertBox:!0},n.timer=null,n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.timer=setTimeout(this.hideAlert,6e3)}},{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}},{key:"render",value:function(){return r.a.createElement("div",{className:"flexible-content"},r.a.createElement(B,null),r.a.createElement(_,{show:this.state.showAlertBox},"District-wise data is generally delayed. The count changes that are shown are since last 24 hours"),r.a.createElement(P,null))}}]),a}(n.Component),z=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");z?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):M(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):M(e)})}}()},51:function(e,t,a){},88:function(e,t,a){e.exports=a(231)}},[[88,2,1]]]);
//# sourceMappingURL=main.1e94c019.chunk.js.map