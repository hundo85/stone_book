function pageLoad(){

// StoneBook
// 1. var helyett let használata
// 2. '==' helyett mindig '===' használjunk
// 3. ';' ne maradjon le az utasítások végéről 

//HTML
// 1. Nem minden tag-nek van zárótag-je (img, link...)
// 2. Csak 1db <h1> tag legyen egy oldalon!
// 3. Használjunk lowercase markup -okat pl.: <div> és nem <DIV>

//css
// 1. Szintaktikai hibákra ügyeljünk! Nem mindegy, hogyan írjuk le a szélesség beállítást.
// 2. Olvashatóan tagoljuk a kódot mindig! Beszélő neveket használjunk ID-k, osztályok és változók elnevezésénél.
// 3. Használjunk shorthand-et pl.: padding: 0 20px 0 10px; 

//js
// 1. addEventListener("load", pageLoad); -nél nem kell zárójel viszont addEventListener("load", pageLoad() {...});
// 2. ["alma"] === ["alma"] // false
// 3. Backtick alkalmazásra figyelni: let a = `This is a
//                                              multiline ${c} text.`;

// Hf: kitölteni és Highlights oldalra felrakni
  let rootE = document.getElementById("root");
  let notes = [];

// Common ----------------------------------------------------------------------
notes.push({
  tag: "div",
  content: `
    A var helyett let használata!
  `
});

notes.push({
  tag: "code",
  content: `
    let text = "Hello, World!";
  `
});

notes.push({
  tag: "div",
  content: `
    A '==' helyett mindig '==='-t használjunk!
  `
});

notes.push({
  tag: "code",
  content: `
    if(a===b){...}
  `
});

notes.push({
  tag: "div",
  content: `
    A ';' ne maradjon le az utasítások végéről!
  `
});

notes.push({
  tag: "code",
  content: `
    if(true) let a = 32;
    else let b = 8        // SyntaxError
    let c = a + b;
  `
});

// HTML ----------------------------------------------------------------------
notes.push({
  tag: "div",
  content: `
    Nem minden tag-nek van zárótag-je!
  `
});

notes.push({
  tag: "code",
  content: `
    &ltimg src="./src/img/smiley.gif" alt="Smiley face">
    &ltmeta name="viewport" content="width=device-width, initial-scale=1.0">
    &ltlink rel="stylesheet" href="./css/style.css">
  `
});

notes.push({
  tag: "div",
  content: `
    Csak 1db &lth1> tag legyen egy oldalon!
  `
});

notes.push({
  tag: "code",
  content: `
    &lth1>Ebből csak egy lehet!&lt/h1>
  `
});

notes.push({
  tag: "div",
  content: `
    Használjunk lowercase markup -okat!
  `
});

notes.push({
  tag: "code",
  content: `
    &ltdiv> és nem &ltDIV>
  `
});

// CSS ----------------------------------------------------------------------
  notes.push({
    tag: "div",
    content: `
      Szintaktikai hibákra ügyeljünk! Nem mindegy, hogyan írjuk le a szélesség beállítást.
    `
  });

  notes.push({
    tag: "code",
    content: `
      width: 100%; // és nem widht
    `
  });

  notes.push({
    tag: "div",
    content: `
    Olvashatóan tagoljuk a kódot mindig! Beszélő neveket használjunk az ID-k, osztályok és változók elnevezésénél.
    `
  });

  notes.push({
    tag: "code",
    content: `
      div.container {
        padding: 0.5em;
      }
    `
  });

  notes.push({
    tag: "div",
    content: `
      Használjunk shorthand rövidítéseket!
    `
  });

  notes.push({
    tag: "code",
    content: `
      padding: 0 20px 0 10px;
    `
  });

// Javascript ----------------------------------------------------------------------
  notes.push({
    tag: "div",
    content: `
      Az addEventListener("load", pageLoad); -nál nem kell zárójel viszont addEventListener("load", pageLoad() {...}); kifejezésnél igen.
    `
  });

  notes.push({
    tag: "code",
    content: `
      addEventListener("load", pageLoad); 
      addEventListener("load", pageLoad() {...});
    `
  });

  notes.push({
    tag: "div",
    content: `
      A tömböknél ügyeljünk az összehasonlításra ugyanis a === jellel nem kapunk egyezőséget.
    `
  });

  notes.push({
    tag: "code",
    content: `
      ["alma"] === ["alma"] // false
    `
  });

  notes.push({
    tag: "div",
    content: `
      Backtick alkalmazására figyelni!
    `
  });

  notes.push({
    tag: "code",
    content: `
      let a = \`
        This is a 
        multiline \$\{\c\} text.
      \`;
    `
  });

  let counter = 0;
  for (note of notes) {
    switch (counter) {
      case 0:
        rootE.insertAdjacentHTML("beforeend", `<h1>StoneBook</h1>`);
        break;
      
      case 6:
        rootE.insertAdjacentHTML("beforeend", `<h2>HTML StoneBook</h2>`);
        break;
        
      case 12:
        rootE.insertAdjacentHTML("beforeend", `<h2>CSS StoneBook</h2>`);
        break;  
      
      case 18:
        rootE.insertAdjacentHTML("beforeend", `<h2>Javascript StoneBook</h2>`);
        break;

      default:
        break;
    }

    if(note.tag === "code"){
      note.tag += ` class="javascript hljs xml"`;
      rootE.insertAdjacentHTML("beforeend", `<pre><${note.tag}>${note.content}</code></pre>`);
    } else {
      note.tag += ` class="rule"`;
      rootE.insertAdjacentHTML("beforeend", `<${note.tag}>${note.content}</${note.tag}>`);
    }
    counter++;
  }

  rootE.insertAdjacentHTML("beforeend", `<div></div>`);
  
}
window.addEventListener("load", pageLoad);

