import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import UserJourney from './components/UserJourney';
import RoleDemonstration from './components/RoleDemonstration';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <Features />
      <AboutUs />
      <UserJourney />
      <RoleDemonstration />
      <Contact />
    </div>
  );
}

export default App;