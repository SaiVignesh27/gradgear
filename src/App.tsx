import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Documentation from './components/Documentation';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Documentation />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;