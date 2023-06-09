import About from './About/About'
import './App.css'
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Lenis from '@studio-freight/lenis';


const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
  direction: 'vertical', 
  gestureDirection: 'vertical', 
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

function App() {
  return (
    <div className="App" id='main-container' data-scroll-container>
      <Navbar />
      <Header />
      <About />
    </div>
  )
}

export default App
