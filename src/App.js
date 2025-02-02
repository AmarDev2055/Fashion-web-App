import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import About from "./routes/About";
import Ono from "./routes/Ono";
import ScrollToTopButton from "./components/ScrollToTopButton";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Ono" element={<Ono/>}/>
     </Routes>
     <ScrollToTopButton/>
    </div>
  );
  
}

  