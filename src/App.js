import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Screen Pages
import Home from './screens/Home';
import About from './screens/About';
import Products from './screens/Products';
import Contact from './screens/Contact';
import Consultancy from './screens/Consultancy';
import OurWork from './screens/OurWork';
import ProjectDetail from './screens/ProjectDetail';
import TransformingUrbanSpaces from './screens/TransformingUrbanSpaces';
import UsedItems from './components/UsedItems';

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/ourwork" element={<OurWork />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/transforming-urban-spaces" element={<TransformingUrbanSpaces />} />
        </Routes>
      </div>
      <UsedItems />
      <Footer />
    </Router>
  );
}

export default App;
