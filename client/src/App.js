import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Enhanced Styles
import './styles/glassmorphism.css';

// Components
import Navbar from './components/Navbar/Navbar';
import HeroStunning from './components/Hero/HeroStunning';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import LoadingScreenUltra from './components/LoadingScreen/LoadingScreenUltra';
import UltraBackground from './components/UltraBackground/UltraBackground';
import ScrollProgressIndicator from './components/ScrollProgressIndicator/ScrollProgressIndicator';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS with enhanced settings
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 100,
    });

    // Enhanced loading experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreenUltra />;
  }

  return (
    <div className="App">
      <ScrollProgressIndicator />
      <UltraBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroStunning />
            <About />
            <Projects />
            <Skills />
            <Contact />
          </>
        } />
      </Routes>
      <Footer />
      <ScrollToTop />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        toastStyle={{
          background: 'rgba(15, 23, 42, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(102, 126, 234, 0.3)',
        }}
      />
    </div>
  );
}

export default App;
