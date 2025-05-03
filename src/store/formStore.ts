import { create } from 'zustand';
import { FormData } from '../services/firebaseService';

interface FormStore {
  currentStep: number;
  formData: Partial<FormData>;
  setCurrentStep: (step: number | ((prev: number) => number)) => void;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

export const useFormStore = create<FormStore>((set) => ({
  currentStep: 1,
  formData: {},
  setCurrentStep: (step) => set((state) => ({ 
    currentStep: typeof step === 'function' ? step(state.currentStep) : step 
  })),
  updateFormData: (data) => set((state) => ({ 
    formData: { ...state.formData, ...data } 
  })),
  resetForm: () => set({ currentStep: 1, formData: {} }),
}));