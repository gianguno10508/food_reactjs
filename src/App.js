import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Pages/Home";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
