import Banner from '../components/Banner'
import Conditions from '../components/Conditions'
import Course from '../components/Course'
import FloatingButtons from '../components/FloatingButtons'
import Footer from '../components/Footer'
import Goals from '../components/Goals'
import Header from '../components/Header'
import Intro from '../components/Intro'

const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
      <Intro/>
      <Course/>
      <Goals/>
      <Conditions/>
      <Footer/>
      <FloatingButtons/>
    </>
  )
}

export default Home
