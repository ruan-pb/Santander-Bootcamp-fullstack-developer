/*const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input',(event) => (
    const i = event.currentTarget as HTMLInputElement;

));*/
function adicionarApendiceALista<T>(array:T[],valor: T){
    return array.map(() => valor)
}

 adicionarApendiceALista([1,2,3],2);

 interface IUsuario{
     id: string;
     email: string;
     cargo?: 'funcionario'|'gerente' | 'coodernador' | 'supervisor';

 }

 interface IAdmin {
     cargo: 'gerente' | 'coodernador' | 'supervisor';
 }

 function redirecione (usuario: IUsuario ){
    if(usuario.cargo){
        //redirecione usuario
    }     
            //redirecione para area do usuario

}


