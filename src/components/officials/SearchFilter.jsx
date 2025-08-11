import React, { useState, useEffect } from 'react';


const SearchFilter = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    dependency: '',
    position: '',
    keyword: ''
  });
  
  const [dependencies, setDependencies] = useState([]);
  const [positions, setPositions] = useState([]);

  // Cargar opciones para filtros
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const response = await fetch('/data/officials.json');
        const officials = await response.json();
        
        // Extraer dependencias únicas
        const uniqueDependencies = [...new Set(officials.map(o => o.dependency))];
        setDependencies(uniqueDependencies);
        
        // Extraer posiciones únicas
        const uniquePositions = [...new Set(officials.map(o => o.position))];
        setPositions(uniquePositions);
      } catch (error) {
        console.error('Error al cargar opciones de filtro:', error);
      }
    };
    
    fetchFilterOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = {
      ...filters,
      [name]: value
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      dependency: '',
      position: '',
      keyword: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <motion.div 
      className="bg-white p-6 rounded-lg shadow-sm mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label htmlFor="dependency" className="block text-sm font-medium text-gray-700 mb-1">
            Dependencia
          </label>
          <select
            id="dependency"
            name="dependency"
            value={filters.dependency}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          >
            <option value="">Todas las dependencias</option>
            {dependencies.map((dep, index) => (
              <option key={index} value={dep}>{dep}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
            Cargo
          </label>
          <select
            id="position"
            name="position"
            value={filters.position}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          >
            <option value="">Todos los cargos</option>
            {positions.map((pos, index) => (
              <option key={index} value={pos}>{pos}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="keyword" className="block text-sm font-medium text-gray-700 mb-1">
            Buscar por palabra clave
          </label>
          <input
            type="text"
            id="keyword"
            name="keyword"
            value={filters.keyword}
            onChange={handleChange}
            placeholder="Nombre, habilidad..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue"
          />
        </div>
        
        <div className="flex items-end">
          <button
            type="button"
            onClick={resetFilters}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchFilter;