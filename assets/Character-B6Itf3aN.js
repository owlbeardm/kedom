import{_ as C}from"./plugin-vue_export-helper-DlAUqK2U.js";import{f as o,r as n,o as r,c as g,a as d,l as _,h as v,F as B,d as b}from"./app-8QPily0h.js";const y=b("h1",null,"Создание персонажа",-1),x={__name:"Character",setup(N){const s=o(),c=o(),t=o(),l=o();return(V,e)=>{var u,m;const k=n("Races"),p=n("Backgrounds"),i=n("Classes"),f=n("Summary");return r(),g(B,null,[y,d(k,{onOnrace:e[0]||(e[0]=a=>s.value=a)}),(u=s.value)!=null&&u.id?(r(),_(p,{key:0,race:s.value.id,onOnback:e[1]||(e[1]=a=>c.value=a)},null,8,["race"])):v("",!0),(m=s.value)!=null&&m.id?(r(),_(i,{key:1,race:s.value.id,onPicked1:e[2]||(e[2]=a=>t.value=a),onPicked2:e[3]||(e[3]=a=>l.value=a)},null,8,["race"])):v("",!0),d(f,{race:s.value,background:c.value,class1:t.value,class2:l.value},null,8,["race","background","class1","class2"])],64)}}},P=C(x,[["__file","Character.vue"]]);export{P as default};
