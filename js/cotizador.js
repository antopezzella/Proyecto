//var titulo = document.getElementById("servicios")
//var nav = document.getElementsByTagName("nav")
//var button = document.getElementsByClassName("btn-md")

//console.log(servicios.innerHTML)
//console.log(nav[0].innerHTML)
//console.log(button)


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

console.log("Estos son nuestros servicios " + productos.toString());

for(var i=0; i<productos.length; i++){
  console.log(productos[i]);
}

var producto = prompt ("Ingrese el producto que desea contratar")
productos.push(producto);

console.log(productos)

var producto2 = prompt ("¿Otro producto que desees contratar?")
productos.push(producto2);

console.log(productos)

var nombre = prompt("Ingresa tu nombre y apellido");
var marca = prompt("Ingrese el nombre de su marca");
//while (marca.length < 20 || marca.length > 0){
  //anio = prompt("Ingrese un año válido")}

var contame = prompt("Contame, ¿cómo puedo ayudarte?");
var mensaje = prompt("Algún mensaje que quieras dejar");



var datosCliente = new Producto(producto, producto2, nombre, marca, email, mensaje) 

var propiedad = prompt ("Verificar un dato")
if (!datosCliente[propiedad.toLowerCase()]){
  console.log ("Ese dato no existe ")
} else {
console.log(datosCliente[propiedad.toLowerCase()])
}

function Producto(producto, producto2, nombre, marca, email, mensaje)  {
  this.producto = producto;
  this.producto2 = producto2;
  this.nombre = nombre;
  this.marca = marca;
  this.email = email;
  this.mensaje = mensaje;

  this.getDatosCliente = function() {
    return this.marca + "" + this.producto + "" + this.producto2
  };
}

console.log ("Datos", datosCliente)
console.log (datosCliente.getDatosCliente() )




var input = document.getElementById("fname");
var input2 = document.getElementById("lname");
var input3 = document.getElementById("email");
var input4 = document.getElementById("redes");
var input5 = document.getElementById("inputServicios");
var input6 = document.getElementById("message");

console.log(input)
console.log(input2)
console.log(input3)
console.log(input4)
console.log(input5)
console.log(input6)



var check = document.getElementById ("exampleCheck1")
check.checked = true

var button = document.getElementById ("boton");
button.innerHTML = "Continuar"



//var parrafo = document.createElement("p");

//var contenido = document.createTextNode("Recordá completar todos los campos para continuar"); 

//parrafo.appendChild(contenido);

//document.body.appendChild(parrafo);

//var encabezado = document.getElementById("header");
//parrafo.parentNode.removeChild(parrafo);