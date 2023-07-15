let numTab = 0;
const winner = document.getElementById("vincitore");
const inserimento = document.getElementById("inserimento");
const main = document.getElementById("main");
const numCelle = 76;
const contenitoreTombola = document.getElementById("contenitoreTombola");
let numeriEstratti = [];
let tabellaGiocatore = [];
const vincitore = [];
for (let i = 0; i < 24; i++) {
  vincitore.push(0);
}
//let numeroTabelle = window.prompt("Quante cartelle vuoi selezionare");

console.log(numTab);
const cambioPagina = () => {
  const numeroTabelle = document.getElementById("numCartelle");
  numTab = numeroTabelle.valueAsNumber;
  if (numTab < 1) {
    alert("Numero tabelle non valido");
    location.reload(true);
  } else {
    inserimento.style.display = "none";
    main.style.display = "block";
    //! Creo tabella giocatore
    const cartelle = document.getElementById("cartelle");

    for (let i = 0; i < numTab; i++) {
      const tabella = document.createElement("div");
      tabella.classList.add("tabella");
      for (let i = 0; i < 24; i++) {
        const cella = document.createElement("div");
        const h4 = document.createElement("h4");
        const numero = Math.floor(Math.random() * tabellaGiocatore.length);
        h4.innerText = tabellaGiocatore[numero];
        tabellaGiocatore.splice(numero, 1);
        cella.classList.add("celleGiocatore");
        cella.appendChild(h4);
        tabella.appendChild(cella);
      }
      tabella.name = i + 1;
      cartelle.appendChild(tabella);
      tabellaGiocatore = numeriEstratti.slice();
    }
  }
};
const startButton = document.getElementById("inserimentoBottone");
startButton.onclick = cambioPagina;

for (let j = 0; j < numCelle; j++) {
  numeriEstratti[j] = j + 1;
  tabellaGiocatore[j] = j + 1;
}

//! Genero le celle

for (let i = 0; i < numCelle; i++) {
  const cella = document.createElement("div");
  const h3 = document.createElement("h3");
  h3.innerText = i + 1;
  cella.classList.add("cellaNumero");
  cella.appendChild(h3);
  contenitoreTombola.appendChild(cella);
}
//! Accendi numero cartella giocatore
const accendiGiocatore = (N) => {
  const celle = document.getElementsByClassName("celleGiocatore");
  for (let i = 0; i < celle.length; i++) {
    let valore = celle[i].firstChild;
    valore = valore.innerText;
    if (valore === N) {
      celle[i].classList.add("cellaNumeroEstratta");
      let pos = celle[i].parentNode;
      pos = pos.name;
      pos = parseInt(pos);
      vincitore[pos - 1]++;
    }
  }
  let x = false;
  for (let i = 0; i < vincitore.length; i++) {
    if (vincitore[i] === 24) {
      winner.style.display = "block";
      const labelVincitore = document.createElement("h3");
      labelVincitore.innerText = i + 1;
      winner.appendChild(labelVincitore);
      x = true;
    }
  }
  if (x === true) {
    main.style.display = "none";
    const bottoneReset = document.createElement("button");
    bottoneReset.classList.add("bottoneReset");
    bottoneReset.innerText = "New Game";
    winner.appendChild(bottoneReset);
    bottoneReset.onclick = () => {
      location.reload(true);
    };
  }
};

//! Click bottone e rappresentazione tabellone
const accendiNumero = (indice) => {
  const celle = document.getElementsByClassName("cellaNumero");
  celle[numeriEstratti[indice] - 1].classList.add("cellaNumeroEstratta");
  accendiGiocatore(celle[numeriEstratti[indice] - 1].firstChild.innerText);
};

const generaNumber = document.getElementById("generaNumero");
const genera = () => {
  if (numeriEstratti.length === 0) {
    window.alert("Tutti i numeri sono usciti");
    location.reload(true);
  }
  const numero = Math.floor(Math.random() * numeriEstratti.length);
  accendiNumero(numero);
  numeriEstratti.splice(numero, 1);
};
generaNumber.onclick = genera;

//! Crea tabella giocatore
const assegna = (indice) => {
  const celle = document.getElementsByClassName("cellaNumero");
  celle[numeriEstratti[indice] - 1].classList.add("cellaNumeroEstratta");
};
