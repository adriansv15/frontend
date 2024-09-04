let x, y, z;
x = 10;
y = 20;

a = x  + y;
console.log("x is :", x);
console.log("y is :", y);
console.log("a is x + y:",a);
console.log("");

b = x  - y;
console.log("x is :", x);
console.log("y is :", y);
console.log("b is x - y:",b);
console.log("");

c = x * y;
console.log("x is :", x);
console.log("y is :", y);
console.log("c is x * y:",c);
console.log("");

d = x / y;
console.log("x is :", x);
console.log("y is :", y);
console.log("d is x / y:",d);
console.log("");

e = x ** y;
console.log("x is :", x);
console.log("y is :", y);
console.log("e is x ** y:",e);
console.log("");

f = (x == y);
console.log("x is :", x);
console.log("y is :", y);
console.log("f is x == y:",f);
console.log("");

for (let i = 0; i < 5; i++){
    console.log("For loop iteration:", i);
}
console.log("")

let k = 0;
while(k < 5){
    console.log("While loop iteration:", k);
    k++;
}
console.log("")

function myFunction(){
    let a = "Hello";
    let b = "world";
    let c = a + " " + b
    console.log("Function output:", c);
}

myFunction();

document.getElementById("btn-one").addEventListener('click',function(){
    alert("Clicked on button");
})
document.getElementById("btn-two").addEventListener('click',function(){
    alert("Clicked on button");
})
document.getElementById("btn-three").addEventListener('click',function(){
    alert("Clicked on button");
})

document.getElementById("form").addEventListener('submit', validate)

document.addEventListener('keydown',function(){
    alert("Key is pressed")
})
function validate(){
    let text = document.getElementById("text").value;
    if (text == ""){
        alert("Text input cannot be empty")
    }
    else{
        alert("Form was submitted")
    }
}