function Servicios(producto) 
    {
        this.producto = producto;
    }

    Servicios.cotizarServicio = function () {
   
    let cantidad;
 
    switch (this.producto) {
        case '0':
            cantidad 
            break;
        case '1':
            cantidad 
            break;
        case '2':
            cantidad 
            break;
        case '3':
            cantidad 
            break;
        case '4':
            cantidad 
            break;
        case '5':
            cantidad
            break;
        case '6':
            cantidad 
            break;
        case '7':
            cantidad 
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

var buttonCalcular = document.getElementById("modal-servicio");

buttonCalcular.addEventListener("click", cotizarServicio);



var check = document.getElementById ("exampleCheck1") 
check.checked = true;



//function validaForm(selector, label){
//    if($(selector).val() === ''){
//        $('.inputIngreso').append(label)
//        $(selector).focus();  
//        return false;
//    } else{
//       return true;
// }
//}

//let fname = $("#fname")
//let lmarca = $("#lmarca")
//let semail = $("#email")
//let rredes = $("#redes")
//let inputserv = $("#inputServicios")
//let imessage = $("#message")
//let label = $(('<label for="nombre" id="nombre">Completá todos los campos para continuar</label>'))


//validaForm(lmarca, label);
//validaForm(semail, label);
//validaForm(rredes, label);
//validaForm(inputserv, label);
//validaForm(imessage, label);
//validaForm(fname, label);



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
    

    function validaForm(){
        if($("#fname").val() === ''){
            $('.inputIngreso').append('<label for="nombre" id="nombre">Completá todos los campos para continuar</label>')
            $("#fname").focus();    
            return false;
        }
        if($("#lmarca").val() === ''){
            $('.inputIngreso').append('<label for="nombre" id="nombre">Completá todos los campos para continuar</label>')
            $("#lmarca").focus();    
            return false;
        }
        if($("#email").val() === ''){
            $('.inputIngreso').append('<label for="nombre" id="nombre">Completá todos los campos para continuar</label>')
            $("#email").focus();    
            return false;
        }
       if($("#redes").val() === ''){
            $('.inputIngreso').append('<label for="nombre" id="nombre">Completá todos los campos para continuar</label>')
           $("#redes").focus();    
            return false;
        }
        if($("#inputServicios").val() === ''){
            $('.inputIngreso').append('<label for="nombre" id="nombre">Completá todos los campos para continuar</label>')
            $("#inputServicios").focus();    
            return false;
        }
        if($("#message").val() === ''){
            $('.inputIngreso').append('<label for="nombre" id="nombre">Completá todos los campos para continuar</label>')
            $("#message").focus();    
            return false;
        }
        else return true;
     }
    

$(document).ready( function() {  
    $("#modal-servicio").click( function() {    
        if(validaForm()){                               
            $.post("datos.php",$("#formLimpiar").serialize(),function(res){
                $(".formulario").fadeOut("slow");   
                 if(res == 0){
                  $(".inputIngreso").delay(500).fadeIn("slow");     
                 } else {
                  $(".inputIngreso").delay(500).fadeIn("slow");     
                }
            });
         }
     });    
 })



 $("#enviar-modal").click(function(){ 
    $(".inputIngreso").fadeOut("slow"); 
});

$(".inputIngreso").css("color", "tomato");

$("#enviar-modal").click(function(event) {
    $("#formLimpiar")[0].reset(event);
});

$('#contacto-enviar').click(function(){
    $('#prueba').show(500);
});

$('#contacto-enviar').click(function(event) {
    $("#email-contacto")[0].reset(event);
});



$(document).ready(function() {
    $('#modal-servicio').click(function(){
        if($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            $('.inputEmail').append('<label for="correo" id="correo">El correo electrónico no es correcto</label>')
            return false;
        }
    });
});

$(".inputEmail").css("color", "tomato");

$("#enviar-modal").click(function(){ 
    $('.inputEmail').fadeOut("slow"); 
});


const validar = function(campo) {
    let valor = campo.value;
    if(/\d/.test(valor)) {
      campo.value = valor.replace(/\d/g,'');
    }
  };


  navigator.geolocation.getCurrentPosition(function(position) {
    var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.TERRAIN,
      disableDefaultUI: true
    }
    var map = new google.maps.Map(document.querySelector("#map_canvas"), myOptions);
  });

