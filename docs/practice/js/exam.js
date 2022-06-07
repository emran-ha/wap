const x = 1;
function f() { 
    let y = 2;
    const sum = function() { 
        const z = 3; 
        console.log(x + y + z);
    }
    y = 10;
    return sum; 
} //end of f
const g = f(); 
g();


var funcs = [];
for (let i = 0; i < 5; i++) {
    funcs[i] = function() {
         return i;
    }; 
}

console.log(funcs[0]());
console.log(funcs[1]()); 
console.log(funcs[2]()); 
console.log(funcs[3]());
console.log(funcs[4]());