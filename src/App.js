import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './components/CombinedSections.scss'; // Unified styling for all sections

// Lazy loading components
const Portfolio = lazy(() => import('./components/Portfolio'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const CombinedSections = lazy(() => import('./components/CombinedSections'));
const VideoSection = lazy(() => import('./components/VideoSection'));

function App() {
  const artworks = [
    { id: 1, title: 'Lucrare 1', description: 'Descriere pentru lucrarea 1', image: 'link-imagine-1.jpg', category: 'digital' },
    { id: 2, title: 'Lucrare 2', description: 'Descriere pentru lucrarea 2', image: 'link-imagine-2.jpg', category: 'traditional' },
    { id: 3, title: 'Lucrare 3', description: 'Descriere pentru lucrarea 3', image: 'link-imagine-3.jpg', category: '3d' },
  ];

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Homepage */}
            <Route 
              path="/" 
              element={
                <>
                  <Portfolio artworks={artworks} />
                  <VideoSection />
                  <CombinedSections />
                </>
              } 
            />

            {/* Other Pages */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
