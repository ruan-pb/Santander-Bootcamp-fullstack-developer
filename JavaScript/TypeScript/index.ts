function soma (a: number, b: number ){
    return a + b;
}

console.log(soma(5,15));



interface IAnimal{
    nome: string;
    tipo:'terrestre' | 'aquatico';
    domestico: boolean;
    executarSom(alturaEmDecibés: number): void
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean
}

interface ICanino extends IAnimal {
    porte: 'pequeno'|'medio'|'grande' 
}

type IDomestico = IFelino | ICanino;

const animal: IAnimal = {
    nome:'Elefante',
    tipo:'terrestre',
    executarSom: (alturaEmDecibés) => (`${alturaEmDecibés}DB`),
    domestico:true


}

const felino: IFelino = {
    nome:'Leão',
    tipo: "terrestre",
    visaoNoturna: true,
    executarSom: (alturaEmDecibés) => (`${alturaEmDecibés}DB`),
    domestico:true


}

const animais: IDomestico = {
    domestico: true,
    nome:'Cachorro',
    porte:'medio',
    tipo:'terrestre',
    visaoNoturna: true,
    executarSom: (alturaEmDecibés) => (`${alturaEmDecibés}DB`),

}