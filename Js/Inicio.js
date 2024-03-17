
var platos = ['Lunes: Sopa de Pollo', 'Martes: Nachos preparados', 'Miércoles: Pizza gigante', 'Jueves: Tacos la cazuela', 'Viernes: Tortas al pastor', 'Sábado: Parrillada familiar', 'Domingo: Sopa de frijoles'];
var textos = ['Nuestra receta de nuestra sopa de pollo combina un caldo rico hecho con pollo, verduras frescas y sabrosos trozos de pollo tierno.', 'Los nachos preparados son nachos de maíz cubiertos con queso derretido, frijoles, carne sazonada, guacamole, crema agria y salsa, creando una mezcla deliciosa de sabores tex-mex.', 'La pizza gigante es una versión masiva de este clásico plato italiano, ofreciendo una experiencia de sabor abrumadora y perfecta para grandes reuniones.', 'Los tacos de cazuela son tacos con carne cocinada lentamente en salsa, servidos con ingredientes frescos.', 'Las tortas al pastor son sándwiches mexicanos rellenos de carne de cerdo marinada y asada, usualmente acompañados de piña, cebolla, cilantro y salsa.', 'Una parrillada familiar es una comida al aire libre donde se cocinan carnes y vegetales en una parrilla, perfecta para disfrutar en compañía.', 'La sopa de frijoles es un plato reconfortante hecho con frijoles cocidos en caldo sazonado, a menudo acompañado de cebolla, ajo y especias, perfecto para calentar el cuerpo en días fríos.'];
var imagenes = ['Img/1.png', 'Img/2.png', 'Img/3.png', 'Img/4.png', 'Img/5.png', 'Img/6.png', 'Img/7.png'];
var currentIndex;

function cambiarTexto() {
    var fecha = new Date();
    currentIndex = fecha.getDay() - 1; // Restamos 1 porque los días de la semana se indexan desde 0
    if (currentIndex < 0) currentIndex = 6; // Si el día es domingo, currentIndex será -1, lo ajustamos a 6 (Domingo)
    document.getElementById("Djobi").innerText = platos[currentIndex];
    document.getElementById("Djoba").innerText = textos[currentIndex];
    document.getElementById("Djobe").src = imagenes[currentIndex];
}

window.onload = function () {
    cambiarTexto(); // Llamar a la función al cargar la página
    setInterval(cambiarTexto, 1000 * 60 * 60 * 24); // Cambiar cada 24 horas
};