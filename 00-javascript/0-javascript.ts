/**
 * @param a {number} A number
 */
function test(a){
    return a * a;
}

var b = test(4);

/**
 * @param a {any[]} An array
 */
function count(a){
    return a.length;
}

var c = count([18, 15]);


/**
 * @param test {string} A string
 */
function SampleClass(test) {
    this.test = test;
}

SampleClass.prototype.bla = function(){
    return this.test;
}

var d = new SampleClass("toto");
d.test = "youhou";
console.log(d.bla().length);
