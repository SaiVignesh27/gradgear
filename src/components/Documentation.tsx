import React from 'react';
import { FileText, BookOpen, Book } from 'lucide-react';

const documentationTypes = [
  {
    icon: <FileText className="h-6 w-6" />,
    title: 'Paper Report Documentation',
    description: 'For research paper',
    price: '₹799',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Paper Journal Publishing',
    description: 'End-to-end support',
    price: '₹1599',
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: 'Full Project Documentation',
    description: 'Abstract to Deployment',
    price: '₹2000 – ₹3000',
  },
];

const Documentation = () => {
  return (
    <section id="documentation" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Documentation Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Professional documentation services to complement your project
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {documentationTypes.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-200"
            >
              <div className="text-indigo-600 mb-4">{doc.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {doc.title}
              </h3>
              <p className="text-gray-500 mb-4">{doc.description}</p>
              <div className="text-2xl font-bold text-indigo-600">{doc.price}</div>
              <a
                href="#contact"
                className="mt-4 block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Documentation;