function pageLoad(){

// StoneBook
// 1. var helyett let használata
// 2. '==' helyett mindig '===' használjunk
// 3. ';' ne maradjon le az utasítások végéről 

//HTML
// 1. Nem minden tag-nek van zárótag-je (img, link...)
// 2. A property-ket ne felejtsük el megadni pl: <input type="text"...
// 3. Használjunk lowercase markup -okat pl.: <div> és nem <DIV>

//css
// 1. SASS használata nesting-gel és mixinekkel hasznos
// 2. Olvashatóan tagoljuk a kódot mindig!
// 3. Használjunk shorthand-et pl.: padding: 0 20px 0 10px; 

//js
// 1. addEventListener("load", pageLoad); -nél nem kell zárójel viszont addEventListener("load", pageLoad() {...});
// 2. ["alma"] === ["alma"] // false
// 3. Backthick alkalmazásra figyelni: let a = `This is a
//                                              multiline ${c} text.`;


  let rootE = document.getElementById("root");
  let notes = [];
  notes.push({
    tag: "div",
    content: `
      Az addEventListener("load", pageLoad); -nél nem kell zárójel viszont addEventListener("load", pageLoad() {...});
    `
  });

  notes.push({
    tag: "code",
    content: `
      addEventListener("load", pageLoad); addEventListener("load", pageLoad() {...});
    `
  });

  console.log(rootE);
  for (note of notes) {
    rootE.insertAdjacentHTML("beforeend", `<${note.tag}>${note.content}</${note.tag}>`);
  }

}
window.addEventListener("load", pageLoad);

