import React from 'react';
import MultiStepForm from '../components/MultiStepForm';

const SubmitIdeaPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mt-8 mb-8">Submit Your Idea</h1>
      <div className="max-w-3xl mx-auto">
        <MultiStepForm />
      </div>
    </div>
  );
};

export default SubmitIdeaPage; 