//funcion tradicional
function addNumbers(a: number, b: number): number{

    return a + b;
}

//funcion  de flecha (arrow function)
const addNumbersArrow = (a: number, b: number): string => `Resultado: ${a + b}`;

//funcion con parametros opcionales y por defecto
function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number{
    return firstNumber * base
}


/* const result: number = addNumbers(1,2);
const result2: string = addNumbersArrow(1,2);
const multiplyResult: number = multiply(5);

console.log({result, result2, multiplyResult});
 */

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number) =>{

    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`)
    },
}

healCharacter(strider, 20);

strider.showHp();


export {};