import type { NextPage } from 'next'
import HomeComponents from '../components/HomeComponents'
import About from '../components/About'
import FindUs from '../components/FindUs'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="bg-black text-white">
        <HomeComponents />
        <About />
        <FindUs />
        <Menu />
        <Footer />
      </div>
    </>
  )
}

export default Home