/*{dolor de cabeza
dificultad para respirar
dolor de cuerpo
vacunas
temperatura
70 de covid
3 sintomas y vacunas 40 de covid
todos los sintomas tengo covid
*/
const headache = prompt ('Do you have headache?')
const breath = prompt('Do you have difficulty breathing?')
const vaccine = prompt('Are you vaccinated 3 times?')
const temperature = prompt('What is your temperature?')

if(headache == 'yes' && breath == 'yes' && vaccine == 'no' && temperature >= 37) {
    alert('you have covid-19')
} 
else if(headache == 'yes' && breath == 'yes' && vaccine = 'yes' && temperature >= 37{
    alert('80% chance you have covid')
} else{
    alert('you\'re terminally ill with covid')
}