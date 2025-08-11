import React from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import Button from '../common/Button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-primary-blue to-primary-blue-dark text-white py-20 md:py-28">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transparencia Conectada
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Un puente entre instituciones y ciudadanía a través del diseño estratégico y la tecnología accesible
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/funcionarios">
              <Button size="large" className="shadow-lg">
                Conoce la propuesta
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;
