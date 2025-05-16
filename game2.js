let secuencia = [];
let entradaUsuario = [];
let nivel2 = 1;
const objetos2 = ["🔴", "🟠", "🟡", "🟢", "🔵", "🟣"];

export function iniciarJuego2() {
  secuencia = [];
  entradaUsuario = [];
  nivel2 = 1;
  generarSecuencia();
}

function generarSecuencia() {
  const zona = document.querySelector('#zona-juego2');
  zona.innerHTML = '';
  entradaUsuario = [];

  // Definir longitud de la secuencia según el nivel
  let longSecuencia = 1;
  if (nivel2 === 2) longSecuencia = 2;
  else if (nivel2 >= 3 && nivel2 <= 4) longSecuencia = 2;
  else if (nivel2 >= 5 && nivel2 <= 7) longSecuencia = 3;
  else longSecuencia = 3;

  // Generar la secuencia de emojis aleatorios
  let anterior = null;
  for (let i = 0; i < longSecuencia; i++) {
    let nuevo;
    do {
      nuevo = objetos2[Math.floor(Math.random() * objetos2.length)];
    } while (nuevo === anterior); // evitar repetido inmediato

    secuencia.push(nuevo);
    anterior = nuevo;
  }


  mostrarSecuencia(zona);
}

function mostrarSecuencia(zona) {
  zona.innerHTML = '';
  const emojiDisplay = document.createElement('div');
  emojiDisplay.style.fontSize = '5rem';
  emojiDisplay.style.textAlign = 'center';
  emojiDisplay.style.margin = '40px 0';
  zona.appendChild(emojiDisplay);

  // Agregar un pequeño delay inicial para que el jugador se prepare
  const delayInicial = 800;

  secuencia.forEach((emoji, i) => {
    setTimeout(() => {
    emojiDisplay.textContent = emoji;

    // Mostrar el último emoji más tiempo antes de continuar
    if (i === secuencia.length - 1) {
      setTimeout(() => {
        emojiDisplay.textContent = '';
        prepararEntrada(zona);
      }, 1500); // 1.5 segundos visible el último
    }
  }, 1000 + i * 1500); // 1s de preparación + secuencia con más pausa
  });
}


function prepararEntrada(zona) {
  zona.innerHTML = '';
  entradaUsuario = [];

  objetos2.forEach(obj => {
    const btn = document.createElement('div');
    btn.className = 'objeto';
    btn.textContent = obj;
    btn.addEventListener('click', () => verificarEntrada(obj, zona));
    zona.appendChild(btn);
  });
}

function verificarEntrada(objeto, zona) {
  entradaUsuario.push(objeto);
  const index = entradaUsuario.length - 1;

  // Buscar el botón que se está clickeando
  const botones = zona.querySelectorAll('.objeto');
  const botonSeleccionado = [...botones].find(b => b.textContent === objeto && !b.classList.contains('seleccionado'));

  if (!botonSeleccionado) return;

  // Comparar con la secuencia
  if (entradaUsuario[index] !== secuencia[index]) {
    botonSeleccionado.classList.add('incorrecto');
    mostrarMensajeJuego2('❌ ¡Intenta de nuevo!', '#f8d7da', '#842029');
    setTimeout(() => {
      document.getElementById('zona-juego22').innerHTML = '';
      iniciarJuego2();
    }, 2000);
  } else {
    botonSeleccionado.classList.add('correcto', 'seleccionado');

    if (entradaUsuario.length === secuencia.length) {
      mostrarMensajeJuego2('✅ ¡Bien hecho!');
      nivel2++;
      setTimeout(() => {
        document.getElementById('zona-juego22').innerHTML = '';
        generarSecuencia();
      }, 2000);
    }
  }
}


function mostrarMensajeJuego2(texto, colorFondo = '#d1e7dd', colorTexto = '#0f5132') {
  const zona = document.getElementById('zona-juego22');
  zona.innerHTML = ''; // limpia anteriores

  const mensaje = document.createElement('div');
  mensaje.textContent = texto;
  mensaje.className = 'mensaje-suave';
  mensaje.style.background = colorFondo;
  mensaje.style.color = colorTexto;
  mensaje.style.padding = '12px';
  mensaje.style.borderRadius = '12px';
  mensaje.style.marginTop = '20px';
  mensaje.style.fontSize = '1.2rem';
  mensaje.style.textAlign = 'center';

  zona.appendChild(mensaje);
}
