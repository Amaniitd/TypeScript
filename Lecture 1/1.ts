// ES5 -> ES6 -> ES7
// Collectively we call ESNext

// Type safety -> TypeScript -> by microsoft
// Type safety only at compile time not at runtime

// TS does not run directly on the browser
// TS is transpiled to JS -> transpilation


// Variable with type safety
var num: number = 10;
var str: string = "Hello";
var bool: boolean = true;

// num = "Hello"; // Error

// What if we are not sure about the type of the variable

var xyz: number | string; // union type
// This is basically saying that xyz can be either a number or a string -> a custom type

var lmn: any; // any type -> no type safety

lmn = 10;
lmn = "Hello";
lmn = null;
lmn = undefined;

var var1: null; 
var var2: undefined;
// null and undefined are also a type


