// importamos los metodos que cargan el array de productos
// y que renderiza los productos en el DOM
//import {creaArraypatitos, renderpatitos} from './products.js'
import {creaArraypatitos, renderpatitos} from './products.js'

let patitos = [];
//al cargar la pagina de catalog.html se lanza el javascript main que crea el array de patitos
//const patitos =creaArraypatitos();
//renderpatitos(patitos);
// console.log(patitos);

window.onload = function() {
    // Verifica si estamos en la página específica, por ejemplo "/catalog.html"
    if (window.location.pathname === "/catalog.html") {
        console.log("¡Estamos en la página de catalog!");
        // Aquí lanzas tu evento o función
        patitos = creaArraypatitos();
        console.log(patitos);
        renderpatitos(patitos);
    }
};