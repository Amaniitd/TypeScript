
class A{
    name: string;
    age: number;
    private id: number;
    protected type: string;

    //read only property
    readonly guid: number;

    // you can also write these as: constructor(name: string, age: number, private id: number, protected type: string)
    constructor(name = "" , age = 0) {
        this.name = name;
        this.age = age;
        this.id = Math.random();
        this.guid = Math.random();
    }
}

var objA = new A();
// objA.type Not accessable
// objA.id Not accessable

class B extends A {
    constructor(name, age) {
        super(name, age);
        // this.id can't be accessed
        // this.type Accessible
    }
}

class C extends B {
    constructor(name, age) {
        super(name, age);
        
    }
}