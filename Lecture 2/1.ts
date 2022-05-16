
var useId: any;
// Always put comments why you are using any type

var userId: number | string;
// Union type

class Product{
    name: string;
    qty: number;
    constructor(name: string, qty: number){
        this.name = name;
        this.qty = qty;
    }
    getInfo(productBrand?: string): string[]{
        var info = ["hello", "world"];
        return info;
    }
    static getType() {
        console.log("getType Called");
    }
}

var prd: string | Product;
// Here we can assign a class as a type

class Service{
    serviceType: string;
    constructor(type : string) {
        this.serviceType = type;
    }
}

var prd2: Product | Service;
// Can also do it for functions


function f1 (carType: Product | Service){
    if (carType instanceof Product) {
        console.log("Product");
    }
    else if (carType instanceof Service) {
        console.log("Service");
    }
}


// Intersection type

var prd4: Product & Service;
// It will look for the properties of both classes inside the variable
//prd4 = new Product("", 0); // this is giving warning

prd4 = {
    ... new Product("", 0),
    getInfo: function () {
        return ["hello", "world"];
    },
    ... new Service("")
};

