import Footer from "../components/Footer"
import LembahDatuSection from "../components/LembahDatuSection"
import Navbar from "../components/Navbar"


const LembahDatu = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="">
        <Navbar />
      </div>
      {/* content */}
      <div className="">
        <LembahDatuSection/>
      </div>
      <div>
        <footer className="">
          <Footer />
        </footer>
      </div>
    </div>
  )
}

export default LembahDatu