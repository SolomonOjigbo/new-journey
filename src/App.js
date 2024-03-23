import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllBingos from "./pages/AllBingos";
import Play from "./pages/Play";
import Association from "./pages/Association";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-bingos" element={<AllBingos />} />
        <Route path="/play" element={<Play />} />
        <Route path="/association" element={<Association />} />
      
      </Routes>
    </Router>
  );
}

export default App;
