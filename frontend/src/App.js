import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";

import Home from "./Home.js";
import Score from "./Score.js";
import Log from "./Log.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <div className="Pages">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/About" element={<Home/>}/>
            <Route path="/Contact" element={<Home/>}/>
            <Route path="/Score" element={<Score/>}/>
            <Route path="/Login" element={<Log/>}/>
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
