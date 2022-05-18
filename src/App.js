import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import {Authorize} from './Routers/Authorize'
import Login from './components/Login'
import PrivateRoutes from './Routers/PrivateRoutes'
import './scss/components/App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate replace to="/login"/>}/> 
          <Route path='/login' element={<Authorize><Login/></Authorize>}/>
          <Route path='/*' element={<PrivateRoutes/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
