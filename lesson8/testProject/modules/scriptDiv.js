const div = function Div(a,b) {
    if ( a === undefined || b === undefined) {
        var error = new Error('Unknown arguments');
        return error.message;
    }
    if (a === null || b === null) {
       return null;
    } 
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        var error = new Error('One or more arguments are not a number');
        return error.message;
    }
    if (b === 0) {
        var error = new Error('division by zero is not allowed');
        return error.message;
    }
    return  a / b;
}

module.exports = {
    div : div
}
