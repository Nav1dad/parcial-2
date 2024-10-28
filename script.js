
   
    
       let titulo = document.getElementById("titulo");
       let cambiarTexto=document.getElementById("btnCambiarTexto");
       let cambiarColor = document.getElementById("btnCambiarColor"); 
       let cambiarAlineacion = document.getElementById("btnCambiarAlineacion");
       let crearTexto = document.getElementById("btnCrearTexto"); 
       let borrarTexto = document.getElementById("btnBorrarTexto");
       
/*• Función cambiarTexto()
Cambia el texto del título de "Hola mundo" a "Hola Mundo con JavaScript".*/

 cambiarTexto.addEventListener('click', function () {
    titulo.textContent="Hola Mundo con JavaScript"
   })
   
       
/*• Función cambiarColor()
Cambia el color del texto del título a rojo.*/

cambiarColor.addEventListener('click', function () {
    titulo.style.color = "red";
   })

/*• Función cambiarAlineacion()
Cambia la alineación del texto del título de la izquierda al centro.*/

cambiarAlineacion.addEventListener('click', function () {
    titulo.style.textAlign = "center";
   })



/*• Función crearTexto()
Agrega un nuevo texto debajo del título: "JavaScript permite crear páginas
dinámicas".*/

crearTexto.addEventListener('click', function () {
    if (!document.getElementById("nuevoTexto")) {
        const nuevoTexto = document.createElement("p");
        nuevoTexto.id = "nuevoTexto";
        nuevoTexto.innerText = "JavaScript permite crear páginas dinámicas";
        document.body.appendChild(nuevoTexto);
    }
   })



/*• Función borrarTexto()
Elimina el texto agregado por el botón "Crear Texto".*/


borrarTexto.addEventListener('click', function () {
    const nuevoTexto = document.getElementById("nuevoTexto");
    if (nuevoTexto) {
        nuevoTexto.remove();
    }
   })

