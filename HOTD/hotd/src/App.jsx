import About from "./Components/About/About"
import Dragons from "./Components/Dragons/Dragons"
import Hero from "./Components/Hero/Hero"
import Kingdom from "./Components/Kingdom/Kingdom"
import Members from "./Components/Members/Members"
import Navbar from "./Components/Navbar/Navbar"
import Title from "./Components/Title/Title"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='The targeryns' title='The golden trio'/>
        <Members/>
        <About/>
        <Title subtitle='the fury of the house' title='The Dragons'/>
        <Dragons/>
        <Title subtitle='The kingdom' title='The Dragonstone'/>
        <Kingdom/>
        </div>
    </div>
  )
}

export default App