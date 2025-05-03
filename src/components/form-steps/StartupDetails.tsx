import React from 'react';
import { useFormContext } from 'react-hook-form';

interface StartupDetailsProps {
  methods: any;
}

const StartupDetails: React.FC<StartupDetailsProps> = ({ methods }) => {
  const { register, watch, formState: { errors } } = methods;
  const problemDescription = watch('problemDescription') || '';
  const solutionDescription = watch('solutionDescription') || '';

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Startup Details</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Problem Description
          </label>
          <div className="relative">
            <textarea
              {...register('problemDescription')}
              rows={6}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              placeholder="Describe the problem your startup aims to solve (minimum 100 characters)"
            />
            <div className="absolute bottom-2 right-2 text-sm text-gray-400">
              {problemDescription.length}/100
            </div>
          </div>
          {errors.problemDescription && (
            <p className="mt-1 text-sm text-red-500">{errors.problemDescription.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Solution Description
          </label>
          <div className="relative">
            <textarea
              {...register('solutionDescription')}
              rows={6}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              placeholder="Describe your proposed solution (minimum 100 characters)"
            />
            <div className="absolute bottom-2 right-2 text-sm text-gray-400">
              {solutionDescription.length}/100
            </div>
          </div>
          {errors.solutionDescription && (
            <p className="mt-1 text-sm text-red-500">{errors.solutionDescription.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupDetails; 