

//  Function type expression


function run(cb: (s: string) => void) {
    cb("Run called CB");
}

function someCallback(arg: string) {
    console.log("SomeCallback is Called", arg); 
}

run(someCallback);

// Another way:

type cbType = (s: string) => void;

function run2(cb: cbType) {
    cb("Run called CB");
}

run2(someCallback);



