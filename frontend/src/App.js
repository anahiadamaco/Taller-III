import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Podologia from '../src/component/prestador_servicios/Podologia';
import Kinesiologia from '../src/component/prestador_servicios/Kinesiologia';
import Fonoaudiologia from '../src/component/prestador_servicios/Fonoaudiologia';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/podologia" element={<Podologia />} />
        <Route path="/kinesiologia" element={<Kinesiologia />} />
        <Route path="/fonoaudiologia" element={<Fonoaudiologia />} />

      </Routes>
    </Router>
  )
}

export default App