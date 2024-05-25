<script setup>
  import { ref } from 'vue'
  const race = ref();
  const background = ref();
  const class1 = ref();
  const class2 = ref();
</script>

<template>
    <h1>Создание персонажа</h1>
    <Races @onrace="(r) => race = r"></Races>
    <Backgrounds v-if="!!race?.id" :race="race.id" @onback="(b) => background = b"></Backgrounds>
    <Classes v-if="!!race?.id" :race="race.id" @picked1="(p1) => class1 = p1" @picked2="(p2) => class2 = p2"></Classes>
    <Summary :race="race" :background="background" :class1="class1" :class2="class2"></Summary>
</template>

<style>
</style>
