<script setup>
const raceToClass = [
    { id: "niziel", classes: ["warrior", "expert", "mage", "partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer"] },
    { id: "ferori", classes: ["warrior", "expert", "mage", "necromancer", "partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer"] },
    { id: "nerland", classes: ["warrior", "expert", "partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer", "partial-wise"] },
    { id: "half-orc", forcedClass: ["partial-accursed"], classes: ["partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer", "partial-wise"] },
    { id: "half-elf", classes: ["warrior", "expert", "elementalist", "partial-warrior", "partial-duelist", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer", "partial-wise"] },
    { id: "halfling", forcedClass: ["partial-empath"], classes: ["partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-elementalist", "partial-necromancer", "partial-wise"] },
    { id: "dwarf", classes: ["warrior", "expert", "partial-warrior", "partial-expert", "partial-priest", "partial-rune-guardian", "partial-empath"] },
    { id: "dwarf-long", classes: ["warrior", "expert", "partial-warrior", "partial-expert", "partial-priest", "partial-rune-guardian", "partial-empath"] },
    { id: "rat", forcedClass: ["expert", "partial-expert"], classes: ["partial-warrior", "partial-expert", "partial-priest", "partial-mage", "partial-beast", "partial-necromancer"] },
    { id: "lizard", forcedClass: ["partial-beast"], classes: ["partial-warrior", "partial-expert", "partial-priest", "partial-wise"] },
    { id: "gnome", forcedClass: ["elementalist", "partial-elementalist"], classes: ["elementalist", "partial-warrior", "partial-expert", "partial-duelist"] },
];
const classes = [
    { id: "warrior", title: "Воин", hd: 2, ab: 10, foci: "+1 Warrior Focus, Смертельный удар, Везение ветерана", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/warrior.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Воин — герой, рожденный для битвы, несущий в себе врожденный дар к физическому насилию. От свирепых варваров и закаленных наемников до смелых деревенских парней и простых работников с талантом к кровопролитию — воины происходят из самых разных слоев общества. Формально они не всегда являются солдатами или ветеранами, но любой искатель приключений, встречающий вызовы грубой силой, может быть воином.</p>
        <p>Воины обладают большим запасом здоровья, чем любой другой класс, выдерживая раны и трудности, которые бы сломили обычных людей. Они обладают превосходным боевым мастерством и наносят сокрушительный урон, делая их грозными противниками в бою.</p>
        <h4>Смертельный удар</h4>
        <p>Whenever a Warrior inflicts damage with any attack, spell, or special ability they may add half their character level, rounded up, to the damage done. This damage is also added to any Shock they may inflict.</p>
        <h4>Везение ветерана</h4>
        <p>Once per scene, as an Instant action, the Warrior may turn a missed attack they have made into a hit. Alternately, they may turn a successful attack against them into a miss, also as an Instant action. This ability is particularly lethal when used with the <i>Make a Snap Attack</i> action and leveled against weaker monsters or ordinary human warriors.</p></div>` },
    { id: "expert", title: "Эксперт", hd: 0, ab: 5, foci: "+1 Expert Focus, Непревзойденное мастерство, Способный ученик", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/expert.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Эксперты — мастера искусств, блистающие в ролях воров, дипломатов, целителей, ученых, исследователей или ремесленников. Эти герои посвящают себя совершенствованию своих умений, доводя их до уровня легенд, способные на поистине волшебные подвиги. Обладая невероятным талантом к успеху, многие Эксперты способны в последний момент вырывая победу из пасти поражения. Их неутомимая жажда знаний и самосовершенствования простирается даже на умения, выходящие за рамки их основной специализации.</p>
        <p>Хотя их основное внимание сосредоточено на мирных умениях, Эксперты далеки от беззащитности. Многие из них способны постоять за себя в бою, а некоторые, как смертельные ассасины, используют свою скрытность и обман для быстрого летального эффекта. Эксперты — это воплощение стремления к знанию и мастерству, а их путь — это путь искусства и тайны.</p>
        <h4>Непревзойденное мастерство</h4>
        <p>Once per scene, the Expert may reroll any non-combat skill check as an Instant action. This allows the Expert to make a roll and then immediately use this ability if the resulting total isn’t good enough to succeed. In cases where it matters, the better of the two rolls may be used.</p>
        <h4>Способный ученик</h4>
        <p>When you advance a character level, you gain an extra skill point which may only be spent on gaining or improving non-combat skills or raising attributes. You may save this point to spend later if you wish.</p></div>` },
    { id: "mage", title: "Кверанский арканист", spells: true, hd: -1, ab: 2, arts: ["+2 Арканист", "+1 Арканист", "", "+1 Арканист", "", "+1 Арканист", "", "+1 Арканист", "", "+1 Арканист"], foci: "Кверанский арканист", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/mage.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Кверанские арканисты представляют собой старую традицию из забытой магической империи мистических кверанцев. Различные ордены изучают остатки прошлого и восстанавливают могучую магию тех времен, объединенные жаждой древней Высокой Магии. Они убеждены, что истинная сила и просветление достигаются только через освоение этих древних искусств, презирая новомодные магические изыскания как отвлекающиеся забавы.</p>
        <p>Кверанские арканисты выделяются своим мастерством в создании сложных магических механизмов и арканских устройств, направленных на восстановление утраченных заклинаний Высокой Магии для расширения своих гримуаров. Они обладают уникальными способностями по улучшению и манипулированию заклинаниями, превосходящими возможности других волшебников, и проявляют выдающиеся навыки в противостоянии и распознавании магии. Многие считают Кверанских арканистов стражами ортодоксальных магических практик.</p>
        <p>Начинающие арканисты могут быть учениками индивидуалистичных наставников или членами крупных магических организаций, варьируясь от новичков-учеников до искателей альтернативных магических путей.</p>
        <h4>Кверанский арканист</h4><p>All Arcanists gain Magic as a bonus skill, acquiring it at level-0, or level-1 if was already level-0.</p><p>Arcanist Effort is calculated as usual, with each PC’s maximum being equal to one plus their Magic skill level plus the better of their Intelligence or Charisma modifiers. Partial High Mages have a score one point lower than this, albeit not less than one.</p></div>` },
    { id: "elementalist", title: "Элементалист", spells: true, hd: -1, ab: 2, arts: ["Elemental Resilience, Elemental Sparks, +1 Элементалист", "+1 Элементалист", "", "+1 Элементалист", "", "+1 Элементалист", "", "+1 Элементалист", "", "+1 Элементалист"], foci: "Элементалист", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/elementalist.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>В отличие от арканистов, чьи знания черпаются из древних трактатов и пыльных гримуаров, элементалисты черпают свою магию из глубин собственного существа. Чаще всего их силы объясняются фейским родством или древним влиянием магических существ. Магия элементалистов связана с классическими стихиями земли, огня, воздуха и воды, элементами, которые по своей природе проще и стабильнее, чем сложные арканные заклинания. С помощью своих врождённых сил элементалисты управляют этими стихиями, адаптируя фрагменты природы для манипуляции.</p>
        <p>Многие элементалисты отдают предпочтение одному определённому элементу, связывая свою судьбу с ним. Однако они могут управлять и другими стихиями, хоть и с меньшей степенью мастерства. Их избранный элемент оказывает на них глубокое влияние, меняя их внешность и даже характер.</p>
        <p>Элементалистам не нужно обучение у опытных наставников или в магических школах, чтобы овладеть своими силами. Их магия течёт в них естественно и интуитивно, словно древние силы природы пробуждаются в их жилах.</p>
        <h4>Элементалист</h4>
        <p>All Elementalists gain Magic as a bonus skill, acquiring it at level-0, or level-1 if was already level-0.</p>
        <p>Elementalist Effort is calculated as usual, with each PC’s maximum being equal to one plus their Magic skill level plus the better of their Intelligence or Charisma modifiers. Partial Elementalists have a score one point lower than this, albeit not less than one.</p>
        <p>All Elementalists learn the Элементальная сущность and Вызов элементов arts as part of their basic training.</p>
        <h4>Элементальная сущность</h4>
        <p>You are unharmed by mundane extremes of cold or by heat less than that of a furnace. You suffer only half damage from magical or extremely intense flame or frost attacks.</p>
        <h4>Вызов элементов</h4>
        <p>You can conjure petty amounts of flame, water, ice, stone, or wind, sufficient to do small tricks, chill drinks, light candles, or do other minor things. Conjured substances last no longer than a scene, and conjured water cannot lastingly quench thirst. This art cannot actually be useful in solving a problem or overcoming a challenge more than once per game session.</p>
        </div>
    `},
    { id: "necromancer", title: "Некромант", spells: true, hd: -1, ab: 2, arts: ["+1 Некромант", "+1 Некромант", "", "+1 Некромант", "", "+1 Некромант", "", "+1 Некромант", "", "+1 Некромант"], foci: "Некромант", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/necromancer.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Некроманты восставшие против неизбежности смерти, уверены, что человечество когда-то обладало бессмертием, пока загадочные события не изменили этот баланс. Изучая древние тексты кверанцев, они обнаружили, что магия, управляющая жизненной энергией, была изъята из общего доступа. Многие из них начинают свой путь как арканисты, стремясь понять основы древней магии и применить их в новых практиках, нацеливаясь на восстановление вечной жизни. Их методы включают изучение смерти и манипуляцию трупами. Они часто используют сомнительные техники для расширения своих знаний.</p>
        <p>Опытные некроманты способны оживлять трупы, вызывая эхо разума или призывая образы прежних личностей. Но истинное мастерство, такое как полное восстановление давно умерших, является редким и высоко ценится. Они также владеют древней магией кверанцев, хотя и не так искусно, как арканисты. Несмотря на свои способности, некроманты обладают разной репутацией — от востребованных советников и законопослушных магов до опасных практиков, которые внушают ужас своими методами. Некоторые культуры терпят их, в то время как у других мрачные и безжалостные традиции скрываются в тайных орденах.</p>
        <p>Начинающие некроманты могут быть скрыто обучены наставниками, выдающими себя за арканистов, или таинственными мастерами. В некоторых регионах существуют формальные школы некромантии, однако они часто таят нечестивые практики амбициозных волшебников.</p>
        <h4>Некромант</h4>
        <p>All Necromancers gain Magic as a bonus skill, acquiring it at level-0, or level-1 if was already level-0.</p>
        <p>Necromancers can prepare and cast High Magic spells in addition to the New Magic spells specific to Necromancers.</p>
        <p>Necromancer Effort is calculated as usual, with each PC’s maximum being equal to one plus their Magic skill level plus the better of their Intelligence or Charisma modifiers. Partial Necromancers have a score one point lower than this, albeit not less than one.</p>
        </div>
    `},
    { id: "partial-warrior", partial: true, title: "Воин", hd: 2, ab: 10, minAb: 6.5, foci: "+1 Warrior Focus", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/warrior.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Воин — герой, рожденный для битвы, несущий в себе врожденный дар к физическому насилию. От свирепых варваров и закаленных наемников до смелых деревенских парней и простых работников с талантом к кровопролитию — воины происходят из самых разных слоев общества. Формально они не всегда являются солдатами или ветеранами, но любой искатель приключений, встречающий вызовы грубой силой, может быть воином.</p>
        <p>Воины обладают большим запасом здоровья, чем любой другой класс, выдерживая раны и трудности, которые бы сломили обычных людей. Они обладают превосходным боевым мастерством и наносят сокрушительный урон, делая их грозными противниками в бою.</p>
        </div>` },
    { id: "partial-expert", partial: true, title: "Эксперт", hd: 0, ab: 5, foci: "+1 Expert Focus, Способный ученик", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/expert.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Эксперты — мастера искусств, блистающие в ролях воров, дипломатов, целителей, ученых, исследователей или ремесленников. Эти герои посвящают себя совершенствованию своих умений, доводя их до уровня легенд, способные на поистине волшебные подвиги. Обладая невероятным талантом к успеху, многие Эксперты способны в последний момент вырывая победу из пасти поражения. Их неутомимая жажда знаний и самосовершенствования простирается даже на умения, выходящие за рамки их основной специализации.</p>
        <p>Хотя их основное внимание сосредоточено на мирных умениях, Эксперты далеки от беззащитности. Многие из них способны постоять за себя в бою, а некоторые, как смертельные ассасины, используют свою скрытность и обман для быстрого летального эффекта. Эксперты — это воплощение стремления к знанию и мастерству, а их путь — это путь искусства и тайны.</p>
        <h4>Способный ученик</h4>
        <p>When you advance a character level, you gain an extra skill point which may only be spent on gaining or improving non-combat skills or raising attributes. You may save this point to spend later if you wish.</p></div>` },
    { id: "partial-mage", partial: true, spells: true, title: "Кверанский арканист", hd: -1, ab: 2, arts: ["+1 Арканист", "+1 Арканист", "+1 Арканист", "", "", "+1 Арканист", "", "", "+1 Арканист", ""], foci: "Кверанский арканист", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/mage.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Кверанские арканисты представляют собой старую традицию из забытой магической империи мистических кверанцев. Различные ордены изучают остатки прошлого и восстанавливают могучую магию тех времен, объединенные жаждой древней Высокой Магии. Они убеждены, что истинная сила и просветление достигаются только через освоение этих древних искусств, презирая новомодные магические изыскания как отвлекающиеся забавы.</p>
        <p>Кверанские арканисты выделяются своим мастерством в создании сложных магических механизмов и арканских устройств, направленных на восстановление утраченных заклинаний Высокой Магии для расширения своих гримуаров. Они обладают уникальными способностями по улучшению и манипулированию заклинаниями, превосходящими возможности других волшебников, и проявляют выдающиеся навыки в противостоянии и распознавании магии. Многие считают Кверанских арканистов стражами ортодоксальных магических практик.</p>
        <p>Начинающие арканисты могут быть учениками индивидуалистичных наставников или членами крупных магических организаций, варьируясь от новичков-учеников до искателей альтернативных магических путей.</p>
        <h4>Кверанский арканист</h4><p>All Arcanists gain Magic as a bonus skill, acquiring it at level-0, or level-1 if was already level-0.</p><p>Arcanist Effort is calculated as usual, with each PC’s maximum being equal to one plus their Magic skill level plus the better of their Intelligence or Charisma modifiers. Partial High Mages have a score one point lower than this, albeit not less than one.</p></div>` },
    { id: "partial-necromancer", partial: true, spells: true, title: "Некромант", hd: -1, ab: 2, arts: ["+1 Некромант", "", "+1 Некромант", "", "", "+1 Некромант", "", "", "+1 Некромант", ""], foci: "Некромант", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/necromancer.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Некроманты восставшие против неизбежности смерти, уверены, что человечество когда-то обладало бессмертием, пока загадочные события не изменили этот баланс. Изучая древние тексты кверанцев, они обнаружили, что магия, управляющая жизненной энергией, была изъята из общего доступа. Многие из них начинают свой путь как арканисты, стремясь понять основы древней магии и применить их в новых практиках, нацеливаясь на восстановление вечной жизни. Их методы включают изучение смерти и манипуляцию трупами. Они часто используют сомнительные техники для расширения своих знаний.</p>
        <p>Опытные некроманты способны оживлять трупы, вызывая эхо разума или призывая образы прежних личностей. Но истинное мастерство, такое как полное восстановление давно умерших, является редким и высоко ценится. Они также владеют древней магией кверанцев, хотя и не так искусно, как арканисты. Несмотря на свои способности, некроманты обладают разной репутацией — от востребованных советников и законопослушных магов до опасных практиков, которые внушают ужас своими методами. Некоторые культуры терпят их, в то время как у других мрачные и безжалостные традиции скрываются в тайных орденах.</p>
        <p>Начинающие некроманты могут быть скрыто обучены наставниками, выдающими себя за арканистов, или таинственными мастерами. В некоторых регионах существуют формальные школы некромантии, однако они часто таят нечестивые практики амбициозных волшебников.</p>
        <h4>Некромант</h4>
        <p>All Necromancers gain Magic as a bonus skill, acquiring it at level-0, or level-1 if was already level-0.</p>
        <p>Necromancers can prepare and cast High Magic spells in addition to the New Magic spells specific to Necromancers.</p>
        <p>Necromancer Effort is calculated as usual, with each PC’s maximum being equal to one plus their Magic skill level plus the better of their Intelligence or Charisma modifiers. Partial Necromancers have a score one point lower than this, albeit not less than one.</p>
        </div>` },
    { id: "partial-elementalist", partial: true, spells: true, title: "Элементалист", hd: -1, ab: 2, arts: ["Elemental Resilience, Elemental Sparks, +1 Элементалист", "", "+1 Элементалист", "", "", "+1 Элементалист", "", "", "+1 Элементалист", ""], foci: "Элементалист", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/elementalist.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>В отличие от арканистов, чьи знания черпаются из древних трактатов и пыльных гримуаров, элементалисты черпают свою магию из глубин собственного существа. Чаще всего их силы объясняются фейским родством или древним влиянием магических существ. Магия элементалистов связана с классическими стихиями земли, огня, воздуха и воды, элементами, которые по своей природе проще и стабильнее, чем сложные арканные заклинания. С помощью своих врождённых сил элементалисты управляют этими стихиями, адаптируя фрагменты природы для манипуляции.</p>
        <p>Многие элементалисты отдают предпочтение одному определённому элементу, связывая свою судьбу с ним. Однако они могут управлять и другими стихиями, хоть и с меньшей степенью мастерства. Их избранный элемент оказывает на них глубокое влияние, меняя их внешность и даже характер.</p>
        <p>Элементалистам не нужно обучение у опытных наставников или в магических школах, чтобы овладеть своими силами. Их магия течёт в них естественно и интуитивно, словно древние силы природы пробуждаются в их жилах.</p>
        <h4>Элементалист</h4>
        <p>All Elementalists gain Magic as a bonus skill, acquiring it at level-0, or level-1 if was already level-0.</p>
        <p>Elementalist Effort is calculated as usual, with each PC’s maximum being equal to one plus their Magic skill level plus the better of their Intelligence or Charisma modifiers. Partial Elementalists have a score one point lower than this, albeit not less than one.</p>
        <p>All Elementalists learn the Элементальная сущность and Вызов элементов arts as part of their basic training.</p>
        <h4>Элементальная сущность</h4>
        <p>You are unharmed by mundane extremes of cold or by heat less than that of a furnace. You suffer only half damage from magical or extremely intense flame or frost attacks.</p>
        <h4>Вызов элементов</h4>
        <p>You can conjure petty amounts of flame, water, ice, stone, or wind, sufficient to do small tricks, chill drinks, light candles, or do other minor things. Conjured substances last no longer than a scene, and conjured water cannot lastingly quench thirst. This art cannot actually be useful in solving a problem or overcoming a challenge more than once per game session.</p>
        </div>` },
    { id: "partial-accursed", partial: true, title: "Проклятый", hd: -1, ab: 2, arts: ["Accursed Blade или Accurded Bolt, +1 Проклятый", "+1 Проклятый", "", "+1 Проклятый", "+1 Проклятый", "+1 Проклятый", "", "+1 Проклятый", "", "+1 Проклятый"], foci: "Проклятый", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/accursed.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Проклятые, омраченные потусторонними силами, обладают темными способностями к насилию и чарам. Их проклятие течет в их крови, и никто не может сказать, что именно и когда вызвало это загадочное явление. Оно пробуждается раз в несколько столетий, неся хаос и разрушение.</p>
        <p>Проклятые воины могут служить боевой рукой мрачных культов или тёмных жрецов. Редкие арканисты нанимают проклятых в качестве телохранителей, надеясь, что смогут удержать их силу под контролем. Эти воины, яростно преданные своим покровителям, сохраняют свои способности даже если отрекаются от веры в богов.</p>
        <p>Цена их силы окутана тайной. Мудрецы предполагают, что только в моменты катастрофических и всепоглощающих разрушений может появиться шанс раскрыть этот секрет.</p>
        </div>` },
    { id: "partial-beast", partial: true, title: "Зверь", hd: 0, ab: 2, arts: ["Natural Weapon, Savage Claws, Natural Armor, +1 Зверь", "+1 Зверь", "", "+1 Зверь", "+1 Зверь", "+1 Зверь", "", "+1 Зверь", "", "+1 Зверь"], foci: "Зверь", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/beast.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>В жилах Зверя течет древняя кровь природных хищников, наделяя его множеством преимуществ по сравнению с обычными людьми. Дикие варвары и безумные воины столь же распространены среди Зверей, как и безмятежные аскеты и философы. Но независимо от своего пути, каждый Зверь смертельно опасен в бою.</p>
        <p>Звери нередко становятся стражами могущественных организаций, от королевских гвардий, охраняющих трон, до священных храмов, защищающих веру. Их можно встретить в авангарде караванов, борющихся с разбойниками и дикими тварями, или на палубах морских судов, где они защищают экипаж от пиратов и морских чудовищ.</p>
        <p>Они тренируются и сражаются, используя свои природные когти, клыки и невероятную силу. Некоторые Звери, однако, предпочитают использовать топоры, булавы или мечи, сделанные из закаленной стали или даже зачарованные магией. Лишь немногие из них носят доспехи, полагаясь на свою природную броню и выносливость.</p>
        <p>Звери часто обладают острым зрением и обостренными чувствами. Их звериный инстинкт помогает избегать опасностей и предвидеть атаки, делая некоторых из них практически неуловимыми в бою.</p>
        <h4>Зверь</h4>
        <p>Зверь получает бонус к <code>Exert</code> skill.</p>
        <p><code>Effort</code> is based on the <code>Exert</code> skill. Their maximum <code>Effort</code> is equal to this skill level plus their best attribute modifier, whatever it may be, to a minimum of one point.</p>
        <p>Зверь автоматически получает Природное оружие, Звериные когти, and Природная броня.</p>
        <h4>Природное оружие</h4>
        <p>When attacking with the Punch skill, your class hit bonus can be no worse than that of an Expert of your same character level (see table). At third level, any attack using the Punch skill counts as a magic weapon.</p>
        <h4>Звериные когти</h4>
        <p>Your unarmed attack damage increases as you gain levels, as noted in the table. You may add your Punch skill to the damage done by these attacks as usual, but Foci such as Unarmed Combatant that replace or improve your usual Punch damage do not apply to you.</p>
        <h4>Природная броня</h4>
        <p>When not wearing armor and not using a shield, your base Armor Class is equal to 13 plus half your character level, rounded down.</p>
        <table><thead><tr><th>Lvl</th><th>Natural Weapon Attack Bonus<br></th><th>Savage Claws Damage</th><th>Savage Claws Shock</th><th>Natural Armor AC</th></tr></thead><tbody><tr><td>1</td><td>+0</td><td>1d6</td><td>1/15</td><td>13</td></tr><tr><td>2</td><td>+1</td><td>1d6</td><td>2/15</td><td>14</td></tr><tr><td>3</td><td>+1</td><td>1d8</td><td>2/15</td><td>14</td></tr><tr><td>4</td><td>+2</td><td>1d8</td><td>2/15</td><td>15</td></tr><tr><td>5</td><td>+2</td><td>1d10</td><td>2/15</td><td>15</td></tr><tr><td>6</td><td>+3</td><td>1d10</td><td>3/15</td><td>16</td></tr><tr><td>7</td><td>+3</td><td>1d10+1</td><td>3/15</td><td>16</td></tr><tr><td>8</td><td>+4</td><td>1d10+1</td><td>3/15</td><td>17</td></tr><tr><td>9</td><td>+4</td><td>1d10+2</td><td>4/15</td><td>17</td></tr><tr><td>10</td><td>+5</td><td>1d10+3</td><td>4/15</td><td>18</td></tr></tbody></table></div>` },
    { id: "partial-duelist", partial: true, title: "Дуэлянт", maxHd: 0, hd: -1, ab: 5, arts: ["+1 Дуэлянт", "+1 Дуэлянт", "", "+1 Дуэлянт", "+1 Дуэлянт", "+1 Дуэлянт", "", "+1 Дуэлянт", "", "+1 Дуэлянт"], foci: "Дуэлянт", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/duelist.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Фейри-дуэлянты известны своими исключительными навыками владения клинком и сверхъестественной ловкостью. Многие из них унаследовали своё мастерство от древних предков, которые довели искусство убийства до совершенства. Других обучают эльфийские племена, разработавшие свои методы использования магии фейри со сталью.</p>
        <p>Дуэлянты используют тайные оккультные техники и внутреннюю энергию, чтобы наделить свои мечи магическими свойствами. Некоторые даже способны создавать оружие силой воли. Однако это делает их менее выносливыми, чем традиционные мечники, и не позволяет носить тяжелую броню, не ставя под угрозу свой стиль боя. Некоторые фейри учатся искусству дуэли как запасному варианту на случай, если их магия подведет.</p>
        <p>Это искусство редкое и требует врожденного таланта и огромного мастерства. Лишь немногие могут овладеть им в полной мере. Высококвалифицированные дуэлянты часто служат своим собственным целям, столь же таинственным, как и их искусство.</p>
        <h4>Дуэлянт</h4>
        <p>All Duelists gain Stab-0 as a bonus skill, or Stab-1 if they already have the skill at level-0.</p>
        <p>Duelist Effort is based on Stab, and is equal to the PC’s Stab skill plus the highest of their Dexterity or Intelligence modifiers, to a minimum of one point.</p>
        <p>All Duelists begin with the Любимое оружие art and one more of their choice.</p>
        <h4>Любимое оружие</h4>
        <p>Choose one specific type of non-un armed melee weapon from the list on page 37. You begin play with such a weapon, and when using this type you may use the Favored Weapon attack bonus column on the Duelist table to determine your base hit bonus, unless it’s already better for some other reason. If your second partial class is Partial Warrior, your class’ base hit bonus with the weapon is instead equal to your level. You cannot apply this or other arts to thrown weapons./p>
        </div>` },
    { id: "partial-empath", partial: true, title: "Эмпат", hd: 0, ab: 5, arts: ["+1 Эмпат", "+1 Эмпат", "", "+1 Эмпат", "", "+1 Эмпат", "", "+1 Эмпат", "", "+1 Эмпат"], foci: "Эмпат", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/empath.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Эмпаты – таинственные существа, обладающие уникальной чувствительностью к эмоциям окружающих. Они способны не только ощущать и переживать чужие эмоции, но и проецировать свои собственные с такой силой, что могут влиять на окружающих. Часто эмпаты находят своё место среди полуросликов, временами обитая и среди дварфов.</p>
        <p>В сражениях эмпаты становятся источником вдохновения для своих союзников и способны сбивать с толку противников, направляя их эмоциональные всплески в нужное русло. Их умение читать людей даже без слов позволяет адаптироваться к различным обстановкам и оперативно реагировать на изменения в окружающем мире.</p>
        <p>В мирное время эмпаты часто становятся ключевыми фигурами в дворцовых интригах и судебных процессах. Им доверяют роль высоких советников, способных разрешать конфликты и обнаруживать ложь благодаря своей особой способности восприятия эмоций.</p>
        <p>Эмпаты всегда готовы помогать окружающим, но в то же время у них есть собственные цели, часто связанные с важными личностями и существами, с которыми они находят неразрывную связь. Их способности делают их неоценимыми членами общества, способными укреплять социальные узы и улучшать взаимодействие среди людей.</p>
        <h4>Эмпат</h4>
        <p>All Empath gain Connect-0 during character creation.</p>
        <p>An Empath has an Effort score equal to their Connect skill level plus the better of their Charisma or Wisdom modifier, to a minimum of one point.</p>
        </div>` },
    { id: "partial-priest", partial: true, title: "Жрец", hd: -1, ab: 2, arts: ["+2 Жрец", "+1 Жрец", "", "+1 Жрец", "+1 Жрец", "+1 Жрец", "", "+1 Жрец", "", "+1 Жрец"], foci: "Жрец, +1 God's focus", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/priest.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>Жрецы — истинные хранители древних тайн и воплощение божественной воли. Они обретают свою силу благодаря дару от богов. Одни из них приобщаются к мистическим тайнам великих храмов и монастырей, в то время как другие непосредственно общаются с провидением.</p>
        <p>Практика каждого жреца разнообразна, и она сильно зависит от того божества, которому он служит. Некоторые обретают свою мощь в роскошных и пышных храмах, где царит кверанская вера, пользуясь при этом общественным признанием и уважением. В то же время другие предпочитают уединенное поклонение Старым богам, осторожно скрывая свои мистические способности. Требования богов также разнообразны: одни из них жаждут кровавых жертвоприношений, в то время как другие предпочитают, чтобы их слуги оказывали добрые дела и помогали нуждающимся.</p>
       <p>Силы, которые боги даруют своим жрецам, также варьируются: одни получают способность читать мысли, другие — могут превращаться в зверей или исцелять раны, а некоторые могут уничтожать врагов мощным священным огнем.</p>
       <p>Искусство жречества требует от жрецов веры и преданности, но для каждого бога это имеет свой особый смысл и назначение. Только избранные жрецы способны раскрыть замыслы своих божеств и успешно выполнить их священные задания, которые не под силу обычным смертным.</p>
        <h4>Жрец</h4>
        <p>All Priests gain Pray as a bonus skill, acquiring it at level-0, or level-1 if they already have it at level-0.</p>
        <p>Priest Effort is calculated with Pray, with their total maximum Effort being equal to their Pray skill plus the higher of their Wisdom or Charisma modifiers, to a minimum of one point.</p>
        </div>
    `},
    { id: "partial-rune-guardian", partial: true, title: "Рунный защитник", hd: 0, ab: 10, minAb: 7, foci: "Рунный защитник", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/rune.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>В древние времена, когда дварфы были лишены способности к колдовству, они искали защиту от могущественных чародеев и волшебников. Тогда родились рунные надписи и мастерские техники кузнецов, которые стали щитом против магии. Дварфы начали выводить потомков с природной антимагической способностью, надеясь создать новую линию защитников.</p>
        <p>Со временем эти искусства распространились по всем дварфским королевствам, сливаясь с местными методами борьбы с колдовством. Кланы рунных защитников возникали и исчезали, процветая в землях, страдающих от чародейства. В некоторых местах традиция сохранилась в виде передачи знаний от наставника к ученику или через древние рунические письмена. Порой рунные защитники рождались в семьях, не подозревавших о своих антимагических способностях.</p>
        <p>Рунные защитники высоко ценятся среди дварфов. Хотя они не обладают широкими боевыми навыками, их мастерство позволяет им легко справляться с архимагами. Осознавая эту угрозу, волшебники часто нанимают обычных телохранителей или призывают демонических стражей, которых сложно изгнать магическим путем. Некоторые арканисты даже начали использовать рунных защитников для борьбы со своими соперниками, а дварфы, известные своей любовью к торговле, охотно предлагают свои услуги магам, видя в этом не меньшую выгоду, чем в продаже металлов.</p>
        <h4>Рунный защитник</h4>
        <p>All Rune Guardian gain Magic-0 during character creation. While it cannot be used for item creation or other magical pursuits, it allows them an intellectual understanding of their prey’s abilities.</p>
        <p>An Rune Guardian has an Effort score equal to their Magic skill level plus the better of their Intellect or Constitution modifier, to a minimum of one point.</p>
        </div>` },
    { id: "partial-wise", partial: true, title: "Ведун", hd: 0, ab: 5, arts: ["+1 Ведун", "+1 Ведун", "", "+1 Ведун", "+1 Ведун", "+1 Ведун", "", "+1 Ведун", "", "+1 Ведун"], foci: "Ведун", description: `
        <div class="div-with-image"><img alt="warrior" src="/img/class/wise.webp" align="right" class="class-img" photo-swipe="" style="cursor: zoom-in;">
        <p>В древние времена ведуны были уважаемыми членами сельских общин и владели магией, глубже и старше самых лесов. С течением веков кверанская культура почти истребила их, оставив лишь немногих выживших, разбросанных и забытых. Они обитают в самых далеких уголках, их скромные лачуги и дымные хижины стоят на границе между цивилизацией и дикой природой. Большинство предпочитает одиночество, защищаясь от посторонних глаз, но их умения известны местным жителям. Знания о защите от зла часто таинственны, но их мастерство в травничестве, акушерстве и исцелении всегда востребовано, когда приходит время.</p>
        <p>Ведуны, часто первыми замечающие сверхъестественное, умеют скрываться от арканистов и прочих знатоков кверанской магии.</p>
        <p>Ведунов называют по разному по всему миру, но их объединяет одна цель: сохранение древних традиций. Они относятся к школам арканы, кверанским магам и ученым с осторожностью, зная, что тот, кто погружается в магическое знание, часто теряет связь со своим народом, предпочитая высокие миссии помощи своему сообществу.</p>
        <h4>Ведун</h4>
        <p>All Wise gain level-0 in a bonus skill appropriate to their concept, be it Pray, Know, Magic, Survive, or some other skill that makes sense.</p>
        <p>The Wise do not use Effort. All of their arts are either constantly in effect or can be used under particular circumstances or a particular number of times each day.</p>
        </div>` },
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
    .reduce((prev, cur) => prev.concat(cur), [])
    .filter(c => !!c)
    .filter(c => !classes.map(clss => clss.id).includes(c))
    .filter((c, i, a) => a.indexOf(c) == i)
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
    if (!p1) { return 0 }
    if (!p1.partial) return p1.hd;
    return Math.min(p1.maxHd!==undefined?p1.maxHd:2, p2.maxHd!==undefined?p2.maxHd:2, Math.max(p1.hd, p2.hd));
}

const calcAb = (p1, p2) => {
    if (!p1) { return 0 }
    if (!p1.partial) return p1.ab;
    if (p1.ab == p2.ab) return p1.ab;
    const minAb = Math.max(!!p1.minAb ? p1.minAb : p1.ab, !!p2.minAb ? p2.minAb : p2.ab);
    const ab = Math.max(p1.ab, p2.ab);
    return Math.min(minAb, ab);
}

const calcArts = (lvl, p1, p2) => {
    if (!p1?.arts && (!p1.partial || !p2?.arts)) return "";
    if (!p1.partial) return p1.arts[lvl - 1];
    if (!p1.arts) return p2.arts[lvl - 1];
    if (!p2.arts) return p1.arts[lvl - 1];
    const p1a = p1.arts[lvl - 1];
    const p2a = p2.arts[lvl - 1];
    const del = p1a.length > 0 && p2a.length > 0 ? ", " : "";
    return p1a + del + p2a;
}
const calcSpellLvl = (l, p1, p2) => {
    return Math.max(1, Math.round((!p1.partial ? 5 : (p1.spells && p2.spells) ? 3.8 : 3) * l / 10));
}
const calcSpellCast = (l, p1, p2) => {
    if (l == 3 && p1?.spells && p2?.spells) return 2;
    if (l == 6 && (p1?.spells !== p2?.spells)) return 3;
    return Math.max(1, Math.round((!p1.partial ? 5.5 : (p1.spells && p2.spells) ? 4.9 : 4) * l / 10));
}
const calcSpellPrepared = (l, p1, p2) => {
    if (!p1.partial) {
        switch (l) {
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
    if (p1?.spells && p2?.spells) {
        switch (l) {
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
    switch (l) {
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
    <div v-if="nonClasses.length > 0"> He хватает описания классов: {{ nonClasses }}</div>
    <div class="flex-container">
        <div v-if="!classList.length">
            Нет классов для выбранной культуры {{ race }}.
        </div>
        <template v-if="!!classList.length">
            <div class="list">
                <ul class="ul-empty">
                    <li v-for="cls in classList.filter(c => !c.partial)" :key="cls.id">
                        <input type="radio" :id="cls.id" v-bind:value="cls" v-model="picked1"
                            @update:model-value="$emit('picked1', picked1)" />
                        <label :for="cls.id">{{ cls.title }}</label>
                    </li>
                    <li>
                        <span>Приключенец (смешание двух классов):</span>
                    </li>
                    <li>
                        <ul class="ul-empty">
                            <li v-for="cls in classList.filter(c => c.partial)" :key="cls.id">
                                <input type="radio" :id="cls.id" :value="cls" v-model="picked1"
                                    @update:model-value="$emit('picked1', picked1)" />
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
                    <li v-for="cls in partialClassList.filter(c => c.id != picked1.id)" :key="cls.id">
                        <input type="radio" :id="cls.id + 2" :value="cls" v-model="picked2"
                            @update:model-value="$emit('picked2', picked2)" />
                        <label :for="cls.id + 2">+ {{ cls.title }}</label>
                    </li>
                </ul>
            </div>
        </template>
    </div>
    <div v-if="!!picked1 && showClass(picked1, picked2)">
        <h3>{{ picked1.title }}</h3>
        <div v-html="picked1.description"></div>
    </div>
    <div v-if="!!picked2 && picked1.partial && showClass(picked1, picked2)">
        <h3>{{ picked2.title }}</h3>
        <div v-html="picked2.description"></div>
    </div>
    <div v-if="showClass(picked1, picked2)">
        <h3>{{ picked1.title }}{{ picked1.partial && !!picked2 ? "/" + picked2.title : "" }} class table</h3>
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
                    <td>{{ index }}d6{{ calcHd(picked1, picked2) == 0 ? '' : ((calcHd(picked1, picked2) > 0 ? '+' : '')
                        +
                        (index * calcHd(picked1, picked2))) }}</td>
                    <td>+{{ (picked1.partial && (!!picked1.minAb || !!picked2?.minAb)) ? Math.ceil(calcAb(picked1, picked2) * (index) / 10) : Math.floor(calcAb(picked1, picked2) * index / 10) }}</td>
                    <td>
                        <span v-if="index == 1">Race Focus, {{ picked1.foci }}{{ picked1.foci.length > 0 ? ', ' : '' }}<span
                                v-if="picked1.partial">{{ picked2.foci }}{{ picked2.foci.length > 0 ? ', ' : '' }}</span></span>
                        <span v-if="index == 1 || index == 2 || index == 5 || index == 7 || index == 10">+1 Any</span>
                    </td>
                    <td v-if="!!picked1.arts || !!picked2?.arts"><span>{{ calcArts(index, picked1, picked2) }}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <h4 v-if="picked1?.spells || picked2?.spells">
            {{ picked1.title }}{{ picked1.partial && !!picked2 ? "/" + picked2?.title : "" }}
            spells table</h4>
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
    padding-inline-start: 16px !important;
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
