const palindromes = function (str) {
    let regex = /[^a-zA-Z0-9]/g;
    return (
        str.replace(regex, '').toLowerCase() ===
        str.replace(regex, '').toLowerCase().split('').reverse().join('')
    );
};

// Do not edit below this line
module.exports = palindromes;
