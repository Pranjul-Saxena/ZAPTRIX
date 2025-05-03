import React from 'react';
import { useFormContext } from 'react-hook-form';

interface BackgroundDetailsProps {
  methods: any;
}

const INDIAN_CITIES = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Kolkata',
  'Pune',
  'Ahmedabad',
  'Jaipur',
  'Surat',
  'Noida',
  'Gurgaon',
  'Chandigarh',
  'Kochi',
  'Indore',
  'Other',
];

const BackgroundDetails: React.FC<BackgroundDetailsProps> = ({ methods }) => {
  const { register, watch, setValue, formState: { errors } } = methods;
  const numberOfFounders = watch('numberOfFounders');

  const handleNumberOfFoundersChange = (value: string) => {
    setValue('numberOfFounders', value);
    const num = parseInt(value);
    if (num > 1) {
      setValue('coFounderProfiles', Array(num - 1).fill(''));
    } else {
      setValue('coFounderProfiles', []);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Background Details</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Location in India
          </label>
          <select
            {...register('location')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          >
            <option value="">Select your city</option>
            {INDIAN_CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.location && (
            <p className="mt-1 text-sm text-red-500">{errors.location.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Your LinkedIn Profile
          </label>
          <input
            type="url"
            {...register('linkedinProfile')}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
            placeholder="https://linkedin.com/in/your-profile"
          />
          {errors.linkedinProfile && (
            <p className="mt-1 text-sm text-red-500">{errors.linkedinProfile.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Number of Founders
          </label>
          <select
            {...register('numberOfFounders')}
            onChange={(e) => handleNumberOfFoundersChange(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
          >
            <option value="1">1 Founder</option>
            <option value="2">2 Founders</option>
            <option value="3">3 Founders</option>
            <option value="4+">4+ Founders</option>
          </select>
          {errors.numberOfFounders && (
            <p className="mt-1 text-sm text-red-500">{errors.numberOfFounders.message}</p>
          )}
        </div>

        {parseInt(numberOfFounders) > 1 && (
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-300">
              Co-founders' LinkedIn Profiles
            </label>
            {Array.from({ length: parseInt(numberOfFounders) - 1 }).map((_, index) => (
              <div key={index}>
                <input
                  type="url"
                  {...register(`coFounderProfiles.${index}`)}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  placeholder={`Co-founder ${index + 1} LinkedIn profile`}
                />
                {errors.coFounderProfiles?.[index] && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.coFounderProfiles[index].message}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BackgroundDetails; 