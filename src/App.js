/*import logo from './logo.svg';*/
import './App.css';

import Menu from './componentes/menu';
import Topo from './componentes/top';
import Perguntas from './componentes/perguntas';
import Aulas from './componentes/aulas';

function App() {
  return (
    <>
      <Menu></Menu>
      <Topo></Topo>
      <Perguntas></Perguntas>
      <Aulas></Aulas>
    </>
  );
}

export default App;
