const sub = function Sub(a,b) {
    if ( a === undefined || b === undefined) {
        var error = new Error('Unknown arguments');
        return error.message;
    }
    if ( a === null&&b === null) {
        return null;
    }
    if (a === null) {
       return -b;
    } 
    if (b === null) {
       return a;
    }  
   
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        var error = new Error('One or more arguments are not a number');
        return error.message;
    }
    return  a - b;
}

module.exports = {
    sub : sub
}
