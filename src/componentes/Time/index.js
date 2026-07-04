import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {
const css = {backgroundColor: props.corSecundaria} 

    return (
        props.colaboradores.length > 0 && <section className='time' style={ css }>  {/*backgroundColor no caso a propriedade, nao pode hífen pq não e css é js e tudo dentro de um objeto javascript{} pode usar assim tambem sem criar a const style={ {backgroundColor: props.corSecundaria} */}
            <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores' > 
                {props.colaboradores.map( colaborador => <Colaborador corDeFundo={props.corPrimaria} key={colaborador.nome && colaborador.cargo }  nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} />)}
            </div>
        </section>
    )
}
// props.colaboradores.length > 0 && é assim que se trabalha com renderização condicinal em React se props.colaboradores.length > 0 && for true ele retorna a segunda parte da section se for false nao retorna nada o && condicional se der true na primeira ele precisa ver e se deu false ele nao termina de ver, pode pro tambem aou inves de && p tooperador ternario (?)
export default Time