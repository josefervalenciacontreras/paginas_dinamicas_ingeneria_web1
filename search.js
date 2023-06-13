//En este codigo se estaba probando la funcionalidad del botón buscar
/*function myFunction(){
    var texto = "Hola Mundo";
    document.write(texto);

}*/


function validar(){
    var nombre = document.getElementById("formGroupExampleInput");
    var descripcion = document.getElementById("formGroupExampleInput2");
    var imagen = document.getElementById("formGroupExampleInput3");
    var nombreRequerido = document.getElementById("nombre-requerido");
    var descRequerido = document.getElementById("descripcion-requerido");
    var imgRequerido = document.getElementById("imagen-requerido");

    if(nombre.value == ""){
        nombreRequerido.innerText = "Campo requerido";
    }else{
        nombreRequerido.innerText = "";
    }
    if(descripcion.value == ""){
        descRequerido.innerText = "Campo requerido";
    }else{
        descRequerido.innerText = "";
    }
    if(imagen.value == ""){
        imgRequerido.innerText = "Campo requerido";
    }else{
        imgRequerido.innerText = "";
    }

    if (nombre.value !== "" && descripcion.value !== "" && imagen.value !== "") {
        alert("¡Restaurante creado con éxito!");
    }
}

//Codigo para hacer funcionar el botón buscar pero no se implementa porque no me funciona
/*
let cards = document.querySelectorAll('.descripcion')
    
function myFunction() {
    let search_query = document.getElementById("myInput").value;
    
    //Use innerText if all contents are visible
    //Use textContent for including hidden elements
    for (var i = 0; i < cards.length; i++) {
        if(cards[i].textContent.toLowerCase()
                .includes(search_query.toLowerCase())) {
            cards[i].classList.remove("is-hidden");
        } else {
            cards[i].classList.add("is-hidden");
        }
    }
}

//A little delay
let typingTimer;               
let typeInterval = 500;  
let searchInput = document.getElementById('myInput');

searchInput.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(myFunction, typeInterval);
});*/