import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import './App.css';
import Homeimage from './components/Homeimage';
import Benefit from './components/Benefit';
import Location from './components/Location';

function App() {
  return (
    <div>
       <Navbar/>

       <div className='heroimage'>
       <HeroSection/>
       <div className='image'>
       <Homeimage/>
       </div>
       </div>

       <Benefit/>
       <Location/>

       </div>
  );
}

export default App;
