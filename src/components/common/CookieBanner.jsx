import React, { useState, useEffect } from 'react';
import { logEvent } from '../../utils/analytics';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    logEvent('Privacidad', 'Consentimiento de Cookies', 'Aceptado');
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    logEvent('Privacidad', 'Consentimiento de Cookies', 'Rechazado');
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <p className="mb-4 md:mb-0">
          Usamos cookies para mejorar tu experiencia en nuestro sitio. 
          Al continuar navegando, aceptas nuestra política de privacidad.
        </p>
        <div className="flex space-x-4">
          <button 
            onClick={declineCookies}
            className="px-4 py-2 border border-white rounded hover:bg-gray-700"
          >
            Rechazar
          </button>
          <button 
            onClick={acceptCookies}
            className="px-4 py-2 bg-primary-blue rounded hover:bg-primary-blue-light"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;