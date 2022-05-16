function f5(): void{
//return undefined
}

f5();

function raiseError(message: string): never{
    throw new Error(message);
}
// Error is never returned
raiseError("Error");


