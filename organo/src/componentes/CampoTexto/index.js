import './CampoTexto.css'
const CampoTexto = (props) => { //props são as propriedades que esse componente recebeu

     let valor = '';

     const aoDigitado = (evento) => {//arrow fonction(função anônima) veio opara resolver problemas de escopo no js de variáveis que vazam etc.. e é usada bastante em lambda expressions ver arro function e escopo lexico
          valor = evento.target.value; // fazendo um 2 way data binding com valor
          console.log(valor); //todo evento js vai ter um target e ele pode ter um value
     }//componentes são funções.

     return (
          <div className="campo-texto">
               <label>{props.label}</label>
               <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
          </div>
     )
}
// <input placeholder={props.placeholder} /> podemos fazer assim também

export default CampoTexto