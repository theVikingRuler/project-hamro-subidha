import { AppHeader } from './components/app/AppHeader';
import { AppFooter } from './components/app/AppFooter';
import { Route, Router, Routes } from 'react-router-dom';

import { Benefits } from './pages/Benefits';
import { Home } from './pages/Home';
import { EligibilityChecker } from './pages/EligibilityChecker';
import About from './pages/About';
function App() {
  return (
    <>
      <AppHeader />
      <main className='w-full'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/eligibility" element={<EligibilityChecker />} />
          <Route path="/about" element={<About />} />
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
