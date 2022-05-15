

export default class Base{
    constructor() {
        
    }
    serialize() {
        return JSON.stringify(this);
    }
    clone(){
        return { ...this };
    } // shallow copy
}