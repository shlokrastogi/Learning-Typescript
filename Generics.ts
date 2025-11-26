const score: Array<number> = []
const names: Array<string> = []

function identity1(val: boolean | number): boolean | number {
    return val
}
// you can input any type and can return any type of value
//for example you input number then you can return not only number but also other type like string, boolean etc  
function identity2(val: any): any {
    return val
}
// if you input the number then you get the retrn type number as output it will be fixed
function identity3<Type>(val: Type): Type {
    return val
}

function identity4<T>(val: T): T {
    return val
}

interface Bottle{
    brand: string,
    type: number
}

//identity4<Bottle>({})


function getSearchProducts<T>(products: T[]): T {
    //do some database operations
    const myIndex = 3
    return products[myIndex]
}

const getMoreSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection : string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(val1:T, val2:U): object {
    return {
        val1, val2
    }
}

anotherFunction(1, {connection: "one", username: "shlok", password: "jhf"})

interface Quiz {
    name: string,
    type: string,
}

interface Course {
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}

export{}