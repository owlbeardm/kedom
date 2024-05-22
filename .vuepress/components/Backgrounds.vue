<script setup>
    const backgrounds = 
    {
       "niziel" : [
       1,2
       ],
    }
    import { ref, watch } from 'vue'
    //const races = require('./classes/races.json')
    const props = defineProps(['race']);
    let race = props.race;
    let back = ref(undefined);
    const picked = ref(undefined)

    watch(props, (newProps) => {
        race = props.race;
        back = ref(backgrounds[race]);
    });
</script>

<template>
    <h2>Background</h2>
    <div v-if="!back">
        Нет бэкграундов для выбранной культуры {{ race }}.
    </div>
    <div v-if="!!back">
        {{ back  }}
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
