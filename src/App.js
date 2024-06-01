import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Introduction from './components/Introduction';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import OurProjects from './components/OurProjects';
import ExpertsGrowth from './components/ExpertsGrowth';
import CurrentFeedback from './components/CurrentFeedback';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Introduction />
      <Services />
      <WhyChooseUs />
      <OurProjects />
      <ExpertsGrowth />
      <CurrentFeedback />
      <Footer />
    </div>
  );
}

export default App;
