import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { initGA, logPageView } from './utils/analytics';

import HomePage from './pages/HomePage';
import OfficialsPage from './pages/OfficialsPage';
import OfficialProfile from './components/officials/OfficialProfile';
import NotFound from './pages/NotFound';
import ThankYou from './pages/ThankYou';
import CookieBanner from './components/common/CookieBanner';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    // Inicializar Google Analytics al cargar la aplicación
    initGA();
  }, []);

  useEffect(() => {
    // Registrar vista de página cuando cambie la ruta
    logPageView(location.pathname + location.search);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/funcionarios" element={<OfficialsPage />} />
        <Route path="/funcionarios/:id" element={<OfficialProfile />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;