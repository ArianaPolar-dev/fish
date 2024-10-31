// Función para mostrar un mensaje oculto
function revealMessage() {
    document.getElementById('hiddenMessage').style.display = 'block';
    alert("Sam te observa...");
}

// Efecto para mostrar un mensaje adicional al pasar el ratón
document.getElementById('glitchText').addEventListener('mouseover', function() {
    alert("Sam sabe lo que estás buscando...");
});
