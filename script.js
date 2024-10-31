// Función para manejar el clic en el botón "Sí"
function handleYesClick() {
    alert("¡Sam está feliz de escuchar eso!");
}

// Función para manejar el clic en el botón "Ignorar"
function handleIgnoreClick() {
    // Cambiar el fondo a negro y ocultar el contenido
    document.body.classList.add("blackout");

    const content = document.getElementById("content");
    content.classList.add("small-text");
    
    // Mostrar imagen
    document.getElementById("scaryImage").classList.remove("hidden");
}

// Función para cerrar la ventana emergente
function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

// Mostrar la ventana emergente después de 10 segundos
setTimeout(() => {
    document.getElementById('popup').classList.remove('hidden');
}, 10000);
