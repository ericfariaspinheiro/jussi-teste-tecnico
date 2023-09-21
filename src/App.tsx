import './App.css'
import Header from './components/header/Header'
import HeroBanner from './components/heroBanner/HeroBanner'
import OurSolutions from './components/ourSolutions/OurSolutions'
import JussiSession from './components/jussiSession/JussiSession'
import ContactInfo from './components/contactInfo/ContactInfo'
import Newsletter from './components/newsletter/Newsletter'
import Footer from './components/footer/Footer'
import LogoBar from './components/logoBar/LogoBar'

function App() {

  return (
    <>
      <Header />

      <HeroBanner />
      <LogoBar />
      <OurSolutions />
      <JussiSession />
      <ContactInfo />
      <Newsletter />

      <Footer />
    </>
  )
}

export default App
