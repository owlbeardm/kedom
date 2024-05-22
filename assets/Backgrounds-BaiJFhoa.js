import{f as u,g as m,o as t,c as r,d as e,u as l,t as n,h as d,F as c,i as g,j as w,v as y}from"./app-Bscip9ej.js";import{_ as B}from"./plugin-vue_export-helper-DlAUqK2U.js";const b=e("h2",null,"Background",-1),x={class:"race-container"},D={key:0},S={class:"race-list"},V=["id","value"],q=["for"],F={key:0},H={__name:"Backgrounds",props:["race"],setup(k){const h={niziel:[{title:"Hunter",description:`Both primitive tribals and bored nobles require hunts
for their table and their pleasures, and such efforts
often require professional hunters to help in the work.
Hunger or greed has also been known to send poor
peasants into the game preserves of their lords or
deep into dangerous wilderness. A few hunters are
actual gamekeepers employed to ward off poachers,
while others are simply hermits who have no love for
any company but their own. The marksmanship and
stealth of a well-practiced hunter tend to be useful
skills in an adventurer’s line of work.`,freeSkill:"survive",allSkills:["survive","kill","attack"]}]},p=k;let i=p.race,s=u(h[i]);const o=u(void 0);return m(p,f=>{i=f.race,s=u(h[i])}),(f,v)=>(t(),r(c,null,[b,e("div",x,[l(s)?d("",!0):(t(),r("div",D," Нет бэкграундов для выбранной культуры "+n(l(i))+". ",1)),l(s)?(t(),r(c,{key:1},[e("div",S,[e("p",null,"Roll 1D"+n(l(s).length)+":",1),e("ul",null,[(t(!0),r(c,null,g(l(s),a=>(t(),r("li",{key:a},[w(e("input",{type:"radio",id:a.title,value:a,"onUpdate:modelValue":v[0]||(v[0]=_=>o.value=_)},null,8,V),[[y,o.value]]),e("label",{for:a.title},n(a.title),9,q)]))),128))])]),o.value?(t(),r("div",F,[e("div",null,[e("h3",null,n(o.value.title),1),e("p",null,n(o.value.description),1)])])):d("",!0)],64)):d("",!0)])],64))}},j=B(H,[["__file","Backgrounds.vue"]]);export{j as default};
