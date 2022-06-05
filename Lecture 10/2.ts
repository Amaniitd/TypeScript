


// Exclude 

type deviceTypes = "mobile" | "tablet" | "desktop";

var d1: Exclude<deviceTypes, "mobile"> = "tablet";
console.log(d1); 

// d1 = "Mobile"; //not allowed




// NonNullable

type Identifier = string | number | null;

var serialNumber: NonNullable<Identifier> = "123";
// Null and undefined are not allowed



// ReturnType

// Given a function type, this gets the type returned by the function

function CreateItem(name: string) {
    return {
        id: Math.random(),
        description: name
    }
}

var p1: ReturnType<typeof CreateItem>;
var p2: ReturnType<(arg: string) => number>;


