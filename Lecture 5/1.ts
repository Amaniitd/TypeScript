// Decorator
function helper(classConstructor: Function) {
    var proto = classConstructor.prototype;
    proto.toString = function ()          // we are hiding object.prototype.toString
    {
        return JSON.stringify(this);
    }
    proto.toCSV = function () {
        var csvData = [];
        for (let prop in this) {
            if (prop != "toString" && prop != "toCSV") {
                csvData.push(prop);
                csvData.push(this[prop]);
            }

        }
        return csvData.join(",");
    }
}


@helper
class Product
{
    name: string;
    qty: number;
    constructor(name: string, qty: number) {
        this.name = name;
        this.qty = qty;
    }
}

@helper
class Service{
    type: string;
    vendor: string;
    constructor(type: string, vendor: string) {
        this.type = type;
        this.vendor = vendor;
    }
}

var p1 = new Product("TV", 1);
console.log(p1.toString());
// output -> "[objct Object]"

// The object.prototype which p1 inherits from
// Doesn't have any idea about shape of the object


// We want an implementation of toString() for all class


// After adding decorator:
// toString() does not exist in p1 (object) or Product class but it is added to prototype of Product class via decorator

// console.log(p1.toCsv());
// Error: no awareness that toCsv() exist ------ they had awareness about toString() because of its implementation in Object class
// How to fix that error?

type helperT = { toString: () => string, toCSV: () => string };
type ProductT = Product & helperT;
var p2: ProductT = new Product("TV", 1) as ProductT;
// as -> type casting

console.log(p2.toCSV());


