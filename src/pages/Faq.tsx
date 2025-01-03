import FaqSections from "../components/FaqSections";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Faq = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* content */}
      <div className="">
        <FaqSections />
      </div>
      <div>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Faq;
