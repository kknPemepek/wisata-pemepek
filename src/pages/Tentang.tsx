import AboutSections from "../components/AboutSections"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"


const Tentang = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* content */}
      <div className="">
       <AboutSections/>
      </div>
      <div>
        <footer className="">
          <Footer/>
        </footer>
      </div>
    </div>
  )
}

export default Tentang