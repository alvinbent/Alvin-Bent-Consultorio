import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Especialidades from './pages/Especialidades';
import Contacto from './pages/Contacto';
import Educacion from './pages/Educacion';
import Timeline from './pages/Timeline';
import PatientJourney from './pages/PatientJourney';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="especialidades" element={<Especialidades />} />
          <Route path="educacion" element={<Educacion />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="patient-journey" element={<PatientJourney />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
