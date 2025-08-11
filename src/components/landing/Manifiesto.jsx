import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { logEvent } from '../../utils/analytics';

const Manifesto = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  
  const handleDownload = () => {
    setIsDownloading(true);
    
    // Registrar evento de descarga
    logEvent('Descargas', 'Manifiesto', 'Manifiesto Completo');
    
    // Simulación de descarga
    setTimeout(() => {
      setIsDownloading(false);
      alert('Descarga iniciada. En un entorno real, aquí se descargaría el archivo.');
    }, 1500);
  };

  const manifestoPoints = [
    "Creemos en el poder del diseño para transformar la relación entre instituciones y ciudadanos.",
    "La transparencia no es opcional, es un derecho fundamental que fortalece nuestra democracia.",
    "La tecnología debe ser un puente, no una barrera, entre el gobierno y la sociedad.",
    "La participación ciudadana activa es la base de una gestión pública efectiva y legítima.",
    "La información clara y accesible empodera a las personas para tomar decisiones informadas."
  ];

  return (
    <section className="section bg-primary-blue text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Nuestro Manifiesto
          </motion.h2>
          
          <div className="space-y-8 mb-12">
            {manifestoPoints.map((point, index) => (
              <motion.blockquote
                key={index}
                className="text-xl md:text-2xl font-light italic"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                "{point}"
              </motion.blockquote>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button 
              variant="secondary" 
              size="large"
              onClick={handleDownload}
              disabled={isDownloading}
              className="text-primary-blue border-white hover:bg-white hover:text-primary-blue"
            >
              {isDownloading ? 'Descargando...' : 'Descargar manifiesto completo'}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Manifesto;