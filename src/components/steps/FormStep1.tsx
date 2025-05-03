import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useFormStore from '../../store/formStore';

const validationSchema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const FormStep1 = () => {
  const { formData, updateFormData } = useFormStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: any) => {
    updateFormData(data);
  };

  return (
    <form onChange={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-gray-300 mb-2">First Name</label>
        <input 
          {...register("firstName")} 
          className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 text-white"
        />
        {errors.firstName && (
          <p className="text-red-400 mt-1">{errors.firstName.message}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Last Name</label>
        <input 
          {...register("lastName")} 
          className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 text-white"
        />
        {errors.lastName && (
          <p className="text-red-400 mt-1">{errors.lastName.message}</p>
        )}
      </div>
      <div>
        <label className="block text-gray-300 mb-2">Email</label>
        <input 
          {...register("email")} 
          type="email" 
          className="w-full p-2 bg-gray-700 rounded-lg border border-gray-600 text-white"
        />
        {errors.email && (
          <p className="text-red-400 mt-1">{errors.email.message}</p>
        )}
      </div>
    </form>
  );
};

export default FormStep1; 