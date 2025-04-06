import React from 'react';
import { MessageSquare, Palette, CheckSquare, Code, Send } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: 'Share your idea',
    description: 'Tell us about your project vision and requirements',
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: 'We design and demo the frontend',
    description: 'Get a visual preview of your project',
  },
  {
    icon: <CheckSquare className="h-6 w-6" />,
    title: 'You approve the UI',
    description: 'Review and provide feedback on the design',
  },
  {
    icon: <Code className="h-6 w-6" />,
    title: 'We build the project',
    description: 'Development begins after your approval',
  },
  {
    icon: <Send className="h-6 w-6" />,
    title: 'We deliver with one session',
    description: 'Complete handover with documentation',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Our streamlined process ensures smooth project delivery
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-6 left-0 transform w-full">
              <div className="h-0.5 bg-indigo-100 w-full" style={{ width: 'calc(100% - 3rem)' }} />
            </div>

            {/* Process steps */}
            <div className="grid gap-8 md:grid-cols-5">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border-2 border-indigo-100 text-indigo-600 mb-4 z-10">
                    {step.icon}
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500 italic">
              Note: Changes must be informed after demo and before full development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;