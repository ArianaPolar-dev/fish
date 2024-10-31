// Función para manejar el clic en el botón "Sí Sí"
function handleYesClick() {
    alert("¡Sam está feliz de escuchar eso!");
}

// Función para manejar el clic en el botón "Ignorar"
function handleIgnoreClick() {
    // Cambiar el fondo a negro y detener la música
    document.body.classList.add("blackout");
    document.getElementById("backgroundMusic").pause();
    
    // Mostrar imagen
    document.getElementById("scaryImage").style.display = "block";
    
    // Mensaje final
    alert("Nunca podrás escapar de mi...");
}
