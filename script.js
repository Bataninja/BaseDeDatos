let ocPresentacion = false;
let ocBusqueda = false;
let artFrank = false;
let artJhoan = false;

function mostrarPresentacion() {
  const datos = document.querySelector(".presentacion");
    if (ocPresentacion){
        datos.style.display = 'none';
        ocPresentacion = false;
    }
    else{
        datos.style.display = 'block';
        ocPresentacion = true;
        datos.querySelector(".head1").scrollIntoView({ behavior:"smooth"});
    }
}

function mostrarBusqueda() {
  const datos = document.querySelector(".busqueda");
    if (ocBusqueda){
        datos.style.display = 'none';
        ocBusqueda = false;
    }
    else{
        datos.style.display = 'block';
        ocBusqueda = true;
        datos.querySelector(".head2").scrollIntoView({behavior:"smooth"});
    }
}

function mostrarArtJhoan() {
  const datos = document.querySelector(".artjhoan");
    if (artJhoan){
        datos.style.display = 'none';
        artJhoan= false;
    }
    else{
        datos.style.display = 'block';
        artJhoan = true;
        datos.querySelector(".head3").scrollIntoView({ behavior:"smooth"});
    }
}

function mostrarArtFrank() {
  const datos = document.querySelector(".artfrank");
    if (artFrank){
        datos.style.display = 'none';
        artFrank = false;
    }
    else{
        datos.style.display = 'block';
        artFrank = true;
        datos.querySelector(".head4").scrollIntoView({behavior:"smooth"});
    }
}


function aviso(){
    window.alert("⚠️ Aviso Importante\n\n" +
    "Para el desarrollo de este trabajo se hizo uso de la herramienta ChatGPT de OpenAI, principalmente en asustos de redacción y correción de errores.\n\n" +
    "La herramienta se utilizó únicamente con fines académicos y de apoyo, " +
    "respetando siempre la responsabilidad de los estudiantes en la elaboración del presente trabajo.");
}