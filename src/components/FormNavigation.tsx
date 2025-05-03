import React from 'react';

interface FormNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
}

const FormNavigation: React.FC<FormNavigationProps> = ({ 
  currentStep, 
  totalSteps, 
  onNext, 
  onPrev 
}) => {
  return (
    <div className="flex justify-between mt-6">
      {currentStep > 0 && (
        <button 
          onClick={onPrev} 
          className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors"
        >
          Previous
        </button>
      )}
      {currentStep < totalSteps - 1 && (
        <button 
          onClick={onNext} 
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors ml-auto"
        >
          Next
        </button>
      )}
      {currentStep === totalSteps - 1 && (
        <button 
          type="submit" 
          className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors ml-auto"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default FormNavigation; 