import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Taskbar from './components/Taskbar';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import Landing from './components/Landingpage';

function App() {
  return (
  <>
    <Header />
    <Routes>
      <Route path='/' element={ <Landing />} />
      <Route path='/register' element={ <Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Taskbar />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
