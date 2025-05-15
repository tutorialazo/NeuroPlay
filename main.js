// Variables globales
let puntaje = 0;
let nivelActual = 1;
let tiempoRestante = 30; // segundos
let intervaloTiempo;
const objetoCorrecto = "🟢"; // El objeto que se debe encontrar

// Función para iniciar el juego
function iniciarJuego() {
  puntaje = 0;
  nivelActual = 1;
  actualizarZonaJuego();
  actualizarPuntaje();
  iniciarTiempo();
}

// Función para actualizar la zona de juego
function actualizarZonaJuego() {
  const zonaJuego = document.querySelector('.zona-juego');
  zonaJuego.innerHTML = '';

  const objetos = ["🔴", "🔵", "🟠", "🟡", "🟣", "🟤", "🟥", "🟦"];
  const posicionCorrecta = Math.floor(Math.random() * 8);
  
  for (let i = 0; i < 8; i++) {
    const div = document.createElement('div');
    div.className = 'objeto';
    div.textContent = (i === posicionCorrecta) ? objetoCorrecto : objetos[Math.floor(Math.random() * objetos.length)];
    
    div.addEventListener('click', () => verificarObjeto(div));
    
    zonaJuego.appendChild(div);
  }
}

// Función para iniciar el tiempo
function iniciarTiempo() {
  tiempoRestante = 30;
  clearInterval(intervaloTiempo);

  intervaloTiempo = setInterval(() => {
    tiempoRestante--;
    actualizarBarraTiempo();

    if (tiempoRestante <= 0) {
      clearInterval(intervaloTiempo);
      terminarJuego();
    }
  }, 1000);

  actualizarBarraTiempo();
}

// Actualizar barra de tiempo visual
function actualizarBarraTiempo() {
  const progreso = document.querySelector('.progreso');
  progreso.style.width = `${(tiempoRestante / 30) * 100}%`;

  if (tiempoRestante <= 10) {
    progreso.style.backgroundColor = "#B80C09"; // Rojo de advertencia
  } else {
    progreso.style.backgroundColor = "#84A98C"; // Verde normal
  }
}

// Función para verificar si el objeto elegido es correcto
function verificarObjeto(divSeleccionado) {
  if (divSeleccionado.textContent === objetoCorrecto) {
    divSeleccionado.classList.add('correcto');
    puntaje += 100;
    actualizarPuntaje();
    setTimeout(() => pasarAlSiguienteNivel(), 500);
  } else {
    divSeleccionado.classList.add('incorrecto');
  }
}

// Actualizar el puntaje en pantalla
function actualizarPuntaje() {
  const puntajeElemento = document.getElementById('puntaje');
  if (puntajeElemento) {
    puntajeElemento.textContent = `Puntaje: ${puntaje}`;
  }
}

// Función para pasar al siguiente nivel
function pasarAlSiguienteNivel() {
  nivelActual++;
  document.querySelector('#pantalla-juego h2').textContent = `Nivel ${nivelActual}`;
  actualizarZonaJuego();
}

// Función para terminar el juego
function terminarJuego() {
  clearInterval(intervaloTiempo);
  mostrarPantalla('resultados');

  document.querySelector('#pantalla-resultados h2').textContent = "🏁 ¡Juego terminado!";
  document.querySelector('#pantalla-resultados p').innerHTML = `Tu puntaje final fue: <strong>${puntaje}</strong>`;

  guardarMejorPuntaje();
}

// Guardar el mejor puntaje usando localStorage
function guardarMejorPuntaje() {
  const mejorPuntajeGuardado = localStorage.getItem('mejorPuntaje');
  if (!mejorPuntajeGuardado || puntaje > parseInt(mejorPuntajeGuardado)) {
    localStorage.setItem('mejorPuntaje', puntaje);
    alert("🏆 ¡Nuevo récord!");
  }
}

// Para alternar pantallas
function mostrarPantalla(id) {
  document.querySelectorAll('.pantalla').forEach(p => p.classList.remove('activa'));
  document.getElementById('pantalla-' + id).classList.add('activa');

  if (id === 'juego') {
    iniciarJuego();
  }
}

// Inicializar pantalla de inicio
document.addEventListener('DOMContentLoaded', () => {
  mostrarPantalla('inicio');
});
