import React from 'react';
import SecureMultiStepForm from '../components/SecureMultiStepForm';

const SecureSubmitIdeaPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mt-8 mb-8">Submit Your Idea Securely</h1>
      <div className="max-w-3xl mx-auto">
        <SecureMultiStepForm />
      </div>
    </div>
  );
};

export default SecureSubmitIdeaPage; 