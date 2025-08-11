import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import Button from '../common/Button';

const FounderProfile = () => {
  return (
    <section className="section bg-light-gray">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <motion.div 
                className="md:w-1/3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="h-full bg-primary-blue p-8 text-white flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white mb-6">
                    <img 
                      src="/images/estefania-perez.jpg" 
                      alt="Estefanía Pérez Vázquez" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Estefanía Pérez Vázquez</h3>
                  <p className="text-blue-100 mb-6">Fundadora de Fanny Design Style</p>
                  <Link to="/funcionarios/estefania-perez-vazquez">
                    <Button variant="secondary" className="text-primary-blue border-white hover:bg-white">
                      Ver portafolio
                    </Button>
                  </Link>
                </div>
              </motion.div>
              
              <motion.div 
                className="md:w-2/3 p-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary-blue">Sobre la fundadora</h3>
                <p className="text-gray-600 mb-6">
                  Diseñadora estratégica y gestora de innovación cívica con más de 8 años de experiencia. 
                  Fundadora de Fanny Design Style y creadora de Transparencia Conectada, una plataforma que 
                  impulsa la transparencia institucional desde la ciudadanía.
                </p>
                <p className="text-gray-600 mb-6">
                  Su enfoque combina estética, funcionalidad y participación social para crear soluciones 
                  que responden a las necesidades reales de las comunidades. Ha colaborado con diversas 
                  instituciones gubernamentales y organizaciones de la sociedad civil.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-primary-blue">Formación académica</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Maestría en Diseño Estratégico</li>
                    <li>• Especialización en Innovación Cívica</li>
                    <li>• Licenciatura en Diseño Gráfico</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary-blue">Reconocimientos</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Premio Nacional de Diseño Cívico 2023</li>
                    <li>• Reconocimiento a la Innovación Gubernamental 2022</li>
                    <li>• Beca para Líderes Sociales 2021</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderProfile;
