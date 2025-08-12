import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';


const MetricsSection = () => {
  const [metrics, setMetrics] = useState({
    visitors: 0,
    profiles: 0,
    downloads: 0,
    satisfaction: 0
  });

  // Simulación de métricas en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        visitors: prev.visitors + Math.floor(Math.random() * 5),
        profiles: prev.profiles + (Math.random() > 0.9 ? 1 : 0),
        downloads: prev.downloads + (Math.random() > 0.8 ? 1 : 0),
        satisfaction: Math.min(100, prev.satisfaction + (Math.random() > 0.95 ? 1 : 0))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const metricCards = [
    {
      title: "Visitantes",
      value: metrics.visitors,
      suffix: "",
      description: "Usuarios en la plataforma este mes"
    },
    {
      title: "Perfiles activos",
      value: metrics.profiles,
      suffix: "",
      description: "Funcionarios con ficha pública"
    },
    {
      title: "Descargas",
      value: metrics.downloads,
      suffix: "",
      description: "Fichas institucionales descargadas"
    },
    {
      title: "Satisfacción",
      value: metrics.satisfaction,
      suffix: "%",
      description: "Valoración promedio de usuarios"
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Métricas de Impacto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visualizamos el potencial de la plataforma para medir la transparencia y la participación ciudadana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricCards.map((metric, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-medium text-gray-600 mb-2">{metric.title}</h3>
              <div className="text-4xl font-bold text-primary-blue mb-2">
                {metric.value}{metric.suffix}
              </div>
              <p className="text-gray-600 text-sm">{metric.description}</p>
              <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary-blue"
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.title === "Satisfacción" ? metric.value : Math.min(100, metric.value / 10)}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>Los datos mostrados son una simulación para demostrar el potencial de la plataforma.</p>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
