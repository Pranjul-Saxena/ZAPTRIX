import React from 'react';
import useScrollVisibility from '../hooks/useScrollVisibility';

interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ icon, title, description }) => (
  <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur">
    <div className="h-16 w-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks: React.FC = () => {
  const isVisible = useScrollVisibility();

  const steps = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-check-circle h-8 w-8 text-indigo-600"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <path d="m9 11 3 3L22 4"></path>
        </svg>
      ),
      title: "1. Submit Your Idea",
      description: "Share your software idea with our community and get initial feedback from experts."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trending-up h-8 w-8 text-indigo-600"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
          <polyline points="16 7 22 7 22 13"></polyline>
        </svg>
      ),
      title: "2. Build & Scale",
      description: "Collaborate with experts to develop and scale your solution using our platform tools."
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-award h-8 w-8 text-indigo-600"
        >
          <circle cx="12" cy="8" r="6"></circle>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
        </svg>
      ),
      title: "3. Launch & Succeed",
      description: "Launch your product in our marketplace and reach a global audience of customers."
    }
  ];

  return (
    <div
      id="about"
      className={`flex items-center justify-center px-4 py-2 transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl">
        <div className="max-w-7xl m-0 ro mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="pt-16 pb-8 text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 