import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import {Authorize} from './Routers/Authorize'
import Login from './components/Login'
import PrivateRoutes from './Routers/PrivateRoutes'
import './scss/components/App.scss'
import { Authorize2 } from './Routers/Authorize2'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navigate replace to="/login"/>}/> 
          <Route path='/login' element={<Authorize><Login/></Authorize>}/>
          <Route path='/*' element={<Authorize2><PrivateRoutes/></Authorize2>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
