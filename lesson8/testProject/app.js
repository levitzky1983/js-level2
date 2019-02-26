
const scriptSum = require('./modules/scriptSum');
const scriptSub = require('./modules/scriptSub');
const scriptMult = require('./modules/scriptMult');
const scriptDiv = require('./modules/scriptDiv');
   

console.log(scriptSum.sum(2,5));
console.log(scriptSub.sub(2,5));
console.log(scriptMult.mult(-2,-5));
console.log(scriptDiv.div(2,0));

