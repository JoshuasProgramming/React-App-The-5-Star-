import React from 'react';
import TopSection from './components/TopSection.js';
import AboutSection from './components/AboutSection.js';
import DishesSection from './components/DishesSection.js';
import LocationSection from './components/LocationSection.js';
import ContactSection from './components/ContactSection.js';

function App() {
  return (
    /**
     * App contains the 'TopSection', 'AboutSection', 'DishesSection' 
     * 'LocationSection' and 'ContactSection' components
     */
    <div className="App">
      <TopSection />
      <AboutSection />
      <DishesSection />
      <LocationSection />
      <ContactSection />
    </div>
  );
}

export default App;
