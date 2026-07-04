import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corDeFundo}) => { // passando as props de um jeito diferente aqqui, usando operador de desistruturação
    return(
        <div className='colaborador'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt={nome} title={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
        
    )
}
// src='https://github.com/maiconbischoff.png' 
export default Colaborador