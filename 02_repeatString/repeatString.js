const repeatString = function(str, num) {
    repeat = '';
    if (num < 0){
        return 'ERROR';
    }
    else {
        for (let i = 0; i < num; i++){
            repeat += str;
        };
    };
    return repeat;
};
repeatString('hey', 3);
repeatString('hello', 10);
repeatString('hi', 1);
repeatString('bye', 0);
repeatString('goodbye', -1);
repeatString('odin', 9);
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;
