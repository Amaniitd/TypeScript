
interface Iuser {
    name: string;
    age: number;
}

interface Iuser {
    address: {
        city: string;
        zipcode: number;
    }
}

// Typescript merge and combine the two interfaces
// This behaviour is different from JavaScript where things get overwritten


class User2 implements Iuser {
    name: string = "";
    age: number = 0;
    address: {
        city: string;
        zipcode: number;
    } = { city: "", zipcode: 0 };
}

interface IuserExt extends Iuser {
    type: string;
}

// Another way
function f4(user: Iuser & { type: string }) {
    console.log(user);
}
