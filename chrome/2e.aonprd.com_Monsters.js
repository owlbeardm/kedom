console.log("Pathfinder proficiency without level for 2e.aonprd.com/Monsters");

// SIMPLE DC
let sdLoop = true;

function replaceSimpleDc(node) {
  if (!sdLoop) return;
  const caption = node.querySelectorAll("h4");
  if (!caption) return;
  if (
    caption[0] &&
    caption[0].outerText &&
    caption[0].outerText.toLowerCase().includes("simple dc")
  ) {
    const textNodes = node.querySelectorAll(".text-center");
    if (textNodes) {
      textNodes.forEach((textNode) => {
        replaceInnerNode(textNode, "30", "25");
        replaceInnerNode(textNode, "40", "30");
      });
    }
    sdLoop = false;
  }
}
// const digit = /(?<=[+-])\d+/;
// (AC|DC)\s  \d

const digit =
  /((?<![a-zA-z]|\d|(Creature|Str|Dex|Con|Int|Wis|Cha|<b>Str<\/b>|<b>Dex<\/b>|<b>Con<\/b>|<b>Int<\/b>|<b>Wis<\/b>|<b>Cha<\/b>)\s)[+-]\d+(?!\s(status|item|circumstance))|(?<=AC\s|<b>AC<\/b>\s|<b>DC<\/b>\s|DC\s)\d+)/;
function sDC() {
  setTimeout(function () {
    let main = document.querySelectorAll("#main");
    if (main && main[0]) {
      const creatures = main[0].querySelectorAll("h1>span");
      let level = undefined;
      creatures.forEach((creature) => {
        if (level || level === 0) return;
        console.log(creature.innerHTML);
        level = creature.innerHTML.match(/[-]?\d+/)[0];
        if (level) {
          level = level * 1.0;
          console.log(
            "Pathfinder proficiency without level, creature level",
            level
          );
        }
      });
      if (level || level === 0) {
        sdLoop = false;
        console.log("Pathfinder proficiency without level", main, main[0]);
        let matched = true;
        let start = 0;
        while (matched) {
          const match = main[0].innerHTML.substring(start).match(digit);

          if (!match) {
            matched = false;
          } else {
            const searchIndex = main[0].innerHTML
              .substring(start)
              .search(digit);
            const index = searchIndex + 66 + 2 * match[0].length;
            if (searchIndex > 0)
              replaceInnerNode(
                main[0],
                start + searchIndex,
                match[0].length,
                match[0],
                level
              );
            console.log(
              "match",
              match[0],
              searchIndex,
              start,
              index,
              main[0].innerHTML.length
            );
            start = searchIndex > 0 ? start + index : start + 1;
          }
        }
        // select.forEach(replaceSimpleDc);
        // select.forEach(replaceSpellDc);
        // select.forEach(replaceDcByLevel);
      }
    }
    if (sdLoop) {
      console.log("Pathfinder proficiency without level again");
      sDC();
    }
  }, 1000);
}
sDC();

function replaceInnerNode(node, from, length, original, level) {
  console.log(
    "Pathfinder proficiency without level again",
    node,
    from,
    length,
    original,
    level,
    original * 1.0 - level
  );
  console.log(
    "Pathfinder proficiency without level again",
    node.innerHTML.substring(from - 20, from + 20)
  );
  const to = original * 1.0 - level;
  node.innerHTML =
    node.innerHTML.substring(0, from) +
    `<span style="border-bottom: 1px dotted;" title="${original} original">${
      to > 0 && original.includes("+") ? "+" + to : to
    }</span>` +
    node.innerHTML.substring(from + length);
}
