import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './screens/Home';
import About from './screens/About';
import Products from './screens/Products';
import Services from './screens/Services';
import Contact from './screens/Contact';
import Consultancy from './screens/Consultancy';
import Blogs from './screens/Blogs';
import OurWork from './screens/OurWork';
import ProjectDetail from './screens/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import OurJourney from './screens/OurJourney';
import OurTeam from './screens/OurTeam';
import Application from './screens/Application';
import TransformingUrbanSpaces from './screens/TransformingUrbanSpaces';



function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about/ourteam' element={<OurTeam />} />
        <Route path='/about/ourjourney' element={<OurJourney />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/ourwork' element={<OurWork />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/consultancy' element={<Consultancy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/application' element={<Application />} />
        <Route path='/transforming-urban-sapces' element={<TransformingUrbanSpaces />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
