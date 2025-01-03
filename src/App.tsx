import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Faq from "./pages/Faq";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/wisata-pemepek/" element={<Home />} />
        <Route path="/wisata-pemepek/tentang" element={<Tentang />} />
        <Route path="/wisata-pemepek/faq" element={<Faq />} />
      </Routes>
    </div>
  );
};

export default App;
