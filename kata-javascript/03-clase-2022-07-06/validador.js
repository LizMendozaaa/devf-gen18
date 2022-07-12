// crear app que reciba datos del usuario y valide el usuario y password
var nombre = window.prompt("Ingresa tu nombre: ");
alert("tu nombre es: " + nombre);

var contrasenia = window.prompt("Ingresa tu contrasenia: ");
alert("tu contrasenia es: " + contrasenia); 

if (contrasenia == '123456' && nombre == 'lizeth') {
    console.log ('Contrasenia y nombre correctos')
}

else {
    console.log('contrasenia o nombre incorrectos.')
}