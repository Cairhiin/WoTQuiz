(function(){"use strict";var e={897:function(e,t,n){var o=n(963),r=n(252),s=n(577);const a={class:"main"},i={class:"score"};function c(e,t,n,o,c,d){const l=(0,r.up)("Navbar"),u=(0,r.up)("Question");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("header",null,[(0,r.Wm)(l)]),(0,r._)("main",a,[(0,r.Wm)(u,{isSuccess:c.isSuccess,data:c.questions[c.questionId],onUpdateScore:t[0]||(t[0]=e=>d.handleAnswer(e)),onNextQuestion:t[1]||(t[1]=()=>d.handleNextQuestion())},null,8,["isSuccess","data"]),(0,r._)("div",i,"Your score: "+(0,s.zw)(c.score),1)])],64)}const d=e=>((0,r.dD)("data-v-67c48b86"),e=e(),(0,r.Cn)(),e),l={class:"nav"},u=d((()=>(0,r._)("h1",null,"Wheel of Time Quiz",-1))),h={class:"right-menu"},m={class:"theme-slider"},f=d((()=>(0,r._)("label",{for:"theme-select"},null,-1)));function p(e,t,n,s,a,i){const c=(0,r.up)("font-awesome-icon");return(0,r.wg)(),(0,r.iD)("nav",l,[u,(0,r._)("div",h,[(0,r.Wm)(c,{icon:"fa-solid fa-sun"}),(0,r._)("div",m,[(0,r.wy)((0,r._)("input",{type:"checkbox",id:"theme-select","onUpdate:modelValue":t[0]||(t[0]=e=>a.theme=e)},null,512),[[o.e8,a.theme]]),f]),(0,r.Wm)(c,{icon:"fa-solid fa-moon"})])])}var v={name:"MainNav",data(){return{theme:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}},watch:{theme(e){this.setTheme(e)}},methods:{setTheme(e){!0===e&&(document.documentElement.style.setProperty("--color-background","var(--color-dark-400)"),document.documentElement.style.setProperty("--color-text","var(--color-light-400)"),document.documentElement.style.setProperty("--color-border","var(--color-dark-500)")),!1===e&&(document.documentElement.style.setProperty("--color-background","var(--color-light-400)"),document.documentElement.style.setProperty("--color-text","var(--color-dark-400)"),document.documentElement.style.setProperty("--color-border","var(--color-light-500)"))}}},w=n(744);const g=(0,w.Z)(v,[["render",p],["__scopeId","data-v-67c48b86"]]);var y=g;const b={class:"answers"},k=["onClick"];function _(e,t,n,o,a,i){const c=(0,r.up)("Button"),d=(0,r.up)("Card");return n.data?((0,r.wg)(),(0,r.j4)(d,{key:0,header:n.data.title,isSuccess:n.isSuccess},{default:(0,r.w5)((()=>[(0,r._)("div",b,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(n.data.answers,((e,t)=>((0,r.wg)(),(0,r.iD)("ul",{key:t},[(0,r._)("li",{class:(0,s.C_)("answer "+(a.selectedId!==e.id?"":n.isSuccess?"right":"wrong")),onClick:t=>i.selectAnswer(e.id)},(0,s.zw)(`${t+1} ${e.name}`),11,k)])))),128))]),null!==a.selectedId?((0,r.wg)(),(0,r.j4)(c,{key:0,onClick:i.handleNextQuestion,variant:"primary",size:"small"},{default:(0,r.w5)((()=>[(0,r.Uk)("NEXT")])),_:1},8,["onClick"])):(0,r.kq)("",!0)])),_:1},8,["header","isSuccess"])):(0,r.kq)("",!0)}const I={class:"card"},S={class:"card-header"},C={class:"card-content"};function x(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("div",I,[(0,r._)("div",S,[(0,r._)("h3",null,(0,s.zw)(n.header),1)]),(0,r._)("div",C,[(0,r.WI)(e.$slots,"default",{},void 0,!0)])])}var O={name:"CardComponent",props:{header:String}};const j=(0,w.Z)(O,[["render",x],["__scopeId","data-v-07abe0d0"]]);var q=j;function N(e,t,n,o,a,i){return(0,r.wg)(),(0,r.iD)("button",{onClick:t[0]||(t[0]=(...e)=>n.onClick&&n.onClick(...e)),class:(0,s.C_)(`${n.variant} ${n.size} ${n.outline}`)},[(0,r.WI)(e.$slots,"default",{},void 0,!0)],2)}var Q={name:"ButtonComponent",data(){return{}},props:{onClick:{type:Function,required:!0},variant:String,size:String,outline:String},emits:["handleClick"]};const D=(0,w.Z)(Q,[["render",N],["__scopeId","data-v-f729dc24"]]);var $=D,E={name:"QuestionComponent",data(){return{selectedId:null}},components:{Card:q,Button:$},props:{data:Object,isSuccess:Boolean},methods:{selectAnswer(e){this.selectedId||(this.selectedId=e,e===this.data.correctId?this.$emit("updateScore",!0):this.$emit("updateScore",!1))},handleNextQuestion(){this.$emit("nextQuestion"),this.selectedId=null}},emits:["updateScore","nextQuestion"]};const W=(0,w.Z)(E,[["render",_],["__scopeId","data-v-264d8102"]]);var P=W;const T=[{title:"Which of these is NOT a forsaken?",answers:[{id:1,name:"Ishamael"},{id:2,name:"Graendal"},{id:3,name:"Demandred"},{id:4,name:"Verin"}],correctId:4},{title:"What is the name of the leather headband worn by the Malkieri?",answers:[{id:1,name:"Shoufa"},{id:2,name:"Hadori"},{id:3,name:"Cachecol"},{id:4,name:"Kesiera"}],correctId:2},{title:"Moiraine wears a jeweled pendant on a chain as a hair ornament. She uses it a focus for what ability?",answers:[{id:1,name:"Eavesdropping"},{id:2,name:"Dreaming"},{id:3,name:"Travelling"},{id:4,name:"Healing"}],correctId:1}];var z=T,B={data(){return{isSuccess:null,score:0,questionId:0,questions:[]}},components:{Navbar:y,Question:P},created(){this.questions=z},methods:{handleAnswer(e){e?(this.score+=5,this.isSuccess=!0):this.isSuccess=!1},handleNextQuestion(){this.questionId<this.questions.length-1?(this.questionId++,this.isSuccess=null):console.log("Final score: ",this.score)}}};const M=(0,w.Z)(B,[["render",c],["__scopeId","data-v-00b38864"]]);var Z=M,A=n(636),F=n(810),H=n(417);A.vI.add(H.DBF),A.vI.add(H.enB),(0,o.ri)(Z).component("font-awesome-icon",F.GN).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,n),s.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,s){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],r=e[l][1],s=e[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,s<a&&(a=s));if(i){e.splice(l--,1);var d=r();void 0!==d&&(t=d)}}return t}s=s||0;for(var l=e.length;l>0&&e[l-1][2]>s;l--)e[l]=e[l-1];e[l]=[o,r,s]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,a=o[0],i=o[1],c=o[2],d=0;if(a.some((function(t){return 0!==e[t]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(c)var l=c(n)}for(t&&t(o);d<a.length;d++)s=a[d],n.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return n.O(l)},o=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(897)}));o=n.O(o)})();
//# sourceMappingURL=app.34db6503.js.map