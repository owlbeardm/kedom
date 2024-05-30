import{f as k,g as Q,o as c,c as d,u as e,t as n,h as u,d as r,F as m,i as b,j as z,v as E,k as L,e as Y}from"./app-BSw-VzAa.js";import{_ as j}from"./plugin-vue_export-helper-DlAUqK2U.js";const N=r("h2",null,"Class",-1),O={key:0},$={class:"flex-container"},K={key:0},G={key:1,class:"list"},J={class:"ul-empty"},X=["id","value"],Z=["for"],ee=r("li",null,[r("span",null,"Приключенец (смешание двух классов):")],-1),ae={class:"ul-empty"},te=["id","value"],re=["for"],ie={key:2,class:"list"},se=r("p",null,"Вторая часть приключенца:",-1),le={class:"ul-empty"},oe=["id","value"],ne=["for"],ce={key:1},de=["innerHTML"],he={key:2},ue=["innerHTML"],pe={key:3},me=r("th",null,"Lvl",-1),ge=r("th",null,"HD",-1),fe=r("th",null,"Attack Bonus",-1),we=r("th",null,"Foci",-1),be={key:0},ye={key:0},ve={key:0},ke={key:1},_e={key:0},xe={key:0},Ce={key:1},Ae=r("thead",null,[r("tr",null,[r("th",null,"Lvl"),r("th",null,"Max Spell Level"),r("th",null,"Spell Cast"),r("th",null,"Spell Prepared")])],-1),Me={__name:"Classes",props:["race"],setup(F){const _=[{id:"niziel",classes:["warrior","expert","mage","partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer"]},{id:"ferori",classes:["warrior","expert","mage","necromancer","partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer"]},{id:"nerland",classes:["warrior","expert","partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer","partial-wise"]},{id:"half-orc",forcedClass:["partial-accursed"],classes:["partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer","partial-wise"]},{id:"half-elf",classes:["warrior","expert","elementalist","partial-warrior","partial-duelist","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer","partial-wise"]},{id:"halfling",forcedClass:["partial-empath"],classes:["partial-warrior","partial-expert","partial-priest","partial-mage","partial-elementalist","partial-necromancer","partial-wise"]},{id:"dwarf",classes:["warrior","expert","partial-warrior","partial-expert","partial-priest","partial-rune-guardian","partial-empath"]},{id:"dwarf-long",classes:["warrior","expert","partial-warrior","partial-expert","partial-priest","partial-rune-guardian","partial-empath"]},{id:"rat",forcedClass:["expert","partial-expert"],classes:["partial-warrior","partial-expert","partial-priest","partial-mage","partial-beast","partial-necromancer"]},{id:"lizard",forcedClass:["partial-beast"],classes:["partial-warrior","partial-expert","partial-priest","partial-wise"]},{id:"gnome",forcedClass:["elementalist","partial-elementalist"],classes:["elementalist","partial-warrior","partial-expert","partial-duelist"]}],x=[{id:"warrior",title:"Воин",hd:2,ab:10,foci:"+1 Warrior Focus, Killing Blow, Veteran's Luck",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/warrior.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"><p>The Warrior is a hero born to the blade, a man or woman gifted with a superb capacity for physical violence. Savage barbarians, hardened mercenaries, courageous young farm boys, and ordinary laborers who just happen to have an undiscovered capacity for massive bloodshed all might qualify as Warriors.</p><p>Warriors aren’t all formal soldiers or recognized veterans of the blade. Any adventurer who excels in dealing with their problems through violence might qualify as a Warrior, however peaceful their background. It’s possible that their very talent for killing was what forced them out of their old life after some terrible event or awful encounter compelled them to recognize their gifts.</p><h4>Class Ability: Killing Blow</h4><p>Whenever a Warrior inflicts damage with any attack, spell, or special ability they may add half their character level, rounded up, to the damage done. This damage is also added to any Shock they may inflict.</p><h4>Class Ability: Veteran’s Luck</h4><p>Once per scene, as an Instant action, the Warrior may turn a missed attack they have made into a hit. Alternately, they may turn a successful attack against them into a miss, also as an Instant action. This ability is particularly lethal when used with the <i>Make a Snap Attack</i> action and leveled against weaker monsters or ordinary human warriors.</p></div>'},{id:"expert",title:"Эксперт",hd:0,ab:5,foci:"+1 Expert Focus, Masterful Expertise, Quick Learner",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/expert.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"><p>Your hero is an expert at some useful skill. Thieves, diplomats, healers, scholars, explorers, artisans, and other such heroes should pick the Expert class if they wish to focus on developing their special skills and performing tremendous feats of mastery with them. Experts gain the widest variety of non-combat skills and are the quickest to learn more of them.</p><p>Experts are also capable combatants, fully able to hold their own in the midst of a murderous fray. It’s not unknown for some Experts to specialize in professions related to martial pursuits, such as an assassin who relies heavily on their superb powers of stealth and deception to reach their unwary foes.</p><h4>Class Ability: Masterful Expertise</h4><p>Once per scene, the Expert may reroll any non-combat skill check as an Instant action. This allows the Expert to make a roll and then immediately use this ability if the resulting total isn’t good enough to succeed. In cases where it matters, the better of the two rolls may be used.</p><h4>Class Ability: Quick Learner</h4><p>When you advance a character level, you gain an extra skill point which may only be spent on gaining or improving non-combat skills or raising attributes. You may save this point to spend later if you wish.</p></div>'},{id:"mage",title:"Кверанский арканист",spells:!0,hd:-1,ab:2,arts:["+2 Арканист","+1 Арканист","","+1 Арканист","","+1 Арканист","","+1 Арканист","","+1 Арканист"],foci:"Кверанский арканист",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/mage.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"><h4>Кверанский арканист</h4><p>All Arcanists gain Magic as a bonus skill, acquiring it at level-0, or level-1 if was already level-0.</p><p>Arcanist Effort is calculated as usual, with each PC’s maximum being equal to one plus their Magic skill level plus the better of their Intelligence or Charisma modifiers. Partial High Mages have a score one point lower than this, albeit not less than one.</p></div>'},{id:"elementalist",title:"Элементалист",spells:!0,hd:-1,ab:2,arts:["Elemental Resilience, Elemental Sparks, +1 Элементалист","+1 Элементалист","","+1 Элементалист","","+1 Элементалист","","+1 Элементалист","","+1 Элементалист"],foci:"Элементалист"},{id:"necromancer",title:"Некромант",spells:!0,hd:-1,ab:2,arts:["+1 Некромант","+1 Некромант","","+1 Некромант","","+1 Некромант","","+1 Некромант","","+1 Некромант"],foci:"Некромант",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/necromancer.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-warrior",partial:!0,title:"Воин",hd:2,ab:10,minAb:7,foci:"+1 Warrior Focus",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/warrior.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"><p>The Warrior is a hero born to the blade, a man or woman gifted with a superb capacity for physical violence. Savage barbarians, hardened mercenaries, courageous young farm boys, and ordinary laborers who just happen to have an undiscovered capacity for massive bloodshed all might qualify as Warriors.</p><p>Warriors aren’t all formal soldiers or recognized veterans of the blade. Any adventurer who excels in dealing with their problems through violence might qualify as a Warrior, however peaceful their background. It’s possible that their very talent for killing was what forced them out of their old life after some terrible event or awful encounter compelled them to recognize their gifts.</p></div>'},{id:"partial-expert",partial:!0,title:"Эксперт",hd:0,ab:5,foci:"+1 Expert Focus, Quick Learner",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/expert.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"><p>Your hero is an expert at some useful skill. Thieves, diplomats, healers, scholars, explorers, artisans, and other such heroes should pick the Expert class if they wish to focus on developing their special skills and performing tremendous feats of mastery with them. Experts gain the widest variety of non-combat skills and are the quickest to learn more of them.</p><p>Experts are also capable combatants, fully able to hold their own in the midst of a murderous fray. It’s not unknown for some Experts to specialize in professions related to martial pursuits, such as an assassin who relies heavily on their superb powers of stealth and deception to reach their unwary foes.</p><h4>Class Ability: Quick Learner</h4><p>When you advance a character level, you gain an extra skill point which may only be spent on gaining or improving non-combat skills or raising attributes. You may save this point to spend later if you wish.</p></div>'},{id:"partial-mage",partial:!0,spells:!0,title:"Кверанский арканист",hd:-1,ab:2,arts:["+1 Арканист","+1 Арканист","+1 Арканист","","","+1 Арканист","","","+1 Арканист",""],foci:"Кверанский арканист",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/mage.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"><h4>Кверанский арканист</h4><p>All Arcanists gain Magic as a bonus skill, acquiring it at level-0, or level-1 if was already level-0.</p><p>Arcanist Effort is calculated as usual, with each PC’s maximum being equal to one plus their Magic skill level plus the better of their Intelligence or Charisma modifiers. Partial High Mages have a score one point lower than this, albeit not less than one.</p></div>'},{id:"partial-necromancer",partial:!0,spells:!0,title:"Некромант",hd:-1,ab:2,arts:["+1 Некромант","","+1 Некромант","","","+1 Некромант","","","+1 Некромант",""],foci:"Некромант",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/necromancer.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-elementalist",partial:!0,spells:!0,title:"Элементалист",hd:-1,ab:2,arts:["Elemental Resilience, Elemental Sparks, +1 Элементалист","","+1 Элементалист","","","+1 Элементалист","","","+1 Элементалист",""],foci:"Элементалист"},{id:"partial-accursed",partial:!0,title:"Проклятый",hd:-1,ab:2,arts:["Accursed Blade или Accurded Bolt, +1 Проклятый","+1 Проклятый","","+1 Проклятый","+1 Проклятый","+1 Проклятый","","+1 Проклятый","","+1 Проклятый"],foci:"Проклятый",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/accursed.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-beast",partial:!0,title:"Зверь",hd:0,ab:5,arts:["Martial Style, Unarmed Might, Unarmed Defense, +1 Зверь","+1 Зверь","","+1 Зверь","+1 Зверь","+1 Зверь","","+1 Зверь","","+1 Зверь"],foci:"Зверь"},{id:"partial-duelist",partial:!0,title:"Дуэлянт",hd:-1,ab:5,arts:["+1 Дуэлянт","+1 Дуэлянт","","+1 Дуэлянт","+1 Дуэлянт","+1 Дуэлянт","","+1 Дуэлянт","","+1 Дуэлянт"],foci:"Дуэлянт",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/duelist.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-empath",partial:!0,title:"Эмпат",hd:0,ab:5,arts:["+1 Эмпат","+1 Эмпат","","+1 Эмпат","","+1 Эмпат","","+1 Эмпат","","+1 Эмпат"],foci:"Эмпат",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/empath.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-priest",partial:!0,title:"Жрец",hd:-1,ab:2,arts:["+1 Жрец","+1 Жрец","","+1 Жрец","+1 Жрец","+1 Жрец","","+1 Жрец","","+1 Жрец"],foci:"+1 God's focus",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/priest.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'},{id:"partial-rune-guardian",partial:!0,title:"Рунный защитник",hd:0,ab:10,minAb:7,foci:"Рунный защитник"},{id:"partial-wise",partial:!0,title:"Ведун",hd:0,ab:5,arts:["+1 Ведун","+1 Ведун","","+1 Ведун","+1 Ведун","+1 Ведун","","+1 Ведун","","+1 Ведун"],foci:"Ведун",description:'<div class="div-with-image"><img alt="warrior" src="/img/class/wise.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>'}],W=F;let y=W.race,g=_.find(t=>t.id==y);const S=t=>{const a=t.forcedClass?t.forcedClass:t.classes;return x.filter(o=>a.includes(o.id))},T=t=>x.filter(a=>a.partial).filter(a=>t.classes.includes(a.id));let f=S(g),C=T(g),s=k(void 0),l=k(void 0),q=_.map(t=>t.classes.concat(t.forcedClass)).reduce((t,a)=>t.concat(a),[]).filter(t=>!!t).filter(t=>!x.map(a=>a.id).includes(t)).filter((t,a,o)=>o.indexOf(t)==a).sort();Q(W,t=>{y=t.race,g=_.find(a=>a.id==y),f=S(g),C=T(g),s=k(void 0),l=k(void 0)});const A=(t,a)=>!!t&&(!(t!=null&&t.partial)||(t==null?void 0:t.partial)&&(a==null?void 0:a.partial)&&t.id!==a.id),M=(t,a)=>t?t.partial?Math.max(t.hd,a.hd):t.hd:0,V=(t,a)=>{if(!t)return 0;if(!t.partial||t.ab==a.ab)return t.ab;const o=Math.max(t.minAb?t.minAb:t.ab,a.minAb?a.minAb:a.ab),p=Math.max(t.ab,a.ab);return Math.min(o,p)},P=(t,a,o)=>{if(!(a!=null&&a.arts)&&(!a.partial||!(o!=null&&o.arts)))return"";if(!a.partial)return a.arts[t-1];if(!a.arts)return o.arts[t-1];if(!o.arts)return a.arts[t-1];const p=a.arts[t-1],w=o.arts[t-1],v=p.length>0&&w.length>0?", ":"";return p+v+w},R=(t,a,o)=>Math.max(1,Math.round((a.partial?a.spells&&o.spells?3.8:3:5)*t/10)),U=(t,a,o)=>t==3&&(a!=null&&a.spells)&&(o!=null&&o.spells)?2:t==6&&(a==null?void 0:a.spells)!==(o==null?void 0:o.spells)?3:Math.max(1,Math.round((a.partial?a.spells&&o.spells?4.9:4:5.5)*t/10)),D=(t,a,o)=>{if(!a.partial)switch(t){case 1:return 3;case 2:return 3;case 3:return 4;case 4:return 5;case 5:return 6;case 6:return 7;case 7:return 8;case 8:return 9;case 9:return 10;case 10:return 12}if(a!=null&&a.spells&&(o!=null&&o.spells))switch(t){case 1:return 3;case 2:return 4;case 3:return 5;case 4:return 6;case 5:return 8;case 6:return 9;case 7:return 10;case 8:return 12;case 9:return 13;case 10:return 15}switch(t){case 1:return 2;case 2:return 3;case 3:return 3;case 4:return 4;case 5:return 5;case 6:return 6;case 7:return 7;case 8:return 7;case 9:return 8;case 10:return 9}return 0};return(t,a)=>{var o,p,w,v,I,H,B;return c(),d(m,null,[N,e(q).length>0?(c(),d("div",O," He хватает описания классов: "+n(e(q)),1)):u("",!0),r("div",$,[e(f).length?u("",!0):(c(),d("div",K," Нет классов для выбранной культуры "+n(e(y))+". ",1)),e(f).length?(c(),d("div",G,[r("ul",J,[(c(!0),d(m,null,b(e(f).filter(i=>!i.partial),i=>(c(),d("li",{key:i.id},[z(r("input",{type:"radio",id:i.id,value:i,"onUpdate:modelValue":[a[0]||(a[0]=h=>L(s)?s.value=h:s=h),a[1]||(a[1]=h=>t.$emit("picked1",e(s)))]},null,8,X),[[E,e(s)]]),r("label",{for:i.id},n(i.title),9,Z)]))),128)),ee,r("li",null,[r("ul",ae,[(c(!0),d(m,null,b(e(f).filter(i=>i.partial),i=>(c(),d("li",{key:i.id},[z(r("input",{type:"radio",id:i.id,value:i,"onUpdate:modelValue":[a[2]||(a[2]=h=>L(s)?s.value=h:s=h),a[3]||(a[3]=h=>t.$emit("picked1",e(s)))]},null,8,te),[[E,e(s)]]),r("label",{for:i.id},n(i.title),9,re)]))),128))])])])])):u("",!0),e(C).length&&((o=e(s))!=null&&o.partial)?(c(),d("div",ie,[se,r("ul",le,[(c(!0),d(m,null,b(e(C).filter(i=>i.id!=e(s).id),i=>(c(),d("li",{key:i.id},[z(r("input",{type:"radio",id:i.id+2,value:i,"onUpdate:modelValue":[a[4]||(a[4]=h=>L(l)?l.value=h:l=h),a[5]||(a[5]=h=>t.$emit("picked2",e(l)))]},null,8,oe),[[E,e(l)]]),r("label",{for:i.id+2},"+ "+n(i.title),9,ne)]))),128))])])):u("",!0)]),e(s)&&A(e(s),e(l))?(c(),d("div",ce,[r("h3",null,n(e(s).title),1),r("div",{innerHTML:e(s).description},null,8,de)])):u("",!0),e(l)&&e(s).partial&&A(e(s),e(l))?(c(),d("div",he,[r("h3",null,n(e(l).title),1),r("div",{innerHTML:e(l).description},null,8,ue)])):u("",!0),A(e(s),e(l))?(c(),d("div",pe,[r("h3",null,n(e(s).title)+n(e(s).partial&&e(l)?"/"+e(l).title:"")+" class table",1),r("table",null,[r("thead",null,[r("tr",null,[me,ge,fe,we,e(s).arts||(p=e(l))!=null&&p.arts?(c(),d("th",be,"Arts")):u("",!0)])]),r("tbody",null,[(c(),d(m,null,b(10,i=>{var h;return r("tr",{key:i},[r("td",null,n(i),1),r("td",null,n(i)+"d6"+n(M(e(s),e(l))==0?"":(M(e(s),e(l))>0?"+":"")+i*M(e(s),e(l))),1),r("td",null,"+"+n(Math.floor(V(e(s),e(l))*i/10)),1),r("td",null,[i==1?(c(),d("span",ye,[Y("Race Focus, "+n(e(s).foci)+n(e(s).foci.length>0?", ":""),1),e(s).partial?(c(),d("span",ve,n(e(l).foci)+n(e(l).foci.length>0?", ":""),1)):u("",!0)])):u("",!0),i==1||i==2||i==5||i==7||i==10?(c(),d("span",ke,"+1 Any")):u("",!0)]),e(s).arts||(h=e(l))!=null&&h.arts?(c(),d("td",_e,[r("span",null,n(P(i,e(s),e(l))),1)])):u("",!0)])}),64))])]),(w=e(s))!=null&&w.spells||(v=e(l))!=null&&v.spells?(c(),d("h4",xe,n(e(s).title)+n(e(s).partial&&e(l)?"/"+((I=e(l))==null?void 0:I.title):"")+" spells table",1)):u("",!0),(H=e(s))!=null&&H.spells||(B=e(l))!=null&&B.spells?(c(),d("table",Ce,[Ae,r("tbody",null,[(c(),d(m,null,b(10,i=>r("tr",{key:i},[r("td",null,n(i),1),r("td",null,n(R(i,e(s),e(l))),1),r("td",null,n(U(i,e(s),e(l))),1),r("td",null,n(D(i,e(s),e(l))),1)])),64))])])):u("",!0)])):u("",!0)],64)}}},Le=j(Me,[["__file","Classes.vue"]]);export{Le as default};
