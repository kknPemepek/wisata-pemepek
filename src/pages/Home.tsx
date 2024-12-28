
import Footer from "../components/Footer";
import HeroSections from "../components/HeroSections";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* content */}
      <div className="">
        <HeroSections />
      </div>
      <div>
        <footer className="">
          <Footer/>
        </footer>
      </div>
    </div>
  );
};

export default Home;
