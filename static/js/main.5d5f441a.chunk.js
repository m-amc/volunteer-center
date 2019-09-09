(window["webpackJsonpvolunteer-center"]=window["webpackJsonpvolunteer-center"]||[]).push([[0],{124:function(e,t,a){},127:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(19),o=a.n(l),i=(a(64),a(47)),s=a(48),c=a(57),m=a(49),d=a(58),u=a(41),p=a.n(u);p.a.initializeApp({apiKey:"AIzaSyDYZS3jKKLuglNpC9dcc6-iEdvUItaHi0A",authDomain:"volunteer-center.firebaseapp.com",databaseURL:"https://volunteer-center.firebaseio.com",projectId:"volunteer-center",storageBucket:"",messagingSenderId:"893009596874",appId:"1:893009596874:web:84684da9c2ec072d5eff33"});var h=p.a,g={postings:[],id:"",organization:"",address:"",state:"ON",city:"Toronto",phone:"",website:"",email:"",category:"",role:"",role_description:"",start_date:new Date,end_date:new Date,created:Date.now(),isManagement:!1,isNoResult:!1,headerButtonText:"Post Opportunities",filteredCategory:""},E=(a(74),function(e){var t=e.app;return r.a.createElement("header",{className:t.state.isManagement?"managementHeader":""},r.a.createElement("div",null,r.a.createElement("h1",null,"Volunteer Center"),r.a.createElement("input",{type:"submit",value:t.state.headerButtonText,onClick:function(e){e.preventDefault();var a={};a=t.state.isManagement?{isManagement:!1,headerButtonText:"Post Opportunities"}:{isManagement:!0,headerButtonText:"View Postings"},t.setState(a)}})),r.a.createElement("p",{className:"photoCredit"},"Photo by Anna Earl on Unsplash"))}),f=function(e){var t=e.postingData;return r.a.createElement("ul",null,t.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",null,r.a.createElement("h2",null,e.role),r.a.createElement("p",{className:"postingDateRange"},"From ",e.start_date," to ",e.end_date),r.a.createElement("p",{className:"postingRoleDescription"},e.role_description),r.a.createElement("p",{className:"postedDate"},"Posted ",new Date(e.created).toLocaleDateString())),r.a.createElement("div",null,r.a.createElement("h3",null,e.organization),r.a.createElement("p",{className:"postingAddress"},e.address," ",r.a.createElement("span",null,e.city,",  ",e.state)),r.a.createElement("p",null,e.phone),r.a.createElement("p",null,e.website),r.a.createElement("p",null,e.email_address)))}))},v=a(51),y=function(e){return r.a.createElement("select",{name:e.name,onChange:e.onChange,value:e.value,required:e.required},r.a.createElement("option",{value:""},e.defaultText),r.a.createElement("option",{value:"community"},"Community"),r.a.createElement("option",{value:"education"},"Education"),r.a.createElement("option",{value:"healthcare"},"Health Care"),r.a.createElement("option",{value:"animals"},"Pets/Animals"))},b=(a(75),a(42)),w=a.n(b),C=a(54),D=a.n(C),N=a(55),x=a.n(N)()(D.a),_=function(){x.fire({position:"center",type:"success",title:"Posting has been saved",showConfirmButton:!1,timer:1500})},S=(a(122),a(123),function(e){var t=e.app.dbRef.child("posting"),a=e.app.state,n=e.app,l=function(e){n.setState(Object(v.a)({},e.target.name,e.target.value))};return r.a.createElement("form",{action:"",onSubmit:function(e){if(e.preventDefault(),a.end_date<a.start_date)x.fire({type:"error",title:"Date Range Error",text:"Please fix your dates"});else{var r=t.push();r.set({id:r.key,organization:a.organization,address:a.address,state:"ON",city:"Toronto",phone:a.phone,website:a.website,email:a.email,category:a.category,role:a.role,role_description:a.role_description,start_date:a.start_date.toLocaleDateString(),end_date:a.end_date.toLocaleDateString(),created:a.created}),n.setState({organization:"",address:"",state:"ON",city:"Toronto",phone:"",website:"",email:"",category:"",role:"",role_description:"",start_date:new Date,end_date:new Date,created:Date.now()}),_()}}},r.a.createElement("div",{className:"fieldsetContainer"},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Company Information"),r.a.createElement("label",{htmlFor:"organization"},"Organization Name"),r.a.createElement("input",{id:"organization",type:"text",name:"organization",onChange:l,value:a.organization,placeholder:"Company ABC",size:"30",required:!0}),r.a.createElement("label",{htmlFor:"address"},"Address"),r.a.createElement("input",{id:"address",type:"text",name:"address",onChange:l,value:a.address,placeholder:"123 Main Street",required:!0}),r.a.createElement("label",{htmlFor:"city"},"City"),r.a.createElement("input",{id:"city",type:"text",name:"city",onChange:l,value:a.city,disabled:!0}),r.a.createElement("label",{htmlFor:"state"},"State"),r.a.createElement("input",{id:"state",type:"text",name:"state",onChange:l,value:a.state,disabled:!0}),r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{id:"phone",type:"tel",name:"phone",pattern:"[0-9]{3}-[0-9]{3}-[0-9]{4}",onChange:l,value:a.phone,placeholder:"416-xxx-xxxx",required:!0}),r.a.createElement("label",{htmlFor:"website"},"Website"),r.a.createElement("input",{id:"website",type:"url",name:"website",onChange:l,value:a.website,placeholder:"http://yourcompany.com"}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{id:"email",type:"email",name:"email",onChange:l,value:a.email,size:"30",placeholder:"johndoe@domain.com"})),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"About the Role"),r.a.createElement("label",{htmlFor:"Category"},"Category"),r.a.createElement(y,{name:"category",id:"category",app:n,onChange:l,value:a.category,required:"required",defaultText:"Select Category"}),r.a.createElement("label",{htmlFor:"role"},"Role"),r.a.createElement("input",{id:"role",type:"text",name:"role",onChange:l,value:a.role,required:!0}),r.a.createElement("label",{htmlFor:"roleDescription"},"Description"),r.a.createElement("textarea",{className:"textArea",maxLength:"500",id:"roleDescription",type:"text",name:"role_description",onChange:l,value:a.role_description,placeholder:"What is the role about? How to apply? (Maximum of 500 characters)",required:!0}),r.a.createElement("div",{className:"startEndDateContainer"},r.a.createElement("div",{className:"dateContainer"},r.a.createElement("label",{htmlFor:"startDate"},"Start Date"),r.a.createElement(w.a,{selected:a.start_date,onChange:function(e){return n.setState({start_date:e})},minDate:new Date})),r.a.createElement("div",{className:"dateContainer"},r.a.createElement("label",{htmlFor:"endDate"},"End Date"),r.a.createElement(w.a,{selected:a.end_date,onChange:function(e){return n.setState({end_date:e})},minDate:a.start_date}))))),r.a.createElement("button",{className:"formSubmit"},"SUBMIT"))}),k=(a(124),a(33)),F=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",null,"\xa9 2019 Ana Morales"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/class_AnaTheDev","aria-label":"Go to twitter"},r.a.createElement(k.a,{icon:["fab","twitter-square"],"aria-hidden":!0}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/anamariemorales/","aria-label":"Go to linkedin"},r.a.createElement(k.a,{icon:["fab","linkedin"],"aria-hidden":!0}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://medium.com/@anamorales.dev","aria-label":"Go to Medium"},r.a.createElement(k.a,{icon:["fab","medium"],"aria-hidden":!0}))))))},z=(a(127),a(22)),R=a(56);z.b.add(R.a);var A=function(e){var t=e.app;return r.a.createElement("div",{className:"filterCategory"},r.a.createElement("p",null,"Filter:"),r.a.createElement(y,{onChange:t.handleCategoryChange,value:t.state.filteredCategory,defaultText:"All Category"}))},M=a(44),O=a.n(M),P=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).handleCategoryChange=function(t){var a=e.filterPostings(e.postingData,t.target.value),n=[];for(var r in a)n.push(a[r]);var l=!(n.length>0);e.setState({filteredCategory:t.target.value,isNoResult:l,postings:n})},e.filterPostings=function(t,a){var n={};for(var r in t){var l=O()(t[r].end_date),o=O()(e.today.toLocaleDateString()),i=t[r].category;void 0===a||""===a?l>=o&&(n[r]=t[r]):l>=o&&i===a&&(n[r]=t[r])}return n},e.state=g,e.today=new Date,e.dbRef=h.database().ref(),e}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.dbRef.on("value",function(t){e.postingData=t.val().posting;var a=e.filterPostings(e.postingData),n=[];for(var r in a)n.push(e.postingData[r]);e.setState({postings:n})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement("a",{href:"#main",className:"skip-link"},"Skip to main content."),r.a.createElement(E,{app:this}),r.a.createElement("main",{id:"main",className:"wrapper"},r.a.createElement("section",null,this.state.isManagement?r.a.createElement(S,{app:this}):r.a.createElement(r.a.Fragment,null,r.a.createElement(A,{app:this}),r.a.createElement(f,{postingData:this.state.postings}))),r.a.createElement("div",{className:this.state.isNoResult?"showNoResult":"hideNoResult"},r.a.createElement("p",null,"No opportunities for this category at this time"))),r.a.createElement(F,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports=a(129)},64:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.5d5f441a.chunk.js.map