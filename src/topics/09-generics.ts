//export function whatsMyType( argument: any ): any {

export function whatsMyType<T>( argument: T ): T { //Genricos, infiere el tipo de dato y devuelve el tipo segun el argumento que recibe "evitar usar any"
    return argument
}

let amIstring = whatsMyType<string>('hola mundo');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number[]>([1,2,3,4,5]); //o whatsMyType<Array<number>>

console.log(amIstring.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));