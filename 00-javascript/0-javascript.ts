/**
 * @param a A number
 */
function test(a:number){
    return a * a;
}

var b = test(4);

/**
 * @param a An array
 */
function count(a:any[]){
    return a.length;
}

var c = count([18, 15]);

class SampleClass {
    test: string;

    /**
     * @param test A string
     */
    constructor(test: string) {
        this.test = test;
    }

    bla() {
        return this.test;
    }
}

var d = new SampleClass("toto");
d.test = "youhou";
console.log(d.bla().length);
