import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Services from './component/Services';
import Product from './component/Product';
import Portfolio from './component/Portfolio';
import Developerdemand from './component/Developerdemand';
import Footer from './component/Footer';
import Signup from './component/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Product/>
        <Services/>
        <Portfolio/>
        <Developerdemand/>
        <Signup/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
