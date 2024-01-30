import Hero from "../sections/Hero"
import OurCoaches from "../sections/OurCoaches"
import NewCourses from "../sections/NewCourses"
import Learn from "../sections/Learn"
import Explore from "../sections/Explore"
import Comments from "../sections/Comments"
import Elevate from "../sections/Elevate"



import Footer from "../layout/Footer"


const Home = () => {
  return (
    <div className="w-full">
      <Hero />
      <OurCoaches />
      <NewCourses />
      <Learn />
      <Explore />
      <Comments />
      <Elevate />
      <Footer />
    </div>
  )   
}

export default Home