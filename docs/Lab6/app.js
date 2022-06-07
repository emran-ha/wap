x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c){
    console.log(x); //undefined
    console.log(a);//8
    var f = function(a, b, c){
        b = a;
        console.log(b); //8
        b = c; //10
        var x = 5;
    }
    f(a, b, c);
    console.log(b); //9
    var x = 10;
}
c(8, 9, 10);
console.log(b); //10
console.log(x); //1


var z = 9;
function myFunction(){
    return z * z;
}

console.log(myFunction());
z = 5;
console.log(myFunction());

var foo = 1;
function bar(){
    if(!foo){
        var foo = 10;
    }
    console.log("-->"+foo);
}
bar();


let myObj = [];
let counter = 0;
function increment(){
    let innerAdd = function(){
        counter += 1;
    }
    return innerAdd;
}
var add = increment();
myObj.push(add);

myObj[0]();
console.log(counter);
