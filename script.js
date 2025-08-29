let ocPresentacion = false;
let ocBusqueda = false;
function mostrarPresentacion() {
  const pres = document.querySelector(".presentacion");
    if (ocPresentacion){
        pres.style.display = 'none';
        ocPresentacion = false;
    }
    else{
        pres.style.display = 'block';
        ocPresentacion = true;
    }
}
function mostrarBusqueda() {
  const busq = document.querySelector(".busqueda");
    if (ocBusqueda){
        busq.style.display = 'none';
        ocBusqueda = false;
    }
    else{
        busq.style.display = 'block';
        ocBusqueda = true;
    }
}