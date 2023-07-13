const numCelle = 76;
const contenitoreTombola = document.getElementById("contenitoreTombola");
let numeriEstratti = [];
let tabellaGiocatore = [];
let numeroTabelle = window.prompt("Quante cartelle vuoi selezionare (seeleziona un numero tra 0 e 4)");
numeroTabelle = parseInt(numeroTabelle);
if (numeroTabelle < 0 || numeroTabelle > 4) {
  alert("Numero tabelle non valido");
  location.reload(true);
}

if (numeroTabelle > 0 && numeroTabelle < 5) {
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

  const accendiGiocatore = (N) => {
    const celle = document.getElementsByClassName("celleGiocatore");
    for (let i = 0; i < celle.length; i++) {
      let valore = celle[i].firstChild;
      valore = valore.innerText;
      console.log(valore, N);
      console.log(celle[i]);
      if (valore === N) {
        console.log("ciao");
        celle[i].classList.add("cellaNumeroEstratta");
      }
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
    console.log(numero);
    accendiNumero(numero);
    numeriEstratti.splice(numero, 1);
  };
  generaNumber.onclick = genera;

  //! Crea tabella giocatore
  const assegna = (indice) => {
    const celle = document.getElementsByClassName("cellaNumero");
    celle[numeriEstratti[indice] - 1].classList.add("cellaNumeroEstratta");
  };

  //! Creo tabella giocatore
  const cartelle = document.getElementById("cartelle");
  for (let i = 0; i < numeroTabelle; i++) {
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
    cartelle.appendChild(tabella);
    tabellaGiocatore = numeriEstratti.slice();
  }
}
