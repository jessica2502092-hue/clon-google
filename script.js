const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const luckyButton = document.getElementById("lucky-button");

function buscarEnGoogle() {
    const busqueda = searchInput.value;

    const url = "https://www.google.com/search?q=" + encodeURIComponent(busqueda);

    window.location.href = url;
}

// Detectar clic en el botón Buscar
searchButton.addEventListener("click", buscarEnGoogle);

// Detectar clic en Voy a tener suerte
luckyButton.addEventListener("click", buscarEnGoogle);

// Detectar cuando se presiona Enter
searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        buscarEnGoogle();
    }
});
