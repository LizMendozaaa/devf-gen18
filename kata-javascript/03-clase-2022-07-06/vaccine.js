const age = 35
const frontier = false
const pregnant = true
const gestation = 3

if(age >= 18 && frontier == true){
    console.log('you can vaccinate since you\'re over 18 years olds and live at the frontier')
} else if(pregnant == true && gestation >= 9){
    console.log('you can vaccinate, since youre pregnant and has over 9 weeks of gestation.')
} else if (age>=30){
    console.log('you can vaccinate since you\'re over 30 years old.')
} else{
    console.log('you can\'t vaccinate since you don\'t meet the requirements.')
}

// use a index.html file
//make an app that receives data from the user
// validates user and password