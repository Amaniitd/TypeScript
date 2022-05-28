

abstract class User {
    name: string;
    age : number;
    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
    abstract getUserType(): string;
}

class InternalUser extends User{
    constructor(name : string, age : number) {
        super(name, age);
    }
    getUserType() {
        return "Internal";
    }
}

var u1 = new InternalUser("John", 30);
console.log(u1.getUserType());