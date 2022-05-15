

import Base from './base';

class Product extends Base{
    // Type Declarations
    name: string;
    qty: number;
    constructor(name: string, qty: number) {
        super();   // TypeScript will remind you about calling the super constructor by throwing error if you forget to call it
        this.name = name;
        this.qty = qty;
    }
    getInfo(): string[]{ // we are saying that this method returns an array of strings
        var info = ["hello"];
        return info
    }
    voidFunction(): void{
        console.log("Hello");
    }

    static getType() {
        console.log("getType Called");
    }

    overLoadedFunction(Brand?: string) : void{ // optional parameter the ? means that the parameter is optional
        console.log("overloaded function called");
    }

}
// new Product(111, 10); //Error
var p1 = new Product("TV", 10);
console.log(p1);
console.log(p1.getInfo());
Product.getType();

p1.overLoadedFunction();
p1.overLoadedFunction("Sony");

console.log(p1.serialize());
console.log(p1.clone());
