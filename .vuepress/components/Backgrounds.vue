<script setup>
    const backgrounds = 
    {
       niziel: [
            { title: "Всадник", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
            { title: "Аферист" , description: ``, freeSkill: "perform", quickSkills: ["notice", "connect"], allSkills: ["any combat", "connect", "convince", "exert", "notice", "perform", "survive", "trade"] },
            { title: "Преступник", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Охотник", description: ``, freeSkill: "shoot", quickSkills: ["survive", "sneak"], allSkills: ["any combat", "exert", "heal", "notice", "ride", "shoot", "sneak", "survive"] },
            { title: "Грузчик", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Купец", description: ``, freeSkill: "trade", quickSkills: ["convince", "connect"], allSkills: ["administer", "any combat", "connect", "convince", "craft", "know", "notice", "trade"] },
            { title: "Голубая кровь", description: ``, freeSkill: "lead", quickSkills: ["connect", "administer"], allSkills: ["administer", "any combat", "connect", "convince", "know", "lead", "notice", "ride"] },
            { title: "Земледелец", description: ``, freeSkill: "exert", quickSkills: ["work", "survive"], allSkills: ["connect", "exert", "craft", "notice", "sneak", "survive", "trade", "work"] },
            { title: "Менестрель", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Врач", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Кверанский послушник", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Моряк", description: ``, freeSkill: "sail", quickSkills: ["exert", "notice"], allSkills: ["any combat", "connect", "craft", "exert", "heal", "notice", "perform", "sail"] },
            { title: "Ученик", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Солдат", description: ``, freeSkill: "any combat", quickSkills: ["exert", "survive"], allSkills: ["any combat", "any combat", "exert", "lead", "notice", "ride", "sneak", "survive"] },
            { title: "Бандит", description: ``, freeSkill: "any combat", quickSkills: ["convince", "connect"], allSkills: ["any combat", "any combat", "connect", "convince", "exert", "notice", "sneak", "survive"] },
            { title: "Путешественник", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
       ferori: [
            { title: "Технарь", description: ``, freeSkill: "craft", quickSkills: ["trade", "connect"], allSkills: ["connect", "convince", "craft", "craft", "exert", "know", "notice", "trade"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
            { title: "Строитель", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Торговец", description: ``, freeSkill: "trade", quickSkills: ["convince", "connect"], allSkills: ["administer", "any combat", "connect", "convince", "craft", "know", "notice", "trade"] },
            { title: "Чиновник", description: ``, freeSkill: "lead", quickSkills: ["connect", "administer"], allSkills: ["administer", "any combat", "connect", "convince", "know", "lead", "notice", "ride"] },
            { title: "Кочевник", description: ``, freeSkill: "ride", quickSkills: ["survive", "any combat"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "ride", "survive", "trade"] },
            { title: "Артист", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Терапевт", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Жрец", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Моряк", description: ``, freeSkill: "sail", quickSkills: ["exert", "notice"], allSkills: ["any combat", "connect", "craft", "exert", "heal", "notice", "perform", "sail"] },
            { title: "Ученик", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Солдат", description: ``, freeSkill: "any combat", quickSkills: ["exert", "survive"], allSkills: ["any combat", "any combat", "exert", "lead", "notice", "ride", "sneak", "survive"] },
            { title: "Зверь", description: ``, freeSkill: "any combat", quickSkills: ["convince", "exert"], allSkills: ["any combat", "any combat", "connect", "convince", "exert", "notice", "sneak", "survive"] },
            { title: "Исследователь", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
       nerland: [
            { title: "Кузнец", description: ``, freeSkill: "craft", quickSkills: ["trade", "connect"], allSkills: ["connect", "convince", "craft", "craft", "exert", "know", "notice", "trade"] },
            { title: "Дикарь", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
            { title: "Преступник", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Охотник", description: ``, freeSkill: "shoot", quickSkills: ["survive", "sneak"], allSkills: ["any combat", "exert", "heal", "notice", "ride", "shoot", "sneak", "survive"] },
            { title: "Бондарь", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Торговец", description: ``, freeSkill: "trade", quickSkills: ["convince", "connect"], allSkills: ["administer", "any combat", "connect", "convince", "craft", "know", "notice", "trade"] },
            { title: "Кочевник", description: ``, freeSkill: "ride", quickSkills: ["survive", "any combat"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "ride", "survive", "trade"] },
            { title: "Земледелец", description: ``, freeSkill: "exert", quickSkills: ["work", "survive"], allSkills: ["connect", "exert", "craft", "notice", "sneak", "survive", "trade", "work"] },
            { title: "Бард", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Целитель", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Послушник", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Подмастерье", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Наемник", description: ``, freeSkill: "any combat", quickSkills: ["exert", "survive"], allSkills: ["any combat", "any combat", "exert", "lead", "notice", "ride", "sneak", "survive"] },
            { title: "Бандит", description: ``, freeSkill: "any combat", quickSkills: ["convince", "connect"], allSkills: ["any combat", "any combat", "connect", "convince", "exert", "notice", "sneak", "survive"] },
            { title: "Путешественник", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
       "half-orc": [
            { title: "Варвар", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Жулик", description: ``, freeSkill: "perform", quickSkills: ["notice", "connect"], allSkills: ["any combat", "connect", "convince", "exert", "notice", "perform", "survive", "trade"] },
            { title: "Убийца", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Отшельник", description: ``, freeSkill: "shoot", quickSkills: ["survive", "sneak"], allSkills: ["any combat", "exert", "heal", "notice", "ride", "shoot", "sneak", "survive"] },
            { title: "Рабочий", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Всадник", description: ``, freeSkill: "ride", quickSkills: ["survive", "any combat"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "ride", "survive", "trade"] },
            { title: "Пастух", description: ``, freeSkill: "exert", quickSkills: ["work", "survive"], allSkills: ["connect", "exert", "craft", "notice", "sneak", "survive", "trade", "work"] },
            { title: "Артист", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Целитель", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Культист", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Пират", description: ``, freeSkill: "sail", quickSkills: ["exert", "notice"], allSkills: ["any combat", "connect", "craft", "exert", "heal", "notice", "perform", "sail"] },
            { title: "Писарь", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Наемник", description: ``, freeSkill: "any combat", quickSkills: ["exert", "survive"], allSkills: ["any combat", "any combat", "exert", "lead", "notice", "ride", "sneak", "survive"] },
            { title: "Головорез", description: ``, freeSkill: "any combat", quickSkills: ["convince", "connect"], allSkills: ["any combat", "any combat", "connect", "convince", "exert", "notice", "sneak", "survive"] },
            { title: "Изгой", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
       "half-elf": [
            { title: "Дикарь", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
            { title: "Жулик", description: ``, freeSkill: "perform", quickSkills: ["notice", "connect"], allSkills: ["any combat", "connect", "convince", "exert", "notice", "perform", "survive", "trade"] },
            { title: "Вор", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Лесничий", description: ``, freeSkill: "shoot", quickSkills: ["survive", "sneak"], allSkills: ["any combat", "exert", "heal", "notice", "ride", "shoot", "sneak", "survive"] },
            { title: "Разнорабочий", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Торговец", description: ``, freeSkill: "trade", quickSkills: ["convince", "connect"], allSkills: ["administer", "any combat", "connect", "convince", "craft", "know", "notice", "trade"] },
            { title: "Кочевник", description: ``, freeSkill: "ride", quickSkills: ["survive", "any combat"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "ride", "survive", "trade"] },
            { title: "Пастух", description: ``, freeSkill: "exert", quickSkills: ["work", "survive"], allSkills: ["connect", "exert", "craft", "notice", "sneak", "survive", "trade", "work"] },
            { title: "Бард", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Целитель", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Послушник", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Моряк", description: ``, freeSkill: "sail", quickSkills: ["exert", "notice"], allSkills: ["any combat", "connect", "craft", "exert", "heal", "notice", "perform", "sail"] },
            { title: "Подмастерье", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Наемник", description: ``, freeSkill: "any combat", quickSkills: ["exert", "survive"], allSkills: ["any combat", "any combat", "exert", "lead", "notice", "ride", "sneak", "survive"] },
            { title: "Головорез", description: ``, freeSkill: "any combat", quickSkills: ["convince", "connect"], allSkills: ["any combat", "any combat", "connect", "convince", "exert", "notice", "sneak", "survive"] },
            { title: "Изгой", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
       halfling: [
            { title: "Всадник", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
            { title: "Жулик", description: ``, freeSkill: "perform", quickSkills: ["notice", "connect"], allSkills: ["any combat", "connect", "convince", "exert", "notice", "perform", "survive", "trade"] },
            { title: "Вор", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Охотник", description: ``, freeSkill: "shoot", quickSkills: ["survive", "sneak"], allSkills: ["any combat", "exert", "heal", "notice", "ride", "shoot", "sneak", "survive"] },
            { title: "Разнорабочий", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Торговец", description: ``, freeSkill: "trade", quickSkills: ["convince", "connect"], allSkills: ["administer", "any combat", "connect", "convince", "craft", "know", "notice", "trade"] },
            { title: "Кочевник", description: ``, freeSkill: "ride", quickSkills: ["survive", "any combat"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "ride", "survive", "trade"] },
            { title: "Земледелец", description: ``, freeSkill: "exert", quickSkills: ["work", "survive"], allSkills: ["connect", "exert", "craft", "notice", "sneak", "survive", "trade", "work"] },
            { title: "Бард", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Целитель", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Послушник", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Моряк", description: ``, freeSkill: "sail", quickSkills: ["exert", "notice"], allSkills: ["any combat", "connect", "craft", "exert", "heal", "notice", "perform", "sail"] },
            { title: "Подмастерье", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Путешественник", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
       dwarf: [
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
            { title: "Убийца", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Лесничий", description: ``, freeSkill: "shoot", quickSkills: ["survive", "sneak"], allSkills: ["any combat", "exert", "heal", "notice", "ride", "shoot", "sneak", "survive"] },
            { title: "Грузчик", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Аристократ", description: ``, freeSkill: "lead", quickSkills: ["connect", "administer"], allSkills: ["administer", "any combat", "connect", "convince", "know", "lead", "notice", "pray"] },
            { title: "Менестрель", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Врач", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Священник", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Писарь", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Зверь", description: ``, freeSkill: "any combat", quickSkills: ["convince", "exert"], allSkills: ["any combat", "any combat", "connect", "convince", "exert", "notice", "sneak", "survive"] },
            { title: "Путешественник", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
       "dwarf-long": [
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
            { title: "Убийца", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Лесничий", description: ``, freeSkill: "shoot", quickSkills: ["survive", "sneak"], allSkills: ["any combat", "exert", "heal", "notice", "ride", "shoot", "sneak", "survive"] },
            { title: "Грузчик", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Аристократ", description: ``, freeSkill: "lead", quickSkills: ["connect", "administer"], allSkills: ["administer", "any combat", "connect", "convince", "know", "lead", "notice", "pray"] },
            { title: "Менестрель", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Врач", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Священник", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Писарь", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Зверь", description: ``, freeSkill: "any combat", quickSkills: ["convince", "exert"], allSkills: ["any combat", "any combat", "connect", "convince", "exert", "notice", "sneak", "survive"] },
            { title: "Путешественник", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
       rat: [
            { title: "Технарь", description: ``, freeSkill: "craft", quickSkills: ["trade", "connect"], allSkills: ["connect", "convince", "craft", "craft", "exert", "know", "notice", "trade"] },
            { title: "Варвар", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
            { title: "Вор", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Грузчик", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Торговец", description: ``, freeSkill: "trade", quickSkills: ["convince", "connect"], allSkills: ["administer", "any combat", "connect", "convince", "craft", "know", "notice", "trade"] },
            { title: "Артист", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Терапевт", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Послушник", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Подмастерье", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Наемник", description: ``, freeSkill: "any combat", quickSkills: ["exert", "survive"], allSkills: ["any combat", "any combat", "exert", "lead", "notice", "ride", "sneak", "survive"] },
       ],
       lizard: [
            { title: "Варвар", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Возчик", description: ``, freeSkill: "ride", quickSkills: ["connect", "any combat"], allSkills: ["any combat", "connect", "craft", "exert", "notice", "ride", "survive", "trade"] },
            { title: "Убийца", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Лесничий", description: ``, freeSkill: "shoot", quickSkills: ["survive", "sneak"], allSkills: ["any combat", "exert", "heal", "notice", "ride", "shoot", "sneak", "survive"] },
            { title: "Рабочий", description: ``, freeSkill: "work", quickSkills: ["connect", "exert"], allSkills: ["administer", "any skill", "connect", "convince", "craft", "exert", "ride", "work"] },
            { title: "Главарь", description: ``, freeSkill: "lead", quickSkills: ["connect", "administer"], allSkills: ["administer", "any combat", "connect", "convince", "know", "lead", "notice", "ride"] },
            { title: "Кочевник", description: ``, freeSkill: "ride", quickSkills: ["survive", "any combat"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "ride", "survive", "trade"] },
            { title: "Охотник", description: ``, freeSkill: "shoot", quickSkills: ["exert", "survive"], allSkills: ["shoot", "exert", "craft", "notice", "sneak", "survive", "trade", "work"] },
            { title: "Целитель", description: ``, freeSkill: "heal", quickSkills: ["know", "notice"], allSkills: ["administer", "connect", "craft", "heal", "know", "notice", "convince", "trade"] },
            { title: "Жрец", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Моряк", description: ``, freeSkill: "sail", quickSkills: ["exert", "notice"], allSkills: ["any combat", "connect", "craft", "exert", "heal", "notice", "perform", "sail"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Наемник", description: ``, freeSkill: "any combat", quickSkills: ["exert", "survive"], allSkills: ["any combat", "any combat", "exert", "lead", "notice", "ride", "sneak", "survive"] },
            { title: "Послушник", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Зверь", description: ``, freeSkill: "any combat", quickSkills: ["convince", "exert"], allSkills: ["any combat", "any combat", "connect", "convince", "exert", "notice", "sneak", "survive"] },
            { title: "Изгой", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
       gnome: [
            { title: "Отшельник", description: ``, freeSkill: "survive", quickSkills: ["any combat", "notice"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "punch", "sneak", "survive"] },
            { title: "Вор", description: ``, freeSkill: "sneak", quickSkills: ["connect", "convince"], allSkills: ["administer", "any combat", "connect", "convince", "exert", "notice", "sneak", "trade"] },
            { title: "Охотник", description: ``, freeSkill: "shoot", quickSkills: ["survive", "sneak"], allSkills: ["any combat", "exert", "heal", "notice", "ride", "shoot", "sneak", "survive"] },
            { title: "Кочевник", description: ``, freeSkill: "ride", quickSkills: ["survive", "any combat"], allSkills: ["any combat", "connect", "exert", "lead", "notice", "ride", "survive", "trade"] },
            { title: "Артист", description: ``, freeSkill: "perform", quickSkills: ["convince", "connect"], allSkills: ["any combat", "connect", "exert", "notice", "perform", "perform", "sneak", "convince"] },
            { title: "Шаман", description: ``, freeSkill: "pray", quickSkills: ["convince", "know"], allSkills: ["administer", "connect", "know", "lead", "heal", "convince", "pray", "pray"] },
            { title: "Моряк", description: ``, freeSkill: "sail", quickSkills: ["exert", "notice"], allSkills: ["any combat", "connect", "craft", "exert", "heal", "notice", "perform", "sail"] },
            { title: "Подмастерье", description: ``, freeSkill: "know", quickSkills: ["heal", "administer"], allSkills: ["administer", "heal", "craft", "know", "notice", "perform", "pray", "convince"] },
            { title: "Раб", description: ``, freeSkill: "sneak", quickSkills: ["survive", "exert"], allSkills: ["administer", "any combat", "any skill", "convince", "exert", "sneak", "survive", "work"] },
            { title: "Наемник", description: ``, freeSkill: "any combat", quickSkills: ["exert", "survive"], allSkills: ["any combat", "any combat", "exert", "lead", "notice", "ride", "sneak", "survive"] },
            { title: "Изгой", description: ``, freeSkill: "survive", quickSkills: ["sneak", "notice"], allSkills: ["any combat", "conenct", "notice", "perform", "ride", "sneak", "survive", "work"] },
       ],
    }
    import { ref, watch } from 'vue'
    //const races = require('./classes/races.json')
    const props = defineProps(['race']);
    const emit = defineEmits(['onback'])
    let race = props.race;
    let back = ref();
    if(!!race) back = ref(backgrounds[race]?.sort((a,b)=>a.title.localeCompare(b.title)));
    let picked = ref();

    watch(props, (newProps) => {
        if(race != newProps.race) {
            race = newProps.race;
            picked = ref();
            emit('onback', undefined)
            back = ref();
            if(!!race) back = ref(backgrounds[race]?.sort((a,b)=>a.title.localeCompare(b.title)));
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
    <div class="flex-container">
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
                    <div class="flex-container">
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

.list {
    padding-right: 16px;
    margin-top: 32px;
    min-width: fit-content;
}

.highlighted-skill {
    color: #C05D32
}
</style>
