import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { logEvent } from '../../utils/analytics';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contacto" className="section bg-light-gray">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Contacto</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ¿Interesado en nuestra propuesta? Contáctanos para más información o solicita una presentación personalizada.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
              <motion.div 
                className="md:w-1/2 p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6 text-primary-blue">Envíanos un mensaje</h3>
                
                <form name="contact" method="POST" data-netlify="true" action="/thank-you">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Nombre completo</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Asunto</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Mensaje</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="large"
                    className="w-full"
                  >
                    Enviar mensaje
                  </Button>
                </form>
              </motion.div>
              
              <motion.div 
                className="md:w-1/2 bg-primary-blue text-white p-8 flex flex-col justify-between"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-medium">Dirección</p>
                        <p className="text-blue-100">Oaxaca de Juárez, OAX, México</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-medium">Correo electrónico</p>
                        <p className="text-blue-100">contacto@transparenciaconectada.org</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-medium mb-4">QR Institucional</h4>
                    <div className="bg-white p-4 rounded-lg inline-block">
                      <img
                        src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://transparencia-conectada.vercel.app"
                        alt="Código QR Institucional"
                        className="w-40 h-40"
                      />
                    </div>
                    <p className="mt-3 text-blue-100 text-sm">Escanea para acceder rápidamente a nuestra plataforma</p>
                  </div>
                </div>
                
                <Button 
                  variant="secondary" 
                  size="large"
                  className="text-primary-blue border-white hover:bg-white"
                >
                  Solicita presentación personalizada
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;