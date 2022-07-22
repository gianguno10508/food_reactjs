import { Routes, Route } from "react-router-dom"
import About from '../About';
import Contact from '../Contact';
import Home from '../Home';
import '../styles/header_styles.css';

function Header() {
    return (
      <div className="header">
        <Routes>
            <Route path="/" element={ <Home/> } />
            <Route path="about" element={ <About/> } />
            <Route path="contact" element={ <Contact/> } />
        </Routes>
        <div className='menu'>
            <ul>
                <li>
                    <a href='test'>Home</a>
                </li>
                <li>
                    <a href='test'>Shop</a>
                </li>
                <li className='logo-page'>
                    <a href='test'>BambooFood</a>
                </li>
                <li>
                    <a href='test'>About us</a>
                </li>
                <li>
                    <a href='test'>Contact us</a>
                </li>
            </ul>
        </div>
        <div className='textBanner'>
            <h2>Delicious</h2>
            <h2>Healthy</h2>
            <h3>Clean and Fresh</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button><a href='test'>Feature Food</a></button>
        </div>
      </div>
    );
}
  
export default Header;