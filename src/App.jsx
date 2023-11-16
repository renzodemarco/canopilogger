import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Inicio from './screens/Inicio'
import QuienesSomosScreen from './screens/QuienesSomosScreen'
import ContactoScreen from './screens/ContactoScreen'
import ServiciosScreen from './screens/ServiciosScreen'
import NosotrasScreen from './screens/NosotrasScreen'
import EquipoScreen from './screens/EquipoScreen';
import MisionVisionScreen from './screens/MisionVisionScreen';
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
          <Route path="/quienes-somos/sobre-nosotras" element={<NosotrasScreen/>}/>
          <Route path="/quienes-somos/equipo" element={<EquipoScreen/>}/>
          <Route path="/quienes-somos/mision-vision" element={<MisionVisionScreen/>}/>
          <Route path="/servicios" element={<ServiciosScreen/>}/>
          <Route path="/contacto" element={<ContactoScreen/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </>
  )
}

export default App