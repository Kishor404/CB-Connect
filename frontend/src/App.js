import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";

import Home from "./Home.js";
import Interact from "./Interact.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="Pages">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/Interact" element={<Interact/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
