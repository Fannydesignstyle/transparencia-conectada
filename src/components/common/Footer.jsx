import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Transparencia Conectada</h3>
            <p className="text-blue-100">
              Un puente entre instituciones y ciudadanía a través del diseño estratégico y la tecnología accesible.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-blue-100 hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/funcionarios" className="text-blue-100 hover:text-white transition">
                  Fichas Institucionales
                </Link>
              </li>
              <li>
                <a href="#contacto" className="text-blue-100 hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contacto</h4>
            <address className="not-italic text-blue-100">
              <p>Oaxaca de Juárez, OAX, México</p>
              <p className="mt-2">contacto@transparenciaconectada.org</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; {new Date().getFullYear()} Transparencia Conectada. Todos los derechos reservados.</p>
          <p className="mt-2">Desarrollado por Fanny Design Style</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;