import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../common/Card';
import Button from '../common/Button';
import QRCode from 'qrcode.react';
import { logEvent } from '../../utils/analytics';

const OfficialCard = ({ official }) => {
  const handleViewProfile = () => {
    logEvent('Navegación', 'Ver Perfil', official.name);
  };

  return (
    <Card hover className="h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
          <img 
            src={official.photo} 
            alt={official.name} 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">{official.name}</h3>
          <p className="text-gray-600 text-sm">{official.position}</p>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-600 text-sm mb-1">
          <span className="font-medium">Dependencia:</span> {official.dependency}
        </p>
        <p className="text-gray-600 text-sm">
          <span className="font-medium">Ubicación:</span> {official.location}
        </p>
      </div>
      
      <p className="text-gray-700 mb-6 flex-grow">
        {official.description}
      </p>
      
      <div className="flex justify-between items-center">
        <Link to={`/funcionarios/${official.id}`} onClick={handleViewProfile}>
          <Button size="small">Ver perfil completo</Button>
        </Link>
        
        <div className="w-10 h-10">
          <QRCode 
            value={`${window.location.origin}/funcionarios/${official.id}`}
            size={40}
          />
        </div>
      </div>
    </Card>
  );
};

export default OfficialCard;