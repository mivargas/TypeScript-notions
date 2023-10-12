export interface Passenger {
    name: string;
    children?: string[];
}



const passenger1: Passenger = {
    name: 'Miguel'
}



const passenger2: Passenger = {
    name: 'Melisa',
    children: ['Natalia', 'Elizabeth']

}

const printChildren = ( { name, children }: Passenger ): number => {

    //const howManyChildren = passenger.children?.length || 0;

    if ( !children ) return 0;
    const howManyChildren = children!.length //le estoy diciendo que siempre va arecibir el valor NOT NULL OPERATOR (solo ts)
    
    console.log(name, howManyChildren);
    
    return howManyChildren;
}

printChildren(passenger1);