(function(){"use strict";var e={420:function(e,n,t){var a=t(963),o=t(252),r=t(577);const i={class:"main"};function s(e,n,t,a,s,d){const c=(0,o.up)("Navbar"),l=(0,o.up)("Question"),m=(0,o.up)("Card");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",null,[(0,o.Wm)(c)]),(0,o._)("main",i,[s.isFinished?(0,o.kq)("",!0):((0,o.wg)(),(0,o.j4)(l,{key:0,isSuccess:s.isSuccess,data:s.questions[s.questionId],index:s.questionId,onUpdateScore:n[0]||(n[0]=e=>d.handleAnswer(e)),onNextQuestion:n[1]||(n[1]=()=>d.handleNextQuestion())},null,8,["isSuccess","data","index"])),s.isFinished?((0,o.wg)(),(0,o.j4)(m,{key:1,header:"Wheel of Time Trivia score"},{default:(0,o.w5)((()=>[(0,o.Uk)("You scored: "+(0,r.zw)(s.score),1)])),_:1})):(0,o.kq)("",!0)])],64)}const d=e=>((0,o.dD)("data-v-1aa180ca"),e=e(),(0,o.Cn)(),e),c={class:"nav"},l=d((()=>(0,o._)("h1",null,"Wheel of Time Quiz",-1))),m={class:"right-menu"},h={class:"theme-slider"},u=d((()=>(0,o._)("label",{for:"theme-select"},null,-1)));function f(e,n,t,r,i,s){const d=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("nav",c,[l,(0,o._)("div",m,[(0,o.Wm)(d,{icon:"fa-solid fa-sun"}),(0,o._)("div",h,[(0,o.wy)((0,o._)("input",{type:"checkbox",id:"theme-select","onUpdate:modelValue":n[0]||(n[0]=e=>i.theme=e)},null,512),[[a.e8,i.theme]]),u]),(0,o.Wm)(d,{icon:"fa-solid fa-moon"})])])}var g={name:"MainNav",data(){return{theme:window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}},watch:{theme(e){this.setTheme(e)}},methods:{setTheme(e){!0===e&&(document.documentElement.style.setProperty("--color-background","var(--color-dark-400)"),document.documentElement.style.setProperty("--color-text","var(--color-light-400)"),document.documentElement.style.setProperty("--color-border","var(--color-dark-500)"),document.documentElement.style.setProperty("--color-background-highlight-1","var(--color-dark-300)"),document.documentElement.style.setProperty("--color-background-highlight-2","var(--color-dark-200)"),document.documentElement.style.setProperty("--color-text-highlight-1","var(--color-light-500)"),document.documentElement.style.setProperty("--color-text-highlight-2","var(--color-light-600)")),!1===e&&(document.documentElement.style.setProperty("--color-background","var(--color-light-400)"),document.documentElement.style.setProperty("--color-text","var(--color-dark-400)"),document.documentElement.style.setProperty("--color-border","var(--color-light-500)"),document.documentElement.style.setProperty("--color-background-highlight-1","var(--color-light-500)"),document.documentElement.style.setProperty("--color-background-highlight-2","var(--color-light-600)"),document.documentElement.style.setProperty("--color-text-highlight-1","var(--color-dark-300)"),document.documentElement.style.setProperty("--color-text-highlight-2","var(--color-dark-200)"))}}},w=t(744);const v=(0,w.Z)(g,[["render",f],["__scopeId","data-v-1aa180ca"]]);var p=v;const y={class:"card"},k={class:"card-header"},b={class:"card-content"};function I(e,n,t,a,i,s){const d=(0,o.Q2)("motion-slide-bottom");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("div",k,[(0,o._)("h3",null,(0,r.zw)(t.header),1)]),(0,o._)("div",b,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])])),[[d]])}var _={name:"CardComponent",props:{header:String}};const S=(0,w.Z)(_,[["render",I],["__scopeId","data-v-4f61f7bc"]]);var C=S;const x={class:"answers"},j=["onClick"],E={class:"button-bar"};function T(e,n,t,a,i,s){const d=(0,o.up)("Button"),c=(0,o.up)("Card");return t.data?((0,o.wg)(),(0,o.j4)(c,{key:0,header:`Question ${t.index+1} of 10: ${t.data.title}`,isSuccess:t.isSuccess},{default:(0,o.w5)((()=>[(0,o._)("div",x,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.data.answers,((e,n)=>((0,o.wg)(),(0,o.iD)("ul",{key:n},[(0,o._)("li",{class:(0,r.C_)("answer "+(i.selectedId!==e.id?"":t.isSuccess?"right":"wrong")),onClick:n=>s.selectAnswer(e.id)},(0,r.zw)(`${n+1} ${e.name}`),11,j)])))),128))]),(0,o._)("div",E,[null!==i.selectedId?((0,o.wg)(),(0,o.j4)(d,{key:0,onClick:s.handleNextQuestion,variant:"primary",size:"small"},{default:(0,o.w5)((()=>[(0,o.Uk)("NEXT")])),_:1},8,["onClick"])):(0,o.kq)("",!0)])])),_:1},8,["header","isSuccess"])):(0,o.kq)("",!0)}function D(e,n,t,a,i,s){return(0,o.wg)(),(0,o.iD)("button",{onClick:n[0]||(n[0]=(...e)=>t.onClick&&t.onClick(...e)),class:(0,r.C_)(`${t.variant} ${t.size} ${t.outline}`)},[(0,o.WI)(e.$slots,"default",{},void 0,!0)],2)}var P={name:"ButtonComponent",data(){return{}},props:{onClick:{type:Function,required:!0},variant:String,size:String,outline:String},emits:["handleClick"]};const M=(0,w.Z)(P,[["render",D],["__scopeId","data-v-489d09a4"]]);var N=M,q={name:"QuestionComponent",data(){return{selectedId:null}},components:{Card:C,Button:N},props:{data:Object,isSuccess:Boolean,index:Number},methods:{selectAnswer(e){this.selectedId||(this.selectedId=e,e===this.data.correctId?this.$emit("updateScore",!0):this.$emit("updateScore",!1))},handleNextQuestion(){this.$emit("nextQuestion"),this.selectedId=null}},emits:["updateScore","nextQuestion"]};const F=(0,w.Z)(q,[["render",T],["__scopeId","data-v-6e1d7b65"]]);var W=F;const A=[{title:"Which of these is NOT a forsaken?",answers:[{id:1,name:"Ishamael"},{id:2,name:"Graendal"},{id:3,name:"Demandred"},{id:4,name:"Verin"}],correctId:4},{title:"What is the name of the leather headband worn by the Malkieri?",answers:[{id:1,name:"Shoufa"},{id:2,name:"Hadori"},{id:3,name:"Cachecol"},{id:4,name:"Kesiera"}],correctId:2},{title:"Moiraine wears a jeweled pendant on a chain as a hair ornament. She uses it a focus for what ability?",answers:[{id:1,name:"Eavesdropping"},{id:2,name:"Dreaming"},{id:3,name:"Travelling"},{id:4,name:"Healing"}],correctId:1},{title:"In Fal Dara, who stole Mat Cauthon's dagger from Shadar Logoth?",answers:[{id:1,name:"Loial"},{id:2,name:"Ingtar"},{id:3,name:"Padan Fain"},{id:4,name:"Noal"}],correctId:3},{title:"Who names Perrin as Young Bull?",answers:[{id:1,name:"Moiraine"},{id:2,name:"Hopper"},{id:3,name:"Elyas"},{id:4,name:"Gaul"}],correctId:2},{title:"How many ajahs are there",answers:[{id:1,name:"Five"},{id:2,name:"Six"},{id:3,name:"Eight"},{id:4,name:"Ten"}],correctId:3},{title:"What does the Aiel word ji'e'toh mean?",answers:[{id:1,name:"Death and life"},{id:2,name:"Glory in death"},{id:3,name:"Death before shame"},{id:4,name:"Honor and duty"}],correctId:4},{title:"Which of the following is not an Aiel warrior society?",answers:[{id:1,name:"Jenn Tomanelle"},{id:2,name:"Far Dareis Mai"},{id:3,name:"Mera'din"},{id:4,name:"Sha'mad Conde"}],correctId:1},{title:"Elayne Trakand belongs to which ajah?",answers:[{id:1,name:"The red ajah"},{id:2,name:"The blue ajah"},{id:3,name:"The yellow ajah"},{id:4,name:"The green ajah"}],correctId:4},{title:"Min Farshaw meets Rand first in which city?",answers:[{id:1,name:"Baerlon"},{id:2,name:"Cairhien"},{id:3,name:"Fal Dara"},{id:4,name:"Tar Valon"}],correctId:1},{title:"Who created the Trollocs?",answers:[{id:1,name:"Ishamael"},{id:2,name:"Demandred"},{id:3,name:"Moghedien"},{id:4,name:"Aginor"}],correctId:4},{title:"Who are the two strongest forsaken?",answers:[{id:1,name:"Asmodean and Aginor"},{id:2,name:"Lanfear and Demandred"},{id:3,name:"Rahvin and Ishamael"},{id:4,name:"Semirhage and Mesaana"}],correctId:3},{title:"Myrddraal are known by many names often depending on the region; which is not a correct name?",answers:[{id:1,name:"Fade"},{id:2,name:"Nightwalkers"},{id:3,name:"Halfman"},{id:4,name:"Neverborn"}],correctId:2},{title:"Somestha, aka the Green Man, dies by the hand of?",answers:[{id:1,name:"Balthamel"},{id:2,name:"Lanfear"},{id:3,name:"Asmodean"},{id:4,name:"Aginor"}],correctId:1},{title:"Seanchan leash women who can channel saidar; what is the name of this silvery leash?",answers:[{id:1,name:"Damane"},{id:2,name:"Sul'dam"},{id:3,name:"A'dam"},{id:4,name:"Angreal"}],correctId:3}];var O=A;function Q(e){let n,t=e.length;while(0!=t)n=Math.floor(Math.random()*t),t--,[e[t],e[n]]=[e[n],e[t]];return e}var $={data(){return{isSuccess:null,score:0,questionId:0,questions:[],isFinished:!1}},components:{Card:C,Navbar:p,Question:W},created(){this.questions=Q(O).slice(0,10)},methods:{handleAnswer(e){e?(this.score+=5,this.isSuccess=!0):this.isSuccess=!1},handleNextQuestion(){this.questionId<this.questions.length-1?(this.questionId++,this.isSuccess=null):this.isFinished=!0}}};const B=(0,w.Z)($,[["render",s],["__scopeId","data-v-58e007b0"]]);var H=B,z=t(636),G=t(810),Z=t(417),L=t(378);z.vI.add(Z.DBF),z.vI.add(Z.enB);const U=(0,a.ri)(H).component("font-awesome-icon",G.GN);U.use(L.tc),U.mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var r=n[a]={exports:{}};return e[a](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,r){if(!a){var i=1/0;for(l=0;l<e.length;l++){a=e[l][0],o=e[l][1],r=e[l][2];for(var s=!0,d=0;d<a.length;d++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](a[d])}))?a.splice(d--,1):(s=!1,r<i&&(i=r));if(s){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[a,o,r]}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,r,i=a[0],s=a[1],d=a[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(d)var l=d(t)}for(n&&n(a);c<i.length;c++)r=i[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},a=self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(420)}));a=t.O(a)})();
//# sourceMappingURL=app.972035d8.js.map