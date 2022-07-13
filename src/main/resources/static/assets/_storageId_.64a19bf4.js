import{r as g,_ as G,L as O,O as A,o as J,ae as P,P as W,u as t,a as h,b as E,e as i,p as a,h as o,f as j,y as H,F as K,R as Q,k as X,S as Y,U as ee,J as m}from"./index.6488467e.js";import{b1 as I,b2 as te,l as oe,m as ae,b3 as le,r as ie}from"./base.5246a87f.js";/* empty css                *//* empty css               *//* empty css              */import"./scrollbar.6d9d1405.js";import{E as se,a as re}from"./select.d3beb672.js";import{E as ne}from"./popper.1003ca40.js";import"./tooltip.f118fcb0.js";import{E as de}from"./alert.a2f5c9bf.js";import{S as me}from"./SvgIcon.7cbe143f.js";import{Z as U,a as pe}from"./ZFormItem.b974e640.js";import{o as ce,p as ue}from"./admin-storage.d1316f69.js";import{u as R,r as _e}from"./common.82196ec4.js";import{S as fe}from"./sortable.esm.a99254e8.js";import{E as ve}from"./request.3411b6f3.js";import{E as he}from"./index.141771b6.js";import ge from"./readme-editor-dialog.6328b545.js";import{b as T}from"./route-block.9b0645f8.js";import{r as xe}from"./BadgeCheckIcon.f6e583bb.js";import{E as be}from"./index.27234134.js";import{v as we}from"./directive.9df9da2e.js";import"./index.4857ebfe.js";import"./index.70f68615.js";import"./index.47487db2.js";import"./event.776e7e11.js";import"./scroll.ea1214b5.js";import"./isEqual.1784d07c.js";import"./debounce.f5520441.js";import"./validator.8517d1a7.js";import"./focus-trap.13160972.js";import"./event.3ec63147.js";import"./index.c92ded65.js";import"./index.62a50e96.js";import"./dialog.b96d7ddd.js";import"./overlay.590b2912.js";import"./refs.cf25bef5.js";let s=g([]),S=g(!1);function ke(c,x){let u=x.params.storageId;const b=()=>{ce(u).then(d=>{s.value=d.data,s.value.length===0&&f(),w()})},w=()=>{const d=document.querySelector(".z-form-body");fe.create(d,{draggable:".expression-item",filter:".el-button, .editor-input",onEnd:e=>{if(e.oldIndex===e.newIndex)return;const r=s.value.splice(e.oldIndex-1,1)[0];s.value.splice(e.newIndex-1,0,r)}})},_=()=>{if(!s.value.find(e=>{if(R.isEmpty(e.description)||R.isEmpty(e.expression)||R.isEmpty(e.readmeText))return ve.warning("\u8BF7\u68C0\u67E5\u6570\u636E\u586B\u5199\u662F\u5426\u5B8C\u6574"),!0})){S.value=!0;for(let e=0;e<s.value.length;e++){let r=s.value[e];r.id=e+1}ue(u,s.value).then(()=>{he.confirm("\u4FDD\u5B58\u6210\u529F, \u662F\u5426\u8FD4\u56DE\u5B58\u50A8\u6E90\u5217\u8868\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"success",callback:e=>{e==="confirm"&&c.push("/admin/storage-list")}})}).finally(()=>{S.value=!1})}},f=()=>{s.value.push({description:"\u8868\u8FBE\u5F0F - "+(s.value.length+1),expression:"",readmeText:"",displayMode:"top",storageId:u})};return{loading:S,loadReadmeData:b,readmeList:s,addReadmeItem:f,deleteReadmeItem:d=>{s.value.splice(d,1)},saveReadmeData:_}}const p=c=>(Y("data-v-64c46615"),c=c(),ee(),c),ye={class:"flex"},Ve=p(()=>a("span",null,"\u76EE\u5F55\u6587\u6863",-1)),Ee=p(()=>a("div",{class:"rules-tips"},"Glob \u8868\u8FBE\u5F0F\u89C4\u5219\uFF1A",-1)),Ie=p(()=>a("div",{class:"rules-tips"},[a("b",null,"/"),m(": \u6839\u76EE\u5F55, \u5982 /, \u8868\u793A\u6839\u8DEF\u5F84\u4E0B\u4F1A\u52A0\u8F7D\u6B64\u6587\u6863\u663E\u793A.")],-1)),Re=p(()=>a("div",{class:"rules-tips"},[a("b",null,"*"),m("\uFF1A\u5355\u7EA7\u8DEF\u5F84\u901A\u914D\u7B26\uFF0C\u5982\u8868\u8FBE\u5F0F /*\uFF0C\u8868\u793A\u6839\u8DEF\u5F84\u4E0B\u7684\u76F4\u63A5\u5B50\u6587\u4EF6\u5939\u4F1A\u52A0\u8F7D\u6B64\u6587\u6863\u663E\u793A.")],-1)),Se=p(()=>a("div",{class:"rules-tips"},[a("b",null,"**"),m("\uFF1A\u591A\u7EA7\u8DEF\u5F84\u901A\u914D\u7B26\uFF0C\u5982\u8868\u8FBE\u5F0F /music/**\uFF0C\u8868\u793A /music \u6587\u4EF6\u5939\u53CA\u4EE5\u4E0B\u6240\u6709\u6587\u4EF6\u5939\u90FD\u4F1A\u52A0\u8F7D\u6B64\u6587\u6863.")],-1)),ze=p(()=>a("div",{class:"rules-tips"},"\u6CE8\uFF1A\u7CFB\u7EDF\u5339\u914D\u5230\u7B2C\u4E00\u4E2A\u7B26\u5408\u7684\u89C4\u5219\u5C31\u4F1A\u53D6\u6587\u6863\u8FDB\u884C\u663E\u793A\uFF0C\u6240\u4EE5\u8BF7\u8C03\u6574\u597D\u89C4\u5219\u987A\u5E8F\uFF0C\u4E0B\u65B9\u89C4\u5219\u53EF\u8FDB\u884C\u62D6\u62FD\u6392\u5E8F\u3002",-1)),Ce={class:"rules-tips-link"},Ue={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},Te=p(()=>a("span",null,"\u53C2\u8003\u6587\u7AE0 (Wikipedia)",-1)),Be={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},Fe=m("\u53C2\u8003\u6587\u7AE0 (\u962E\u4E00\u5CF0)"),Me={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},De=m("\u53C2\u8003\u6587\u7AE0 (Github)"),Le={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},qe=m("\u6DFB\u52A0\u66F4\u591A"),Ne=m("\u4FDD\u5B58\u8BBE\u7F6E"),B={__name:"[storageId]",setup(c){let x=O(),u=A();const{loading:b,loadReadmeData:w,readmeList:_,addReadmeItem:f,deleteReadmeItem:z,saveReadmeData:d}=ke(u,x);J(()=>{w()});let e=g({}),r=g(!1);const F=C=>{r.value=!0,e.value=C};return(C,v)=>{const M=me,D=P("router-link"),L=de,k=be,q=ne,y=se,N=re,V=ie,Z=we;return W((h(),E(pe,{model:t(_),class:"zfile-admin-readme-form"},{"form-title":i(()=>[a("div",ye,[a("div",null,[o(D,{to:"/admin/storage-list"},{default:i(()=>[o(M,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]),_:1}),Ve])])]),"form-sub-title":i(()=>[o(L,{closable:!1,type:"info"},{default:i(()=>[Ee,Ie,Re,Se,ze,a("div",Ce,[a("a",Ue,[o(t(I),{class:"inline mr-1"}),Te]),a("a",Be,[o(t(I),{class:"inline mr-1"}),Fe]),a("a",Me,[o(t(I),{class:"inline mr-1"}),De])])]),_:1})]),footer:i(()=>[o(V,{type:"primary",size:"default",icon:t(xe),onClick:t(d)},{default:i(()=>[Ne]),_:1},8,["icon","onClick"])]),default:i(()=>[(h(!0),j(K,null,H(t(_),(l,$)=>(h(),E(U,{required:!0,key:l,class:"expression-item"},{default:i(()=>[a("div",Le,[o(q,{content:"\u6B64\u5904\u53EF\u586B\u5199\u8868\u8FBE\u4E66\u63CF\u8FF0\uFF0C\u7528\u4E8E\u8F85\u52A9\u8BB0\u5FC6\uFF0C\u9632\u6B62\u65F6\u95F4\u8FC7\u957F\u540E\u4E0D\u77E5\u9053\u8868\u8FBE\u5F0F\u542B\u4E49.",placement:"top"},{default:i(()=>[o(k,{"prefix-icon":t(te),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F\u63CF\u8FF0",modelValue:l.description,"onUpdate:modelValue":n=>l.description=n},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])]),_:2},1024),o(k,{"prefix-icon":t(_e),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F",modelValue:l.expression,"onUpdate:modelValue":n=>l.expression=n},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),o(k,{class:"editor-input",onClick:n=>F(l),readonly:"","prefix-icon":t(oe),placeholder:"\u8BF7\u70B9\u51FB\u7F16\u8F91\u6587\u6863",modelValue:l.readmeText,"onUpdate:modelValue":n=>l.readmeText=n},null,8,["onClick","prefix-icon","modelValue","onUpdate:modelValue"]),o(N,{class:"editor-input",modelValue:l.displayMode,"onUpdate:modelValue":n=>l.displayMode=n},{default:i(()=>[o(y,{label:"\u9876\u90E8\u663E\u793A",value:"top"}),o(y,{label:"\u5E95\u90E8\u663E\u793A",value:"bottom"}),o(y,{label:"\u5F39\u7A97\u663E\u793A",value:"dialog"})]),_:2},1032,["modelValue","onUpdate:modelValue"]),o(V,{type:"danger",onClick:n=>t(z)($),icon:t(ae)},null,8,["onClick","icon"])])]),_:2},1024))),128)),o(U,null,{default:i(()=>[o(V,{type:"primary",size:"default",icon:t(le),onClick:t(f)},{default:i(()=>[qe]),_:1},8,["icon","onClick"])]),_:1}),t(r)?(h(),E(ge,{key:0,modelValue:t(e).readmeText,"onUpdate:modelValue":v[0]||(v[0]=l=>t(e).readmeText=l),visible:t(r),"onUpdate:visible":v[1]||(v[1]=l=>Q(r)?r.value=l:r=l)},null,8,["modelValue","visible"])):X("",!0)]),_:1},8,["model"])),[[Z,t(b)]])}}};typeof T=="function"&&T(B);var yt=G(B,[["__scopeId","data-v-64c46615"]]);export{yt as default};