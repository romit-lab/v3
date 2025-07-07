import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import JobOpportunities from './components/JobOpportunities';
import CommunityPrograms from './components/CommunityPrograms';
import FoodCulture from './components/FoodCulture';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <Hero />
      <About />
      <Menu />
      <JobOpportunities />
      <CommunityPrograms />
      <FoodCulture />
      <Architecture />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;