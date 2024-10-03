"use strict";(self["webpackChunktask_tracker_vue"]=self["webpackChunktask_tracker_vue"]||[]).push([[770],{9770:function(e,t,o){o.r(t),o.d(t,{default:function(){return O}});var l=o(6768),n=o(4232),s=o(5130),a=o(5539);const c={class:"container"},i={class:"row mt-5 justify-content-between align-items-center m-auto"},d={class:"col-md-6 col-7 m-auto d-md-flex justify-content-md-end align-items-center text-center"},r={class:"mx-md-4 mx-2 fw-bold fs-5 mb-md-0 mb-3"},u={class:"row mt-4"},m={class:"col-md-10 col-10 m-auto mt-5 d-md-flex justify-content-md-between"},k={class:"card border-primary me-md-3 mb-3 mx-auto w-25"},f={class:"card-body text-primary"},p={key:0},b=["onClick"],h={class:"px-3"},g={href:""},L=["onClick"],y={key:1},x={class:"card border-primary me-md-3 mb-3 mx-auto w-25"},v={class:"card-body text-primary"},C={key:0},w=["onClick"],T={class:"px-3"},A={href:""},$=["onClick"],_={key:1},E={class:"card border-primary mb-3 mx-auto w-25"},X={class:"card-body"},D={key:0},S=["onClick"],B={class:"px-3"},K={href:""},z=["onClick"],I={key:1},j={class:"col-md-8 col-10 m-auto mt-3 mb-3"},F={class:"d-flex justify-content-between align-items-center"};function N(e,t,o,N,R,V){return(0,l.uX)(),(0,l.CE)("div",c,[(0,l.Lk)("div",i,[t[4]||(t[4]=(0,l.Lk)("div",{class:"col-md-4 col-12 px-md-0 px-5 mb-md-0 mb-3"},[(0,l.Lk)("img",{src:a,alt:"logo",class:"w-100 px-md-8 px-2"})],-1)),(0,l.Lk)("div",d,[(0,l.Lk)("p",r,"Hi! "+(0,n.v_)(N.username),1),(0,l.Lk)("a",{href:"",class:"text-secondary text-decoration-none",onClick:t[0]||(t[0]=(0,s.D$)(((...e)=>N.logout&&N.logout(...e)),["prevent"]))},"登出")])]),(0,l.Lk)("div",u,[(0,l.Lk)("form",{class:"col-md-8 col-11 m-auto d-flex justify-content-center align-items-center",onSubmit:t[3]||(t[3]=(0,s.D$)(((...e)=>N.addTodo&&N.addTodo(...e)),["prevent"]))},[(0,l.bo)((0,l.Lk)("select",{class:"form-select form-select-sm w-25 px-4 py-2 me-3","onUpdate:modelValue":t[1]||(t[1]=e=>N.todoCategory=e)},t[5]||(t[5]=[(0,l.Lk)("option",{value:"category",selected:"",disabled:""},"Todo Category",-1),(0,l.Lk)("option",{value:"personal"},"Personal",-1),(0,l.Lk)("option",{value:"family"},"Family",-1),(0,l.Lk)("option",{value:"work"},"Work",-1)]),512),[[s.u1,N.todoCategory]]),(0,l.bo)((0,l.Lk)("input",{type:"text",class:"form-control-lg w-75 border border-primary text-center",placeholder:"Add New Todo Now!","onUpdate:modelValue":t[2]||(t[2]=e=>N.newTodo=e)},null,512),[[s.Jo,N.newTodo]]),t[6]||(t[6]=(0,l.Lk)("button",{class:"btn"},[(0,l.Lk)("i",{class:"bi bi-plus-square fs-1 text-primary ms-2"})],-1))],32),(0,l.Lk)("div",m,[(0,l.Lk)("div",k,[t[10]||(t[10]=(0,l.Lk)("div",{class:"card-header fs-4 fw-bold p-3 text-center text-secondary"},"Personal",-1)),(0,l.Lk)("div",f,[N.todos.length>0?((0,l.uX)(),(0,l.CE)("ul",p,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(N.todos,(e=>((0,l.uX)(),(0,l.CE)("li",{class:"d-flex align-items-center",key:e.id},[(0,l.Lk)("button",{type:"button",class:(0,n.C4)(["btn btn-outline-primary d-flex align-items-center w-100 py-1 px-2 mb-3",{active:null!==e.completed_at}]),onClick:(0,s.D$)((t=>N.doneTodo(e.id)),["prevent"])},[t[7]||(t[7]=(0,l.Lk)("i",{class:"bi bi-check-circle-fill text-light fs-4"},null,-1)),(0,l.Lk)("p",h,(0,n.v_)(e.content),1)],10,b),t[8]||(t[8]=(0,l.Lk)("a",{href:""},[(0,l.Lk)("i",{class:"fa-solid fa-pencil d-inline-block mb-3 ms-2"})],-1)),(0,l.Lk)("a",g,[(0,l.Lk)("i",{class:"fa-regular fa-trash-can d-inline-block mb-3 ms-2",onClick:(0,s.D$)((t=>N.deleteTodo(e.id)),["prevent"])},null,8,L)])])))),128))])):((0,l.uX)(),(0,l.CE)("ul",y,t[9]||(t[9]=[(0,l.Lk)("li",{class:"fs-5 text-secondary text-center"},"Nothing Todo...",-1)])))])]),(0,l.Lk)("div",x,[t[14]||(t[14]=(0,l.Lk)("div",{class:"card-header fs-4 fw-bold p-3 text-center text-secondary"},"Family",-1)),(0,l.Lk)("div",v,[N.todos.length>0?((0,l.uX)(),(0,l.CE)("ul",C,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(N.todos,(e=>((0,l.uX)(),(0,l.CE)("li",{class:"d-flex align-items-center",key:e.id},[(0,l.Lk)("button",{type:"button",class:(0,n.C4)(["btn btn-outline-primary d-flex align-items-center w-100 py-1 px-2 mb-3",{active:null!==e.completed_at}]),onClick:(0,s.D$)((t=>N.doneTodo(e.id)),["prevent"])},[t[11]||(t[11]=(0,l.Lk)("i",{class:"bi bi-check-circle-fill text-light fs-4"},null,-1)),(0,l.Lk)("p",T,(0,n.v_)(e.content),1)],10,w),t[12]||(t[12]=(0,l.Lk)("a",{href:""},[(0,l.Lk)("i",{class:"fa-solid fa-pencil d-inline-block mb-3 ms-2"})],-1)),(0,l.Lk)("a",A,[(0,l.Lk)("i",{class:"fa-regular fa-trash-can d-inline-block mb-3 ms-2",onClick:(0,s.D$)((t=>N.deleteTodo(e.id)),["prevent"])},null,8,$)])])))),128))])):((0,l.uX)(),(0,l.CE)("ul",_,t[13]||(t[13]=[(0,l.Lk)("li",{class:"fs-5 text-secondary text-center"},"Nothing Todo...",-1)])))])]),(0,l.Lk)("div",E,[t[18]||(t[18]=(0,l.Lk)("div",{class:"card-header fs-4 fw-bold p-3 text-center text-secondary"},"Work",-1)),(0,l.Lk)("div",X,[N.todos.length>0?((0,l.uX)(),(0,l.CE)("ul",D,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(N.todos,(e=>((0,l.uX)(),(0,l.CE)("li",{class:"d-flex align-items-center",key:e.id},[(0,l.Lk)("button",{type:"button",class:(0,n.C4)(["btn btn-outline-primary d-flex align-items-center w-100 py-1 px-2 mb-3",{active:null!==e.completed_at}]),onClick:(0,s.D$)((t=>N.doneTodo(e.id)),["prevent"])},[t[15]||(t[15]=(0,l.Lk)("i",{class:"bi bi-check-circle-fill text-light fs-4"},null,-1)),(0,l.Lk)("p",B,(0,n.v_)(e.content),1)],10,S),t[16]||(t[16]=(0,l.Lk)("a",{href:""},[(0,l.Lk)("i",{class:"fa-solid fa-pencil d-inline-block mb-3 ms-2"})],-1)),(0,l.Lk)("a",K,[(0,l.Lk)("i",{class:"fa-regular fa-trash-can d-inline-block mb-3 ms-2",onClick:(0,s.D$)((t=>N.deleteTodo(e.id)),["prevent"])},null,8,z)])])))),128))])):((0,l.uX)(),(0,l.CE)("ul",I,t[17]||(t[17]=[(0,l.Lk)("li",{class:"fs-5 text-secondary text-center"},"Nothing Todo...",-1)])))])])]),(0,l.Lk)("div",j,[(0,l.Lk)("ul",F,[(0,l.Lk)("li",null,"尚有 "+(0,n.v_)(N.undone.length)+" 項待辦",1),t[19]||(t[19]=(0,l.Lk)("li",{class:"btn btn-outline-primary"},"清除已完成項目",-1))])])])])}o(4114);var R=o(144),V=o(4373),P=o(4874),U=o.n(P),W=o(4103),q={name:"app",setup(){const e="https://todoo.5xcamp.us",t=localStorage.getItem("token"),o=localStorage.getItem("username"),n=(0,R.KR)("Todo Category");localStorage.setItem("todoCategory",n);const s=()=>{const o={headers:{Authorization:t}};V.A.delete(`${e}/users/sign_out`,o).then((e=>{b(),console.log(e),setTimeout((()=>W.A.push("/")),1500)}))},a=(0,R.KR)([]),c=()=>{const o={headers:{Authorization:t}};V.A.get(`${e}/todos`,o).then((e=>{a.value=e.data.todos,console.log(e.data.todos)})).catch((e=>console.log(e)))};(0,l.sV)((()=>{c()}));const i=a.value.filter((e=>null===e.completed_at)),d=(0,R.KR)(""),r=()=>{if(""===d.value)return void f();const o={todo:{content:d.value.trim()}},l={headers:{Authorization:t}};V.A.post(`${e}/todos`,o,l).then((e=>{p();const t={};t.id=e.data.id,t.content=e.data.content,a.value.unshift(t),c()})).catch((e=>console.log(e))),d.value=""},u=o=>{const l={todo:{content:d.value}},n={headers:{Authorization:t}};V.A.put(`${e}/todos/${o}`,l,n).then((e=>{console.log(e)})).catch((e=>console.log(e)))},m=o=>{const l={headers:{Authorization:t}};V.A.patch(`${e}/todos/${o}/toggle`,{},l).then((e=>{h(),c()})).catch((e=>console.log(e)))},k=o=>{const l={headers:{Authorization:t}};V.A.delete(`${e}/todos/${o}`,l).then((e=>{console.log(e),g(),setTimeout((()=>c()),1500)})).catch((e=>console.log(e)))},f=()=>{U().fire({text:"新增欄位不得空白！",confirmButtonText:"OK",confirmButtonColor:"#A7C4B5",width:300})},p=()=>{U().fire({title:"Add Success!",showConfirmButton:!1,timer:1e3,width:300})},b=()=>{U().fire({title:"Logout Success!",showConfirmButton:!1,timer:1500,width:400})},h=()=>{U().fire({title:"Todo Status Change.",showConfirmButton:!1,timer:1500,width:400})},g=()=>{U().fire({title:"Delete Success!",showConfirmButton:!1,timer:1500,width:400})};return{username:o,newTodo:d,todos:a,undone:i,todoCategory:n,getTodo:c,addTodo:r,logout:s,editTodo:u,deleteTodo:k,doneTodo:m}}},H=o(1241);const J=(0,H.A)(q,[["render",N]]);var O=J}}]);
//# sourceMappingURL=770.6a11eb88.js.map