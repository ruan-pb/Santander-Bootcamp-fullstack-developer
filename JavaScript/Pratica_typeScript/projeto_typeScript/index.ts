class Endereco{
    rua: string;
    bairro: string;
    cidade:string;
    cep:string;
    numeroDaCasa: string  //é string pq não pretendo fazer operações matematicas com o numero da casa

    constructor(rua,bairro,cidade,cep,numeroDaCasa ){
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.cep = cep;
        this.numeroDaCasa = numeroDaCasa;
    }
}
class Aluno {
    nome:string;
    idade: number;
    endereco:Endereco;
    turma: Turma;

    constructor(nome,idade,endereco,turma){
        this.nome = nome;
        this.endereco = endereco;
        this.idade = idade;
        this.turma = turma;
    }


}
class Turma{
    nomeDaTurma: string;
    modalidade: ModalidadeDeNotas;


    constructor(nome,modalidade){
        this.nomeDaTurma = nome;
        this.modalidade = modalidade;
    }
}

enum SituacaoDoEstudante{
    APROVADO,
    REPROVADO,
    MATRICULADO
}
enum ModalidadeDeNotas{
    EJA,
    NORMAL
}


interface IAnalisarDadosDoEstudante {
    verificarNotas(notas: number,aluno:Aluno):SituacaoDoEstudante;
}
const notasDeEstudantes = new Map();

const TurmaMatematicaEJA = new Turma('Matematica',ModalidadeDeNotas.EJA);     
const TurmaMatematicaNormal = new Turma('Matematica',ModalidadeDeNotas.NORMAL);


const ENDERECO_RUAN = new Endereco('Isaura','Centro','Itapororoca','12345','25');//Sei que poderia trocar essas inicialização de estudantes por um array, mais para afins didaticos e para revisar depois preferir fazer assim
const ALUNO_RUAN = new Aluno('ruan',23,ENDERECO_RUAN,TurmaMatematicaNormal);

const ENDERECO_VICTOR = new Endereco('Conde','Centro','João pessoa','54321','18');
const ALUNO_VICTOR = new Aluno('Victor',20,ENDERECO_VICTOR,TurmaMatematicaNormal);

const ENDERECO_CAROL = new Endereco('Bessa','Centro','João pessoa','976413','93');
const ALUNO_CAROL = new Aluno('Carol',25,ENDERECO_CAROL,TurmaMatematicaEJA);

const ENDERECO_VALDIR = new Endereco('Salvador','Tatuape','Bahia','96315','81');
const ALUNO_VALDIR = new Aluno('Valdir',40,ENDERECO_VALDIR,TurmaMatematicaEJA);




function InserirNotas(nota:number,aluno:Aluno){
    return notasDeEstudantes.set(aluno.nome,nota)
}


InserirNotas(7,ALUNO_RUAN); //Aprovado na modalidade Normal
InserirNotas(7,ALUNO_RUAN);
InserirNotas(7,ALUNO_RUAN);

InserirNotas(6,ALUNO_VICTOR);
InserirNotas(6,ALUNO_VICTOR); //reprovado na modalidade Normal
InserirNotas(6,ALUNO_VICTOR);

InserirNotas(6,ALUNO_CAROL);
InserirNotas(6,ALUNO_CAROL); //Aprovado na modalidade EJA
InserirNotas(6,ALUNO_CAROL);

InserirNotas(5,ALUNO_VALDIR);
InserirNotas(5,ALUNO_VALDIR); //Reprovado na modalidade EJA
InserirNotas(5,ALUNO_VALDIR);

let soma = 0;


class verificarSituacaoDoAlunoDeAcordoComAsNotasEModalidade implements IAnalisarDadosDoEstudante{  //essa classe ficaria resposavel por todos os métodos
    

    verificarNotas(notas: number,aluno:Aluno): SituacaoDoEstudante {
        for(let i = 0; i<notasDeEstudantes.size; i++){
            if(notasDeEstudantes.get[i].key === aluno.nome){
                soma += notasDeEstudantes.get[i].value;
            }
        }
        if(!SituacaoDoEstudante.MATRICULADO || !SituacaoDoEstudante.APROVADO || !SituacaoDoEstudante.REPROVADO){
            console.log('Estudante não encontrado na turma')

        }
        if(aluno.turma.modalidade === ModalidadeDeNotas.NORMAL){
            if(soma >= 7){
                return SituacaoDoEstudante.APROVADO;
            }
            else{
                return SituacaoDoEstudante.REPROVADO
            }
        }
        else if(aluno.turma.modalidade === ModalidadeDeNotas.EJA){
            if(soma >= 6){
                return SituacaoDoEstudante.APROVADO
            }
            else{
                return SituacaoDoEstudante.REPROVADO
            }
        }
    }
    

   
}




 
