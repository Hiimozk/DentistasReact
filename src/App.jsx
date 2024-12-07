import React from "react";
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import { GlobalProvider } from "./Components/utils/global.context.jsx";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Routes/Home"; 
import Detail from "./Routes/Detail"; 
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs"; 







function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App" style={{ backgroundColor: 'var(--background)', color: 'var(--text-color)' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />{/* Ruta para el main/home  */}
            <Route path="/home" element={<Home />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} /> 
            <Route path="/favs" element={<Favs />} />
          </Routes>
          <Footer />
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
