import './App.css'
import Body from './components/body/Body'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <div className="wrapper">     
        <Header/>
        <Body>
          <h3>Home page</h3>
        </Body>
        <Footer/>
      </div>
    </>
  )
}

export default App
