import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Inicio from './screens/Inicio'
import QuienesSomosScreen from './screens/QuienesSomosScreen'
import ContactoScreen from './screens/ContactoScreen'
import ServiciosScreen from './screens/ServiciosScreen'
import { HashRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
    <Navbar/>
      <div className="App">
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/quienes-somos" element={<QuienesSomosScreen/>}/>
            <Route path="/contacto" element={<ContactoScreen/>}/>
            <Route path="/servicios" element={<ServiciosScreen/>}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App