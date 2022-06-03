
// ----------------Type--------------

// Compile time, not runtime

// In future ts can support new datatypes



// -------------Type space and value space-------------

// Type space = where typescript types are defined
// Value space = values are defined(variables, constants, functions etc)



// ------------ Type Inference-----------

// The term inference means a conclusion reached on the basis of evidence and reasoning

// Inference is used to provide Type info when there is no-explict type-annotation

var num = 10;
// Will be infered as var num: number = 10;

var data = [10, "3", 20];
// var data: (string | number)[]

// with complex types
// var items = [new Product(), new Service()];
// var item: (Product | Service)[]



// Contextual typing

// function f1(name) {  // Warning here: about type
    
// }

// const btn = document.createElement("button");
// btn.value = "Update";
// btn.addEventListener(
//     "click",
//     function (event) { // No warning here about type. TypeScript is smart. event is alredy decleared.          // Contextual typing
//         console.log(event);
//     }
// )


// What happen when typscript can't infer the type?

// ----------------Type casting/assertion-------------

class Product{
    description: string;
    cost: number;
    constructor(description: string, cost: number) {
        this.description = description;
        this.cost = cost;
    }
}

class Service{
    description: string;
    cost: number;
    category: string;
    constructor(description: string, cost: number, category: string) {
        this.description = description;
        this.cost = cost;
        this.category = category;
    }
}

var p1 = new Product('Xbox', 2000);
var s1: Service;

// s1 = p1; Start giving us warning
// p1 has only 2 properties and s1 wants three properties

// Type casting/ type assertion

s1 = <Service>p1;
s1 = p1 as Service; // Another syntex

// console.log(s1);  //--- Important
// s1 is an instance of type Product


interface IEntity{
    description: string;
}

interface IOrder{
    description: string;
    cost: number;
    date: string;
}

var i1: IEntity = p1;

// var i2: IOrder = p1; //This will throw error

var i2: IOrder = p1 as IOrder;
// This will work



// -------------Static Type Checking-----------------
// What's the benifit?
// Traditionally, Optimization: Compiler does not have to check the type everytime
// But JS is not compiled. It is interpreted.
// Benfit of typescript is that it helps developers to avoid mistakes


// -----------------Nominal vs Structural Typing------------
// Nomial: Type Names should match -> like in java. For example two classes with different name but same properties: They will be considered
// Structural: Type Properties should Match

// TS is structural type


// Type Widening

// Narrowing -> const a = null // Variable will only have value type null due to const

let b = null; // Variable with Let and Null will set the variable Type as Any
b = null;
b = undefined;
b = 10;
b = "ten";
b = false;
b = new Object();
b = new Array();


// Type Narrowing (Refinement)

var s: string = ""; 
var s2 : "A" | "B" | "C";

s2 = "A"; 


// Type guarding

const v1: string | undefined = "";

function f1(arg: string | number): string | number {
    if (typeof arg == "number") {
        return arg + 10;
    } else {
        return arg + 10;
    }
}

function f2(arg) {
    if ("description" in arg) {
        // arg has "description" property
    }
}

function f3(arg) {
    if (arg instanceof MyClass) {
        // arg is an object of MyClass
    }
}

