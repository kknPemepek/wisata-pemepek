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
        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/pindah-alam" element={<PindahAlam />} />
        <Route path="/lembah-datu" element={<LembahDatu />} />
        <Route path="/wisata" element={<Wisata />} />
        <Route path="/wisata-kelicung" element={<WisataKelicung />} />
      </Routes>
    </div>
  );
};

export default App;
