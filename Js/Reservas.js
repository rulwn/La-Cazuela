
var platos = ['Lunes: Sopa de Pollo', 'Martes: Nachos preparados', 'Miércoles: Pizza gigante', 'Jueves: Tacos la cazuela', 'Viernes: Tortas al pastor', 'Sábado: Parrillada familiar', 'Domingo: Sopa de frijoles'];
var imagenes = ['../Img/1.png', '../Img/2.png', '../Img/3.png', '../Img/4.png', '../Img/5.png', '../Img/6.png', '../Img/7.png'];
var currentIndex;

function cambiarTexto() {
    var fecha = new Date();
    currentIndex = fecha.getDay() ;
    if (currentIndex < 0) currentIndex = 6; 
    document.getElementById("platos").innerText = platos[currentIndex];
    document.getElementById("imgs").src = imagenes[currentIndex];
}

window.onload = function () {
    cambiarTexto();
    setInterval(cambiarTexto, 1000 * 60 * 60 * 24); 
};

function mostrarIconoPago() {
    var metodoPago = document.getElementById("metodo_pago").value;
    var iconoPago = document.getElementById("paymentIcon");
    if (metodoPago === "efectivo") {
        iconoPago.src = "../Img/billete-de-banco.png";
    } else if (metodoPago === "tarjeta") {
        iconoPago.src = "../Img/tarjeta-bancaria.png";
    } else {
        iconoPago.src = "../Img/fondo_png_vacio_by_juuliidev_d4x2xn5-fullview.png";
    }
}

function fijarHorario() {
    var horario = document.getElementById("horario").value;
    var hora_selec = horario.value

    if (hora_selec === "") {
        alert("Por favor, seleccione una opción.");
        return false;
    } 
    else {
        return true;
    }
}

var reservas = ["Ejemplo de reserva - Hora de retiro: 10 am"];

// Función para agregar un usuario
function agregarUsuario() {
    // Obtener el valor del nombre de usuario ingresado
    var nombre = document.getElementById("nombre").value;
    var horario = parseInt(document.getElementById("horario").value);

    // Verificar si el campo no está vacío
    if (nombre.trim() === "" || isNaN(horario)) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    // Determinar si es AM o PM
    var periodo = (horario >= 12) ? "pm" : "am";

    // Ajustar la hora si es PM
    if (horario >= 12) {
        horario -= 12;
    }

    // Construir la cadena con el nombre y el horario
    var reserva = nombre + " - Hora de retiro: " + horario + " " + periodo;

    // Agregar la reserva al array de reservas
    reservas.push(reserva);

    // Guardar la lista de reservas en el almacenamiento local
    localStorage.setItem("reservas", JSON.stringify(reservas));

    // Registro de consola para verificar si la reserva se está guardando correctamente
    console.log("Reserva guardada en el almacenamiento local:", reserva);

    // Actualizar la lista de reservas
    actualizarListaReservas();

    // Limpiar los campos de entrada después de agregar la reserva
    document.getElementById("nombre").value = "";
    document.getElementById("horario").value = "";
    document.getElementById("telefono").value = "";
}

// Función para cargar la lista de reservas desde el almacenamiento local
function cargarReservasDesdeLocalStorage() {
    console.log("Cargando reservas desde el almacenamiento local...");
    var reservasGuardadas = localStorage.getItem("reservas");
    if (reservasGuardadas) {
        reservas = JSON.parse(reservasGuardadas);
        console.log("Reservas cargadas:", reservas);
        actualizarListaReservas();
    } else {
        console.log("No se encontraron reservas en el almacenamiento local.");
    }
}

// Llamar a la función para cargar las reservas almacenadas en el inicio
cargarReservasDesdeLocalStorage();

// Función para actualizar la lista de reservas
// Función para actualizar la lista de reservas
function actualizarListaReservas() {
    var listaUsuariosElement = document.getElementById("listaUsuarios");
    // Limpiar la lista de usuarios antes de actualizarla
    listaUsuariosElement.innerHTML = "";
    // Iterar sobre el array de reservas y agregar cada reserva a la lista
    reservas.forEach(function(reserva, index) {
        var nuevaReserva = document.createElement("li");
        nuevaReserva.textContent = reserva;
        
        // Crear un botón de eliminar para cada reserva
        var botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function() {
            eliminarReserva(index);
        });

        // Agregar el botón de eliminar junto a la reserva
        nuevaReserva.appendChild(botonEliminar);

        listaUsuariosElement.appendChild(nuevaReserva);
    });
}

// Función para eliminar una reserva del listado
function eliminarReserva(index) {
    reservas.splice(index, 1); // Eliminar la reserva del array
    localStorage.setItem("reservas", JSON.stringify(reservas)); // Actualizar el almacenamiento local
    actualizarListaReservas(); // Actualizar la lista de reservas en la página
}








