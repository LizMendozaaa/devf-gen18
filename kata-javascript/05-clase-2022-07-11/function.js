function nameFunction(){
    console.log('classical function')
}

const myFunction = function(){
    console.log('anonymous function')
}
const arrowFunction = () => {
    setInterval(()=>{
        console.log('Hello World')
    },5000)
}
nameFunction()
myFunction()
arrowFunction()