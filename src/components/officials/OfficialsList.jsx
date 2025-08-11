import React, { useState, useEffect } from 'react';

import OfficialCard from './OfficialCard';
import SearchFilter from './SearchFilter';

const OfficialsList = () => {
  const [officials, setOfficials] = useState([]);
  const [filteredOfficials, setFilteredOfficials] = useState([]);
  const [filters, setFilters] = useState({
    dependency: '',
    position: '',
    keyword: ''
  });

  // Cargar datos de funcionarios
  useEffect(() => {
    const fetchOfficials = async () => {
      try {
        const response = await fetch('/data/officials.json');
        const data = await response.json();
        setOfficials(data);
        setFilteredOfficials(data);
      } catch (error) {
        console.error('Error al cargar los funcionarios:', error);
      }
    };

    fetchOfficials();
  }, []);

  // Aplicar filtros
  useEffect(() => {
    let result = officials;

    if (filters.dependency) {
      result = result.filter(official => 
        official.dependency.toLowerCase().includes(filters.dependency.toLowerCase())
      );
    }

    if (filters.position) {
      result = result.filter(official => 
        official.position.toLowerCase().includes(filters.position.toLowerCase())
      );
    }

    if (filters.keyword) {
      const keyword = filters.keyword.toLowerCase();
      result = result.filter(official => 
        official.name.toLowerCase().includes(keyword) ||
        official.description.toLowerCase().includes(keyword) ||
        official.skills.some(skill => skill.toLowerCase().includes(keyword))
      );
    }

    setFilteredOfficials(result);
  }, [officials, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <SearchFilter onFilterChange={handleFilterChange} />
      
      {filteredOfficials.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600">No se encontraron funcionarios que coincidan con los filtros aplicados.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredOfficials.map((official, index) => (
            <motion.div
              key={official.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <OfficialCard official={official} />
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OfficialsList;