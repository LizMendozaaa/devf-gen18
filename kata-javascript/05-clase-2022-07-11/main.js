//console.log('Hello world of node')
function sayHi(name,age){
    // console.log('Hola', name, 'Welcome to the class','HBD you\'re',age)
    let userName = name
    let userAge = age

    function paintData(data1,data2){
        console.log(data1,data2)
    }
    paintData(userName,userAge)

}

sayHi('John',23)
sayHi('Charles',20)
sayHi('Richard',30)