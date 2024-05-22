<script setup>
    const backgrounds = 
    {
       "niziel" : [
            {
                "title": "Hunter",
                "description": `Both primitive tribals and bored nobles require hunts
for their table and their pleasures, and such efforts
often require professional hunters to help in the work.
Hunger or greed has also been known to send poor
peasants into the game preserves of their lords or
deep into dangerous wilderness. A few hunters are
actual gamekeepers employed to ward off poachers,
while others are simply hermits who have no love for
any company but their own. The marksmanship and
stealth of a well-practiced hunter tend to be useful
skills in an adventurer’s line of work.`,
                "freeSkill": "survive",
                "allSkills": ["survive", "kill", "attack"]
            },
       ],
    }
    import { ref, watch } from 'vue'
    //const races = require('./classes/races.json')
    const props = defineProps(['race']);
    let race = props.race;
    let back = ref(backgrounds[race]);
    const picked = ref(undefined)

    watch(props, (newProps) => {
        race = newProps.race;
        back = ref(backgrounds[race]);
    });
</script>

<template>
    <h2>Background</h2>
    <div class="race-container">
        <div v-if="!back">
            Нет бэкграундов для выбранной культуры {{ race }}.
        </div>
        <template v-if="!!back">
            <div class="race-list">
                <p>Roll 1D{{ back.length }}:</p>
                <ul>
                    <li v-for="b in back" :key="b">
                        <input type="radio" :id="b.title" :value="b" v-model="picked" />
                        <label :for="b.title">{{ b.title }}</label>
                    </li>
                </ul>
            </div>
            <div v-if="!!picked">
                <div>
                    <h3>{{ picked.title }}</h3>
                    <p>{{ picked.description }}</p>
                </div>
            </div>
        </template>
    </div>
</template>

<style>
ul {
    list-style-type: none;
    padding-inline-start: 16px!important;
}

li label {
    margin-left: 4px;
}

.race-container {
    display: flex;
}

.race-list {
    padding-right: 16px;
    margin-top: 32px;
    min-width: fit-content;
}
</style>
