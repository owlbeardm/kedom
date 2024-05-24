import{f as d,g as y,o as l,c as r,d as e,u as t,t as n,h,F as k,i as v,j as S,v as B,k as q}from"./app-DFVCva3n.js";import{_ as x}from"./plugin-vue_export-helper-DlAUqK2U.js";const C=e("h2",null,"Background",-1),R={class:"container"},A={key:0},D={class:"list"},F=["id","value"],V=["for"],H={key:0},L={class:"container"},N={class:"skill-panel"},T=e("h4",null,"Free Skill",-1),U=e("p",null,"Gain a free skill:",-1),j={class:"highlighted-skill"},z=e("h4",null,"Background Skills",-1),E=e("p",null,"Roll 1d8 twice or pick the highlighted ones:",-1),G={key:0},I={key:1,class:"highlighted-skill"},M={__name:"Backgrounds",props:["race"],emits:["onback"],setup(b,{emit:w}){const m={niziel:[{title:"Hunter",description:`Both primitive tribals and bored nobles require hunts
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
types of work.`,freeSkill:"craft",quickSkills:["trade","connect"],allSkills:["connect","convince","craft","craft","exert","know","notice","trade"]}]},_=b,g=w;let c=_.race,u=d(m[c].sort((a,i)=>a.title>i.title)),o=d();y(_,a=>{c!=a.race&&(c=a.race,o=d(),g("onback",void 0),u=d(m[c].sort((i,s)=>i.title>s.title)))});const p=a=>a.replace(/\w\S*/g,function(i){return i.charAt(0).toUpperCase()+i.substr(1).toLowerCase()});return(a,i)=>(l(),r(k,null,[C,e("div",R,[t(u)?h("",!0):(l(),r("div",A," Нет бэкграундов для выбранной культуры "+n(t(c))+". ",1)),t(u)?(l(),r(k,{key:1},[e("div",D,[e("p",null,"Roll 1D"+n(t(u).length)+" or choose:",1),e("ol",null,[(l(!0),r(k,null,v(t(u),s=>(l(),r("li",{key:s},[S(e("input",{type:"radio",id:s.title,value:s,"onUpdate:modelValue":[i[0]||(i[0]=f=>q(o)?o.value=f:o=f),i[1]||(i[1]=f=>g("onback",t(o)))]},null,8,F),[[B,t(o)]]),e("label",{for:s.title},n(s.title),9,V)]))),128))])]),t(o)?(l(),r("div",H,[e("div",null,[e("h3",null,n(t(o).title),1),e("p",null,n(t(o).description),1),e("div",L,[e("div",N,[T,U,e("ul",null,[e("li",null,[e("b",j,n(p(t(o).freeSkill)),1)])])]),e("div",null,[z,E,e("ul",null,[(l(!0),r(k,null,v(t(o).allSkills,s=>(l(),r("li",{key:s},[t(o).quickSkills.includes(s)?h("",!0):(l(),r("span",G,n(p(s)),1)),t(o).quickSkills.includes(s)?(l(),r("b",I,n(p(s)),1)):h("",!0)]))),128))])])])])])):h("",!0)],64)):h("",!0)])],64))}},J=x(M,[["__file","Backgrounds.vue"]]);export{J as default};
