let puntaje = 0;
let nivel = 1;
const objetoCorrecto = "🟢";
let tiempoRestante;
let timer;

export function iniciarJuego1() {
  document.getElementById('zona-juego12').innerHTML = '';
  
  puntaje = 0;
  nivel = 1;
  actualizarJuego();
}

function actualizarJuego() {
  const zonaJuego = document.querySelector('#zona-juego1');
  zonaJuego.innerHTML = '';

  const cantidadObjetos = 8 + Math.floor(nivel / 2);
  const objetos = ["🔴", "🔵", "🟠", "🟡", "🟣", "🟤", "🟥", "🟦"];
  const posicionCorrecta = Math.floor(Math.random() * cantidadObjetos);

  for (let i = 0; i < cantidadObjetos; i++) {
    const div = document.createElement('div');
    div.className = 'objeto';
    div.textContent = (i === posicionCorrecta) ? objetoCorrecto : objetos[Math.floor(Math.random() * objetos.length)];
    div.addEventListener('click', () => verificar(div));
    zonaJuego.appendChild(div);
  }

  document.getElementById('nivel-juego1').textContent = `Nivel ${nivel}`;
  document.getElementById('label-score').textContent = `Puntaje: ${puntaje}`;

  iniciarTemporizador();
}

function verificar(div) {
  if (div.textContent === objetoCorrecto) {
    clearInterval(timer);
    div.classList.add('correcto');
    puntaje += 100;

    setTimeout(() => {
      nivel++;
      actualizarJuego();
    }, 500);
  } else {
    div.classList.add('incorrecto');

    if (navigator.vibrate) {
      navigator.vibrate(200); // vibración suave en móviles
    }
  }
}

function iniciarTemporizador() {
  clearInterval(timer);
  tiempoRestante = Math.max(5, 10 - Math.floor(nivel / 2)); // mínimo 5s
  const barra = document.getElementById('barra-progreso');
  barra.style.width = '100%';

  let tiempoTotal = tiempoRestante;
  timer = setInterval(() => {
    tiempoRestante -= 0.1;
    const porcentaje = (tiempoRestante / tiempoTotal) * 100;
    barra.style.width = `${porcentaje}%`;

    if (tiempoRestante <= 0) {
      clearInterval(timer);
      mostrarMensajeSuave('⏰ ¡Tiempo agotado! Reiniciando...');
    }
  }, 100);
}

function mostrarMensajeSuave(texto) {
  const zona = document.getElementById('zona-juego12');
  zona.innerHTML = ''; // 🔥 limpia mensajes anteriores si los hay

  const mensaje = document.createElement('div');
  mensaje.textContent = texto;
  mensaje.style.background = '#f8d7da';
  mensaje.style.color = '#721c24';
  mensaje.style.padding = '12px';
  mensaje.style.borderRadius = '12px';
  mensaje.style.marginTop = '20px';
  mensaje.style.fontSize = '1.2rem';
  mensaje.style.textAlign = 'center';

  zona.appendChild(mensaje);

  setTimeout(() => iniciarJuego1(), 3000);
}
