//max of two numbers
function max(x, y){
    if(x > y)
        return x;
    else
        return y;    
}
console.log(max(48, 62));

//max of three numbers
function maxOfThree(x, y, z){
    if(x > y && x > z)
        return x;
    else if(y > x && y > z)
        return y;
    else
    return z    
}
console.log(maxOfThree(4822, 4422, 442));

function isVowel(value){
    if(value == 'a' || value == 'a' || value == 'e' || value == 'i' || value == 'o' || value == 'u'){
        return true;
    }else{
        return false;
    }
}

console.log(isVowel('u'));



let x = [1, 2, 3, 4];
let res = x.reduce(
    function(prev, next){
        return prev + next;
    }
);
console.log(res);

function sum(numbers){
    let y = numbers.reduce((num1, num2) => num1 + num2, 0);
    return y;
}


console.log(sum(x));


function multiply(numbers){
    let y = numbers.reduce((x, y) => x * y, 1);
    return y;
}

console.log(multiply(x));


function reverse(x){
    let val = "";
    for (let index = (x.length - 1); index >= 0; index--) {
        val = val + x[index];
        
    }
    return val;
}
function reverseIt(x){
    let val = "";
    val = x.split("").reverse().join("");
    return val;
}

console.log(reverse('manage'));
console.log(reverseIt('manage'));


function findLongestWord(array){
    let longest = array[0].length;
    for (let index = 0; index < array.length; index++) {
        if(array[index].length > longest){
            longest = array[index].length;
        }
        
    }
    return longest;
} 

console.log(findLongestWord(['Emran','Ahmad','john','allan watt']));


function filterLongWords(x, i){
    let ret = [];
    for (let index = 0; index < x.length; index++) {
        if(x[index].length == i){
            ret.push(x[index]);
        }
    }

    return ret;
}

console.log(filterLongWords(['Emran','Ahmad','john','allan watt'], 5));


function Test(){
    arguments[0]();
}

Test(function(){
    console.log("Testing...");
});


let fun = function computeSumOfSquares(param){
    let x = param.map(j => j * j);
    let y = x.reduce((num1, num2) => num1 + num2);
    return y;
}
function computeSumOfSquares(param) {
    let x = param.map(j => j * j).reduce((num1, num2) => num1 + num2);
    return x;
}

console.log(fun([1, 2, 3]));
console.log(computeSumOfSquares([1, 2, 3]));

function printOddNumbersOnly(x){
    let y = []; 
    x.map(j => {
        if(j % 2 == 1){
            y.push(j);
        }
    });
    return y;
    
}

function printOddNumbersOnly2(x){
     x.filter(n => n % 2 == 1).forEach(n => console.log(n));    
}
printOddNumbersOnly2([25, 32, 16, 347, 54, 125]);

console.log(printOddNumbersOnly([25, 32, 16, 347, 54, 125]));


function computeSumOfSquaresOfEvensOnly(x){
    let y = []; 
    x.map(j => {
        if(j % 2 == 0){
            y.push(j * j);
        }
    });
    let sum = y.reduce((num1, num2) => num1 + num2);
    return sum;
}

console.log(computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]));

function findSecondBiggest(x){
    //let max = (x[0] > x[1] ? x[0] : x[1]);
    //let smax = (x[0] === max ? x[1] : x[0]);
    let max = -Infinity;
    let smax = -Infinity;
    for (let index = 0; index < x.length; index++) {
        if(x[index] > max){
            smax = max;
            max = x[index];
        }else if(x[index] > smax){
            smax = x[index];
        }    
    }
    return smax;
}


console.log(findSecondBiggest([2,4,89,2301,1229]));



function printFibo(n, a, b){
    if(n === 0) console.log("");
    if(n === 1) console.log(a);
    if(n === 2) console.log(a +" "+ b);
    if(n > 2){
        let currA = a;
        let CurrB = b;
        let s = a + ", " + b;
        for(let i = 2; i < n; i++) {
            let next = currA + CurrB;
            currA = CurrB;
            CurrB = next;
            s += ", "+next;
        }
        console.log(s);

    }
}

printFibo(12, 0, 1);




