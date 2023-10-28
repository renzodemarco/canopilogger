import './App.css'
import Navbar from './components/Navbar/Navbar'
import Inicio from './screens/Inicio'
import QuienesSomosScreen from './screens/QuienesSomosScreen'
import ServiciosScreen from './screens/ServiciosScreen'

function App() {

  return (
    <div className="App">
        <Navbar></Navbar>
        <Inicio></Inicio>
        <QuienesSomosScreen></QuienesSomosScreen>
        <ServiciosScreen></ServiciosScreen>
    </div>
  )
}

export default App