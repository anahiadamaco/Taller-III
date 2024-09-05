import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Peluqueria from './pages/Peluqueria';
import Registro from './pages/Registro';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/' element={<Peluqueria/>}/>
        <Route path='/Registro' element={<Registro/>}/>
      </Routes>

    </BrowserRouter>

    
    

  );
}

export default App;
