import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate replace to="/login"/>}/> 
          <Route path='/login' element={<div> <h1>Login</h1></div>}/>
          <Route path='/perfil' element={<div> <h1>Perfil</h1></div>}/>
          <Route path='/fotos' element={<div> <h1>Fotos</h1></div>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
