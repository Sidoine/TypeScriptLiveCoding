/**
 * @param a {number} A number
 */
function test(a){
    return a * a;
}

var b = test(4);
print(b);

/**
 * @param a {any[]} An array
 */
function count(a){
    return a.length;
}

var c = count([18, 15]);