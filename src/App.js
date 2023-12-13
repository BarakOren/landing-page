import './App.css';
import Top from './sections/Top';
import About from './sections/About';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
    <p className='icon'>Art Action</p>
    <Top />
    <About />
    <Gallery />
    <Contact />
    <div className='bottom'>Art Action</div>
    </div>
  );
}

export default App;
