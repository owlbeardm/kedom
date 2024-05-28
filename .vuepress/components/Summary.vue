<script setup>
  import { ref, watch } from 'vue'
  const props = defineProps(['race', 'background', 'class1', 'class2']);
  let race = props.race;
  let background = props.background;
  let class1 = props.class1;
  let class2 = props.class2;
  watch(props, (newProps) => {
    race = newProps.race;
    background = newProps.background;
    class1 = props.class1;
    class2 = props.class2;
  });

  const canShowClass = (c1, c2) => {
    return !!c1 && (!c1.partial || (!!c2 && c2.id !== c1.id));
  } 
  const calcHd = (p1, p2) => { 
        if(!p1) {return 0}
        if(!p1.partial) return p1.hd;
        return Math.max(p1.hd, p2.hd);
  }

  const calcAb = (p1, p2) => {
        if(!p1) {return 0}
        if(!p1.partial) return Math.floor(p1.ab/10);
        if(p1.ab == p2.ab) return Math.floor(p1.ab/10);
        const minAb = Math.max(!!p1.minAb?p1.minAb:p1.ab, !!p2.minAb?p2.minAb:p2.ab);
        const ab = Math.max(p1.ab, p2.ab);
        return Math.floor(Math.min(minAb, ab)/10);
  }

  const calcArts = (p1, p2) => {
        if(!p1?.arts && (!p1.partial || !p2?.arts)) return "";
        if(!p1.partial) return p1.arts[0];
        if(!p1.arts) return p2.arts[0];
        if(!p2.arts) return p1.arts[0];
        const p1a = p1.arts[0];
        const p2a = p2.arts[0];
        const del = p1a.length > 0 && p2a.length > 0 ? ", " : "";
        return p1a + del + p2a;
    }

</script>

<template>
    <h2>Данные для первого уровня</h2>
    <ul>
        <li v-if="!canShowClass(class1, class2)"><b>Class:</b> <span class="danger">Не выбран класс</span></li>
        <li v-if="canShowClass(class1, class2)"><b>Class:</b> {{class1.title}}<span v-if="class1.partial && !!class2">/{{class2.title}}</span></li>
        <li v-if="!race || !background"><b>Background:</b> <span class="danger">Не выбрана культура и история</span></li>
        <li v-if="!!race && !!background"><b>Background:</b> {{race.name}} {{background.title}}</li>
        <li v-if="canShowClass(class1, class2)"><b>Attack Bonus:</b> {{ calcAb(class1, class2)}}</li>
        <li v-if="canShowClass(class1, class2)"><b>Class Hit Dice:</b> 1d6{{ calcHd(class1, class2) == 0 ? '' : ((calcHd(class1, class2) > 0 ? '+' : '') + (calcHd(class1, class2))) }}</li>
        <li v-if="!!background"><b>Skills:</b>
            <ul>
                <li><b>{{ background.title }}:</b> +1 {{ background.freeSkill }}</li>
                <li><b>{{ background.title }}:</b> 2 rolled skills</li>
                <li v-if="(!!class1 && !!class1.skill)"><b>{{ class1.title }}:</b> +1 {{ class1.skill }}</li>
                <li v-if="(class1?.partial && !!class2 && !!class2.skill)"><b>{{ class2.title }}:</b> +1 {{ class2.skill }}</li>
                <li>+1 to any skill</li>
                <li><i>(check if foci add to any skill)</i></li>
            </ul>
        </li>
        <li v-if="!!race"><b>Foci:</b>
            <ul>
                <li><b>Race:</b> {{race.foci}}</li>
                <li v-if="(!!class1 && !!class1.foci)"><b>{{ class1.title }}:</b> {{ class1.foci }}</li>
                <li v-if="(class1?.partial && !!class2 && !!class2.foci)"><b>{{ class2.title }}:</b> {{ class2.foci }}</li>
                <li>+1 Any Focus</li>
            </ul>
        </li>
        <li v-if="canShowClass(class1, class2) && calcArts(class1, class2).length>0"><b>Arts:</b> {{ calcArts(class1, class2) }}</li>
    </ul>
</template>

<style>
.danger {
    color: #ff0000;
}
</style>
