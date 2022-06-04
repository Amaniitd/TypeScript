

function toCSV(arg: any): string;

function toCSV(arg: any[]): string{
    var result = "Invalid";
    if (Array.isArray(arg)) {
        result = arg.join(",");
    }
    else if (arg as Object instanceof Object) {
        let csvData = [];
        let arg2 = arg as any;
        for (let key in arg2) {
            csvData.push(key + ":" + arg[key]);
        }
        result = csvData.join(",");
    }
    return result;
}

console.log(toCSV({ name: "John", age: 30 }));
console.log(toCSV(["John", "Doe"]));
console.log(toCSV(10));
console.log(toCSV("js"));
