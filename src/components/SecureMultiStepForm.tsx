import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useFormStore } from '../store/formStore';
import {
  founderInfoSchema,
  backgroundDetailsSchema,
  startupDetailsSchema,
  sectorTeamSchema,
  FounderInfoFormData,
  BackgroundDetailsFormData,
  StartupDetailsFormData,
  SectorTeamFormData,
  FormData,
} from '../validation/formSchema';
import FounderInfo from './form-steps/FounderInfo';
import BackgroundDetails from './form-steps/BackgroundDetails';
import StartupDetails from './form-steps/StartupDetails';
import SectorTeam from './form-steps/SectorTeam';
import { saveFormData } from '../services/firebaseService';
import SecureSectorTeam from './form-steps/SecureSectorTeam';

type StepFormData = FounderInfoFormData | BackgroundDetailsFormData | StartupDetailsFormData | SectorTeamFormData;
type SchemaType = typeof founderInfoSchema | typeof backgroundDetailsSchema | typeof startupDetailsSchema | typeof sectorTeamSchema;

const defaultFormData: Partial<FormData> = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  companyName: '',
  location: '',
  linkedinProfile: '',
  numberOfFounders: '1',
  coFounderProfiles: [''],
  problemDescription: '',
  solutionDescription: '',
  sector: '',
  teamRating: {
    writingCode: 0,
    buildingProducts: 0,
    sellingToCustomers: 0,
  },
  startupStage: '',
};

const SecureMultiStepForm: React.FC = () => {
  const { currentStep, setCurrentStep, formData, updateFormData } = useFormStore();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [currentSchema, setCurrentSchema] = useState<SchemaType>(founderInfoSchema);

  // Update schema when step changes
  useEffect(() => {
    // console.log('Current step changed:', currentStep);
    switch (currentStep) {
      case 1:
        setCurrentSchema(founderInfoSchema);
        break;
      case 2:
        setCurrentSchema(backgroundDetailsSchema);
        break;
      case 3:
        setCurrentSchema(startupDetailsSchema);
        break;
      case 4:
        setCurrentSchema(sectorTeamSchema);
        break;
      default:
        setCurrentSchema(founderInfoSchema);
    }
  }, [currentStep]);

  const methods = useForm<FormData>({
    defaultValues: { ...defaultFormData, ...formData },
    resolver: yupResolver(currentSchema as any),
    mode: 'onChange',
  });

  // Debug form state changes
  useEffect(() => {
    const subscription = methods.watch((value, { name, type }) => {
      if (name) {
        // console.log('Form field changed:', { name, type, value });
      }
    });
    return () => subscription.unsubscribe();
  }, [methods]);

  const onSubmit = async (data: any) => {
    // console.log('Form data before submission:', data);
    // console.log('Current step:', currentStep);
    // console.log('Form errors:', methods.formState.errors);

    try {
      // Wait for state update before proceeding
      await updateFormData(data);

      if (currentStep < 4) {
        // console.log('Moving to next step');
        setCurrentStep((prev: number) => prev + 1);
      } else {
        // console.log('Submitting final form');
        setIsSubmitting(true);
        setSubmitError(null);

        // Ensure teamRating values are numbers
        const submissionData: FormData = {
          ...data,
          teamRating: {
            writingCode: Number(data.teamRating?.writingCode ?? 0),
            buildingProducts: Number(data.teamRating?.buildingProducts ?? 0),
            sellingToCustomers: Number(data.teamRating?.sellingToCustomers ?? 0),
          },
          submittedAt: new Date(),
        };

        // console.log('Submitting data to Firebase:', submissionData);
        const response = await saveFormData(submissionData);
        
        if (response.success) {
          // console.log('Form submitted successfully:', response);
          alert('Form submitted successfully!');
          methods.reset(defaultFormData);
          setCurrentStep(1);
        } else {
          // console.error('Failed to submit form:', response.error);
          setSubmitError(response.error || 'Failed to submit form. Please try again.');
        }
      }
    } catch (error) {
      // console.error('Error in form submission:', error);
      setSubmitError('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleValidationError = (errors: any) => {
    // console.log('Validation errors:', errors);
    setSubmitError('Please check the form for errors.');
  };

  const renderStep = () => {
    // console.log('Rendering step:', currentStep);
    switch (currentStep) {
      case 1:
        return <FounderInfo methods={methods} />;
      case 2:
        return <BackgroundDetails methods={methods} />;
      case 3:
        return <StartupDetails methods={methods} />;
      case 4:
        return <SecureSectorTeam methods={methods} />;
      default:
        return null;
    }
  };

  return (
    <FormProvider {...methods}>
      <form 
        onSubmit={methods.handleSubmit(onSubmit, handleValidationError)} 
        className="space-y-6"
      >
        {renderStep()}
        
        {submitError && (
          <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-500 text-sm">{submitError}</p>
          </div>
        )}

        <div className="flex justify-between pt-6">
          {currentStep > 1 && (
            <button
              type="button"
              onClick={() => setCurrentStep((prev: number) => prev - 1)}
              className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Previous
            </button>
          )}
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {currentStep === 4 ? (isSubmitting ? 'Submitting...' : 'Submit') : 'Next'}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SecureMultiStepForm;