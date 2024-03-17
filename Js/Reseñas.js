document.addEventListener('DOMContentLoaded', function () {
            const formularioComentario = document.getElementById('formulario-comentario');
            const comentariosContainer = document.getElementById('comentarios-container');
    
          
            cargarReseñas();
    
            formularioComentario.addEventListener('submit', function (event) {
                event.preventDefault();
    
                const nombre = document.getElementById('nombre').value;
                const comentario = document.getElementById('comentario').value;
                const fecha = new Date().toLocaleDateString();
                
                const imagenData = '../Img/logo.jpg';
    
                guardarReseña(nombre, fecha, comentario);
                mostrarComentario(nombre, fecha, comentario);
    
                document.getElementById('nombre').value = '';
                document.getElementById('comentario').value = '';
            });
    
            function guardarReseña(nombre, fecha, comentario) {
                let reseñas = JSON.parse(localStorage.getItem('reseñas')) || [];
                reseñas.push({ nombre, fecha, comentario });
                localStorage.setItem('reseñas', JSON.stringify(reseñas));
            }
    
            function cargarReseñas() {
                let reseñas = JSON.parse(localStorage.getItem('reseñas')) || [];
                reseñas.forEach(function (res) {
                    mostrarComentario(res.nombre, res.fecha, res.comentario); 
                });
            }
    
            function mostrarComentario(nombre, fecha, comentario) { 
                const nuevoComentario = `
                <div class="comentario">
        <div class="row">
            <div class="col-2">
                <img src="../Img/logo.jpg" alt="Imagen de perfil">
            </div>
            <div class="col">
                <div class="nombre">${nombre}</div>
        <div class="fecha">${fecha}</div>
        <div class="texto">${comentario}</div>
        <ion-icon name="trash-outline" class="eliminar-comentario"></ion-icon>
            </div>
        </div>
    </div>
                `;
    
                comentariosContainer.insertAdjacentHTML('beforeend', nuevoComentario);
            }
    
          
            comentariosContainer.addEventListener('click', function(event) {
                if (event.target.classList.contains('eliminar-comentario')) {
                    eliminarComentario(event);
                }
            });
    
            function eliminarComentario(event) {
                const comentario = event.target.closest('.comentario');
                comentario.remove();
                
            
                const comentarios = Array.from(comentariosContainer.querySelectorAll('.comentario'));
                const index = comentarios.indexOf(comentario);
                let reseñas = JSON.parse(localStorage.getItem('reseñas')) || [];
                reseñas.splice(index, 1);
                localStorage.setItem('reseñas', JSON.stringify(reseñas));
            }
        });