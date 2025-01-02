import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Tentang from "./pages/Tentang";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/wisata-pemepek/" element={<Home />} />
        <Route path="/wisata-pemepek/tentang" element={<Tentang />} />
      </Routes>
    </div>
  );
};

export default App;
