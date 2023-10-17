
import Cinema from './components/Cinema'
import Esportes from './components/Esportes'
import Mundo from './components/Mundo'
import Musica from './components/Musica'
import Turismo from './components/Turismo'

function App() {

  return (
    <div className="total">
      <h1>Jornal Fiap</h1>
      <Esportes/>
      <Cinema/>
      <Musica/>
      <Mundo/>
      <Turismo/>
    </div>
  )
}

export default App
