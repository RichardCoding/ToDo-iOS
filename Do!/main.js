var testo; // Valore input
var array = []; // Array todo
var i;

// Variabile per aggiungere un'elemento
function tastoPremuto() {
  // Variabili necessarie per eseguire il resto del codice
  testo = document.getElementById('oggetto').value // testo corrisponde a ciò che è nell'input
  var ul = document.getElementById('lista'); //  La lista
  var lis = ul.getElementsByTagName('li').length; // Numero elementi presenti

  if (testo != "") { // Se c'è del testo nel campo di input

  array.unshift(testo);
  if (lis > 0) { // Se ci sono attivita le rimuove
    ul.innerHTML = "";
  }
  for (i = 0; i < array.length; i++) {
    // Nuovo elemento
    var li = document.createElement('li');
    var bottone = document.createElement('button');
    // Immagine completato
    var immagine_done = document.createElement('img');

    // Setta gli attributi
    li.setAttribute('id','elementi');
    bottone.setAttribute('class','fatto');
    // Attributi immagine "fatto!"
    immagine_done.setAttribute('src',"https://image.ibb.co/edzRwv/fatto.png");
    immagine_done.setAttribute('class','img_fatto');
    immagine_done.setAttribute('onclick','fatto()')
    immagine_done.setAttribute('alt','fatto');
    immagine_done.setAttribute('border','0');

    // Setta il valore
    li.appendChild(document.createTextNode(array[i]));

    // Lo aggiunge alla lista
    ul.appendChild(li);
    li.appendChild(bottone);
    li.appendChild(immagine_done);

    // Pulisce l'input
    document.getElementById('oggetto').value = "";
  }
}
}

// Se il tasto completato è pigiato
//jQuery

function fatto() {
  $("ul").on("click","button", function(e) {
    var elim = $(this).parent().text(); // Contenuto attività da eliminare
    var index = array.indexOf(elim); // Posizione nell'array
    e.preventDefault();
    $(this).parent().remove(); // Rimuove l'attività da schermo

    array.splice(index,1); // Rimuove l'elemento scelto dall'array
});

}
