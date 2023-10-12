/******  Clase *******/
/* export class Person {
    public name: string;
    private address: string;

    constructor(name: string, address: string){
        this.name = name;
        this.address = address;
    }

} */


export class Person {


    constructor(
        public name: string,
        private address: string = 'No address', //valor por defecto
        //public lastName: string //se veria afectada la composicion de la clase hero
    ) { }
}

/* const man = new Person('Miguel', 'Cua');
console.log(man); */


/******  Herencia *******/
/* export class Hero extends Person {
    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'Cua')
    }
}

const man = new Hero('Mike', 31, 'Miguel');
console.log(man); */


/******  Composicion *******/
export class Hero {

    //public person: Person; //evitar que se vea afectada la clase Hero por Perosna (lastName)

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person, //de esta manera no se ve afectada por la clase Person (lastName)
    ) { 
        //this.person = new Person(realName, 'Cua') //evitar que se vea afectada por la clase Person (lastName)

    }
}

//const hero = new Hero('Mike', 31, 'Migel'); //evitar que se vea afectada por la clase Person (lastName)

const persona = new Person('Miguel', 'Cua'); //de esta manera no se ve afectada la clase Hero por la clase Person (lastName)
const hero = new Hero('Mike', 31, 'Miguel', persona); //de esta manera no se ve afectada por la clase Person (lastName)

console.log(hero)