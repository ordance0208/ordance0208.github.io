import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact/';
import Footer from './components/Footer';

function App() {
  return (
    <div className='max-w-[100vw] overflow-x-hidden'>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
