<script setup>
    const backgrounds = 
    {
       niziel: [
            { title: "Всадник", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
       ],
       ferori: [
            { title: "Технарь", description: ``, freeSkill: "craft", quickSkills: ["trade", "connect"], allSkills: ["connect", "convince", "craft", "craft", "exert", "know", "notice", "trade"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
       ],
       nerland: [
            { title: "Кузнец", description: ``, freeSkill: "craft", quickSkills: ["trade", "connect"], allSkills: ["connect", "convince", "craft", "craft", "exert", "know", "notice", "trade"] },
            { title: "Дикарь", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
       ],
       "half-orc": [
            { title: "Варвар", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
       ],
       "half-elf": [
            { title: "Дикарь", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
       ],
       halfling: [
            { title: "Всадник", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
       ],
       dwarf: [
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
       ],
       "dwarf-long": [
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
       ],
       rat: [
            { title: "Технарь", description: ``, freeSkill: "craft", quickSkills: ["trade", "connect"], allSkills: ["connect", "convince", "craft", "craft", "exert", "know", "notice", "trade"] },
            { title: "Варвар", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
       ],
       lizard: [
            { title: "Варвар", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
       ],
       gnome: [
            { title: "Отшельник", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
       ],
    }
    import { ref, watch } from 'vue'
    //const races = require('./classes/races.json')
    const props = defineProps(['race']);
    const emit = defineEmits(['onback'])
    let race = props.race;
    let back = ref();
    if(!!race) back = ref(backgrounds[race]?.sort((a,b)=>a.title>b.title));
    let picked = ref();

    watch(props, (newProps) => {
        if(race != newProps.race) {
            race = newProps.race;
            picked = ref();
            emit('onback', undefined)
            back = ref();
            if(!!race) back = ref(backgrounds[race]?.sort((a,b)=>a.title>b.title));
        }
    });

    const toTitleCase = (str) => {
        return str.replace(
            /\w\S*/g,
            function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        )}
</script>

<template>
    <h2>Background</h2>
    <div class="container">
        <div v-if="!back">
            Нет бэкграундов для выбранной культуры {{ race }}.
        </div>
        <template v-if="!!back">
            <div class="list">
                <p>Roll 1D{{ back.length }} or choose:</p>
                <ol>
                    <li v-for="b in back" :key="b">
                        <input type="radio" :id="b.title" :value="b" v-model="picked"  @update:model-value="emit('onback', picked)"/>
                        <label :for="b.title">{{ b.title }}</label>
                    </li>
                </ol>
            </div>
            <div v-if="!!picked">
                <div>
                    <h3>{{ picked.title }}</h3>
                    <p>{{ picked.description }}</p>
                    <div class="container">
                        <div class="skill-panel">
                            <h4>Free Skill</h4>
                            <p>Gain a free skill:</p>
                            <ul><li><b class="highlighted-skill">{{ toTitleCase(picked.freeSkill) }}</b></li></ul>
                        </div>
                        <div>
                            <h4>Background Skills</h4>
                            <p>Roll 1d8 twice or pick the highlighted ones:</p>
                            <ul><li v-for="s in picked.allSkills" :key="s">
                                    <span v-if="!picked.quickSkills.includes(s)"> {{ toTitleCase(s) }} </span>
                                    <b v-if="picked.quickSkills.includes(s)" class="highlighted-skill"> {{ toTitleCase(s) }} </b>
                                </li></ul>
                        </div>
                    </div>
                </div>
            </div>
        </template>
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

.container {
    display: flex;
}

.list {
    padding-right: 16px;
    margin-top: 32px;
    min-width: fit-content;
}

.highlighted-skill {
    color: #C05D32
}
</style>
