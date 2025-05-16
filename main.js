import { aplicarTextos, setIdioma } from './export.js';
import { iniciarJuego1 } from './game1.js';
import { iniciarJuego2 } from './game2.js';

let idioma = 'es';

document.addEventListener('DOMContentLoaded', () => {
  aplicarTextos();

  document.getElementById('btn-lang').addEventListener('click', () => {
    idioma = idioma === 'es' ? 'en' : 'es';
    setIdioma(idioma);
    document.getElementById('btn-lang').textContent = idioma === 'es' ? '🌐 Español' : '🌐 English';
  });

  document.getElementById('card-juego1').addEventListener('click', () => {
    mostrarPantalla('juego1');
    iniciarJuego1();
  });

  document.getElementById('card-juego2').addEventListener('click', () => {
    mostrarPantalla('juego2');
    iniciarJuego2();
  });
});

function mostrarPantalla(id) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  document.getElementById('pantalla-' + id).classList.add('activa');
}
