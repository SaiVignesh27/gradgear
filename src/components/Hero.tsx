import React from 'react';
import { Rocket, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Fueling Your</span>
            <span className="block text-indigo-600">Final Year Dreams</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            We help undergraduate students bring their final year project ideas to life with custom development,
            documentation, and research publishing at student-friendly prices.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: <Rocket className="h-6 w-6" />, text: "Affordable Solutions" },
            { icon: <CheckCircle className="h-6 w-6" />, text: "Fast Delivery" },
            { icon: <CheckCircle className="h-6 w-6" />, text: "Reliable Support" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm p-6 flex items-center space-x-4 transform hover:scale-105 transition-transform duration-200"
            >
              <div className="flex-shrink-0 text-indigo-600">
                {feature.icon}
              </div>
              <div className="text-gray-900 font-medium">{feature.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;