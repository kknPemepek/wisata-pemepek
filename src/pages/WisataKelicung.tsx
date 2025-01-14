import Footer from "../components/Footer"
import KelicungSection from "../components/KelicungSection"
import Navbar from "../components/Navbar"


const WisataKelicung = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* content */}
      <div className="">
        <KelicungSection/>
      </div>
      <div>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default WisataKelicung
