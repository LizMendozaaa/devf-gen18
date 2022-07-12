        
// crear app que reciba datos del usuario y valide el usuario y password
var nombre = window.prompt('enter your username');
alert("tu nombre es: " + nombre);

var contrasenia = window.prompt('enter your password: ');
alert("tu contrasenia es: " + contrasenia); 

if (contrasenia == '123456' && nombre == 'carlos') {
    alert ('you\'re logged in.')
}

else {
    alert('password or username doesn.\'t match ')
}