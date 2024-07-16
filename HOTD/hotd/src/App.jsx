import { useState } from "react"
import About from "./Components/About/About"
import ContactUs from "./Components/ContactUs/ContactUs"
import Dragons from "./Components/Dragons/Dragons"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Kingdom from "./Components/Kingdom/Kingdom"
import Members from "./Components/Members/Members"
import Navbar from "./Components/Navbar/Navbar"
import Title from "./Components/Title/Title"
import Video from "./Components/Video/Video"

const App = () => {
  const [playState , setPlayState] = useState(false)
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='The targeryns' title='The golden trio' />
        <Members />
        <About setPlayState={setPlayState}/>
        <Title subtitle='the fury of the house' title='The Dragons' />
        <Dragons />
        <Title subtitle='The kingdom' title='The Dragonstone' />
        <Kingdom />
        <Title subtitle='it time to meet True dragon Blood' title='Call the Dragon' />
        <ContactUs />
        <Footer />
      </div>
      <Video playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App