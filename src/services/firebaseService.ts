import { collection, addDoc, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';
import { FormData } from '../validation/formSchema';

export const saveFormData = async (data: FormData): Promise<{ success: boolean; error?: string }> => {
    try {
        console.log('Saving form data:', data);

        // Validate required fields
        if (!data.firstName || !data.lastName || !data.email || !data.phone) {
            throw new Error('Missing required founder information');
        }

        if (!data.location || !data.linkedinProfile) {
            throw new Error('Missing required background details');
        }

        if (!data.problemDescription || !data.solutionDescription) {
            throw new Error('Missing required startup details');
        }

        if (!data.sector || !data.startupStage) {
            throw new Error('Missing required sector and team information');
        }

        // Ensure teamRating structure is correct
        if (!data.teamRating || typeof data.teamRating !== 'object') {
            throw new Error('Invalid team rating structure');
        }

        // Convert date to Firestore timestamp
        const submissionData = {
            ...data,
            submittedAt: new Date(),
        };

        console.log('Submitting data to Firestore:', submissionData);
        const docRef = await addDoc(collection(db, 'startup_submissions'), submissionData);
        console.log('Document written with ID:', docRef.id);

        return { success: true };
    } catch (error) {
        console.error('Error saving form data:', error);
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Failed to save form data'
        };
    }
};

export const getFormData = async (): Promise<FormData[]> => {
    try {
        // console.log('Fetching form data from Firestore');
        const q = query(collection(db, 'startup_submissions'), orderBy('submittedAt', 'desc'));
        const querySnapshot = await getDocs(q);

        const submissions: FormData[] = [];
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Convert Firestore timestamp to Date and ensure all required fields are present
            const submission = {
                firstName: data.firstName,
                lastName: data.lastName,
                phone: data.phone,
                email: data.email,
                companyName: data.companyName,
                location: data.location,
                linkedinProfile: data.linkedinProfile,
                numberOfFounders: data.numberOfFounders,
                coFounderProfiles: data.coFounderProfiles || [],
                problemDescription: data.problemDescription,
                solutionDescription: data.solutionDescription,
                sector: data.sector,
                teamRating: {
                    writingCode: Number(data.teamRating?.writingCode) || 0,
                    buildingProducts: Number(data.teamRating?.buildingProducts) || 0,
                    sellingToCustomers: Number(data.teamRating?.sellingToCustomers) || 0,
                },
                startupStage: data.startupStage,
                submittedAt: data.submittedAt?.toDate() || new Date(),
            } as FormData;
            submissions.push(submission);
        });

        // console.log('Fetched submissions:', submissions);
        return submissions;
    } catch (error) {
        console.error('Error fetching form data:', error);
        throw new Error('Failed to fetch form data');
    }
};
