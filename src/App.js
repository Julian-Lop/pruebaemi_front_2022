import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import Login from './components/Login'
import Perfil from './components/Perfil'
import './scss/components/App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate replace to="/login"/>}/> 
          <Route path='/login' element={<Login/>}/>
          <Route path='/perfil' element={<Perfil/>}/>
          <Route path='/fotos' element={<div> <h1>Fotos</h1></div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
