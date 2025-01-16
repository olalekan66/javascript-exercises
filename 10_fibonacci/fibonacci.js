const fibonacci = function(n) {
if (n<0){
    return 'OOPS';
}
let number1 = 0;
let number2 = 1;
if (+n === 0) return number1;
if (+n === 1) return number2;
for (let i=1; i < +n; i++){
    let current = number1 + number2;
    number1 = number2;
    number2 = current;
}
return number2;

};
fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
