const findTheOldest = function(array) {
    array.forEach(element => {
        element.lifespan = (element.yearOfDeath || new Date().getFullYear()) - element.yearOfBirth;
    });

    const oldest = array.reduce((oldestperson, currentperson) => {
        return currentperson.lifespan > oldestperson.lifespan ? currentperson : oldestperson;
    });

    return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
