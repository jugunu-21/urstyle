
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import Clothes from './components/Clothes';
import Details from './components/Details';
import Footer from './components/Footer';
//impo import Clothes from './components/Clothes';
import Moredetails from './components/Moredetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (

    <Router>
      <Navbar />
     
      <div className="bg-cover bg-center w-full h-300" >
        <Routes>
        <Route path="/" element={<Clothes/>} />
        <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/details/:upperId/:lowerId" element={<Details />} />
          <Route path="/moredetails/:id/:itemsArrayString" element={<Moredetails/>} />


          {/* <Route path="./components/Clothes" >
         <Clothes/>
        </Route> */}
        
      
          {/* Other routes go here */}
        </Routes>
      </div >
      <Footer />
    </Router>
    // <div>
    //   <Navbar/>
    //   <Clothes/>
    // </div>
        
  );
      
}

export default App;
