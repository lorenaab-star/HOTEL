var openModal = document.getElementById('open_modal');
// al declarar la variable como open modal va a ser la accion de el boton abrir modal
var close_Modal = document.getElementById('close_Modal');
// esta es para delcrar la variabel de cerrar el modal
var fondoModal = document.getElementById('fondoModal');
var modal = document.getElementById('modal');

// CON ESTAS 4 VARIABLES ES QUE VAMOS A INTERACTUAR, ABRIR EL MODAL AL PRESIONAR EL BiquadFilterNode, CERRAR EL MODAL AL PRESIONAR EL BOTON O TAMBIEN INTERACTUAR CON EL FONDO DEL MODAL AL DARL EN CUALQUIER LADO DE LA PAGINA

// AQUI SE DEFINEN LAS FUNCIONES QUE VAMOS A DARLE A LAS VARABLES ANTERIORES O A LOS BOTONES DICHOS ANTERIORMENTE
function close(){
    modal.style.display = "none";
    fondoModal.style.display = "none";

}

function open(){
    modal.style.display =" block";
    fondoModal.style.display = "block";
}

openModal.addEventListener('click', open); 
close_Modal.addEventListener('click', close);
// aqui estamos declarando que se le da la funcion de hacer click en el boton abrir model y se abre el modal y viceversa
// PERO AQUI TODAVIA CUANDO LE DOY CLICK EN EL FONDO DEL MODAL NO SE ME CIERRRA, PARA ESO SE HACE LO SIGUIENTE
fondoModal.addEventListener('click', close);


