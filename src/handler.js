'use strict';

module.exports.generateRandomNumber = (event) => {
const randomNumber=parseInt(Math.random()*100);
console.log("The random generated integer is given random number",randomNumber);
return randomNumber
};
