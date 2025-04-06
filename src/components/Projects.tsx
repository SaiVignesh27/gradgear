import React from 'react';
import { Code, Brain, Database, RefreshCw, Cpu, Box } from 'lucide-react';

const projectTypes = [
  {
    title: 'Full Stack Application',
    icon: <Code className="h-6 w-6" />,
    description: 'Frontend + Backend',
    price: '₹1499 – ₹1999',
  },
  {
    title: 'Full Stack + AI',
    icon: <Brain className="h-6 w-6" />,
    description: 'Web App + ML Integration',
    price: '₹2999',
  },
  {
    title: 'Full Stack + AI + Blockchain',
    icon: <Box className="h-6 w-6" />,
    description: 'Web + AI + Smart Contracts',
    price: '₹3999',
  },
  {
    title: 'Backend Only Support',
    icon: <Database className="h-6 w-6" />,
    description: 'You provide frontend, we build backend',
    price: '₹1299',
  },
  {
    title: 'Project Upgrade',
    icon: <RefreshCw className="h-6 w-6" />,
    description: 'UI fix + module addition & optimization',
    price: '₹1099',
  },
  {
    title: 'AI Only Project',
    icon: <Brain className="h-6 w-6" />,
    description: 'Jupyter Notebook + Output',
    price: '₹1499',
  },
  {
    title: 'Blockchain Only Project',
    icon: <Cpu className="h-6 w-6" />,
    description: 'Smart Contracts',
    price: '₹1999',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Project Types & Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Choose the perfect package for your final year project
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectTypes.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <div className="p-6">
                <div className="text-indigo-600 mb-4">{project.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4">{project.description}</p>
                <div className="text-2xl font-bold text-indigo-600">
                  {project.price}
                </div>
                <a
                  href="#contact"
                  className="mt-4 block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;