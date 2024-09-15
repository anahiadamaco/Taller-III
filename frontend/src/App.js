import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Podologia from '../src/component/pages/Podologia_pm';
import Fonoaudiologiaa from '../src/component/pages/Fonoaudiologia_p';
import KinesiologiaM from '../src/component/pages/Kinesiologia_pm';
import RegistroPersonaMayor from './component/pages/RegistropMayor';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/podologia" element={<Podologia />} />
        <Route path="/fonoaudiologia" element={<Fonoaudiologiaa/>} />
        <Route path="/kinesiologiaM" element={<KinesiologiaM />} />
        <Route path="/registropMayor" element={<RegistroPersonaMayor />} />

      </Routes>
    </Router>
  )
}

export default App