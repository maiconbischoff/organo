import './Botao.css';

const Botao = (props) => {
     return (
          <button className='botao'>
               {props.children} 
          </button>
          // o children pega os elementos filhos  "Criar Card" no caso ao inves do  {props.texto}
     ); 
}

export default Botao;