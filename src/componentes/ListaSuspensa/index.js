import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
     return (
          <div className='lista-suspensa'>
               <label>{props.label}</label>
               <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor} >
                    <option value=""></option>
                    {props.itens.map(item => <option key={item}>{item}</option>)}; //Cada iten de uma lista no React precisa de uma chave unica chamada de key, para o React renderizar, sem isso ele perde o controle de como renderizar
               </select>
          </div>
     )
}// recebendo o state do formulario

export default ListaSuspensa;