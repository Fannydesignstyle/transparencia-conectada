import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import QRCode from 'qrcode.react';
import { useReactToPrint } from 'react-to-print';
import Button from '../common/Button';
import { logEvent } from '../../utils/analytics';

const OfficialProfile = () => {
  const { id } = useParams();
  const [official, setOfficial] = useState(null);
  const [loading, setLoading] = useState(true);
  const profileRef = useRef();
  
  useEffect(() => {
    const fetchOfficial = async () => {
      try {
        const response = await fetch('/data/officials.json');
        const officials = await response.json();
        const foundOfficial = officials.find(o => o.id === id);
        
        if (foundOfficial) {
          setOfficial(foundOfficial);
          // Registrar vista de perfil
          logEvent('Navegación', 'Vista Perfil Completo', foundOfficial.name);
        } else {
          console.error('Funcionario no encontrado');
        }
      } catch (error) {
        console.error('Error al cargar los datos del funcionario:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchOfficial();
  }, [id]);
  
  const handlePrint = useReactToPrint({
    content: () => profileRef.current,
    documentTitle: `Ficha-${official?.name.replace(/\s+/g, '-')}`,
    onBeforeGetContent: () => {
      // Registrar evento de descarga de ficha
      logEvent('Descargas', 'Ficha Institucional', official?.name);
    },
  });
  
  if (loading) {
    return (
      <div className="container py-12 flex justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-blue mx-auto mb-4"></div>
          <p>Cargando perfil...</p>
        </div>
      </div>
    );
  }
  
  if (!official) {
    return (
      <div className="container py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Funcionario no encontrado</h2>
          <p className="mb-6">El perfil que buscas no existe o ha sido removido.</p>
          <Link to="/funcionarios">
            <Button>Ver todos los funcionarios</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container py-12">
      <motion.div
        ref={profileRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto"
      >
        <div className="md:flex">
          <div className="md:w-1/3 bg-primary-blue text-white p-8">
            <div className="text-center mb-6">
              <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white mx-auto mb-4">
                <img 
                  src={official.photo} 
                  alt={official.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold">{official.name}</h2>
              <p className="text-blue-100">{official.position}</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <div>
                <p className="text-sm text-blue-200">Dependencia</p>
                <p className="font-medium">{official.dependency}</p>
              </div>
              
              <div>
                <p className="text-sm text-blue-200">Ubicación</p>
                <p className="font-medium">{official.location}</p>
              </div>
              
              <div>
                <p className="text-sm text-blue-200">Última actualización</p>
                <p className="font-medium">{official.lastUpdated}</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-blue-200 mb-3">QR Institucional</p>
              <div className="bg-white p-3 rounded-lg inline-block mb-3">
                <QRCode 
                  value={`${window.location.origin}/funcionarios/${official.id}`}
                  size={120}
                />
              </div>
              <p className="text-xs text-blue-200">Escanea para ver este perfil</p>
            </div>
          </div>
          
          <div className="md:w-2/3 p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary-blue">Perfil profesional</h3>
              <p className="text-gray-700">{official.profile}</p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary-blue">Habilidades destacadas</h3>
              <ul className="space-y-2">
                {official.skills.map((skill, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary-blue">Objetivos actuales</h3>
              <ul className="space-y-2">
                {official.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-blue mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button onClick={handlePrint} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
                Descargar ficha
              </Button>
              
              <Link to="/funcionarios">
                <Button variant="secondary">
                  Ver todos los funcionarios
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OfficialProfile;