(function(e){function t(t){for(var o,i,n=t[0],l=t[1],s=t[2],u=0,p=[];u<n.length;u++)i=n[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],o=!0,n=1;n<a.length;n++){var l=a[n];0!==r[l]&&(o=!1)}o&&(c.splice(t--,1),e=i(i.s=a[0]))}return e}var o={},r={app:0},c=[];function i(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=o,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(a,o,function(t){return e[t]}.bind(null,o));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=t,n=n.slice();for(var s=0;s<n.length;s++)t(n[s]);var d=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ac3":function(e,t,a){"use strict";a("f532")},"0f25":function(e,t,a){},"25d6":function(e,t,a){"use strict";var o=a("ed73"),r=a("aa4e");a("41ba");r["default"].render=o["a"],r["default"].__scopeId="data-v-63361ebc",t["default"]=r["default"]},"2ac1":function(e,t,a){"use strict";a("a025")},"2d55":function(e,t,a){},"2ff1":function(e,t,a){"use strict";a("d0a6")},3383:function(e,t,a){},"38f0":function(e,t,a){"use strict";a("3383")},"3a62":function(e,t,a){},"3f85":function(e,t,a){"use strict";a("2d55")},"3fb6":function(e,t,a){"use strict";a("c7a7")},"41ba":function(e,t,a){"use strict";a("ca30")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("7a23"),r={id:"app"};function c(e,t,a,c,i,n){var l=Object(o["resolveComponent"])("router-view"),s=Object(o["resolveComponent"])("Toast");return Object(o["openBlock"])(),Object(o["createBlock"])("div",r,[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(this.$route.meta.layout||"div"),null,{default:Object(o["withCtx"])((function(){return[Object(o["createVNode"])(l),Object(o["createVNode"])(s)]})),_:1}))])}var i=a("00b6"),n=a.n(i),l=a("6060"),s=a.n(l),d={data:function(){return{items:[{label:"Home",icon:"pi pi-fw pi-home",to:"/"},{label:"Authentication",icon:"pi pi-fw pi-cog",to:"/auth"}]}},components:{TabMenu:n.a,Toast:s.a}};a("6f7a");d.render=c;var u=d,p=a("6c02"),v=Object(o["withScopeId"])("data-v-7d3a81af");Object(o["pushScopeId"])("data-v-7d3a81af");var b={class:"home"};Object(o["popScopeId"])();var f=v((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("Homeview");return Object(o["openBlock"])(),Object(o["createBlock"])("div",b,[Object(o["createVNode"])(n)])})),m=a("f5bd"),O=a.n(m),h=Object(o["withScopeId"])("data-v-4092da20");Object(o["pushScopeId"])("data-v-4092da20");var j=Object(o["createVNode"])("img",{alt:"Ghibli Studio logo",src:O.a},null,-1),w=Object(o["createTextVNode"])("Discover the universe now ");Object(o["popScopeId"])();var V=h((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("Button");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[j,Object(o["createVNode"])(n,{onClick:i.goToLogin},{default:h((function(){return[w]})),_:1},8,["onClick"])])})),g=a("6549"),y=a.n(g),N={name:"Homeview",components:{Button:y.a},methods:{goToLogin:function(){this.$router.push("/auth/login")}}};a("0ac3");N.render=V,N.__scopeId="data-v-4092da20";var k=N,C={name:"Home",components:{Homeview:k}};a("2ac1"),a("38f0");C.render=f,C.__scopeId="data-v-7d3a81af";var I=C,D=Object(o["withScopeId"])("data-v-72d265bf");Object(o["pushScopeId"])("data-v-72d265bf");var S={class:"container"};Object(o["popScopeId"])();var R=D((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("LoginForm");return Object(o["openBlock"])(),Object(o["createBlock"])("div",S,[Object(o["createVNode"])(n)])})),B=Object(o["withScopeId"])("data-v-08c6f3aa");Object(o["pushScopeId"])("data-v-08c6f3aa");var x={class:"p-md-4 login-form"},M=Object(o["createTextVNode"])(" Login "),_={class:"p-fluid"},T={class:"p-field"},A={class:"p-float-label"},$=Object(o["createVNode"])("label",{for:"email"},"Email",-1),L={class:"p-field"},P={class:"p-float-label"},U=Object(o["createVNode"])("label",{for:"pass"},"Password",-1),F={class:"p-field"},E=Object(o["createTextVNode"])(" Don't have an account? Sign up "),z=Object(o["createTextVNode"])("here.");Object(o["popScopeId"])();var W=B((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("InputText"),l=Object(o["resolveComponent"])("Button"),s=Object(o["resolveComponent"])("router-link"),d=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createBlock"])("div",x,[Object(o["createVNode"])(d,null,{title:B((function(){return[M]})),content:B((function(){return[Object(o["createVNode"])("div",_,[Object(o["createVNode"])("div",T,[Object(o["createVNode"])("span",A,[Object(o["createVNode"])(n,{id:"email",type:"text",modelValue:c.formData.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.formData.email=e})},null,8,["modelValue"]),$])]),Object(o["createVNode"])("div",L,[Object(o["createVNode"])("span",P,[Object(o["createVNode"])(n,{id:"pass",type:"password",modelValue:c.formData.password,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.formData.password=e})},null,8,["modelValue"]),U])]),Object(o["createVNode"])("div",F,[Object(o["createVNode"])(l,{label:"Login",onClick:i.login},null,8,["onClick"])])])]})),footer:B((function(){return[Object(o["createVNode"])("p",null,[E,Object(o["createVNode"])(s,{to:"/auth/register"},{default:B((function(){return[z]})),_:1})])]})),_:1})])})),H=a("a84a"),Z=a.n(H),K=a("a7ca"),Y=a.n(K),J=a("bc3a"),G=a.n(J),q={name:"LoginForm",components:{InputText:Z.a,Card:Y.a,Button:y.a},data:function(){return{formData:{password:"",email:""},baseURL:"/api/auth"}},methods:{validateData:function(){var e=!1;return""===this.formData.email||""===this.formData.password?this.$toast.add({severity:"error",summary:"Input error",detail:"All fields should be filled in.",life:2e3}):e=!0,e},login:function(){var e=this;this.validateData()&&G.a.post(this.baseURL+"/login",this.formData).then((function(t){localStorage.setItem("token",t.data.token),e.$store.commit("setUserId",t.data.userId),e.$router.push("/dashboard")})).catch((function(t){return e.$toast.add({severity:"error",summary:"Login error",detail:t.response.data.message,life:2e3})}))}}};a("efb9");q.render=W,q.__scopeId="data-v-08c6f3aa";var Q=q,X={name:"Login",components:{LoginForm:Q}};a("2ff1");X.render=R,X.__scopeId="data-v-72d265bf";var ee=X,te=Object(o["withScopeId"])("data-v-17d8c976");Object(o["pushScopeId"])("data-v-17d8c976");var ae={class:"container"};Object(o["popScopeId"])();var oe=te((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("RegisterForm");return Object(o["openBlock"])(),Object(o["createBlock"])("div",ae,[Object(o["createVNode"])(n)])})),re=Object(o["withScopeId"])("data-v-712c733c");Object(o["pushScopeId"])("data-v-712c733c");var ce={class:"p-md-4 register-form"},ie=Object(o["createTextVNode"])(" Register "),ne={class:"p-fluid"},le={class:"p-field"},se={class:"p-float-label"},de=Object(o["createVNode"])("label",{for:"email"},"Email",-1),ue={class:"p-field"},pe={class:"p-float-label"},ve=Object(o["createVNode"])("label",{for:"firstname"},"First name",-1),be={class:"p-field"},fe={class:"p-float-label"},me=Object(o["createVNode"])("label",{for:"lastname"},"Last name",-1),Oe={class:"p-field"},he={class:"p-float-label"},je=Object(o["createVNode"])("label",{for:"pass"},"Password",-1),we={class:"p-field"},Ve={class:"p-float-label"},ge=Object(o["createVNode"])("label",{for:"confirmPass"},"Confirm password",-1),ye={class:"p-field"},Ne=Object(o["createTextVNode"])(" Already have an account? Sign in "),ke=Object(o["createTextVNode"])("here.");Object(o["popScopeId"])();var Ce=re((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("InputText"),l=Object(o["resolveComponent"])("Button"),s=Object(o["resolveComponent"])("router-link"),d=Object(o["resolveComponent"])("Card");return Object(o["openBlock"])(),Object(o["createBlock"])("div",ce,[Object(o["createVNode"])(d,null,{title:re((function(){return[ie]})),content:re((function(){return[Object(o["createVNode"])("div",ne,[Object(o["createVNode"])("div",le,[Object(o["createVNode"])("span",se,[Object(o["createVNode"])(n,{id:"email",type:"email",modelValue:c.formData.email,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.formData.email=e})},null,8,["modelValue"]),de])]),Object(o["createVNode"])("div",ue,[Object(o["createVNode"])("span",pe,[Object(o["createVNode"])(n,{id:"firstname",type:"text",modelValue:c.formData.firstName,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.formData.firstName=e})},null,8,["modelValue"]),ve])]),Object(o["createVNode"])("div",be,[Object(o["createVNode"])("span",fe,[Object(o["createVNode"])(n,{id:"lastname",type:"text",modelValue:c.formData.lastName,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.formData.lastName=e})},null,8,["modelValue"]),me])]),Object(o["createVNode"])("div",Oe,[Object(o["createVNode"])("span",he,[Object(o["createVNode"])(n,{id:"pass",type:"password",modelValue:c.formData.password,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.formData.password=e})},null,8,["modelValue"]),je])]),Object(o["createVNode"])("div",we,[Object(o["createVNode"])("span",Ve,[Object(o["createVNode"])(n,{id:"confirmPass",type:"password",modelValue:c.formData.confirmPass,"onUpdate:modelValue":t[5]||(t[5]=function(e){return c.formData.confirmPass=e})},null,8,["modelValue"]),ge])]),Object(o["createVNode"])("div",ye,[Object(o["createVNode"])(l,{onClick:i.register,label:"Create account"},null,8,["onClick"])])])]})),footer:re((function(){return[Object(o["createVNode"])("p",null,[Ne,Object(o["createVNode"])(s,{to:"/auth/login"},{default:re((function(){return[ke]})),_:1})])]})),_:1})])})),Ie=(a("ac1f"),a("466d"),a("5530")),De=a("5f37"),Se={name:"RegisterForm",components:{InputText:Z.a,Card:Y.a,Button:y.a},data:function(){return{formData:{email:"",firstName:"",lastName:"",password:"",confirmPass:""},baseURL:"/api/auth"}},methods:{validateData:function(){var e=!1;return""===this.formData.firstName||""===this.formData.lastName||""===this.formData.email||""===this.formData.password||""===this.formData.confirmPass?this.$toast.add({severity:"error",summary:"Input error",detail:"All fields should be filled in.",life:2e3}):this.formData.email.match(De["regex_email"])?this.formData.firstName.match(De["regex_name"])?this.formData.lastName.match(De["regex_name"])?this.formData.password!==this.formData.confirmPass?this.$toast.add({severity:"error",summary:"Input error",detail:"Passwords should match",life:2e3}):e=!0:this.$toast.add({severity:"error",summary:"Input error",detail:"Lastname should contain only letters and start with a capital letter",life:2e3}):this.$toast.add({severity:"error",summary:"Input error",detail:"Firstname should contain only letters and start with a capital letter",life:2e3}):this.$toast.add({severity:"error",summary:"Input error",detail:"Email should have a proper format. (ex: user@example.com)",life:2e3}),e},register:function(){var e=this;if(this.validateData()){var t=Object(Ie["a"])({},this.formData);delete t.confirmPass,G.a.post(this.baseURL+"/register",t).then((function(){e.$toast.add({severity:"success",summary:"Successful registration",detail:"You must now login",life:2e3}),e.$router.push("/auth/login")})).catch((function(t){return e.$toast.add({severity:"error",summary:"Register error",detail:t.message,life:2e3})}))}}}};a("f1d6");Se.render=Ce,Se.__scopeId="data-v-712c733c";var Re=Se,Be={name:"Register",components:{RegisterForm:Re}};a("d42e");Be.render=oe,Be.__scopeId="data-v-17d8c976";var xe=Be,Me=a("25d6"),_e=Object(o["withScopeId"])("data-v-4d85af8f");Object(o["pushScopeId"])("data-v-4d85af8f");var Te={class:"main"};Object(o["popScopeId"])();var Ae=_e((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("MenuBar");return Object(o["openBlock"])(),Object(o["createBlock"])("div",Te,[Object(o["createVNode"])(n,{model:c.items},null,8,["model"]),Object(o["renderSlot"])(e.$slots,"default")])})),$e=a("a0cd"),Le=a.n($e),Pe={name:"DashboardLayout",components:{MenuBar:Le.a},data:function(){var e=this;return{items:[{label:"Dashboard",icon:"pi pi-fw pi-briefcase",to:"/dashboard"},{label:"My reviews",icon:"pi pi-fw pi-star-o",to:"/reviews"},{label:"My watchlist",icon:"pi pi-fw pi-tag",to:"/watchlist"},{label:"Logout",icon:"pi pi-fw pi-power-off",command:function(){sessionStorage.clear(),localStorage.clear(),e.$toast.add({severity:"success",summary:"Success",detail:"Logged out",life:2e3}),e.$router.push("/")}}]}}};a("3f85");Pe.render=Ae,Pe.__scopeId="data-v-4d85af8f";var Ue=Pe,Fe=Object(o["withScopeId"])("data-v-305cdab4"),Ee=Fe((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("MovieReviewsList");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(n)])})),ze=(a("a4d3"),a("e01a"),Object(o["withScopeId"])("data-v-29445c40"));Object(o["pushScopeId"])("data-v-29445c40");var We={class:"p-grid p-nogutter"},He={class:"p-col-6",style:{"text-align":"left"}},Ze={class:"p-col-12 p-md-4"},Ke=Object(o["createVNode"])("br",null,null,-1),Ye=Object(o["createTextVNode"])(" Critics score: "),Je={class:"reviews-list"},Ge=Object(o["createVNode"])("h4",null,"Reviews",-1),qe=Object(o["createVNode"])("hr",null,null,-1),Qe={key:1},Xe={class:"p-d-flex p-jc-between"},et=Object(o["createVNode"])("hr",null,null,-1),tt=Object(o["createVNode"])("hr",null,null,-1),at={class:"p-fluid"},ot={class:"p-field"},rt=Object(o["createVNode"])("label",{for:"reviewText"},"Description",-1),ct={class:"p-field"},it=Object(o["createVNode"])("label",{for:"rating"},"Rating",-1),nt=Object(o["createVNode"])("div",{class:"confirmation-content"},[Object(o["createVNode"])("i",{class:"pi pi-exclamation-triangle p-mr-3",style:{"font-size":"2rem"}}),Object(o["createVNode"])("span",null,"Are you sure you want to delete the review?")],-1);Object(o["popScopeId"])();var lt=ze((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("Dropdown"),l=Object(o["resolveComponent"])("Button"),s=Object(o["resolveComponent"])("Card"),d=Object(o["resolveComponent"])("DataView"),u=Object(o["resolveComponent"])("ProgressSpinner"),p=Object(o["resolveComponent"])("Rating"),v=Object(o["resolveComponent"])("Dialog"),b=Object(o["resolveComponent"])("Textarea");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(d,{value:c.movies,layout:c.layout,paginator:!0,rows:9,sortOrder:c.sortOrder,sortField:c.sortField},{header:ze((function(){return[Object(o["createVNode"])("div",We,[Object(o["createVNode"])("div",He,[Object(o["createVNode"])(n,{modelValue:c.sortKey,"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.sortKey=e}),options:c.sortOptions,optionLabel:"label",placeholder:"Sort By Critics Score",onChange:t[2]||(t[2]=function(e){return i.onSortChange(e)})},null,8,["modelValue","options"])])])]})),grid:ze((function(e){return[Object(o["createVNode"])("div",Ze,[Object(o["createVNode"])(s,{key:"slotProps.data.title"},{header:ze((function(){return[Object(o["createVNode"])("img",{alt:"movie image",src:e.data.poster},null,8,["src"])]})),title:ze((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.data.title),1)]})),content:ze((function(){return[Ke,Object(o["createVNode"])("div",null,[Ye,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.data.rt_score),1)])]})),footer:ze((function(){return[Object(o["createVNode"])(l,{icon:"pi pi-check",label:"Add to watchlist",onClick:function(t){return i.addToWatchlist(e.data)}},null,8,["onClick"]),Object(o["createVNode"])(l,{icon:"pi pi-info-circle",label:"View more",class:"p-button-success",style:{"margin-left":".5em"},onClick:function(t){return i.openModalDetails(e.data)}},null,8,["onClick"])]})),_:2},1024)])]})),_:1},8,["value","layout","sortOrder","sortField"]),Object(o["createVNode"])(v,{visible:c.displayModalDetails,style:{width:"70vw"},modal:!0},{header:ze((function(){return[Object(o["createVNode"])("h2",null,Object(o["toDisplayString"])(c.movie.title),1)]})),footer:ze((function(){return[Object(o["createVNode"])(l,{label:"Close",icon:"pi pi-times",onClick:i.closeModalDetails,class:"p-button-text"},null,8,["onClick"]),Object(o["createVNode"])(l,{label:"Add review",icon:"pi pi-plus",onClick:i.openModalAddReview,autofocus:""},null,8,["onClick"])]})),default:ze((function(){return[Object(o["createVNode"])("div",null,Object(o["toDisplayString"])(c.movie.description),1),Object(o["createVNode"])("div",Je,[Ge,qe,Object(o["createVNode"])("div",null,[c.reviewsLoading?(Object(o["openBlock"])(),Object(o["createBlock"])(u,{key:0})):0!==c.reviews.length||c.reviewsLoading?(Object(o["openBlock"])(!0),Object(o["createBlock"])(o["Fragment"],{key:2},Object(o["renderList"])(c.reviews,(function(e){return Object(o["openBlock"])(),Object(o["createBlock"])("div",{key:e.id},[Object(o["createVNode"])("img",{class:"avatar",alt:"user",src:"https://robohash.org/"+e.userId},null,8,["src"]),Object(o["createTextVNode"])(" "+Object(o["toDisplayString"])(e.reviewText)+" ",1),Object(o["createVNode"])("div",Xe,[Object(o["createVNode"])(p,{modelValue:e.stars,"onUpdate:modelValue":function(t){return e.stars=t},readonly:"",cancel:!1},null,8,["modelValue","onUpdate:modelValue"]),Object(o["createVNode"])("div",null,[e.userId===c.userId?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:0,icon:"pi pi-pencil",class:"p-button-rounded p-button-warning p-button-text",onClick:function(t){return i.openModalEditReview(e)}},null,8,["onClick"])):Object(o["createCommentVNode"])("",!0),e.userId===c.userId?(Object(o["openBlock"])(),Object(o["createBlock"])(l,{key:1,icon:"pi pi-trash",class:"p-button-rounded p-button-danger p-button-text",onClick:function(t){return i.openModalDeleteReview(e)}},null,8,["onClick"])):Object(o["createCommentVNode"])("",!0)])]),et])})),128)):(Object(o["openBlock"])(),Object(o["createBlock"])("p",Qe," No reviews for this movie. "))])])]})),_:1},8,["visible"]),Object(o["createVNode"])(v,{visible:c.displayModalAddEditReview,style:{width:"50vw"},modal:!0},{header:ze((function(){return[Object(o["createVNode"])("h2",null,Object(o["toDisplayString"])(c.mode)+" review",1)]})),footer:ze((function(){return[Object(o["createVNode"])(l,{label:"Close",icon:"pi pi-times",onClick:i.closeModalAddEditReview,class:"p-button-text"},null,8,["onClick"]),Object(o["createVNode"])(l,{label:"Sumbit",icon:"pi pi-check",onClick:i.submitAction,autofocus:""},null,8,["onClick"])]})),default:ze((function(){return[Object(o["createVNode"])("h4",null,Object(o["toDisplayString"])(c.movie.title),1),tt,Object(o["createVNode"])("div",at,[Object(o["createVNode"])("div",ot,[rt,Object(o["createVNode"])(b,{id:"reviewText",modelValue:c.review.reviewText,"onUpdate:modelValue":t[3]||(t[3]=function(e){return c.review.reviewText=e}),autoResize:!0,rows:"5",cols:"30"},null,8,["modelValue"])]),Object(o["createVNode"])("div",ct,[it,Object(o["createVNode"])(p,{modelValue:c.review.stars,"onUpdate:modelValue":t[4]||(t[4]=function(e){return c.review.stars=e})},null,8,["modelValue"])])])]})),_:1},8,["visible"]),Object(o["createVNode"])(v,{header:"Confirm action",visible:c.displayModalDeleteReview,style:{width:"350px"},modal:!0},{footer:ze((function(){return[Object(o["createVNode"])(l,{label:"No",icon:"pi pi-times",onClick:i.closeModalDeleteReview},null,8,["onClick"]),Object(o["createVNode"])(l,{label:"Yes",icon:"pi pi-check",onClick:i.deleteReview,autofocus:""},null,8,["onClick"])]})),default:ze((function(){return[nt]})),_:1},8,["visible"])])})),st=(a("99af"),a("c975"),a("7303")),dt=a.n(st),ut=a("404c"),pt=a.n(ut),vt=a("7aec"),bt=a.n(vt),ft=a("8d04"),mt=a.n(ft),Ot=a("0423"),ht=a.n(Ot),jt=a("050f"),wt=a.n(jt),Vt={name:"MovieReviewsList",components:{DataView:dt.a,Dropdown:pt.a,Card:Y.a,Button:y.a,Dialog:bt.a,ProgressSpinner:mt.a,Rating:ht.a,Textarea:wt.a},data:function(){return{userId:this.$store.state.userId,movies:[],movie:null,layout:"grid",sortKey:null,sortOrder:null,sortField:null,sortOptions:[{label:"Critics Score High to Low",value:"!rt_score"},{label:"Critics Score Low to High",value:"rt_score"}],displayModalDetails:!1,displayModalAddEditReview:!1,displayModalDeleteReview:!1,reviews:[],review:{stars:0,reviewText:""},reviewsLoading:!1,mode:"Add"}},mounted:function(){var e=this;G.a.get("/api/movies").then((function(t){return e.movies=t.data.movies}))},methods:{onSortChange:function(e){var t=e.value.value,a=e.value;0===t.indexOf("!")?(this.sortOrder=-1,this.sortField=t.substring(1,t.length),this.sortKey=a):(this.sortOrder=1,this.sortField=t,this.sortKey=a)},openModalDetails:function(e){this.displayModalDetails=!0,this.movie=Object(Ie["a"])({},e),this.getReviewsPerMovie()},closeModalDetails:function(){this.displayModalDetails=!1,this.reviews=[]},getReviewsPerMovie:function(){var e=this;this.reviewsLoading=!0,G.a.get("/api/reviews/".concat(this.movie.id)).then((function(t){e.reviews=t.data.reviews,e.reviewsLoading=!1}))},openModalAddReview:function(){this.mode="Add",this.displayModalAddEditReview=!0},openModalEditReview:function(e){this.mode="Edit",this.review=e,this.displayModalAddEditReview=!0},closeModalAddEditReview:function(){this.displayModalAddEditReview=!1,this.review={reviewText:"",stars:0}},validateReview:function(){var e=!1;return""===this.review.reviewText||0===this.review.stars?this.$toast.add({severity:"error",summary:"Input error",detail:"All fields should be filled in.",life:2e3}):e=!0,e},addReview:function(){var e=this;this.validateReview()&&G.a.post("/api/reviews/".concat(this.movie.id,"/").concat(this.userId),this.review,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.$toast.add({severity:"success",summary:"Success",detail:"Review added",life:2e3}),e.getReviewsPerMovie(),e.displayModalAddEditReview=!1})).catch((function(t){return e.$toast.add({severity:"error",summary:"Add review error",detail:t.response.data.message,life:2e3})}))},openModalDeleteReview:function(e){this.review=e,this.displayModalDeleteReview=!0},closeModalDeleteReview:function(){this.displayModalDeleteReview=!1,this.review={reviewText:"",stars:0}},editReview:function(){var e=this;if(this.validateReview()){var t=Object(Ie["a"])({},this.review);delete t.id,G.a.put("/api/reviews/".concat(this.review.id),t,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.$toast.add({severity:"success",summary:"Success",detail:"Review updated",life:2e3}),e.getReviewsPerMovie(),e.displayModalAddEditReview=!1})).catch((function(t){return e.$toast.add({severity:"error",summary:"Edit review error",detail:t.response.data.message,life:2e3})}))}},deleteReview:function(){var e=this;G.a.delete("/api/reviews/".concat(this.review.id),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.$toast.add({severity:"success",summary:"Success",detail:"Review deleted",life:2e3}),e.getReviewsPerMovie(),e.displayModalDeleteReview=!1})).catch((function(t){return e.$toast.add({severity:"error",summary:"Delete review error",detail:t.response.data.message,life:2e3})}))},submitAction:function(){"Add"===this.mode?this.addReview():this.editReview()},addToWatchlist:function(e){var t=this;G.a.post("/api/users/".concat(this.userId,"/watchlist"),{movieId:e.id},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.$toast.add({severity:"success",summary:"Success",detail:"Added ".concat(e.title," to watchlist"),life:2e3})})).catch((function(e){return t.$toast.add({severity:"error",summary:"Delete review error",detail:e.response.data.message,life:2e3})}))}}};a("d7a5");Vt.render=lt,Vt.__scopeId="data-v-29445c40";var gt=Vt,yt={components:{MovieReviewsList:gt}};yt.render=Ee,yt.__scopeId="data-v-305cdab4";var Nt=yt,kt=Object(o["withScopeId"])("data-v-fb27a35e"),Ct=kt((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("ReviewsList");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(n)])})),It=Object(o["withScopeId"])("data-v-4eeae033");Object(o["pushScopeId"])("data-v-4eeae033");var Dt={class:"card"};Object(o["popScopeId"])();var St=It((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("Column"),l=Object(o["resolveComponent"])("Rating"),s=Object(o["resolveComponent"])("DataTable");return Object(o["openBlock"])(),Object(o["createBlock"])("div",Dt,[Object(o["createVNode"])(s,{value:c.reviews,removableSort:""},{default:It((function(){return[Object(o["createVNode"])(n,{field:"movie.title",header:"Movie Title",sortable:"true"},{body:It((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.data.movie.title),1)]})),_:1}),Object(o["createVNode"])(n,{field:"stars",header:"Rating",sortable:"true"},{body:It((function(e){return[Object(o["createVNode"])(l,{modelValue:e.data.stars,"onUpdate:modelValue":function(t){return e.data.stars=t},readonly:"",cancel:!1},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),Object(o["createVNode"])(n,{field:"reviewText",header:"Review text",sortable:"false"},{body:It((function(e){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.data.reviewText),1)]})),_:1})]})),_:1},8,["value"])])})),Rt=a("23a5"),Bt=a.n(Rt),xt=a("c524"),Mt=a.n(xt),_t={name:"Reviewsist",components:{DataTable:Bt.a,Column:Mt.a,Rating:ht.a},data:function(){return{reviews:[],userId:this.$store.state.userId}},methods:{},mounted:function(){var e=this;G.a.get("/api/reviews/user/".concat(this.userId)).then((function(t){e.reviews=t.data.reviews}))}};_t.render=St,_t.__scopeId="data-v-4eeae033";var Tt=_t,At={components:{ReviewsList:Tt}};At.render=Ct,At.__scopeId="data-v-fb27a35e";var $t=At,Lt=Object(o["withScopeId"])("data-v-76cf9ed3"),Pt=Lt((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("WatchlistMovies");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])(n)])})),Ut=Object(o["withScopeId"])("data-v-2c5bb487");Object(o["pushScopeId"])("data-v-2c5bb487");var Ft={key:0},Et={class:"p-col-12 p-md-4"},zt=Object(o["createTextVNode"])("Critics score: "),Wt={class:"confirmation-content"},Ht=Object(o["createVNode"])("i",{class:"pi pi-exclamation-triangle p-mr-3",style:{"font-size":"2rem"}},null,-1);Object(o["popScopeId"])();var Zt=Ut((function(e,t,a,r,c,i){var n=Object(o["resolveComponent"])("Button"),l=Object(o["resolveComponent"])("Card"),s=Object(o["resolveComponent"])("DataView"),d=Object(o["resolveComponent"])("Dialog");return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[0===c.movies.length?(Object(o["openBlock"])(),Object(o["createBlock"])("p",Ft,"You have no movies in the watchlist.")):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(s,{value:c.movies,layout:c.layout},{grid:Ut((function(e){return[Object(o["createVNode"])("div",Et,[Object(o["createVNode"])(l,{key:"slotProps.data.title"},{header:Ut((function(){return[Object(o["createVNode"])("img",{alt:"movie image",src:e.data.poster},null,8,["src"])]})),title:Ut((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.data.title),1)]})),content:Ut((function(){return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.data.description)+" ",1),Object(o["createVNode"])("div",null,[zt,Object(o["createVNode"])("b",null,Object(o["toDisplayString"])(e.data.rt_score),1)])]})),footer:Ut((function(){return[Object(o["createVNode"])(n,{icon:"pi pi-times",label:"Remove from watchlist",class:"p-button-danger",style:{"margin-left":".5em"},onClick:function(t){return i.openModalRemove(e.data)}},null,8,["onClick"])]})),_:2},1024)])]})),_:1},8,["value","layout"]),Object(o["createVNode"])(d,{header:"Confirm action",visible:c.displayModalRemove,style:{width:"350px"},modal:!0},{footer:Ut((function(){return[Object(o["createVNode"])(n,{label:"No",icon:"pi pi-times",onClick:i.closeModalRemove,autofocus:""},null,8,["onClick"]),Object(o["createVNode"])(n,{label:"Yes",icon:"pi pi-check",onClick:i.removeMovieFromWatchlist},null,8,["onClick"])]})),default:Ut((function(){return[Object(o["createVNode"])("div",Wt,[Ht,Object(o["createVNode"])("span",null,"Are you sure you want to remove "+Object(o["toDisplayString"])(c.movie.title)+" from the watchlist?",1)])]})),_:1},8,["visible"])])})),Kt={name:"MovieReviewsList",components:{DataView:dt.a,Card:Y.a,Button:y.a,Dialog:bt.a},data:function(){return{userId:this.$store.state.userId,movies:[],movie:null,layout:"grid",displayModalRemove:!1}},mounted:function(){this.getWatchlist()},methods:{getWatchlist:function(){var e=this;G.a.get("/api/users/".concat(this.userId,"/watchlist")).then((function(t){return e.movies=t.data.movies}))},openModalRemove:function(e){this.movie=e,this.displayModalRemove=!0},closeModalRemove:function(){this.displayModalRemove=!1,this.movie=[]},removeMovieFromWatchlist:function(){var e=this;G.a.delete("/api/users/".concat(this.userId,"/watchlist/").concat(this.movie.watchlistId),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.$toast.add({severity:"success",summary:"Success",detail:"Movie deleted from watchlist",life:2e3}),e.getWatchlist(),e.displayModalRemove=!1})).catch((function(t){return e.$toast.add({severity:"error",summary:"Remove movie from watchlist error",detail:t.response.data.message,life:2e3})}))}}};a("3fb6");Kt.render=Zt,Kt.__scopeId="data-v-2c5bb487";var Yt=Kt,Jt={name:"Watchlist",components:{WatchlistMovies:Yt}};Jt.render=Pt,Jt.__scopeId="data-v-76cf9ed3";var Gt=Jt,qt=[{path:"/",name:"Home",component:I,meta:{layout:Me["default"]}},{path:"/auth/login",name:"login",component:ee,meta:{layout:Me["default"]}},{path:"/auth/register",name:"Register",component:xe,meta:{layout:Me["default"]}},{path:"/dashboard",name:"Dashboard",component:Nt,meta:{layout:Ue}},{path:"/reviews",name:"Reviews",component:$t,meta:{layout:Ue}},{path:"/watchlist",name:"Watchlist",component:Gt,meta:{layout:Ue}}],Qt=Object(p["a"])({history:Object(p["b"])("/"),routes:qt}),Xt=Qt,ea=a("5502"),ta=a("0e44"),aa=Object(ea["a"])({state:{userId:null},mutations:{setUserId:function(e,t){e.userId=t}},actions:{},modules:{},plugins:[Object(ta["a"])({storage:window.sessionStorage})]}),oa=a("65d1"),ra=a.n(oa),ca=a("8459"),ia=a.n(ca),na=(a("3873"),a("e1ae"),a("4121"),a("bddf"),Object(o["createApp"])(u));na.use(ra.a,{ripple:!0}).use(ia.a).use(aa).use(Xt).mount("#app")},"5f37":function(e,t){var a=/^[A-Za-z]{1,}[a-zA-Z0-9_.-]+@[a-zA-Z]+\.[a-zA-Z]{1,}$/,o="([A-ZĂÎȘȚÂ])+(?=.{1,40}$)[a-zA-ZĂÎȘȚÂăîșț]+(?:[-\\s][a-zA-ZĂÎȘȚÂăîșțâ]+)*$";e.exports={regex_email:a,regex_name:o}},"6f7a":function(e,t,a){"use strict";a("0f25")},7495:function(e,t){},a025:function(e,t,a){},aa4e:function(e,t,a){"use strict";var o=a("7495"),r=a.n(o);a.d(t,"default",(function(){return r.a}))},b3a9:function(e,t,a){},be87:function(e,t,a){},c7a7:function(e,t,a){},ca30:function(e,t,a){},d0a6:function(e,t,a){},d42e:function(e,t,a){"use strict";a("be87")},d7a5:function(e,t,a){"use strict";a("3a62")},ed73:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a("7a23"),r=Object(o["withScopeId"])("data-v-63361ebc");Object(o["pushScopeId"])("data-v-63361ebc");var c={class:"main"};Object(o["popScopeId"])();var i=r((function(e,t,a,r,i,n){return Object(o["openBlock"])(),Object(o["createBlock"])("div",c,[Object(o["renderSlot"])(e.$slots,"default")])}))},ef07:function(e,t,a){},efb9:function(e,t,a){"use strict";a("b3a9")},f1d6:function(e,t,a){"use strict";a("ef07")},f532:function(e,t,a){},f5bd:function(e,t,a){e.exports=a.p+"img/ghibli_logo.c07a6809.png"}});
//# sourceMappingURL=app.d5c9ccd5.js.map