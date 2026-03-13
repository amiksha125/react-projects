import "./App.css"
import Navigation from './components/Navigation.jsx'
import HeroSection from "./components/Hero.jsx"


const App = () => {

  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  )
}

// it needs to be mounted in main.jsx , export 
export default App;