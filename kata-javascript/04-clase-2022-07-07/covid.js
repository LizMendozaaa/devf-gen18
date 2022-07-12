let symptoms = 0
const username = prompt('What is your name?')
const headache = confirm('Do you have headaches?')
const breathing = confirm('Do you have difficulty breathing?')
const temperature = confirm('Is your body temperature above 36 Celsius?')
const aches = confirm('Do you have body aches?')
const vaccines = confirm('Are you three times vaccinated?')

if(headache){
    symptoms = symptoms + 1
}
if(breathing){
    symptoms = symptoms + 1
}
if(temperature){
    symptoms = symptoms + 1
}
if(aches){
    symptoms = symptoms + 1
}
if(symptoms == 4){
    alert(username + ', You have covid')
}
else if(vaccines == false && symptoms == 3){
    alert(username + ', 70% chance you have covid')
}

else if(vaccines == true && symptoms == 3){
    alert(username + ', 40% chance you have covid')
}

else{
    alert(username + ', you don\'t have covid')
}