import{f as v,o as n,c as l,d as o,F as d,i as m,h as u,t as c,j as g,v as f}from"./app-DIJmOWLY.js";import{_ as y}from"./plugin-vue_export-helper-DlAUqK2U.js";const w=o("h2",null,"Выбор расы и культуры",-1),b={class:"flex-container"},R={class:"race-list"},_=o("p",null,"Roll 1D20 or choose:",-1),F={class:"ul-empty"},k={key:0,class:"toRoll"},x=["id","value"],z=["for"],E={class:"ul-empty"},Y={class:"toRoll"},C=["id","value"],D=["for"],L={key:0,class:"no-click"},G=["innerHTML"],A={__name:"Races",setup(N){const h=[{id:"human",name:"Люди",suboptions:[{id:"niziel",toRoll:3,name:"Нитолец",foci:"Add one Expert Focus",description:`
                    <h3>Люди</h3>
                    <p>Среди всех цивилизованных существ, люди наиболее многочисленны и распространены по всему миру. Их удивительная способность к адаптации позволяет им обитать в самых разных условиях — от палящих пустынь до ледяных горных вершин.</p>
                    <h4>Нитольцы</h4>
                    <div class="div-with-image"><img alt="Нитольцы" src="/img/ancestry/nithel.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
                    <p>Нитольцев можно встретить по всему миру. Часто они бегут в другие земли, спасаясь от проблем, долгов или просто от скуки, и быстро приживаются в новых местах.</p>
                    <p>Темноволосые и экспрессивные, эти индивидуалисты слывут резкими и самодостаточными, порой даже эгоистичными, в глазах других культур.</p>
                    <h3>Foci</h3>
                    <p>Люди получают дополнительный Expert Focus.</p></div>
                `},{id:"ferori",toRoll:2,name:"Ферори",foci:"Add one Expert Focus",description:`
                    <h3>Люди</h3>
                    <p>Среди всех цивилизованных существ, люди наиболее многочисленны и распространены по всему миру. Их удивительная способность к адаптации позволяет им обитать в самых разных условиях — от палящих пустынь до ледяных горных вершин.</p>
                    <h4>Фероры</h4>
                    <div class="div-with-image"><img alt="Фероры" src="/img/ancestry/saroja.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
                    <p>Фероры — загадочные южане с длинными именами и яркой одеждой, родом из земель по ту сторону внутренних морей. Немногие из них осмеливаются пересекать пустыни и попадать в чужие края.</p>
                    <p>Эти люди практикуют таинственные магические ритуалы и верования, оставаясь закрытой группой. Информация о них редко покидает пределы их общин. В глазах других культур они формальны, вежливы, скрытны и склонны к манипуляциям.</p>
                    <h3>Foci</h3>
                    <p>Люди получают дополнительный Expert Focus.</p></div>
                `},{id:"nerland",toRoll:2,name:"Нерлан",foci:"Add one Expert Focus",description:`
                    <h3>Люди</h3>
                    <p>Среди всех цивилизованных существ, люди наиболее многочисленны и распространены по всему миру. Их удивительная способность к адаптации позволяет им обитать в самых разных условиях — от палящих пустынь до ледяных горных вершин.</p>
                    <h4>Нерланцы</h4>
                    <div class="div-with-image"><img alt="Нерланцы" src="/img/ancestry/nerland.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
                    <p>Нерланцы — могучие дикари с севера, отгороженные от южных земель горами и редко появляющиеся там.</p>
                    <p>Физически сильные и грубые, они весьма востребованы для разнообразных тяжёлых работ. Многие из них отличаются в искусствах ремесел, часто работая кузнецами или плотниками, но также часто можно увидеть их с оружием в руках.</p>
                    <p>Нерланцев легко узнать по высокому росту, светлым волосам и коже, простой одежде и грубому акценту. Другие культуры оценивают их как прямых, преданных долгу и простых людей. Как и дварфы, они ценят договоры, что делает их взаимоотношения взаимно уважительными.</p>
                    <h3>Foci</h3>
                    <p>Люди получают дополнительный Expert Focus.</p></div>
                `},{id:"half-elf",toRoll:2,name:"Полуэльф",foci:"Add one Expert Focus",description:`
                    <h3>Люди</h3>
                    <p>Среди всех цивилизованных существ, люди наиболее многочисленны и распространены по всему миру. Их удивительная способность к адаптации позволяет им обитать в самых разных условиях — от палящих пустынь до ледяных горных вершин.</p>
                    <h4>Полуэльф</h4>
                    <div class="div-with-image"><img alt="Полуэльф" src="/img/ancestry/half-elf.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
                    <p>Альвы — загадочные и непредсказуемые создания лесов. Появляясь как теневые призраки рядом с людьми, они быстро исчезают в зелени, похищая скот и даже детей, которых превращают в полуэльфов, лишающихся памяти о своих корнях.</p>
                    <p>Возвращенные в общество дети часто сталкиваются с отвержением со стороны людей, и им трудно найти свое место в мире. Исключенные и преследуемые, они стремятся найти приют и свое предназначение.</p>
                    <p>Другие культуры считают полуэльфов коварными и необузданными, их характер приносит страх и неопределенность, что делает их непредсказуемыми соседями.</p></div>
                    <h3>Foci</h3>
                    <p>Люди получают дополнительный Expert Focus.</p></div>
                `},{id:"half-orc",toRoll:1,name:"Полуорк",foci:"Add one Expert Focus",description:`
                    <h3>Люди</h3>
                    <p>Среди всех цивилизованных существ, люди наиболее многочисленны и распространены по всему миру. Их удивительная способность к адаптации позволяет им обитать в самых разных условиях — от палящих пустынь до ледяных горных вершин.</p>
                    <h4>Полуорк</h4>
                    <div class="div-with-image"><img alt="Полуорк" src="/img/ancestry/half-orc.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
                    <p>Иногда магия прошлых веков дремлет в крови людей. Время от времени она пробуждается в ком-то через много столетий. Но это далеко не благословение — часто этот человек не умеет управлять этой древней силой и несет разрушение вокруг себя. Таких людей называют полуорками, их свирепость и масштабы разрушения при боевых столкновениях схожи с орками. А их ярость подпитывает магия прошлого.</p>
                    <p>Они подвергаются изгнанию, чтобы избежать проклятий, которые они несут с собой. Для других культур полуорки — символ опасности и дикости, оставленные стоять одни во тьме забытого мира.</p></div>
                    <h3>Foci</h3>
                    <p>Люди получают дополнительный Expert Focus.</p></div>
                `}]},{id:"df",name:"Дварфы",foci:"Dwarven Focus",suboptions:[{id:"dwarf",toRoll:2,name:"Дварфских гор",foci:"Dwarven Focus",description:`
                    <h3>Дварфы</h3>
                    <p>Твёрдые, как гранит их гор, и прочные, как кованая сталь их ремесла, дварфы — гордый народ, живущий кланами в недрах гор. Эти вспыльчивые и эмоциональные торговцы и ремесленники одновременно являются неудержимыми воинами. Их древняя кровь почти не подвластна магии.</p>
                    <h4>Дварфские горы</h4>
                    <div class="div-with-image"><img alt="Дварфы" src="/img/ancestry/dwarf1.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
                    <p>Дварфы из дварфских гор поддерживают торговые и культурные связи как с нитольцами, так и с нерланцами, встречаясь с ними не только в горах, но и на их землях. Социально активные, они часто формируют торговые и ремесленные гильдии, специализируясь на торговле инструментами, металлическими рудами и высококачественным дварфским оружием.</p>
                    <p>Для других культур их характеризуют как существ с твёрдыми принципами, педантичными, расчётливыми, гордыми, надменными и иногда вспыльчивыми. Как и для всех дварфов, для них великая честь — быть полезными своему клану.</p></div>
                    <h3>Foci</h3>
                    <p><b>Dwarven focus</b>:<br/>Level 1: Gain Exert as a bonus skill. You have a natural resistance to magic, gaining a +2 bonus on all saves against hostile magical effects. You need only half the usual amount of food, water, and air and gain a +1 CON modifier.<br/>Level 2: You have such a deep connection with your dwarven nature that once per day, as an Instant action, you can simply negate an unwanted magical effect that would otherwise affect you.</p>
            `},{id:"dwarf-long",toRoll:1,name:"Длинных гор",foci:"Dwarven Focus",description:`
                    <h3>Дварфы</h3>
                    <p>Твёрдые, как гранит их гор, и прочные, как кованая сталь их ремесла, дварфы — гордый народ, живущий кланами в недрах гор. Эти вспыльчивые и эмоциональные торговцы и ремесленники одновременно являются неудержимыми воинами. Их древняя кровь почти не подвластна магии.</p>
                    <h4>Длинные горы</h4>
                    <div class="div-with-image"><img alt="Дварфы" src="/img/ancestry/dwarf2.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
                    <p>Вторая половина дварфской цивилизации — дварфы длинных гор — расположена севернее, за дикими лесами. Разделение произошло из-за трагической катастрофы, и теперь эта часть народа дварфов значительно отличается от остальной. Опасность региона, войны с зеленокожими и отсутствие торговых и политических связей с людьми сделали северных дварфов более резкими во всех аспектах характера.</p>
                    <p>Мало кто видел северного дварфа без доспехов или готового к бою оружия. Сильные и выносливые, они страдают от недостатка харизмы, часто отталкивающие других своими резкими эмоциями и вспыльчивым нравом.</p>
                    <p>Для других культур северные дварфы известны своей твёрдостью, педантичностью, склонностью к скупости и вспыльчивости. Некоторые обвиняют их в ксенофобии. Но как и все дварфы, они глубоко ценят связи со своими кланами.</p></div>
                    <h3>Foci</h3>
                    <p><b>Dwarven focus</b>:<br/>Level 1: Gain Exert as a bonus skill. You have a natural resistance to magic, gaining a +2 bonus on all saves against hostile magical effects. You need only half the usual amount of food, water, and air and gain a +1 CON modifier.<br/>Level 2: You have such a deep connection with your dwarven nature that once per day, as an Instant action, you can simply negate an unwanted magical effect that would otherwise affect you.</p>
            `}]},{id:"rat",toRoll:3,name:"Крысолюд",foci:"Ratman Focus",description:`
            <h3>Солти</h3>
            <div class="div-with-image"><img alt="Чульти" src="/img/ancestry/rat.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
            <p>Крысолюды населяют все крупные южные города. Несмотря на свой меньший рост по сравнению с людьми, они быстро занимают целые кварталы. Крысолюды часто сталкиваются с пренебрежительным отношением, однако они обладают острым умом, стремлением к знаниям и экспериментам. У них большие общины, но также есть и те, кто стремится к самореализации вне тесных рамок своего народа.</p>
            <p>Отличительные черты крысолюдов — выразительная внешность и компактные размеры. Они часто носят с собой множество мелких предметов и инструментов, необходимых для их повседневных дел.</p>
            <p>Для других культур крысолюды ассоциируются с суетливостью, настойчивостью и изобретательностью, которая порой может нарушать человеческие социальные нормы.</p></div>
            <h3>Foci</h3>
            <p><b>Ratfolk focus</b>: Gain Sneak as a bonus skill. Your Constitution and Dexterity modifier increases by +1. You are too small to effectively use two-handed melee weapons or large bows.</p>
        `},{id:"lizard",toRoll:2,name:"Ящер",foci:"Lizardfolk Focus",description:`
            <h3>Скальцы</h3>
            <div class="div-with-image"><img alt="Ящеролюды" src="/img/ancestry/lizard.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
            <p>Скальцы, или ящеролюды, часто встречаются в прибрежных городах. Происходящие из далёких, влажных земель за морем, они редко встречаются среди людей. Это частично вызывает недоверие и иногда даже страх у местных жителей, особенно из-за их лишённых человеческой мимики лиц. Общество ящеров разнообразно, но среди людей чаще всего встречаются путешественники, охранники и моряки, что формирует у местных представление о их свирепости и силе.</p>
            <p>Для других культур ящеры ассоциируются со свирепостью, физической силой, холодностью и эмоциональной невыразительностью.</p></div>
            <h3>Foci</h3>
            <p><b>Lizardfolk focus</b>: Gain Punch and Survive as bonus skills. Your Strength or Constitution modifier increases by +1, but your Dexterity or Charisma modifier decreases by -1. Your unarmored Armor Class is 13, and if you wear better armor you get a +1 bonus to its AC.</p>
        `},{id:"halfling",toRoll:1,name:"Полурослик",foci:"Halfling Focus",description:`
            <h3>Полурослики</h3>
            <div class="div-with-image"><img alt="Халфлинги" src="/img/ancestry/halfling.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
            <p>Полурослики имеют традицию в юности путешествовать по миру, их можно встретить на всех побережьях внутреннего и южного морей. По мере взросления они оседают и часто появляются в тавернах, пекарнях и на рынках. Несмотря на физическую слабость по сравнению с людьми, они компенсируют её своей удачливостью и мудростью. Полурослики отлично устанавливают отношения и находят общий язык с каждым, кого встречают.</p>
            <p>Со стороны они могут показаться наивными и по-детски доверчивыми, но на самом деле они довольно наблюдательные и рассудительные, обладают тонким чутьём и способностью к анализу.</p>
            <p>Другие культуры считают их добродушными и простыми, однако из-за их размера и характера многие могут не воспринимать полуросликов всерьёз.</p></div>
            <h3>Foci</h3>
            <p><b>Halfling focus</b>: Gain Connect and any one skill as bonus skills. You can see out to thirty feet in any light condition short of perfect darkness. Increase your CON modifier by +1 but then also take a -1 to your STR modifier.</p>
        `},{id:"gnome",toRoll:1,name:"Гном",foci:"Gnome Focus",description:`
            <h3>Гномы</h3>
            <div class="div-with-image"><img alt="Гномы" src="/img/ancestry/gnome.webp" align="right" class="anc-img" photo-swipe="" style="cursor: zoom-in;">
            <p>Гномы встречаются в самых неожиданных местах по всему миру. Многие относятся к ним с недоверием, поскольку трудно предсказать их поведение. Гномы значительно отличаются друг от друга, не придерживаясь традиций и общества, их естество связано с природой и местностью, где они родились. Они часто слепо следуют своим желаниям, быстро меняя интересы и увлечения.</p>
            <p>Внешне они меньше полуросликов, с кожей различных оттенков и разнообразными формами волос, но всегда с длинными бровями.</p>
            <p>Другие культуры считают их непостоянными, опрометчивыми, легкомысленными, экспрессивными и бесстрашными.</p></div>
            <h3>Foci</h3>
            <p><b>Gnome focus</b>: Gain Magic and Convince as bonus skills. Your Dexterity or Intelligence modifier increases by +1 and your Constitution modifier decreases by -1. You gain 1 additional art as Elementalist.</p>
        `}],s=v();return console.log("Races reduce: "+h.reduce((t,i,e,a)=>i.suboptions?i.suboptions.reduce((r,p,S,H)=>(p.minRoll=r+1,p.maxRoll=r+p.toRoll,p.toRoll+r),t):(i.minRoll=t+1,i.maxRoll=t+i.toRoll,i.toRoll+t),0)),(t,i)=>(n(),l(d,null,[w,o("div",b,[o("div",R,[_,o("ul",F,[(n(),l(d,null,m(h,e=>o("li",{key:e.id},[e.suboptions?u("",!0):(n(),l("span",k,[o("b",null,c(e.minRoll)+"-"+c(e.maxRoll),1)])),e.suboptions?u("",!0):g((n(),l("input",{key:1,type:"radio",id:e.id,value:e,"onUpdate:modelValue":[i[0]||(i[0]=a=>s.value=a),i[1]||(i[1]=a=>t.$emit("onrace",s.value))]},null,8,x)),[[f,s.value]]),o("label",{for:e.id},c(e.name),9,z),o("ul",E,[(n(!0),l(d,null,m(e.suboptions,a=>(n(),l("li",{key:a.id},[o("span",Y,[o("b",null,c(a.minRoll)+"-"+c(a.maxRoll),1)]),g(o("input",{type:"radio",id:a.id,value:a,"onUpdate:modelValue":[i[2]||(i[2]=r=>s.value=r),i[3]||(i[3]=r=>t.$emit("onrace",s.value))]},null,8,C),[[f,s.value]]),o("label",{for:a.id},c(a.name),9,D)]))),128))])])),64))])]),s.value?(n(),l("div",L,[o("div",{innerHTML:s.value.description},null,8,G)])):u("",!0)])],64))}},V=y(A,[["__file","Races.vue"]]);export{V as default};
