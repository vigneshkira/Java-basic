var X = 59 // Global Variable 
let y = 20  //Block scope --> ES6--2015--->{local variable}
const Z = 10 //Block scope --> ES6--2015---->{local variable}


console.log([{ x :X, y :y ,z :Z}])

// Array 
var ar = [ X, y ,Z]
document.getElementById('X').innerHTML = ar





//reasign
X= 30
console.log(X)
document.getElementById('Y').innerHTML = X

//operators 
X = 10
X= y+X
{
    var X = 100
    const y = 250
    X= y+X
    console.log(X)
    document.getElementById('Z').innerHTML = X

}

// console.log(X)
// console.log(y)



var a = 20
var b = 40
var c = a+b 
console.log(c)
{
    var a =  20
    var b = 355
    c = a+b
    console.log(c)
    document.getElementById('variable').innerHTML = c
}



let i = 40
let j = 56
i = 456
let k = i + j
console.log(k)
{
    let i = 380
    let j = 345
    let k = i + j
    console.log(k)
    document.getElementById('letvariable').innerHTML = k
}



const name1 = "Vicky"
const age =  34
console.log("Name :",name1);
document.getElementById("Constant").innerHTML = [name1,age]
console.log("age :",age)


var a = 5 
a = 10
console.log(a)

const b = 15
b = 20
console.log(b)

let c = 30
c = 40
console.log(c)

