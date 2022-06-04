
// type abc = (someArg: number) => boolean;


// Defining a type with description

type DescribableFunction = {           
    description: string;  // Metadata of the function       // Also called call signature
    (someArg: number): boolean;
}

function isNan(arg: number): boolean{
    return isNaN(arg);
}

isNan.description = "Check if the argument is NaN";

function run(num: number, fn: DescribableFunction) {
    console.log(fn.description, "returns", fn(num));
}

run(10, isNan);


