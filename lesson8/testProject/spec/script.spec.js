const scriptSum = require('../modules/scriptSum');
const scriptSub = require('../modules/scriptSub');
const scriptMult = require('../modules/scriptMult');
const scriptDiv = require('../modules/scriptDiv');

const sum = scriptSum.sum;
const sub = scriptSub.sub;
const mult = scriptMult.mult;
const div = scriptDiv.div;

describe('Функция sum()',function() {
    it('должна возвращать 9 при аргументах (2,7)', function() {
        expect(sum(2,7)).toBe(9);
    })
    it('должна возвращать 2 при аргументах (null,2)', function() {
        expect(sum(null,2)).toBe(2);
    })
    it('должна возвращать null при аргументах (null,null)', function() {
        expect(sum(null,null)).toBeNull();
    })
    it('должна возвращать -10 при аргументах (-6,-4)', function() {
        expect(sum(-6,-4)).toBe(-10);
    })
    it('должна возвращать "One or more arguments are not a number" при аргументах ("g", "h")', function() {
        expect(sum("g","h")).toBe("One or more arguments are not a number");
    })
    it('должна возвращать 4 при аргументах (undefined, 4)', function() {
        expect(sum(undefined,4)).toBe('Unknown arguments');
    })
    it('должна возвращать "Unknown arguments" при аргументах (undefined, undefined)', function() {
        expect(sum(undefined,undefined)).toBe('Unknown arguments');
    }) 
});

describe('Функция sub()',function() {
    it('должна возвращать -5 при аргументах (2,7)', function() {
        expect(sub(2,7)).toBe(-5);
    })
    it('должна возвращать -2 при аргументах (null,2)', function() {
        expect(sub(null,2)).toBe(-2);
    })
    it('должна возвращать 4 при аргументах (4,null)', function() {
        expect(sub(4,null)).toBe(4);
    })
    it('должна возвращать null при аргументах (null,null)', function() {
        expect(sub(null,null)).toBeNull();
    })
    it('должна возвращать -2 при аргументах (-6,-4)', function() {
        expect(sub(-6,-4)).toBe(-2);
    })
    it('должна возвращать "One or more arguments are not a number" при аргументах ("g", "h")', function() {
        expect(sub("g","h")).toBe("One or more arguments are not a number");
    })
    it('должна возвращать 4 при аргументах (undefined, 4)', function() {
        expect(sub(undefined,4)).toBe('Unknown arguments');
    })
    it('должна возвращать "Unknown arguments" при аргументах (undefined, undefined)', function() {
        expect(sub(undefined,undefined)).toBe('Unknown arguments');
    }) 
})

describe('Функция mult()',function() {
    it('должна возвращать 14 при аргументах (2,7)', function() {
        expect(mult(2,7)).toBe(14);
    })
    it('должна возвращать null при аргументах (null,2)', function() {
        expect(mult(null,2)).toBeNull();
    })
    it('должна возвращать null при аргументах (4,null)', function() {
        expect(mult(4,null)).toBeNull();
    })
    it('должна возвращать null при аргументах (null,null)', function() {
        expect(mult(null,null)).toBeNull();
    })
    it('должна возвращать -24 при аргументах (-6,-4)', function() {
        expect(mult(-6,-4)).toBe(24);
    })
    it('должна возвращать "One or more arguments are not a number" при аргументах ("g", "h")', function() {
        expect(mult("g","h")).toBe("One or more arguments are not a number");
    })
    it('должна возвращать 4 при аргументах (undefined, 4)', function() {
        expect(mult(undefined,4)).toBe('Unknown arguments');
    })
    it('должна возвращать "Unknown arguments" при аргументах (undefined, undefined)', function() {
        expect(mult(undefined,undefined)).toBe('Unknown arguments');
    }) 
})

describe('Функция div()',function() {
    it('должна возвращать 0.5 при аргументах (1,2)', function() {
        expect(div(1,2)).toBe(0.5);
    })
    it('должна возвращать null при аргументах (null,2)', function() {
        expect(div(null,2)).toBeNull();
    })
    it('должна возвращать null при аргументах (4,null)', function() {
        expect(div(4,null)).toBeNull();
    })
    it('должна возвращать null при аргументах (null,null)', function() {
        expect(div(null,null)).toBeNull();
    })
    it('должна возвращать 1.5 при аргументах (-6,-4)', function() {
        expect(div(-6,-4)).toBe(1.5);
    })
    it('должна возвращать "One or more arguments are not a number" при аргументах ("g", "h")', function() {
        expect(div("g","h")).toBe("One or more arguments are not a number");
    })
    it('должна возвращать 4 при аргументах (undefined, 4)', function() {
        expect(div(undefined,4)).toBe('Unknown arguments');
    })
    it('должна возвращать "Unknown arguments" при аргументах (undefined, undefined)', function() {
        expect(div(undefined,undefined)).toBe('Unknown arguments');
    }) 
    it('должна возвращать 0 при аргументах (0,2)', function() {
        expect(div(0,2)).toBe(0);
    })
    it('должна возвращать "division by zero is not allowed" при аргументах (4,0)', function() {
        expect(div(4,0)).toBe("division by zero is not allowed");
    })
})