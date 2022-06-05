

type Product = {
    id: number,
    name: string,
    brand: string
}

var p1: Product = {
    id: 1,
    name: "Apple",
    brand: "Apple"
}

var p2: Partial<Product> = { // all are optional
    id: 2,
    // name: "Orange",
    brand: "Orange"
}

var p3: Required<Product> = { // all are required
    id: 3,
    name: "Banana",
    brand: "Banana"
}

var p4: Readonly<Product> = { // all are readonly
    id: 4,
    name: "Grapes",
    brand: "Grapes"
}

// Record

type ProductIds = "101" | "102" | "103";

var p5: Record<ProductIds, Product> = {
    101: { name: "Apple", brand: "Apple", id: 101 },
    102: { name: "Orange", brand: "Orange", id: 102 },
    103: { name: "Banana", brand: "Banana", id: 103 }
}

// console.log(p5);


// Pick

var p6: Pick<Product, "name" | "brand"> = { // Pick properties from Product
    name: "Apple",
    // id: 1, //not allowed
    brand: "Apple"
}

// Omit
// Opposite of pick - remove properties from Product

var p7: Omit<Product, "name" | "brand"> = { // Omit properties from Product
    // name: "Apple",
    // brand: "Apple",
    id: 1
}





