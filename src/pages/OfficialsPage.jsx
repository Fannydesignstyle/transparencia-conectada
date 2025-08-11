import React from 'react';
import OfficialsList from '../components/officials/OfficialsList';
import Footer from '../components/common/Footer';

const OfficialsPage = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">Fichas Institucionales</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
            Conoce a los funcionarios que forman parte de esta iniciativa de transparencia
          </p>
          <OfficialsList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default OfficialsPage;