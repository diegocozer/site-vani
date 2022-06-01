import { Route, Routes } from "react-router-dom";
import "./App.css";
import Fotos from "./components/views/Fotos";
import Home from "./components/views/Home";


function App() {
  return (
    <div className="App">
 <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/home' element={<Home/>}/>
   <Route path='/fotos' element={<Fotos/>}/>
   <Route path='/fotos/casamento/:id' element={<Fotos/>}/>
 </Routes>
    </div>
  );
}

export default App;
