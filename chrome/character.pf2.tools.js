console.log("Pathfinder proficiency without level for character.pf2.tools");

// SIMPLE DC
let sdLoop = true;
function replaceSimpleDc(node) {
  if (!sdLoop) return;
  const caption = node.querySelectorAll("h4");
  if (!caption) return;
  if (caption[0] && caption[0].outerText && caption[0].outerText.toLowerCase().includes("simple dc")) {
    const textNodes = node.querySelectorAll(".text-center");
    if (textNodes) {
      textNodes.forEach((textNode) => {
        replaceInnerNode(textNode, "30", "25");
        replaceInnerNode(textNode, "40", "30");
      });
    }

  }
}
function replaceSpellDc(node) {
  if (!sdLoop) return;
  const caption = node.querySelectorAll("h4");
  if (!caption) return;
  if (caption[0] && caption[0].outerText && caption[0].outerText.toLowerCase().includes("spell level dcs")) {
    const textNodes = node.querySelectorAll(".text-center");
    if (textNodes) {
      textNodes.forEach((textNode) => {
        replaceInnerNode(textNode, "18", "16");
        replaceInnerNode(textNode, "20", "16");
        replaceInnerNode(textNode, "23", "17");
        replaceInnerNode(textNode, "26", "18");
        replaceInnerNode(textNode, "28", "18");
        replaceInnerNode(textNode, "31", "19");
        replaceInnerNode(textNode, "34", "20");
        replaceInnerNode(textNode, "36", "20");
        replaceInnerNode(textNode, "39", "21");
      });
    }
  }
}
function replaceDcByLevel(node) {
  const caption = node.querySelectorAll("h4");
  if (!caption) return;
  if (caption[0] && caption[0].outerText && caption[0].outerText.toLowerCase().includes("dc by level")) {
    const textNodes = node.querySelectorAll(".text-center");
    if (textNodes) {
      textNodes.forEach((textNode) => {
        replaceInnerNode(textNode, "14", "15");
        replaceInnerNode(textNode, "16", "15");
        replaceInnerNode(textNode, "18", "16");
        replaceInnerNode(textNode, "19", "16");
        replaceInnerNode(textNode, "20", "16");
        replaceInnerNode(textNode, "22", "17");
        replaceInnerNode(textNode, "23", "17");
        replaceInnerNode(textNode, "24", "17");
        replaceInnerNode(textNode, "26", "18");
        replaceInnerNode(textNode, "27", "18");
        replaceInnerNode(textNode, "28", "18");
        replaceInnerNode(textNode, "30", "19");
        replaceInnerNode(textNode, "31", "19");
        replaceInnerNode(textNode, "32", "19");
        replaceInnerNode(textNode, "34", "20");
        replaceInnerNode(textNode, "35", "20");
        replaceInnerNode(textNode, "36", "20");
        replaceInnerNode(textNode, "38", "21");
        replaceInnerNode(textNode, "39", "21");
        replaceInnerNode(textNode, "40", "21");
        replaceInnerNode(textNode, "42", "22");
        replaceInnerNode(textNode, "44", "23");
        replaceInnerNode(textNode, "46", "24");
        replaceInnerNode(textNode, "48", "25");
        replaceInnerNode(textNode, "50", "26");
      });
    }
  }
}
function sDC() {
  setTimeout(function () {
    let select = document.querySelectorAll(".card-body .col div");
    select.forEach(replaceSimpleDc);
    select.forEach(replaceSpellDc);
    select.forEach(replaceDcByLevel);
    if (sdLoop) {
      console.log(
        "Pathfinder proficiency without level for character.pf2.tools sDC again"
      );
      sDC();
    }
  }, 5000);
}
sDC();

function replaceInnerNode(node, from, to) {
  if (node.innerHTML.replaceAll) {
    node.innerHTML = node.innerHTML.replaceAll(
      from,
      `<span style="border-bottom: 1px dotted;" title="${from} original">${to}</span>`
    );
    sdLoop = false;
  }
}
