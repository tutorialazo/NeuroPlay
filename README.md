# 🎮 NeuroPlay – Videojuego Educativo para Niños con Asperger

**NeuroPlay** es un videojuego interactivo y educativo diseñado para fortalecer la atención, concentración y habilidades sociales en niños de 6 a 12 años con características del Síndrome de Asperger. El proyecto propone una experiencia lúdica, segura y sensorialmente adaptada, acompañada de una fuerte identidad visual y soporte técnico.

---

## 🌟 Objetivos del Proyecto

- Fortalecer atención y concentración mediante dinámicas de juego.
- Ofrecer una herramienta inclusiva validada por especialistas.
- Evitar sobrecarga sensorial en la experiencia de usuario.
- Facilitar la participación de padres y docentes como guías activos.

---

## 🧩 Componentes del Sistema

### 1. Frontend Web (HTML + CSS + JS)
- Pantallas:
  - `Inicio`: nombre del juego, selección de idioma, botones para iniciar/ver puntajes/opciones.
  - `Juego`: encontrar el círculo verde, barra de tiempo, puntuación y niveles.
  - `Resultados`: muestra puntaje final, opción de reiniciar o volver al menú.
- Interacción:
  - Sistema de puntaje y niveles.
  - Detección de objeto correcto (🟢) con retroalimentación visual.
  - Almacenamiento de mejor puntaje en `localStorage`.

### 2. Backend (Node.js + Express + Consul)
- Microservicio con endpoints:
  - `/health`: verificación de estado.
  - `/`: muestra información de servicios registrados en Consul.
- Registro dinámico del servicio con TTL, health check y eliminación automática si cae.

---

## 🎨 Identidad Visual

### Logotipo
Ojo dentro de un joystick rodeado de íconos de logros, representando enfoque, juego y progreso.

### Paleta de Colores
- `#AEDFF7` – Calma y accesibilidad
- `#2C3E50` – Seguridad y confianza
- `#F0F3F5` – Neutralidad sensorial
- `#A2D5AB` – Progreso y armonía

### Tipografía
- Títulos: **Poppins** (moderna, clara)
- Infantil/lúdico: **Comic Neue** / **Comic Sans**

### Iconografía
- Íconos redondeados, suaves, con símbolos de foco, tiempo y logros.
- Emojis como estímulos visuales amigables (🟢 🔴 🔵 🟠).

---

## 🧑‍🤝‍🧑 Público Objetivo

**Primario:**  
Niños y niñas de 6 a 12 años diagnosticados dentro del espectro autista, especialmente con características de Asperger.

**Secundario:**  
Padres, madres, tutores, docentes, psicopedagogos y terapeutas que trabajan con población neurodivergente.

---

## 📊 Métricas de Éxito

- N° de sesiones activas semanales
- Tiempo promedio de atención
- N° de usuarios recurrentes
- Calificación en tiendas
- N° de escuelas/instituciones usuarias

---

## 👨‍💻 Equipo del Proyecto

- **Daniel Ramírez** – Líder del proyecto y frontend
- **Edwin Chigne** – Diseño de niveles y UI amigable
- **Martín Kong** – Backend y lógica del juego
- **Jefferson Jacobo** – Tester y despliegue

---

> “Donde enfocar la mente, se convierte en un juego.” – *NeuroPlay*
