import { useEffect } from 'react';
import { AppHeader } from './components/app/AppHeader';
import { AppFooter } from './components/app/AppFooter';
import { Route, Routes, useLocation } from 'react-router-dom';

import { Benefits } from './pages/Benefits';
import { Home } from './pages/Home';
import { EligibilityChecker } from './pages/EligibilityChecker';
import About from './pages/About';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <AppHeader />
      <main className='w-full flex-grow'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/eligibility" element={<EligibilityChecker />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="p-8 text-center text-text-muted">
                404 - Page Not Found
              </div>
            }
          />
        </Routes>
      </main>
      <AppFooter />
    </>
  );
}

export default App;
