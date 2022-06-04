

type Product = {
    id: number,
    name: string,
    brand: string
}


type PartialType<Type> = {       //Generic
    readonly [Property in keyof Type]: Type[Property]
}

type PrdocutPartialType = PartialType<Product>;

var a: Product = {
    id: 1,
    name: "Mobile",
    brand: "Apple"
}

// non readonly from readonly:

type NotReadOnlyType<Type> = {
    -readonly [Property in keyof Type]: Type[Property]
}

// Removing optional properties 
type newType = {
    name: string,
    brand?: string
}

type NotOptionalType<Type> = {
    [Property in keyof Type]-?: Type[Property]
}

// Making all the properties optional:
type AllOptionalType<Type> = {
    [Property in keyof Type]?: Type[Property]
}

type idNotOptional = AllOptionalType<Product> & { id: number };
