const sumAll = function(x, y) {
let total = 0;
while ((Number.isInteger(x) && x>0) && (Number.isInteger(y) && y>0)){
    if (y>x){
        for (let i = x; i <= y; i++){
        total += i;
        }
    }
    else if(x>y){
        for (let i = y; i <= x; i++){
        total += i;
        }
    }
return total;
};
return 'ERROR';
};

sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(2.5, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;

