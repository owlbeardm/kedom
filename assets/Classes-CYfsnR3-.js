import{f as y,g as W,o as c,c as d,u as t,t as o,h as p,d as r,F as h,i as _,j as z,v as A,k as S,e as j}from"./app-zarfzFN_.js";import{_ as G}from"./plugin-vue_export-helper-DlAUqK2U.js";const K=r("h2",null,"Class",-1),O={key:0},q={class:"flex-container"},I={key:0},J={key:1,class:"list"},X={class:"ul-empty"},Y=["id","value"],Z=["for"],tt=r("li",null,[r("span",null,"Приключенец (смешание двух классов):")],-1),at={class:"ul-empty"},et=["id","value"],rt=["for"],it={key:2,class:"list"},st=r("p",null,"Вторая часть приключенца:",-1),lt={class:"ul-empty"},nt=["id","value"],ot=["for"],ct={key:1},dt=["innerHTML"],ut={key:2},pt=["innerHTML"],mt={key:3},ht=r("th",null,"Lvl",-1),gt=r("th",null,"HD",-1),wt=r("th",null,"Attack Bonus",-1),ft=r("th",null,"Foci",-1),_t={key:0},vt={key:0},bt={key:0},yt={key:1},kt={key:0},Ct={key:0},xt={key:1},Mt=r("thead",null,[r("tr",null,[r("th",null,"Lvl"),r("th",null,"Max Spell Level"),r("th",null,"Spell Cast"),r("th",null,"Spell Prepared")])],-1),Lt={__name:"Classes",props:["race"],setup(U){const k=[{id:"niziel",classes:["warrior","expert","mage","partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer"]},{id:"ferori",classes:["warrior","expert","mage","necromancer","partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer"]},{id:"nerland",classes:["warrior","expert","partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer","partial-wise"]},{id:"half-orc",forcedClass:["partial-accursed"],classes:["partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer","partial-wise"]},{id:"half-elf",classes:["warrior","expert","elementalist","partial-warrior","partial-duelist","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer","partial-wise"]},{id:"halfling",forcedClass:["partial-empath"],classes:["partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer","partial-wise"]},{id:"dwarf",classes:["warrior","expert","partial-warrior","partial-expert","partial-priest","partial-rune-guardian","partial-empath"]},{id:"dwarf-long",classes:["warrior","expert","partial-warrior","partial-expert","partial-priest","partial-rune-guardian","partial-empath"]},{id:"rat",forcedClass:["expert","partial-expert"],classes:["partial-warrior","partial-expert","partial-priest","partial-mage","partial-beast","partial-necromancer"]},{id:"lizard",forcedClass:["partial-beast"],classes:["partial-warrior","partial-expert","partial-priest","partial-wise"]},{id:"gnome",forcedClass:["elementalist","partial-elementalist"],classes:["elementalist","partial-warrior","partial-expert","partial-duelist"]}],C=[{id:"warrior",title:"Воин",hd:2,ab:10,foci:"+1 Warrior Focus, Killing Blow, Veteran's Luck",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/warrior.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"expert",title:"Эксперт",hd:0,ab:5,foci:"+1 Expert Focus, Masterful Expertise, Quick Learner",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/expert.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"mage",title:"Кверанский арканист",spells:!0,hd:-1,ab:2,arts:["+2 Арканист","+1 Арканист","","+1 Арканист","","+1 Арканист","","+1 Арканист","","+1 Арканист"],foci:"Кверанский арканист",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/mage.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"elementalist",title:"Элементалист",spells:!0,hd:-1,ab:2,arts:["Elemental Resilience, Elemental Sparks, +1 Элементалист","+1 Элементалист","","+1 Элементалист","","+1 Элементалист","","+1 Элементалист","","+1 Элементалист"],foci:"Элементалист"},{id:"necromancer",title:"Некромант",spells:!0,hd:-1,ab:2,arts:["+1 Некромант","+1 Некромант","","+1 Некромант","","+1 Некромант","","+1 Некромант","","+1 Некромант"],foci:"Некромант",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/necromancer.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-warrior",partial:!0,title:"Воин",hd:2,ab:10,minAb:7,foci:"+1 Warrior Focus",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/warrior.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-expert",partial:!0,title:"Эксперт",hd:0,ab:5,foci:"+1 Expert Focus, Quick Learner",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/expert.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-mage",partial:!0,spells:!0,title:"Кверанский арканист",hd:-1,ab:2,arts:["+1 Арканист","+1 Арканист","+1 Арканист","","","+1 Арканист","","","+1 Арканист",""],foci:"Кверанский арканист",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/mage.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-necromancer",partial:!0,spells:!0,title:"Некромант",hd:-1,ab:2,arts:["+1 Некромант","","+1 Некромант","","","+1 Некромант","","","+1 Некромант",""],foci:"Некромант",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/necromancer.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-elementalist",partial:!0,spells:!0,title:"Элементалист",hd:-1,ab:2,arts:["Elemental Resilience, Elemental Sparks, +1 Элементалист","","+1 Элементалист","","","+1 Элементалист","","","+1 Элементалист",""],foci:"Элементалист"},{id:"partial-accursed",partial:!0,title:"Проклятый",hd:-1,ab:2,arts:["Accursed Blade или Accurded Bolt, +1 Проклятый","+1 Проклятый","","+1 Проклятый","+1 Проклятый","+1 Проклятый","","+1 Проклятый","","+1 Проклятый"],foci:"Проклятый",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/accursed.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-beast",partial:!0,title:"Зверь",hd:0,ab:5,arts:["Martial Style, Unarmed Might, Unarmed Defense, +1 Зверь","+1 Зверь","","+1 Зверь","+1 Зверь","+1 Зверь","","+1 Зверь","","+1 Зверь"],foci:"Зверь"},{id:"partial-duelist",partial:!0,title:"Дуэлянт",hd:-1,ab:5,arts:["+1 Дуэлянт","+1 Дуэлянт","","+1 Дуэлянт","+1 Дуэлянт","+1 Дуэлянт","","+1 Дуэлянт","","+1 Дуэлянт"],foci:"Дуэлянт",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/duelist.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-empath",partial:!0,title:"Эмпат",hd:0,ab:5,arts:["+1 Эмпат","+1 Эмпат","","+1 Эмпат","","+1 Эмпат","","+1 Эмпат","","+1 Эмпат"],foci:"Эмпат",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/empath.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-priest",partial:!0,title:"Жрец",hd:-1,ab:2,arts:["+1 Жрец","+1 Жрец","","+1 Жрец","+1 Жрец","+1 Жрец","","+1 Жрец","","+1 Жрец"],foci:"+1 God's focus",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/priest.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-rune-guardian",partial:!0,title:"Рунный защитник",hd:0,ab:10,minAb:7,foci:"Рунный защитник"},{id:"partial-wise",partial:!0,title:"Ведун",hd:0,ab:5,arts:["+1 Ведун","+1 Ведун","","+1 Ведун","+1 Ведун","+1 Ведун","","+1 Ведун","","+1 Ведун"],foci:"Ведун",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/wise.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'}],E=U;let v=E.race,g=k.find(e=>e.id==v);const F=e=>{const a=e.forcedClass?e.forcedClass:e.classes;return C.filter(n=>a.includes(n.id))},B=e=>C.filter(a=>a.partial).filter(a=>e.classes.includes(a.id));let w=F(g),x=B(g),s=y(void 0),l=y(void 0),H=k.map(e=>e.classes.concat(e.forcedClass)).reduce((e,a)=>e.concat(a),[]).filter(e=>!!e).filter(e=>!C.map(a=>a.id).includes(e)).filter((e,a,n)=>n.indexOf(e)==a).sort();W(E,e=>{v=e.race,g=k.find(a=>a.id==v),w=F(g),x=B(g),s=y(void 0),l=y(void 0)});const M=(e,a)=>!!e&&(!(e!=null&&e.partial)||(e==null?void 0:e.partial)&&(a==null?void 0:a.partial)&&e.id!==a.id),L=(e,a)=>e?e.partial?Math.max(e.hd,a.hd):e.hd:0,D=(e,a)=>{if(!e)return 0;if(!e.partial||e.ab==a.ab)return e.ab;const n=Math.max(e.minAb?e.minAb:e.ab,a.minAb?a.minAb:a.ab),m=Math.max(e.ab,a.ab);return Math.min(n,m)},N=(e,a,n)=>{if(!(a!=null&&a.arts)&&(!a.partial||!(n!=null&&n.arts)))return"";if(!a.partial)return a.arts[e-1];if(!a.arts)return n.arts[e-1];if(!n.arts)return a.arts[e-1];const m=a.arts[e-1],f=n.arts[e-1],b=m.length>0&&f.length>0?", ":"";return m+b+f},P=(e,a,n)=>Math.max(1,Math.round((a.partial?a.spells&&n.spells?3.8:3:5)*e/10)),$=(e,a,n)=>e==3&&(a!=null&&a.spells)&&(n!=null&&n.spells)?2:e==6&&(a==null?void 0:a.spells)!==(n==null?void 0:n.spells)?3:Math.max(1,Math.round((a.partial?a.spells&&n.spells?4.9:4:5.5)*e/10)),Q=(e,a,n)=>{if(!a.partial)switch(e){case 1:return 3;case 2:return 3;case 3:return 4;case 4:return 5;case 5:return 6;case 6:return 7;case 7:return 8;case 8:return 9;case 9:return 10;case 10:return 12}if(a!=null&&a.spells&&(n!=null&&n.spells))switch(e){case 1:return 3;case 2:return 4;case 3:return 5;case 4:return 6;case 5:return 8;case 6:return 9;case 7:return 10;case 8:return 12;case 9:return 13;case 10:return 15}switch(e){case 1:return 2;case 2:return 3;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 7;case 9:return 8;case 10:return 9}return 0};return(e,a)=>{var n,m,f,b,V,T,R;return c(),d(h,null,[K,t(H).length>0?(c(),d("div",O," He хватает описания классов: "+o(t(H)),1)):p("",!0),r("div",q,[t(w).length?p("",!0):(c(),d("div",I," Нет классов для выбранной культуры "+o(t(v))+". ",1)),t(w).length?(c(),d("div",J,[r("ul",X,[(c(!0),d(h,null,_(t(w).filter(i=>!i.partial),i=>(c(),d("li",{key:i.id},[z(r("input",{type:"radio",id:i.id,value:i,"onUpdate:modelValue":[a[0]||(a[0]=u=>S(s)?s.value=u:s=u),a[1]||(a[1]=u=>e.$emit("picked1",t(s)))]},null,8,Y),[[A,t(s)]]),r("label",{for:i.id},o(i.title),9,Z)]))),128)),tt,r("li",null,[r("ul",at,[(c(!0),d(h,null,_(t(w).filter(i=>i.partial),i=>(c(),d("li",{key:i.id},[z(r("input",{type:"radio",id:i.id,value:i,"onUpdate:modelValue":[a[2]||(a[2]=u=>S(s)?s.value=u:s=u),a[3]||(a[3]=u=>e.$emit("picked1",t(s)))]},null,8,et),[[A,t(s)]]),r("label",{for:i.id},o(i.title),9,rt)]))),128))])])])])):p("",!0),t(x).length&&((n=t(s))!=null&&n.partial)?(c(),d("div",it,[st,r("ul",lt,[(c(!0),d(h,null,_(t(x).filter(i=>i.id!=t(s).id),i=>(c(),d("li",{key:i.id},[z(r("input",{type:"radio",id:i.id+2,value:i,"onUpdate:modelValue":[a[4]||(a[4]=u=>S(l)?l.value=u:l=u),a[5]||(a[5]=u=>e.$emit("picked2",t(l)))]},null,8,nt),[[A,t(l)]]),r("label",{for:i.id+2},"+ "+o(i.title),9,ot)]))),128))])])):p("",!0)]),t(s)&&M(t(s),t(l))?(c(),d("div",ct,[r("h3",null,o(t(s).title),1),r("div",{innerHTML:t(s).description},null,8,dt)])):p("",!0),t(l)&&t(s).partial&&M(t(s),t(l))?(c(),d("div",ut,[r("h3",null,o(t(l).title),1),r("div",{innerHTML:t(l).description},null,8,pt)])):p("",!0),M(t(s),t(l))?(c(),d("div",mt,[r("h3",null,o(t(s).title)+o(t(s).partial&&t(l)?"/"+t(l).title:"")+" class table",1),r("table",null,[r("thead",null,[r("tr",null,[ht,gt,wt,ft,t(s).arts||(m=t(l))!=null&&m.arts?(c(),d("th",_t,"Arts")):p("",!0)])]),r("tbody",null,[(c(),d(h,null,_(10,i=>{var u;return r("tr",{key:i},[r("td",null,o(i),1),r("td",null,o(i)+"d6"+o(L(t(s),t(l))==0?"":(L(t(s),t(l))>0?"+":"")+i*L(t(s),t(l))),1),r("td",null,"+"+o(Math.floor(D(t(s),t(l))*i/10)),1),r("td",null,[i==1?(c(),d("span",vt,[j("Race Focus, "+o(t(s).foci)+o(t(s).foci.length>0?", ":""),1),t(s).partial?(c(),d("span",bt,o(t(l).foci)+o(t(l).foci.length>0?", ":""),1)):p("",!0)])):p("",!0),i==1||i==2||i==5||i==7||i==10?(c(),d("span",yt,"+1 Any")):p("",!0)]),t(s).arts||(u=t(l))!=null&&u.arts?(c(),d("td",kt,[r("span",null,o(N(i,t(s),t(l))),1)])):p("",!0)])}),64))])]),(f=t(s))!=null&&f.spells||(b=t(l))!=null&&b.spells?(c(),d("h4",Ct,o(t(s).title)+o(t(s).partial&&t(l)?"/"+((V=t(l))==null?void 0:V.title):"")+" spells table",1)):p("",!0),(T=t(s))!=null&&T.spells||(R=t(l))!=null&&R.spells?(c(),d("table",xt,[Mt,r("tbody",null,[(c(),d(h,null,_(10,i=>r("tr",{key:i},[r("td",null,o(i),1),r("td",null,o(P(i,t(s),t(l))),1),r("td",null,o($(i,t(s),t(l))),1),r("td",null,o(Q(i,t(s),t(l))),1)])),64))])])):p("",!0)])):p("",!0)],64)}}},St=G(Lt,[["__file","Classes.vue"]]);export{St as default};
