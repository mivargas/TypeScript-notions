
interface AudioPlayer{
    audioVolume: number;
    soundDuration: number;
    song: string;
    deetails: Details;
}


interface Details {
    author: string;
    year: number;
}


const audioPlayer: AudioPlayer = { //control + mayuscula + .
    audioVolume: 90,
    soundDuration: 36,
    song: "Mess",
    deetails: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

/*** Desestructuraion de objetos ***/
//const { song:anotherSound, soundDuration, deetails: {author} } = audioPlayer; //song:anotherSound es para renombrar la cosntante destructurada y deetails: {author} es para desestructurar el objeto anidado en la misma linea
const { song, soundDuration, deetails } = audioPlayer;
const { author } = deetails;

console.log('Sound:', song);
console.log('Duration:', soundDuration);
console.log('Author:', author);


/*** Desestructuraion de arreglos ***/
//const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
//console.log('Personaje 3:', dbz[4] || 'Personaje no existe');

const [,,trunks = 'Not found']: string[] = ['Goku', 'Vegeta', 'Trunks']; //not foun es en caso de que no este ese indice mostrar valor por defecto
console.log('Personaje 3:', trunks);

export {}