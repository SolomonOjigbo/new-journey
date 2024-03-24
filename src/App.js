import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AllBingos from "./pages/AllBingos";
import Play from "./pages/Play";
import Association from "./pages/Association";
import Navbar from "./components/Navbar";
import PageLayout from "./layouts/PageLayout";

function App() {
  return (
    <Router>
      <PageLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-bingos" element={<AllBingos />} />
        <Route path="/play" element={<Play />} />
        <Route path="/association" element={<Association />} />
      
      </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
