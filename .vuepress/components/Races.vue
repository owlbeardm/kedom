<script setup>
const races = 
[
    {"name":"Human", "suboptions":[{"name":"Half-Orc"}, {"name":"Half-Elf"}]},
    {"name":"Halfling"},
    {"name":"Dwarf"}
]
    import { ref } from 'vue'
    //const races = require('./classes/races.json')
  const picked = ref(undefined)
</script>

<template>
    <ul>
        <li v-for="race in races" :key="race.name">
            <input type="radio" :id="race.name" name="race" :value="race" v-model="picked" />
            <label :for="race.name">{{ race.name }}</label>
            <ul>
                <li v-for="option in race.suboptions" :key="option.name">
                    <input type="radio" :id="option.name" name="race" :value="option" v-model="picked" />
                    <label :for="option.name">{{ option.name }}</label>
                </li>
            </ul>
        </li> 
    </ul>
    <span> {{ picked }} </span>
</template>

<style>
ul {
    list-style-type: none;
}
</style>
