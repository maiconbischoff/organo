import { Banner } from './componentes/Banner/Banner'; //quando a gente cria componente ao inves de index.js tem que ter o nome da pasta 
import Formulario from './componentes/Formulario';

function App() {
  return (
    <div className="App">
      <Banner />
      <Formulario />
    </div>
  );
}

export default App;


// para criar projeto use o npx(npm remote) - uma das formas é usando react-app
// npx create-react-app nome-do-programa