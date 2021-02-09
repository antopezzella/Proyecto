var productos = [
    "Identidad visual",
    "Identidad visual y Piezas Gráficas",
    "Identidad visual y Diseño de Feed",
    "Rediseño de identidad",
    "Diseño de feed",
    "Plantillas para Instagram",
    "Piezas Gráficas",
    "Diseño Web",
    ]
    
    for(var i=0; i<productos.length; i++){
        console.log(productos[i]);
      }

    console.log("Estos son nuestros servicios " + productos.toString());




    function Servicios(producto) 
    {
        this.producto = producto;
    }

    Servicios.cotizarServicio = function () {
   
    let cantidad;
    const base = 2000;

    switch (this.marca) {
        case '0':
            cantidad = base * 1.05;
            break;
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        case '4':
            cantidad = base * 1.15;
            break;
        case '5':
            cantidad = base * 1.05;
            break;
        case '6':
            cantidad = base * 1.35;
            break;
        case '7':
            cantidad = base * 1.35;
            break;
    }
            return cantidad;
 

    }


function cotizarServicio(event){

    console.log(event);

    var servicios = document.getElementById("inputServicios").value;

    var costo = servicios 
    var precio = document.getElementById("alert-calculo-precio")
    precio.innerText = costo;

    document.getElementById("alert-calculo").className = "alert alert-warning alert-dismissible fade show"

    return Number.parseFloat(costo).toFixed(2);
}



//var buttonCalcular = document.getElementById("boton");

//buttonCalcular.addEventListener("click", cotizarServicio);



function capturarEnter(enter) {
    if (event.which == 13 || event.keyCode == 13) {
        
    var buttonCalcular = document.getElementById("boton");

    buttonCalcular.addEventListener("click", cotizarServicio);
     }
 }
 


var nombre = document.getElementById("fname")
var marca = document.getElementById("lmarca")
var email = document.getElementById("email")
var redes = document.getElementById("redes")
var servicios = document.getElementById("inputServicios")
var mensaje = document.getElementById("message");


nombre.addEventListener("blur", validarCampo);
marca.addEventListener("blur", validarCampo);
email.addEventListener("blur", validarCampo);
redes.addEventListener("blur", validarCampo);
servicios.addEventListener("blur", validarCampo);
mensaje.addEventListener("blur", validarCampo);

function validarCampo(event){

    console.log(event);

    var valor = event.target.value;

    if (valor == ""){
        event.target.className = "form-control is-invalid"
    } else {
        event.target.className = "form-control"
    }

}

var check = document.getElementById ("exampleCheck1") 
check.checked = true


var getData = function (){
var nombre = document.getElementById("fname").value;
var marca = document.getElementById("lmarca").value;
var email = document.getElementById("email").value;
var servicios = document.getElementById("inputServicios").value;
var mensaje = document.getElementById("message").value;

console.log(nombre + marca + email + servicios + mensaje)

}

$(document).ready(function(){

    $('input[type="text"],select,textarea').each(function(){    
            var name = $(this).attr('name'); 
            value=localStorage.getItem(name);
            var value = $(this).val(value);
     })

    setInterval(function(){
        $('input[type="text"],select,textarea').each(function(){    
            var name = $(this).attr('name');
            var value = $(this).val();
            localStorage.setItem(name, value);
        })
        

    }, 1000);                 
})


