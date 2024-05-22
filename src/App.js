import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu/Menu';
import HeroCarousel from './components/Hero/Hero';
import Rail from './components/Rail/Rail';
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import UserAccount from './components/UserAccount/UserAccount'; 
import Product from './components/Product/Product'; 
import data from './data/rails.json';

const App = () => {
  const [rails, setRails] = useState([]);
  const [hero, setHero] = useState(null);

  useEffect(() => {
    setRails(data.rails);
    setHero(data.hero);
  }, []);

  return (
    <Router>
      <div className="app bg-black min-h-screen text-white">
        <Menu />
        <Routes>
          <Route path="/" element={
            <>
              {hero && <HeroCarousel hero={hero} />}
              <div className="body p-6">
                {rails.map((rail, index) => (
                  <Rail key={index} title={rail.title} items={rail.items} />
                ))}
              </div>
            </>
          } />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/account" element={<UserAccount />} /> 
          <Route path="/product" element={<Product />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
