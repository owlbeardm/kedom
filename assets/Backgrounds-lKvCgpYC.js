import{f as p,g as w,o,c as l,d as e,u as a,t as r,h as c,F as h,i as v,j as b,v as y}from"./app-QiO7pP-C.js";import{_ as S}from"./plugin-vue_export-helper-DlAUqK2U.js";const B=e("h2",null,"Background",-1),q={class:"container"},x={key:0},C={class:"list"},A=["id","value"],D=["for"],F={key:0},R={class:"container"},V={class:"skill-panel"},H=e("h4",null,"Free Skill",-1),L=e("p",null,"Gain a free skill:",-1),N=e("h4",null,"Background Skills",-1),T=e("p",null,"Roll 1d8 twice or pick a bold ones:",-1),U={key:0},j={key:1},z={__name:"Backgrounds",props:["race"],setup(m){const f={niziel:[{title:"Hunter",description:`Both primitive tribals and bored nobles require hunts
for their table and their pleasures, and such efforts
often require professional hunters to help in the work.
Hunger or greed has also been known to send poor
peasants into the game preserves of their lords or
deep into dangerous wilderness. A few hunters are
actual gamekeepers employed to ward off poachers,
while others are simply hermits who have no love for
any company but their own. The marksmanship and
stealth of a well-practiced hunter tend to be useful
skills in an adventurer’s line of work.`,freeSkill:"shoot",quickSkills:["survive","sneak"],allSkills:["any combat","exert","heal","notice","ride","shoot","sneak","survive"]},{title:"Artisan",description:`Your hero was a crafter of some variety, whether a
blacksmith, carpenter, shipwright, weaver, or a maker
of more exotic goods. In humble villages an artisan
is most likely to make the bulk of their living by the
same subsistence farming as their neighbors, but in
towns and cities they might be full-time profession-
als, perhaps belonging to some guild or brotherhood
specific to their craft. While an artisan’s Craft skill
is chiefly applicable to those works related to their
background, they often know enough or can impro-
vise sufficiently to make competent efforts at other
types of work.`,freeSkill:"craft",quickSkills:["trade","connect"],allSkills:["connect","convince","craft","craft","exert","know","notice","trade"]}]},_=m;let u=_.race,i=p(f[u]);const s=p(void 0);w(_,d=>{u=d.race,i=p(f[u])});const k=d=>d.replace(/\w\S*/g,function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()});return(d,n)=>(o(),l(h,null,[B,e("div",q,[a(i)?c("",!0):(o(),l("div",x," Нет бэкграундов для выбранной культуры "+r(a(u))+". ",1)),a(i)?(o(),l(h,{key:1},[e("div",C,[e("p",null,"Roll 1D"+r(a(i).length)+" or choose:",1),e("ol",null,[(o(!0),l(h,null,v(a(i),t=>(o(),l("li",{key:t},[b(e("input",{type:"radio",id:t.title,value:t,"onUpdate:modelValue":n[0]||(n[0]=g=>s.value=g)},null,8,A),[[y,s.value]]),e("label",{for:t.title},r(t.title),9,D)]))),128))])]),s.value?(o(),l("div",F,[e("div",null,[e("h3",null,r(s.value.title),1),e("p",null,r(s.value.description),1),e("div",R,[e("div",V,[H,L,e("ul",null,[e("li",null,r(k(s.value.freeSkill)),1)])]),e("div",null,[N,T,e("ul",null,[(o(!0),l(h,null,v(s.value.allSkills,t=>(o(),l("li",{key:t},[s.value.quickSkills.includes(t)?c("",!0):(o(),l("span",U,r(k(t)),1)),s.value.quickSkills.includes(t)?(o(),l("b",j,r(k(t)),1)):c("",!0)]))),128))])])])])])):c("",!0)],64)):c("",!0)])],64))}},I=S(z,[["__file","Backgrounds.vue"]]);export{I as default};
