import{f as h,g as S,o as l,c as r,d as e,u as t,t as n,h as k,F as f,i as b,j as B,v as q,k as x}from"./app-8QPily0h.js";import{_ as C}from"./plugin-vue_export-helper-DlAUqK2U.js";const R=e("h2",null,"Background",-1),A={class:"container"},D={key:0},F={class:"list"},V=["id","value"],H=["for"],L={key:0},N={class:"container"},T={class:"skill-panel"},U=e("h4",null,"Free Skill",-1),j=e("p",null,"Gain a free skill:",-1),z={class:"highlighted-skill"},E=e("h4",null,"Background Skills",-1),G=e("p",null,"Roll 1d8 twice or pick the highlighted ones:",-1),I={key:0},M={key:1,class:"highlighted-skill"},W={__name:"Backgrounds",props:["race"],emits:["onback"],setup(w,{emit:y}){var v;const m={niziel:[{title:"Hunter",description:`Both primitive tribals and bored nobles require hunts
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
types of work.`,freeSkill:"craft",quickSkills:["trade","connect"],allSkills:["connect","convince","craft","craft","exert","know","notice","trade"]}]},_=w,g=y;let a=_.race,c=h();a&&(c=h((v=m[a])==null?void 0:v.sort((u,i)=>u.title>i.title)));let o=h();S(_,u=>{var i;a!=u.race&&(a=u.race,o=h(),g("onback",void 0),c=h(),a&&(c=h((i=m[a])==null?void 0:i.sort((s,d)=>s.title>d.title))))});const p=u=>u.replace(/\w\S*/g,function(i){return i.charAt(0).toUpperCase()+i.substr(1).toLowerCase()});return(u,i)=>(l(),r(f,null,[R,e("div",A,[t(c)?k("",!0):(l(),r("div",D," Нет бэкграундов для выбранной культуры "+n(t(a))+". ",1)),t(c)?(l(),r(f,{key:1},[e("div",F,[e("p",null,"Roll 1D"+n(t(c).length)+" or choose:",1),e("ol",null,[(l(!0),r(f,null,b(t(c),s=>(l(),r("li",{key:s},[B(e("input",{type:"radio",id:s.title,value:s,"onUpdate:modelValue":[i[0]||(i[0]=d=>x(o)?o.value=d:o=d),i[1]||(i[1]=d=>g("onback",t(o)))]},null,8,V),[[q,t(o)]]),e("label",{for:s.title},n(s.title),9,H)]))),128))])]),t(o)?(l(),r("div",L,[e("div",null,[e("h3",null,n(t(o).title),1),e("p",null,n(t(o).description),1),e("div",N,[e("div",T,[U,j,e("ul",null,[e("li",null,[e("b",z,n(p(t(o).freeSkill)),1)])])]),e("div",null,[E,G,e("ul",null,[(l(!0),r(f,null,b(t(o).allSkills,s=>(l(),r("li",{key:s},[t(o).quickSkills.includes(s)?k("",!0):(l(),r("span",I,n(p(s)),1)),t(o).quickSkills.includes(s)?(l(),r("b",M,n(p(s)),1)):k("",!0)]))),128))])])])])])):k("",!0)],64)):k("",!0)])],64))}},K=C(W,[["__file","Backgrounds.vue"]]);export{K as default};
