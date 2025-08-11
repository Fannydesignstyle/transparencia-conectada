import React from 'react';
import { motion } from 'framer-motion';


const ProjectGoals = () => {
  const goals = [
    {
      title: "Transparencia institucional",
      description: "Facilitar el acceso a información clara y verificable sobre el funcionamiento de las instituciones."
    },
    {
      title: "Participación ciudadana",
      description: "Crear canales efectivos para que la sociedad pueda involucrarse en los procesos de toma de decisiones."
    },
    {
      title: "Innovación cívica",
      description: "Desarrollar soluciones tecnológicas que respondan a las necesidades reales de la comunidad."
    },
    {
      title: "Cultura de la rendición de cuentas",
      description: "Promover prácticas de responsabilidad y transparencia en todos los niveles de gobierno."
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Objetivos del Proyecto</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trabajamos para construir una sociedad más informada, participativa y transparente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-blue"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary-blue">{goal.title}</h3>
              <p className="text-gray-600">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGoals;
