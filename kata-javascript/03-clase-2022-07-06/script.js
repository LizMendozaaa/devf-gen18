const edad = 35
const frontera = false
const embarazada = true
const gestacion = 10

if(edad >= 18 && frontera == true){
    console.log('Si te puedes vacunar por ser mayor de edad y vivir en un municipio fronterizo.')
}

else if(embarazada == true && gestacion == true){
    console.log('Si te puedes vacunar, por estar embarazada y tener más de 9 semanas de gestación.')
}


else if(edad >= 30){
    console.log('Si te puedes vacunar porque eres mayor de 30 anios.')
}


else{
    console.log('Lo sentimos, no te puedes vacunar por no cumplir los requisitos.')
}

// if (10 == '10') console.log('son iguales')
// else console.log('son diferentes')


// if (10 === '10') console.log('son iguales')
// else console.log('son diferentes')