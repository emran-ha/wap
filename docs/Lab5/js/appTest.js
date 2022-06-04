//var x = 10;
function main(){
    console.log(x);
    x = 20;
    console.log(x);
    if(x > 0){
        let x = 30;
        console.log(x);
    }
    console.log(x);
    var x = 40;
    var f = function(x){
        console.log(x);
    }
    f(50);
    console.log(x);
}
main();
//console.log(x);


 x = 'global'; 
let y = 'global'; 
console.log(this.x); // "global" 
console.log(this.y); // undefined////
//console.log(window.y); // undefined
console.log(y); // "global


const address = {
    street: '4th street',
    city: 'fairfield',
    state: 'iowa'
}
Object.freeze(address);
address.street = '5th street';
console.log(address);

if("whateve"){
    console.log("whatever...");
}else{
    console.log("not whatever");
}

var arr = new Array(3,4,5);
console.log(arr);

arr = [45,33,22];
console.log(arr);
arr.forEach(x => console.log(x));

function print(){
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    }
}

print([3,433,43,3]);


function print(x, y, ...others){
    console.log(x+" "+y);
    console.log(others);
}

print(4, 5, 42,32323,23);

arr = [89, 33, 25, 90, 10, 5];
arr.filter(s => s%2 == 0).forEach(s => console.log(s));


const names ={
    'a':'ahmad',
    'b':'baran',
    'c':'cloud',
    'd':'dart'
}

for(const key in names){
    console.log(key + " " + names[key]);
}

document.getElementById("btnClick").addEventListener("click", msg);

let timer = null;
function msg(){
    if(timer === null){
        timer = setInterval(rudy, 1000);
    }else{
        clearInterval(timer);
        timer = null;
    }
    
}
function rudy(){
    document.getElementById("output").innerHTML += "BOOYAH!";
}


console.log(printme("john"));
function printme(name){
    return "hello "+ name;
}

function date(){
    let now =  new Date();
    console.log(now.getDate);
}

date();


