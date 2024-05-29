<script setup>
    const raceToClass = [
        {id: "niziel", classes: ["warrior", "expert", "mage", "partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer"]},
        {id: "ferori", classes: ["warrior", "expert", "mage", "necromancer", "partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer"]},
        {id: "nerland", classes: ["warrior", "expert", "partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer", "partial-wise"]},
        {id: "half-orc", forcedClass: ["partial-accursed"], classes: ["partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer", "partial-wise"]},
        {id: "half-elf", classes: ["warrior", "expert", "elementalist", "partial-warrior", "partial-duelist", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer", "partial-wise"]},
        {id: "halfling", forcedClass: ["partial-empath"], classes: ["partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer", "partial-wise"]},
        {id: "dwarf", classes: ["warrior", "expert", "partial-warrior", "partial-expert", "partial-priest", "partial-rune-guardian", "partial-empath"]},
        {id: "dwarf-long", classes: ["warrior", "expert", "partial-warrior", "partial-expert", "partial-priest", "partial-rune-guardian", "partial-empath"]},
        {id: "rat", forcedClass: ["expert", "partial-expert"], classes: ["partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-beast", "partial-necromancer"]},
        {id: "lizard", forcedClass: ["partial-beast"], classes: ["partial-warrior", "partial-expert", "partial-priest", "partial-wise"]},
        {id: "gnome", forcedClass: ["elementalist", "partial-elementalist"], classes: ["elementalist", "partial-warrior", "partial-expert", "partial-duelist"]},
    ];
    const classes = [
        {id: "warrior", title: "Воин", hd:2, ab:10, foci:"+1 Warrior Focus, Killing Blow, Veteran's Luck", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/warrior.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "expert", title: "Эксперт", hd:0, ab:5, foci:"+1 Expert Focus, Masterful Expertise, Quick Learner", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/expert.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "mage", title: "Кверанский арканист", spells:true, hd:-1, ab:2, arts: ["+2 Арканист", "+1 Арканист", "", "+1 Арканист", "", "+1 Арканист", "", "+1 Арканист", "", "+1 Арканист"], foci:"Кверанский арканист", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/mage.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "elementalist", title: "Элементалист", spells:true, hd:-1, ab:2, arts: ["Elemental Resilience, Elemental Sparks, +1 Элементалист", "+1 Элементалист", "", "+1 Элементалист", "", "+1 Элементалист", "", "+1 Элементалист", "", "+1 Элементалист"], foci:"Элементалист"},
        {id: "necromancer", title: "Некромант", spells:true, hd:-1, ab:2, arts: ["+1 Некромант", "+1 Некромант", "", "+1 Некромант", "", "+1 Некромант", "", "+1 Некромант", "", "+1 Некромант"], foci:"Некромант", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/necromancer.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        //
        {id: "partial-warrior", partial:true, title: "Воин", hd:2, ab:10, minAb:7, foci:"+1 Warrior Focus", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/warrior.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "partial-expert", partial:true, title: "Эксперт", hd:0, ab:5, foci:"+1 Expert Focus, Quick Learner", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/expert.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "partial-mage", partial:true, spells:true, title: "Кверанский арканист", hd:-1, ab:2, arts: ["+1 Арканист", "+1 Арканист", "+1 Арканист", "", "", "+1 Арканист", "", "", "+1 Арканист", ""], foci:"Кверанский арканист", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/mage.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "partial-necromancer", partial:true, spells:true, title: "Некромант", hd:-1, ab:2, arts: ["+1 Некромант", "", "+1 Некромант", "", "", "+1 Некромант", "", "", "+1 Некромант", ""], foci:"Некромант", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/necromancer.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "partial-elementalist", partial:true, spells:true, title: "Элементалист", hd:-1, ab:2, arts: ["Elemental Resilience, Elemental Sparks, +1 Элементалист", "", "+1 Элементалист", "", "", "+1 Элементалист", "", "", "+1 Элементалист", ""], foci:"Элементалист"},
        {id: "partial-accursed", partial:true, title: "Проклятый", hd:-1, ab:2, arts: ["Accursed Blade или Accurded Bolt, +1 Проклятый", "+1 Проклятый", "", "+1 Проклятый", "+1 Проклятый", "+1 Проклятый", "", "+1 Проклятый", "" ,"+1 Проклятый"], foci:"Проклятый", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/accursed.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "partial-beast", partial:true, title: "Зверь", hd:0, ab:5, arts: ["Martial Style, Unarmed Might, Unarmed Defense, +1 Зверь", "+1 Зверь", "", "+1 Зверь", "+1 Зверь", "+1 Зверь", "", "+1 Зверь", "" ,"+1 Зверь"], foci:"Зверь"},
        {id: "partial-duelist", partial:true, title: "Дуэлянт", hd:-1, ab:5, arts: ["+1 Дуэлянт", "+1 Дуэлянт", "", "+1 Дуэлянт", "+1 Дуэлянт", "+1 Дуэлянт", "", "+1 Дуэлянт", "" ,"+1 Дуэлянт"], foci:"Дуэлянт", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/duelist.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "partial-empath", partial:true, title: "Эмпат", hd:0, ab:5, arts: ["+1 Эмпат", "+1 Эмпат", "", "+1 Эмпат", "", "+1 Эмпат", "", "+1 Эмпат", "", "+1 Эмпат"], foci:"Эмпат", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/empath.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "partial-priest", partial:true, title: "Жрец", hd:-1, ab:2, arts: ["+1 Жрец", "+1 Жрец", "", "+1 Жрец", "+1 Жрец", "+1 Жрец", "", "+1 Жрец", "" ,"+1 Жрец"], foci:"+1 God's focus", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/priest.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
        {id: "partial-rune-guardian", partial:true, title: "Рунный защитник", hd:0, ab:10, minAb:7, foci:"Рунный защитник"},
        {id: "partial-wise", partial:true, title: "Ведун", hd:0, ab:5, arts: ["+1 Ведун", "+1 Ведун", "", "+1 Ведун", "+1 Ведун", "+1 Ведун", "", "+1 Ведун", "" ,"+1 Ведун"], foci:"Ведун", description: `<div class="div-with-image"><img alt="warrior" src="/img/class/wise.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;"></div>`},
    ]
    import { ref, watch } from 'vue'
    //const races = require('./classes/races.json')
    const props = defineProps(['race']);
    let race = props.race;
    let availibleClasses = raceToClass.find(clss => clss.id == race);
    const makeClassList = (ac) => {
        const a = !!ac.forcedClass ? ac.forcedClass : ac.classes;
        return classes.filter(cls => a.includes(cls.id))
    }
    const makePartialClassList = (ac) => classes.filter(c => c.partial).filter(c => ac.classes.includes(c.id));
    let classList = makeClassList(availibleClasses);
    let partialClassList = makePartialClassList(availibleClasses);
    let picked1 = ref(undefined)
    let picked2 = ref(undefined)
  
    let nonClasses = raceToClass
        .map(rtc => rtc.classes.concat(rtc.forcedClass))
        .reduce((prev, cur)=>prev.concat(cur),[])
        .filter(c => !!c)
        .filter(c => !classes.map(clss=>clss.id).includes(c))
        .filter((c,i,a)=> a.indexOf(c) == i)
        .sort();

    watch(props, (newProps) => {
        race = newProps.race;
        availibleClasses = raceToClass.find(clss => clss.id == race);
        classList = makeClassList(availibleClasses);
        partialClassList = makePartialClassList(availibleClasses);
        picked1 = ref(undefined)
        picked2 = ref(undefined)
    });

    const showClass = (p1, p2) => !!p1 && (!p1?.partial || (p1?.partial && p2?.partial && p1.id !== p2.id)) 
    const calcHd = (p1, p2) => { 
        if(!p1) {return 0}
        if(!p1.partial) return p1.hd;
        return Math.max(p1.hd, p2.hd);
    }

    const calcAb = (p1, p2) => {
        if(!p1) {return 0}
        if(!p1.partial) return p1.ab;
        if(p1.ab == p2.ab) return p1.ab;
        const minAb = Math.max(!!p1.minAb?p1.minAb:p1.ab, !!p2.minAb?p2.minAb:p2.ab);
        const ab = Math.max(p1.ab, p2.ab);
        return Math.min(minAb, ab);
    }

    const calcArts = (lvl, p1, p2) => {
        if(!p1?.arts && (!p1.partial || !p2?.arts)) return "";
        if(!p1.partial) return p1.arts[lvl-1];
        if(!p1.arts) return p2.arts[lvl-1];
        if(!p2.arts) return p1.arts[lvl-1];
        const p1a = p1.arts[lvl-1];
        const p2a = p2.arts[lvl-1];
        const del = p1a.length > 0 && p2a.length > 0 ? ", " : "";
        return p1a + del + p2a;
    }
    const calcSpellLvl = (l,p1,p2) => {
        return Math.max(1, Math.round((!p1.partial?5:(p1.spells&&p2.spells)?3.8:3) * l / 10));
    }
    const calcSpellCast = (l,p1,p2) => {
        if(l == 3 && p1?.spells && p2?.spells) return 2;
        if(l == 6 && (p1?.spells !== p2?.spells)) return 3;
        return Math.max(1, Math.round((!p1.partial?5.5:(p1.spells&&p2.spells)?4.9:4) * l / 10));
    }
    const calcSpellPrepared = (l,p1,p2) => {
        if(!p1.partial){
            switch(l){
                case 1: return 3;
                case 2: return 3;
                case 3: return 4;
                case 4: return 5;
                case 5: return 6;
                case 6: return 7;
                case 7: return 8;
                case 8: return 9;
                case 9: return 10;
                case 10: return 12;
            }
        }
        if(p1?.spells && p2?.spells){
            switch(l){
                case 1: return 3;
                case 2: return 4;
                case 3: return 5;
                case 4: return 6;
                case 5: return 8;
                case 6: return 9;
                case 7: return 10;
                case 8: return 12;
                case 9: return 13;
                case 10: return 15;
            }
        }
        switch(l){
            case 1: return 2;
            case 2: return 3;
            case 3: return 3;
            case 4: return 4;
            case 5: return 5;
            case 6: return 6;
            case 7: return 7;
            case 8: return 7;
            case 9: return 8;
            case 10: return 9;
        }
        return 0;
    }
</script>

<template>
    <h2>Class</h2>
    <div v-if="nonClasses.length>0"> He хватает описания классов: {{ nonClasses }}</div>
    <div class="flex-container">
        <div v-if="!classList.length">
            Нет классов для выбранной культуры {{ race }}.
        </div>
        <template v-if="!!classList.length">
            <div class="list">
                <ul class="ul-empty">
                    <li v-for="cls in classList.filter(c=>!c.partial)" :key="cls.id">
                        <input type="radio" :id="cls.id" v-bind:value="cls" v-model="picked1" @update:model-value="$emit('picked1', picked1)" />
                        <label :for="cls.id">{{ cls.title }}</label>
                    </li>
                    <li>
                        <span>Приключенец (смешание двух классов):</span>
                    </li>
                    <li>
                        <ul class="ul-empty">
                            <li v-for="cls in classList.filter(c=>c.partial)" :key="cls.id">
                                <input type="radio" :id="cls.id" :value="cls" v-model="picked1" @update:model-value="$emit('picked1', picked1)" />
                                <label :for="cls.id">{{ cls.title }}</label>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </template>
        <template v-if="!!partialClassList.length && picked1?.partial">
            <div class="list">
                <p>Вторая часть приключенца:</p>
                <ul class="ul-empty">
                    <li v-for="cls in partialClassList.filter(c=> c.id != picked1.id)" :key="cls.id">
                        <input type="radio" :id="cls.id+2" :value="cls" v-model="picked2" @update:model-value="$emit('picked2', picked2)" />
                        <label :for="cls.id+2">+ {{ cls.title }}</label>
                    </li>
                </ul>
            </div>
        </template>
    </div>
    <div v-if="!!picked1 && showClass(picked1, picked2)">
        <h3>{{picked1.title}}</h3>
        <div v-html="picked1.description"></div>
    </div>
    <div v-if="!!picked2 && picked1.partial && showClass(picked1, picked2)">
        <h3>{{picked2.title}}</h3>
        <div v-html="picked2.description"></div>
    </div>
    <div v-if="showClass(picked1, picked2)">
        <h3>{{picked1.title}}{{picked1.partial&&!!picked2?"/"+picked2.title:""}} class table</h3>
        <table>
            <thead>
                <tr>
                    <th>Lvl</th>
                    <th>HD</th>
                    <th>Attack Bonus</th>
                    <th>Foci</th>
                    <th v-if="!!picked1.arts || !!picked2?.arts">Arts</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in 10" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ index }}d6{{ calcHd(picked1, picked2) == 0 ? '' : ((calcHd(picked1, picked2) > 0 ? '+' : '') + (index * calcHd(picked1, picked2))) }}</td>
                    <td>+{{ Math.floor(calcAb(picked1, picked2) * index / 10) }}</td>
                    <td>
                        <span v-if="index == 1">Race Focus, {{picked1.foci}}{{picked1.foci.length>0?', ':''}}<span v-if="picked1.partial">{{picked2.foci}}{{picked2.foci.length>0?', ':''}}</span></span>
                        <span v-if="index == 1 || index == 2 || index == 5 || index == 7 || index == 10">+1 Any</span>
                    </td>
                    <td v-if="!!picked1.arts || !!picked2?.arts"><span>{{ calcArts(index, picked1, picked2) }}</span></td>
                </tr>
            </tbody>
        </table>
        <h4 v-if="picked1?.spells || picked2?.spells">{{picked1.title}}{{picked1.partial&&!!picked2?"/"+picked2?.title:""}} spells table</h4>
        <table v-if="picked1?.spells || picked2?.spells">
            <thead>
                <tr>
                    <th>Lvl</th>
                    <th>Max Spell Level</th>
                    <th>Spell Cast</th>
                    <th>Spell Prepared</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="index in 10" :key="index">
                    <td>{{ index }}</td>
                    <td>{{ calcSpellLvl(index, picked1, picked2) }}</td>
                    <td>{{ calcSpellCast(index, picked1, picked2) }}</td>
                    <td>{{ calcSpellPrepared(index, picked1, picked2) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
.ul-empty {
    list-style-type: none;
    padding-inline-start: 16px!important;
}

.skill-panel {
    width: 50%;
}

li label {
    margin-left: 4px;
}

.list {
    padding-right: 16px;
    margin-top: 32px;
    min-width: fit-content;
}

.highlighted-skill {
    color: #C05D32
}

.class-img {
  width: 300px;
}

@media only screen and (max-width: 550px) {
  .class-img {
    width: 100%;
  }
}

</style>
