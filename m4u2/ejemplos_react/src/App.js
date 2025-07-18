import {
  EjemploProps01,
  EjemploProps02,
  EjemploProps03,
  EjemploProps04,
  EjemploProps05
} from './components/props';

import {
  EjemploEstado01
} from './components/estado';

const nombre2 = "Jorge Desde Variable";

const lista = ['manzanas', 'bananas', 'peras', 'uvas', ' mas uvas'];
const mostrarValor = valor => {
  console.log(valor);
};

function App() {
  return (
    <div>
      <h1>Props</h1>
      {/* propiedad simple y reutilizacion */}
      <EjemploProps01 nombre="Jorge PROPIEDAD" />
      <EjemploProps01 nombre={nombre2} />
      <hr />
      {/* pasar referecia a variable como prop */}
      <EjemploProps02 elementos={lista} />
      <hr />
      {/* multiples props y destructuring */}
      <EjemploProps03 titulo="La Noticia" texto="este es el cuerpo este es el cuerpo este es el cuerpo este es el cuerpo " />
      <hr />
      {/* pasar una funcion */}
      <EjemploProps04 cambiaValor={mostrarValor} />
      
      {/* este da error cuando escribimos porque no recibe el manejador */}
      {/* </*EjemploProps04 /> */}
      
      {/*qwqw*/}
      <EjemploProps05 eventoClick={mostrarValor} />

     
      {/* este no da error proque le pusimos la "validacion" de la prop */}
      <EjemploProps05 />
      <h1>Estado</h1>
      <EjemploEstado01 />
    </div>
  );
}

export default App;
