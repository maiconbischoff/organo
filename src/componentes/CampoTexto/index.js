import './CampoTexto.css'
const CampoTexto = (props) => {
     return (
          <div className="campo-texto">
               <label>{props.label}</label>
               <input required={props.obrigatorio} placeholder={`${props.placeholder}...`} />
          </div>
         // <input placeholder={props.placeholder} /> podemos fazer assim também
     )
}

export default CampoTexto