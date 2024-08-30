import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import { AuthProvider } from './context/AuthContext'
import { CharacterProvider } from './context/CharacterContext'

function App() {

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <CharacterProvider>
            <Router/>
          </CharacterProvider>
        </AuthProvider>   
      </BrowserRouter>
    </>
  )
}

export default App
