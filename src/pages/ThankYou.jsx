import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-gray">
      <div className="container text-center py-12">
        <h1 className="text-4xl font-bold text-primary-blue mb-4">¡Gracias por tu mensaje!</h1>
        <p className="text-gray-600 text-lg mb-8">Hemos recibido tu información y nos pondremos en contacto contigo pronto.</p>
        <Link to="/">
          <Button size="large">Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
