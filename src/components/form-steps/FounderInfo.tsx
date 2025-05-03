import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FounderInfoProps {
  methods: any;
}

const FounderInfo: React.FC<FounderInfoProps> = ({ methods }) => {
  const { register, formState: { errors } } = methods;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Founder Information</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            First Name
          </label>
          <input
            type="text"
            {...register('firstName')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Last Name
          </label>
          <input
            type="text"
            {...register('lastName')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            {...register('phone')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            {...register('email')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Company Name (Optional)
          </label>
          <input
            type="text"
            {...register('companyName')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="Enter your company name"
          />
        </div>
      </div>
    </div>
  );
};

export default FounderInfo; 