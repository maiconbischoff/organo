//import { useState } from 'react';
import './CampoTexto.css'
const CampoTexto = (props) => { //props são as propriedades que esse componente recebeu

     //let valor = 'Maicon Bischoff';
     
     // const aoDigitado = (evento) => {//arrow fonction(função anônima) veio opara resolver problemas de escopo no js de variáveis que vazam etc.. e é usada bastante em lambda expressions ver arro function e escopo lexico
     //      setValor(evento.target.value) // fazendo um 2 way data binding com valor com  a propriedade value do input
     //      console.log(valor); //todo evento js vai ter um target e ele pode ter um value
     // }

     // const [valor, setValor] = useState('')  //sempre que tiver um USE, é um hook do React. O useState é para conseguir manter um estado dentro da função.
     // ele gera dois valores um pra ler e outro para escrever que é o setter para fazer o bind. No caso tiramos esse estaado local aqui e elevamosum nivel para o compontente acima e ele vai ser recebido via props
     //pois cada campo de texto deve ter seu estado individual, o valoue vai ser o props.valor, o onchange vai chamar o nosso evento

     const aoDigitado = (evento) => {
          props.aoAlterado(evento.target.value);  //aqui elevamos o estado(nível) um acima para passar os states individual
     }

     return (
          <div className="campo-texto">
               <label>{props.label}</label>
               <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
          </div>
     )//componentes são funções no React.
}
// <input placeholder={props.placeholder} /> podemos fazer assim também

export default CampoTexto


/*


funções 

procs são funções que não retornam

argumentos e paramentros. o argumento é o parametro em tempo de execução


https://pt-br.legacy.reactjs.org/docs/hooks-reference.html#functional-updates

------------------------------------------


Para saber mais: Stateless VS Statefull

React tem duas abordagens diferentes para lidar com inputs de formulários.

Um elemento de input de formulário cujo valor é controlado pelo React é chamado de componente controlado (statefull em inglês). 
Quando o usuário insere dados em um componente controlado, o evento que manipula essa alteração é disparado e o seu código decide se o 
input é válido (ou seja, renderizado com o valor atualizado). Se você não re-renderizar o elemento de formulário, permanecerá inalterado.

Um componente não controlado (stateless em inglês) funciona como um elemento de formulário fora do React. 
Quando um usuário insere dados em um campo de formulário (um input box, dropbox, etc), a informação atualizada é refletida sem 
necessidade do React fazer nada. No entanto, isso também significa que você não pode forçar o campo a ter um certo valor.



*/