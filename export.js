import { textos } from './lang/texts.js';

// Idioma actual (se puede cambiar dinámicamente)
let idiomaActual = 'es';

function setIdioma(nuevoIdioma) {
  if (textos[nuevoIdioma]) {
    idiomaActual = nuevoIdioma;
    aplicarTextos();
  }
}

function getTexto(clave) {
  return textos[idiomaActual][clave] || clave;
}

function aplicarTextos() {
  const idioma = textos[idiomaActual];

  // Pantalla de juego (si está presente)
  if (document.getElementById('label-score')) {
    document.getElementById('label-score').textContent = idioma.puntaje;
  }

  // Pantalla de inicio (cards)
  const card1 = document.getElementById('card-juego1');
  const card2 = document.getElementById('card-juego2');

  if (card1) {
    card1.innerHTML = `<div style="font-size: 2.5rem;">🟢</div><div>${idioma.card1}</div>`;
  }

  if (card2) {
    card2.innerHTML = `<div style="font-size: 2.5rem;">🧠</div><div>${idioma.card2}</div>`;
  }
}

export { getTexto, setIdioma, aplicarTextos };
