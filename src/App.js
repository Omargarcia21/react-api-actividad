import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Inicio from './components/inicio';
import Personaje from './components/personaje';


function App() {
  return (
    <div className="container">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Inicio></Inicio>}></Route>

          <Route path='/personaje/:id' element={<Personaje></Personaje>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
