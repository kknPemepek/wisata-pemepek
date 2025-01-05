import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PindahAlamSections from "../components/PAcomp/PindahAlamSections";

const PindahAlam = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* content */}
      <div className="">
        <PindahAlamSections />
      </div>
      <div>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default PindahAlam;
