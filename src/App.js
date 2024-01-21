
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Clothes from './components/Clothes';
import Details from './components/Details';
// import Clothes from './components/Clothes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Navbar />
     
      <div>
        <Routes>
        <Route path="/" element={<Clothes/>} />
        <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Details/:id" element={<Details/>} />

          {/* <Route path="./components/Clothes" >
         <Clothes/>
        </Route> */}
        
      
          {/* Other routes go here */}
        </Routes>
      </div >
      
    </Router>
    // <div>
    //   <Navbar/>
    //   <Clothes/>
    // </div>
        
  );
      
}

export default App;
