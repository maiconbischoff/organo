import './CampoTexto.css'
const CampoTexto = (props) => {

     let valor = '';

     const aoDigitado = (evento) => {
          valor = evento.target.value; // fazendo um 2 way data binding com valor
          console.log(valor); //todo evento js vai ter um target e ele pode ter um value
     }

     return (
          <div className="campo-texto">
               <label>{props.label}</label>
               <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
          </div>
         // <input placeholder={props.placeholder} /> podemos fazer assim também
     )
}

export default CampoTexto