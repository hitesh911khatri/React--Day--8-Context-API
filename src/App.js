
import './App.css';
import Products from './Components/Products';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import NavBar from './Components/NavBar';




function App() {

  return (
    <div className="App">
 <NavBar/>
      <Routes>
      <Route path="/" Component={Home} />
      <Route path="/products" Component={Products} />

     
      </Routes>


    </div>
  );
}

export default App;
