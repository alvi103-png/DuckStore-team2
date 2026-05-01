// importamos los metodos que cargan el array de productos
// y que renderiza los productos en el DOM
import {creaArraypatitos, renderpatitos, filtrarCategoria, addToCart} from './renderProducts.js'

let patitos = [];

//definimos el evento para cuando cambia el valor del filtro
document.getElementById("filtroCategoria").addEventListener("change", function() {
    filtrarCategoria(patitos, document.getElementById("filtroCategoria").value);
});

window.onload = function() {
    // Verifica si estamos en la página específica, por ejemplo "/catalog.html"
    if (window.location.pathname.includes("catalog.html")) {
        //console.log("¡Estamos en la página de catalog!");
       
        // Aquí lanzas tu evento o función
        patitos = creaArraypatitos();
        console.log(patitos);
        renderpatitos(patitos);
    }
};