
// Invoking a Rest api

// We will use a node module called "JSON-server"
// It will allow us to create a mock JSON api

// Installation
// npm install json-server

// now create a json file

// watch the json file
// json-server --watch db.json -d 2000

// 2000 is the delay time -> artificially slow down the response

// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

interface IEntities { //After pushing the object to the server, we will get back an object with the id -> that's why we are inforcing the id by using the interface
    id: number;
}

class Product implements IEntities {
    name: string;
    price: number;
    id: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
        this.id = 0;
    }
}

class Service implements IEntities {
    category: string;
    id: number;
    duration: number;
    constructor(category: string, duration: number) {
        this.category = category;
        this.duration = duration;
        this.id = 0;
    }
}


var p1 = new Product("Mobile", 5);
var p2 = new Product("Tablet", 8);
var p3 = new Product("Laptop", 15);

var s1 = new Service("Accounting", 50);
var s2 = new Service("Auditing", 100);


// Generics
function post<T>(data : T, url : string) {
    const xhr = new XMLHttpRequest();
    xhr.open("post", url, true);
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.onload = function () {
        var response: IEntities = JSON.parse(xhr.response);
        //since we are using generics, we can't access the id directly, we need to use the interface
        type savedData = T & IEntities;
        var restResponse: savedData = {
            ...data,
            ...response
        }
        console.log(restResponse);
    }
    const dataJson = JSON.stringify(data);
    xhr.send(dataJson);
}

const endpointProduct = "http://localhost:3000/products";
const endpointService = "http://localhost:3000/services";
post<Product>(p1, endpointProduct);
post<Product>(p2, endpointProduct);
post<Product>(p3, endpointProduct);

post<Service>(s1, endpointService);
post<Service>(s2, endpointService);