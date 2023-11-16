import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Inicio from './screens/Inicio'
import QuienesSomosScreen from './screens/QuienesSomosScreen'
import ContactoScreen from './screens/ContactoScreen'
import Navbar from './components/Navbar/Navbar'
import Equipo from './components/Equipo/Equipo';
import MisionVision from './components/MisionVision/MisionVision';
import Servicios from './components/Servicios/Servicios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/quienes-somos" element={<QuienesSomosScreen/>}/>
          <Route path="/contacto" element={<ContactoScreen/>}/>
          <Route path="/quienes-somos/equipo" element={<Equipo/>}/>
          <Route path="/quienes-somos/mision-vision" element={<MisionVision/>}/>
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/contacto" element={<ContactoScreen/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </>
  )
}

export default App