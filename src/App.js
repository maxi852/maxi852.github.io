
import './App.css';
import NavBar from './components/NavBar';
import About from './screens/About';
import Introduction from './screens/Introduction';
import {RrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
    <NavBar></NavBar>
    <Introduction></Introduction>
    <About></About>
    </div>
  );
}

export default App;
