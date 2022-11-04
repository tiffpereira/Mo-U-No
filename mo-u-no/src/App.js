import './App.css';
import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Dictionary from './pages/DefinitionPage'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact path='/' element={<LandingPage/>} />
        <Route exact path='/dictionary' element={<Dictionary/>} />
      </Routes>
      
    </div>
  );
}

export default App;
