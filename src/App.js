import logo from './logo.svg';
import './App.css';
import CircleProp from './CircleProp.js'
import NavBar from './NavBar';

function App() {
  return (
    <>
     <NavBar/>
     {CircleProp()}
    </>
      
  );
}

export default App;