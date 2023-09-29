import{T as p,C as _,V as f,_ as h}from"./home-76cb8dae.js";import{_ as b,B as v,l as V,o as g}from"./VRow-cf69e8bd.js";import{H as a,E as x,I as w,m as t,G as o,J as y,O as e,P as B}from"./index-2b44e3df.js";import{V as C}from"./VForm-1a802e99.js";const S={components:{Textfield:p,Card:_,Button:v},data(){return{showPassword:!1,email:null,dateOfBirth:null,form:!1}},methods:{onSubmit(){this.form&&(this.loading=!0,setTimeout(()=>this.loading=!1,2e3),this.$router.push("/verify"))},required(i){return!!i||"Field is required"}}},k=e("div",{class:"video-background"},[e("video",{autoplay:"",muted:"",loop:""},[e("source",{src:h,type:"video/mp4"})]),e("div",{class:"overlay"})],-1),T=e("div",{class:"text-center"},[e("span",{class:"text-h4 font-weight-bold text-white"},"Sign up")],-1),q=e("div",{class:"text-center mt-2"},[e("span",{class:"text-subtitle-2 text-white"}," Fill in the details below ")],-1),F={class:"mt-4 text-center text-subtitle-2"},O=e("span",{class:"text-white"},"Already have an account? ",-1),Y=e("span",null,"Sign in",-1);function E(i,s,M,U,l,r){const d=a("Textfield"),u=a("Button"),m=a("router-link"),c=a("Card");return x(),w(y,null,[k,t(f,{class:"fill-height"},{default:o(()=>[t(V,{class:"justify-center"},{default:o(()=>[t(c,{width:"400",class:"pa-5 card-opacity"},{title:o(()=>[T]),subtitle:o(()=>[q]),text:o(()=>[t(C,{modelValue:l.form,"onUpdate:modelValue":s[2]||(s[2]=n=>l.form=n),onSubmit:B(r.onSubmit,["prevent"])},{default:o(()=>[t(d,{modelValue:l.email,"onUpdate:modelValue":s[0]||(s[0]=n=>l.email=n),readonly:i.loading,rules:[r.required],placeholder:"Email",visible:!0,class:"mb-3",color:"white",variant:"solo"},null,8,["modelValue","readonly","rules"]),t(d,{modelValue:l.dateOfBirth,"onUpdate:modelValue":s[1]||(s[1]=n=>l.dateOfBirth=n),readonly:i.loading,rules:[r.required],placeholder:"YYYY-MM-DD",visible:!0,class:"mb-3",color:"white",variant:"solo"},{"prepend-inner":o(()=>[t(g,{color:"black",icon:"$calendar"})]),_:1},8,["modelValue","readonly","rules"]),t(u,{disabled:!l.form,loading:i.loading,type:"submit",class:"mt-5",label:"Continue",block:""},null,8,["disabled","loading"])]),_:1},8,["modelValue","onSubmit"]),e("div",F,[O,t(m,{to:"/",class:"text-white"},{default:o(()=>[Y]),_:1})])]),_:1})]),_:1})]),_:1})],64)}const j=b(S,[["render",E]]);export{j as default};