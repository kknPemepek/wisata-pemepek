import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Tentang from "./pages/Tentang";
import Faq from "./pages/Faq";
import PindahAlam from "./pages/PindahAlam";
import LembahDatu from "./pages/LembahDatu";
import Wisata from "./pages/Wisata";
import WisataKelicung from "./pages/WisataKelicung";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/wisata-pemepek/" element={<Home />} />
        <Route path="/wisata-pemepek/tentang" element={<Tentang />} />
        <Route path="/wisata-pemepek/faq" element={<Faq />} />
        <Route path="/wisata-pemepek/pindah-alam" element={<PindahAlam />} />
        <Route path="/wisata-pemepek/lembah-datu" element={<LembahDatu />} />
        <Route path="/wisata-pemepek/wisata" element={<Wisata />} />
        <Route path="/wisata-pemepek/wisata-kelicung" element={<WisataKelicung />} />
      </Routes>
    </div>
  );
};

export default App;
