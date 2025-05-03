import * as yup from 'yup';

export interface FounderInfoFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  companyName?: string;
}

export interface BackgroundDetailsFormData {
  location: string;
  linkedinProfile: string;
  numberOfFounders: string;
  coFounderProfiles: string[];
}

export interface StartupDetailsFormData {
  problemDescription: string;
  solutionDescription: string;
}

export interface SectorTeamFormData {
  sector: string;
  teamRating: {
    writingCode: number;
    buildingProducts: number;
    sellingToCustomers: number;
  };
  startupStage: string;
}

export type FormData = FounderInfoFormData & BackgroundDetailsFormData & StartupDetailsFormData & SectorTeamFormData;

export const founderInfoSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup.string().required('Phone number is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  companyName: yup.string(),
});

export const backgroundDetailsSchema = yup.object().shape({
  location: yup.string().required('Location is required'),
  linkedinProfile: yup.string().url('Invalid LinkedIn URL').required('LinkedIn profile is required'),
  numberOfFounders: yup.string().required('Number of founders is required'),
  coFounderProfiles: yup.array().of(yup.string().url('Invalid LinkedIn URL')),
});

export const startupDetailsSchema = yup.object().shape({
  problemDescription: yup.string().min(100, 'Problem description must be at least 100 characters').required('Problem description is required'),
  solutionDescription: yup.string().min(100, 'Solution description must be at least 100 characters').required('Solution description is required'),
});

export const sectorTeamSchema = yup.object().shape({
  sector: yup.string().required('Sector is required'),
  teamRating: yup.object().shape({
    writingCode: yup.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5').required('Rating is required'),
    buildingProducts: yup.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5').required('Rating is required'),
    sellingToCustomers: yup.number().min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5').required('Rating is required'),
  }),
  startupStage: yup.string().required('Startup stage is required'),
});

export const projectInfoSchema = yup.object().shape({
  projectTitle: yup.string().required('Project title is required'),
  projectDescription: yup.string().required('Project description is required'),
  targetAudience: yup.string().required('Target audience is required'),
  problemStatement: yup.string().required('Problem statement is required'),
  solution: yup.string().required('Solution description is required'),
});

export const technicalDetailsSchema = yup.object().shape({
  techStack: yup.array().of(yup.string()).min(1, 'Select at least one technology'),
  developmentTimeline: yup.string().required('Development timeline is required'),
  budget: yup.string().required('Budget information is required'),
});

export const additionalInfoSchema = yup.object().shape({
  marketResearch: yup.string().required('Market research is required'),
  competitors: yup.string().required('Competitor information is required'),
  uniqueValue: yup.string().required('Unique value proposition is required'),
}); 