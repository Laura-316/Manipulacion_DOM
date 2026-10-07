// ==========================================
// TAREA 1: Modificar el estilo del texto del párrafo
// ==========================================
const boton = document.getElementById('botonEstilo');
const parrafo = document.getElementById('parrafo');

boton.addEventListener('click', function() {
    parrafo.style.fontFamily = 'Georgia, serif';
    parrafo.style.fontSize = '24px';
    parrafo.style.color = '#e74c3c';
});

// ==========================================
// TAREA 2: Obtener valores del formulario
// ==========================================
const formulario = document.getElementById('form1');

formulario.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const nombre = formulario.elements['fname'].value;
    const apellido = formulario.elements['lname'].value;

    console.log(nombre, apellido);
});

// ==========================================
// TAREA 3: Mostrar alerta con información de enlaces
// ==========================================
const botonEnlaces = document.getElementById('botonEnlaces');

botonEnlaces.addEventListener('click', function() {
    const enlaces = document.querySelectorAll('a');

    const total = enlaces.length;
    const primero = enlaces[0].href;
    const ultimo = enlaces[enlaces.length - 1].href;

    alert(`Total de enlaces: ${total}\nPrimer enlace: ${primero}\nÚltimo enlace: ${ultimo}`);
});

// ==========================================
// TAREA EXTRA: Manipulación del DOM en 9 pasos
// ==========================================

// Paso 1: Selecciona la sección con id="contenedor"
const contenedor = document.getElementById('contenedor');

// Paso 2: Selecciona todos los elementos de la lista con class="segundo"
const elementosSegundo = document.querySelectorAll('.segundo');

// Paso 3: Selecciona el elemento li con class="tercero" dentro de <ol>
const terceroEnOl = document.querySelector('ol .tercero');

// Paso 4: Dale el texto "¡Hola!" a la sección con id="contenedor"
if (contenedor) {
    contenedor.textContent = '¡Hola!';
}

// Paso 5: Añade la clase "principal" al div con class="footer"
const footer = document.querySelector('.footer');
if (footer) {
    footer.classList.add('principal');

    // Paso 6: Elimina la clase "principal" del div con class="footer"
    footer.classList.remove('principal');
}

// Paso 7: Crea un nuevo elemento li
const nuevoLi = document.createElement('li');

// Paso 8: Dale al li el texto "cuatro"
nuevoLi.textContent = 'cuatro';

// Paso 9: Añade el li al elemento ul
const listaUl = document.querySelector('ul');
if (listaUl) {
    listaUl.append(nuevoLi);
}