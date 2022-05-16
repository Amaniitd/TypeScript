
// Interface

interface Iuser { //Shape of the object
    name: string;
    age: number;
    address: {
        city: string;
        zipcode: number;
    }
}

var userA = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        zipcode: 10001
    },
    type : "web" // more properties is okay  but not in interface
}


function f1(user: Iuser) {
    console.log(user);
}

f1(userA);

// Type mismatch not allowed
// More properties in interface is not allowed
// More properties in object is allowed

class User {
    name: string = ""; // You have to either initialize here or inside constructor
    age: number = 0;
    address: {
        city: string;
        zipcode: number;
    } = { city : "", zipcode: 0 };
    constructor() {
        
    }
}

function f2(user : User) {
    console.log(user);
    // console.log(user.type); //Not allowed as type is not defined in interface
    // Only properties defined in interface is accessible
}
f2(userA);

function f3(user: { name: string, age: number }) {
    console.log(user);
}

f3(userA);

// Why use Interface if we can use classes
// Modular:
// Suppose we added a new class that matches the interface
// and we want to use the defined function then we dont need to update the function

// Interface is just a collection of properties
// While class is a blueprint of an object and can be used to define and initialize the object
