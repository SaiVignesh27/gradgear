import React, { useState, useRef } from 'react';
import { Phone as PhoneIcon, Mail as MailIcon, Globe as GlobeIcon, Instagram as InstagramIcon, Info as InfoIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

const phone = '+91 9951399633';
const email = 'gradgearprojects@gmail.com';
const website = 'https://www.gradgear.42web.io';
const instagram = 'https://www.instagram.com/gradgear_projects/';

const projectTypes = [
  { value: "", label: "Select Project Type (Optional)" },
  { value: "full-stack", label: "Full Stack Application (₹1499 – ₹1999)" },
  { value: "full-stack-ai", label: "Full Stack + AI (₹2999)" },
  { value: "full-stack-ai-blockchain", label: "Full Stack + AI + Blockchain (₹3999)" },
  { value: "backend-only", label: "Backend Only Support (₹1299)" },
  { value: "project-upgrade", label: "Project Upgrade (₹1099)" },
  { value: "ai-only", label: "AI Only Project (₹1499)" },
  { value: "blockchain-only", label: "Blockchain Only Project (₹1999)" }
];

const documentationTypes = [
  { value: "", label: "Select Documentation Type (Optional)" },
  { value: "paper-report", label: "Paper Report Documentation (₹799)" },
  { value: "journal-publishing", label: "Paper Journal Publishing (₹1599)" },
  { value: "full-documentation", label: "Full Project Documentation (₹2000 – ₹3000)" }
];

// EmailJS configuration
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_als4kwb';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_kdxyn4p';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'Va9OaJMIj0XCB0RRv';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    college: '',
    projectType: '',
    documentationType: '',
    abstract: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.mobile || !formData.abstract) {
        setError('Name, email, mobile, and abstract are required fields');
        setIsSubmitting(false);
        return;
      }
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        EMAILJS_PUBLIC_KEY
      );
      
      if (result.text === 'OK') {
        setFormSubmitted(true);
      } else {
        setError('Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError('An error occurred while submitting the form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  if (formSubmitted) {
    return (
      <section id="contact" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Success Message */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Thank You!</h2>
              <p className="text-gray-600 mb-6 text-center">
                We've received your abstract and will get back to you within 24 hours🚀.
              </p>
              <p className="text-sm text-gray-500 text-center">
                A confirmation email has been sent to {formData.email}📧
              </p>
            </div>

            {/* Company Details */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Company Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <a
                    href={'tel:${phone}'}
                    className="flex items-center text-gray-600 transform transition-transform duration-200 hover:scale-110">
                    <PhoneIcon className="h-5 w-5 text-indigo-600 mr-3" />
                    <span> {phone} </span>  {/* Replace with your formatted number */}
                  </a>
                </div>
                <div className="flex items-center">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center text-gray-600 transform transition-transform duration-200 hover:scale-110">
                    <MailIcon className="h-5 w-5 text-indigo-600 mr-3" />
                    <span>gradgearprojects@gmail.com</span>
                  </a>
                </div>
                <div className="flex items-center">
                <a
                  href={`${website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 transform transition-transform duration-200 hover:scale-110">
                  <GlobeIcon className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>gradgear.42web.io</span>
                </a>
                </div>
                <div className="flex items-center">
                  <a
                    href={`${instagram}`}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 transform transition-transform duration-200 hover:scale-110">
                    <InstagramIcon className="h-5 w-5 text-indigo-600 mr-3" />
                    GradGear
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Get in touch to discuss your project
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="block mb-4 text-sm font-medium text-gray-700 text-center">Submit Your Abstract Details For Enquiry</p>
            <div className="mb-6 text-sm text-gray-600 bg-blue-50 p-4 rounded-md">
              <p>
                You can either:
                <ul className="list-disc ml-5 mt-2">
                  <li>Select specific project and/or documentation services now</li>
                  <li>Or simply submit your abstract and contact details, and we'll discuss the best options for your needs</li>
                </ul>
              </p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="college" className="block text-sm font-medium text-gray-700">
                  College Name
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  required
                  value={formData.college}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="projectType" className="block text-sm font-medium text-gray-700">
                    Project Type (Optional)
                  </label>
                  <div className="group relative">
                    <InfoIcon className="h-4 w-4 text-gray-400 cursor-help" />
                    <div className="hidden group-hover:block absolute right-0 transform translate-x-1/2 -translate-y-full bg-gray-800 text-white text-xs rounded py-1 px-2 w-48">
                      Pricing is estimated and may vary based on project details
                    </div>
                  </div>
                </div>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {projectTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="documentationType" className="block text-sm font-medium text-gray-700">
                    Documentation Type (Optional)
                  </label>
                  <div className="group relative">
                    <InfoIcon className="h-4 w-4 text-gray-400 cursor-help" />
                    <div className="hidden group-hover:block absolute right-0 transform translate-x-1/2 -translate-y-full bg-gray-800 text-white text-xs rounded py-1 px-2 w-48">
                      Pricing is estimated and may vary based on documentation requirements
                    </div>
                  </div>
                </div>
                <select
                  id="documentationType"
                  name="documentationType"
                  value={formData.documentationType}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                  {documentationTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="abstract" className="block text-sm font-medium text-gray-700">
                  Project Abstract
                </label>
                <textarea
                  id="abstract"
                  name="abstract"
                  rows={4}
                  required
                  value={formData.abstract}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  placeholder="Please describe your project idea and requirements"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Abstract'}
              </button>
            </form>
          </div>

          {/* Company Details */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Company Details
            </h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <a
                  href={'tel:${phone}'}
                  className="flex items-center text-gray-600 transform transition-transform duration-200 hover:scale-110">
                  <PhoneIcon className="h-5 w-5 text-indigo-600 mr-3" />
                  <span> {phone} </span>  {/* Replace with your formatted number */}
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center text-gray-600 transform transition-transform duration-200 hover:scale-110">
                  <MailIcon className="h-5 w-5 text-indigo-600 mr-3" />
                  <span>gradgearprojects@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center">
              <a
                href={`${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 transform transition-transform duration-200 hover:scale-110">
                <GlobeIcon className="h-5 w-5 text-indigo-600 mr-3" />
                <span>gradgear.42web.io</span>
              </a>
              </div>
              <div className="flex items-center">
                <a
                  href={`${instagram}`}
                  target='_blank'
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-600 transform transition-transform duration-200 hover:scale-110">
                  <InstagramIcon className="h-5 w-5 text-indigo-600 mr-3" />
                  GradGear
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
