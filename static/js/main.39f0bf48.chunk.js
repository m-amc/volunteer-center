(window["webpackJsonpvolunteer-center"]=window["webpackJsonpvolunteer-center"]||[]).push([[0],{103:function(e,t,a){},149:function(e,t,a){},150:function(e,t,a){},155:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),i=(a(86),a(66)),c=a(67),s=a(79),u=a(68),m=a(80),d=a(56),p=a.n(d);p.a.initializeApp({apiKey:"AIzaSyDYZS3jKKLuglNpC9dcc6-iEdvUItaHi0A",authDomain:"volunteer-center.firebaseapp.com",databaseURL:"https://volunteer-center.firebaseio.com",projectId:"volunteer-center",storageBucket:"",messagingSenderId:"893009596874",appId:"1:893009596874:web:84684da9c2ec072d5eff33"});var h=p.a,E={postings:[],id:"",organization:"",address:"",state:"ON",city:"Toronto",phone:"",website:"",email:"",category:"",role:"",role_description:"",start_date:new Date,end_date:new Date,created:Date.now(),isManagement:!1,isNoResult:!1,headerButtonText:"Post Opportunities",filteredCategory:""},g=(a(62),a(16)),f=a.n(g),v=a(26),b=a(27),y=a(35),w=a(70),C=a.n(w),x=function(){return window.history.replaceState({},document.title,window.location.pathname)},D=r.a.createContext(),k=function(){return Object(n.useContext)(D)},O=function(){var e=k(),t=e.isAuthenticated,a=e.loginWithRedirect,n=e.logout;return r.a.createElement("div",{className:"loginOut wrapper"},!t&&r.a.createElement("button",{onClick:function(){return a({})}},"Sign In"),t&&r.a.createElement("button",{onClick:function(){return n()}},"Sign out"))},S=a(29),N=function(e){var t=e.app;return r.a.createElement("header",{className:t.state.isManagement?"managementHeader":""},r.a.createElement(O,null),r.a.createElement("h1",null,"Volunteer Center"),r.a.createElement(S.b,{to:t.state.isManagement?"/":"/organization",className:"postingLink",onClick:function(){var e=!t.state.isManagement;t.setState({isManagement:e})}},t.state.isManagement?"View Opportunities":"Post Opportunities"),r.a.createElement("p",{className:"photoCredit"},"Photo by Anna Earl on Unsplash"))},j=a(32),_=a.n(j),R=function(e){var t=e.postingData;return r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",null,r.a.createElement("h2",null,e.role),r.a.createElement("p",{className:"postingDateRange"},"From ",e.start_date," to ",e.end_date),r.a.createElement("p",{className:"postingRoleDescription"},e.role_description),r.a.createElement("p",{className:"postedDate"},"Posted ",_()(e.created).format("ll"))),r.a.createElement("div",null,r.a.createElement("h3",null,e.organization),r.a.createElement("p",{className:"postingAddress"},e.address," ",r.a.createElement("span",null,e.city,",  ",e.state)),r.a.createElement("p",null,e.phone.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")),r.a.createElement("a",{href:e.website},e.website),r.a.createElement("p",null,e.email_address)))}))},A=a(72),P=function(e){return r.a.createElement("select",{id:e.id,name:e.name,onChange:e.onChange,value:e.value,required:e.required},r.a.createElement("option",{value:""},e.defaultText),r.a.createElement("option",{value:"community"},"Community"),r.a.createElement("option",{value:"education"},"Education"),r.a.createElement("option",{value:"forestry"},"Forestry"),r.a.createElement("option",{value:"healthcare"},"Health Care"),r.a.createElement("option",{value:"office"},"Office"),r.a.createElement("option",{value:"animals"},"Pets/Animals"),r.a.createElement("option",{value:"retail"},"Retail"),r.a.createElement("option",{value:"sports"},"Sports/Recreation"),r.a.createElement("option",{value:"tourism"},"Tourism"))},F=(a(103),a(58)),z=a.n(F),M=a(75),W=a.n(M),T=a(76),I=a.n(T)()(W.a),q=function(){I.fire({position:"center",type:"success",title:"Posting has been saved",showConfirmButton:!1,timer:1500})},U=(a(147),a(148),function(e){var t=e.app.dbRef.child("posting"),a=e.app.state,n=e.app,l=r.a.createRef(),o=function(e){n.setState(Object(A.a)({},e.target.name,e.target.value))};return r.a.createElement("form",{action:"",onSubmit:function(e){if(e.preventDefault(),a.end_date<a.start_date)I.fire({type:"error",title:"Date Range Error",text:"Please fix your dates"});else{var r=t.push();r.set({id:r.key,organization:a.organization,address:a.address,state:"ON",city:"Toronto",phone:a.phone.replace(/-/g,""),website:a.website,email:a.email,category:a.category,role:a.role,role_description:a.role_description,start_date:a.start_date.toLocaleDateString(),end_date:a.end_date.toLocaleDateString(),created:a.created}),n.setState({organization:"",address:"",state:"ON",city:"Toronto",phone:"",website:"",email:"",category:"",role:"",role_description:"",start_date:new Date,end_date:new Date,created:Date.now()}),l.current.focus(),q()}}},r.a.createElement("div",{className:"fieldsetContainer"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Organization Information"),r.a.createElement("div",{className:"fieldsContainer"},r.a.createElement("label",{htmlFor:"organization"},"Name ",r.a.createElement("span",null,"*")),r.a.createElement("input",{id:"organization",type:"text",name:"organization",onChange:o,value:a.organization,placeholder:"Animal Shelter",size:"30",ref:l,required:!0}),r.a.createElement("label",{htmlFor:"address"},"Address ",r.a.createElement("span",null,"*")),r.a.createElement("input",{id:"address",type:"text",name:"address",onChange:o,value:a.address,placeholder:"123 Main Street",required:!0}),r.a.createElement("label",{htmlFor:"city"},"City"),r.a.createElement("input",{id:"city",type:"text",name:"city",onChange:o,value:a.city,disabled:!0}),r.a.createElement("label",{htmlFor:"state"},"State"),r.a.createElement("input",{id:"state",type:"text",name:"state",onChange:o,value:a.state,disabled:!0}),r.a.createElement("label",{htmlFor:"phone"},"Phone ",r.a.createElement("span",null,"*")),r.a.createElement("input",{id:"phone",type:"tel",name:"phone",pattern:"[\\d]{3}-?[\\d]{3}-?[\\d]{4}",onChange:o,value:a.phone,placeholder:"416-123-456",title:"Format: 416-123-456 or 416123456",required:!0}),r.a.createElement("label",{htmlFor:"website"},"Website"),r.a.createElement("input",{id:"website",type:"url",name:"website",onChange:o,value:a.website,placeholder:"https://organization.com"}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",type:"email",name:"email",onChange:o,value:a.email,size:"30",placeholder:"johndoe@domain.com"}))),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"About the Role"),r.a.createElement("div",{className:"fieldsContainer"},r.a.createElement("label",{htmlFor:"category"},"Category ",r.a.createElement("span",null,"*")),r.a.createElement(P,{name:"category",id:"category",app:n,onChange:o,value:a.category,required:"required",defaultText:"Select Category"}),r.a.createElement("label",{htmlFor:"role"},"Role ",r.a.createElement("span",null,"*")),r.a.createElement("input",{id:"role",type:"text",name:"role",onChange:o,value:a.role,placeholder:"Dog Walker",required:!0}),r.a.createElement("label",{htmlFor:"roleDescription"},"Description ",r.a.createElement("span",null,"*")),r.a.createElement("textarea",{className:"textArea",maxLength:"500",id:"roleDescription",type:"text",name:"role_description",onChange:o,value:a.role_description,placeholder:"What is the role about? How to apply? (Maximum of 500 characters)",required:!0}),r.a.createElement("div",{className:"startEndDateContainer"},r.a.createElement("div",{className:"dateContainer"},r.a.createElement("label",{htmlFor:"startDate"},"Start Date"),r.a.createElement(z.a,{selected:a.start_date,onChange:function(e){return n.setState({start_date:e})},minDate:new Date})),r.a.createElement("div",{className:"dateContainer"},r.a.createElement("label",{htmlFor:"endDate"},"End Date"),r.a.createElement(z.a,{selected:a.end_date,onChange:function(e){return n.setState({end_date:e})},minDate:a.start_date})))))),r.a.createElement("button",{className:"formSubmit"},"SUBMIT"),r.a.createElement("p",null,r.a.createElement("span",null,"*")," required fields"))}),B=(a(149),a(45)),L=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"\xa9 2019 Ana Morales"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/class_AnaTheDev","aria-label":"Go to twitter"},r.a.createElement(B.a,{icon:["fab","twitter-square"],"aria-hidden":!0}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/anamariemorales/","aria-label":"Go to linkedin"},r.a.createElement(B.a,{icon:["fab","linkedin"],"aria-hidden":!0}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://medium.com/@anamorales.dev","aria-label":"Go to Medium"},r.a.createElement(B.a,{icon:["fab","medium"],"aria-hidden":!0}))))))},V=(a(150),a(33)),H=a(77);V.b.add(H.a);var J=function(e){var t=e.app;return r.a.createElement("div",{className:"filterCategory"},r.a.createElement("p",null,"Filter:"),r.a.createElement(P,{onChange:t.handleCategoryChange,value:t.state.filteredCategory,defaultText:"All Category"}))},K=a(78),$=a.n(K),G=function(){return r.a.createElement("div",null,r.a.createElement($.a,null,r.a.createElement("title",null,"Volunteer Center"),r.a.createElement("meta",{name:"keywords",content:"Web Development Bootcamp, Project 6, Volunteer Center, React application"}),r.a.createElement("meta",{name:"description",content:"Volunteer Center"}),r.a.createElement("meta",{name:"author",content:"Ana Morales"}),r.a.createElement("meta",{property:"og:title",content:"Volunteer Center"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:url",content:"https://m-amc.github.io/volunteer-center/"}),r.a.createElement("meta",{property:"og:image",content:"https://images.unsplash.com/photo-1560252829-804f1aedf1be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"}),r.a.createElement("meta",{property:"og:site_name",content:"Ana Morales"}),r.a.createElement("meta",{property:"og:description",content:"By Ana Morales, Web Developer"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:url",content:"https://m-amc.github.io/volunteer-center/"}),r.a.createElement("meta",{name:"twitter:title",content:"Volunteer Center"}),r.a.createElement("meta",{name:"twitter:description",content:"\xa9 Ana Morales, Web Developer"}),r.a.createElement("meta",{name:"twitter:creator",content:"@class_anathedev"})))},Q=a(22),Y=function(e){var t=e.component,a=e.path,l=Object(y.a)(e,["component","path"]),o=k(),i=o.loading,c=o.isAuthenticated,s=o.loginWithRedirect;Object(n.useEffect)(function(){i||c||function(){var e=Object(v.a)(f.a.mark(function e(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s({appState:{targetUrl:a}});case 2:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()()},[i,c,s,a]);return r.a.createElement(Q.a,Object.assign({path:a,render:function(e){return!0===c?r.a.createElement(t,e):null}},l))},Z=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleCategoryChange=function(t){var a=e.filterPostings(e.postingData,t.target.value),n=[];for(var r in a)n.push(a[r]);var l=!(n.length>0);e.setState({filteredCategory:t.target.value,isNoResult:l,postings:n})},e.filterPostings=function(t,a){var n={};for(var r in t){var l=_()(t[r].end_date),o=_()(e.today.toLocaleDateString()),i=t[r].category;void 0===a||""===a?l>=o&&(n[r]=t[r]):l>=o&&i===a&&(n[r]=t[r])}return n},e.state=E,e.today=new Date,e.dbRef=h.database().ref(),e}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.dbRef.on("value",function(t){e.postingData=t.val().posting;var a=e.filterPostings(e.postingData),n=[];for(var r in a)n.push(e.postingData[r]);e.setState({postings:n})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"app"},r.a.createElement(G,null),r.a.createElement("a",{href:"#main",className:"skip-link"},"Skip to main content."),r.a.createElement(S.a,{basename:"/volunteer-center"},r.a.createElement(N,{app:this}),r.a.createElement("main",{id:"main",className:"wrapper"},r.a.createElement("section",null,r.a.createElement(Q.c,null,r.a.createElement(Q.a,{exact:!0,path:"/",render:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(J,{app:e}),r.a.createElement(R,{postingData:e.state.postings}))}}),r.a.createElement(Y,{exact:!0,path:"/volunteer-center/organization",render:function(t){return r.a.createElement(U,Object.assign({},t,{app:e}))}}))),r.a.createElement("div",{className:this.state.isNoResult?"showNoResult":"hideNoResult"},r.a.createElement("p",null,"No opportunities for this category at this time")))),r.a.createElement(L,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(60);o.a.render(r.a.createElement(function(e){var t=e.children,a=e.onRedirectCallback,l=void 0===a?x:a,o=Object(y.a)(e,["children","onRedirectCallback"]),i=Object(n.useState)(),c=Object(b.a)(i,2),s=c[0],u=c[1],m=Object(n.useState)(),d=Object(b.a)(m,2),p=d[0],h=d[1],E=Object(n.useState)(),g=Object(b.a)(E,2),w=g[0],k=g[1],O=Object(n.useState)(!0),S=Object(b.a)(O,2),N=S[0],j=S[1],_=Object(n.useState)(!1),R=Object(b.a)(_,2),A=R[0],P=R[1];Object(n.useEffect)(function(){(function(){var e=Object(v.a)(f.a.mark(function e(){var t,a,n,r,i;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C()(o);case 2:if(t=e.sent,k(t),!window.location.search.includes("code=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:a=e.sent,n=a.appState,l(n);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,u(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:i=e.sent,h(i);case 19:j(!1);case 20:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[]);var F=function(){var e=Object(v.a)(f.a.mark(function e(){var t,a,n=arguments;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:{},P(!0),e.prev=2,e.next=5,w.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,P(!1),e.finish(10);case 13:return e.next=15,w.getUser();case 15:a=e.sent,h(a),u(!0);case 18:case"end":return e.stop()}},e,null,[[2,7,10,13]])}));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(v.a)(f.a.mark(function e(){var t;return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,w.handleRedirectCallback();case 3:return e.next=5,w.getUser();case 5:t=e.sent,j(!1),u(!0),h(t);case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r.a.createElement(D.Provider,{value:{isAuthenticated:s,user:p,loading:N,popupOpen:A,loginWithPopup:F,handleRedirectCallback:z,getIdTokenClaims:function(){return w.getIdTokenClaims.apply(w,arguments)},loginWithRedirect:function(){return w.loginWithRedirect.apply(w,arguments)},getTokenSilently:function(){return w.getTokenSilently.apply(w,arguments)},getTokenWithPopup:function(){return w.getTokenWithPopup.apply(w,arguments)},logout:function(){return w.logout.apply(w,arguments)}}},t)},{domain:X.domain,client_id:X.clientId,redirect_uri:window.location.origin+"/volunteer-center",onRedirectCallback:function(e){window.history.replaceState({},document.title,e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},60:function(e){e.exports=JSON.parse('{"domain":"volunteer-center.auth0.com","clientId":"NFP31YV3fiPjKEYQ86433yQxSLjw2Hmu"}')},62:function(e,t,a){},81:function(e,t,a){e.exports=a(155)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.39f0bf48.chunk.js.map