import ReactGA from 'react-ga4';

// Inicializar Google Analytics
export const initGA = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  const isProduction = import.meta.env.PROD;
  const consent = typeof window !== 'undefined' ? localStorage.getItem('cookieConsent') : null;
  
  if (measurementId && isProduction && consent === 'accepted') {
    ReactGA.initialize(measurementId);
    console.log('Google Analytics inicializado con ID:', measurementId);
  }
};

// Registrar vista de página
export const logPageView = (path) => {
  const isProduction = import.meta.env.PROD;
  const consent = typeof window !== 'undefined' ? localStorage.getItem('cookieConsent') : null;
  
  if (isProduction && consent === 'accepted') {
    ReactGA.send({ hitType: "pageview", page: path });
  }
};

// Registrar evento personalizado
export const logEvent = (category, action, label) => {
  const isProduction = import.meta.env.PROD;
  const consent = typeof window !== 'undefined' ? localStorage.getItem('cookieConsent') : null;
  
  if (isProduction && consent === 'accepted') {
    ReactGA.event({
      category: category,
      action: action,
      label: label,
    });
  }
};

// Registrar excepción
export const logException = (description, fatal = false) => {
  const isProduction = import.meta.env.PROD;
  const consent = typeof window !== 'undefined' ? localStorage.getItem('cookieConsent') : null;
  
  if (isProduction && consent === 'accepted') {
    ReactGA.exception({
      description: description,
      fatal: fatal,
    });
  }
};