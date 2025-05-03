import React, { useEffect, useState } from 'react';
import { getFormData, FormData } from '../services/firebaseService';
import { Star } from 'lucide-react';

const FormList: React.FC = () => {
  const [submissions, setSubmissions] = useState<FormData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const data = await getFormData();
        setSubmissions(data);
      } catch (err) {
        setError('Failed to fetch submissions');
        console.error('Error fetching submissions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h2 className="text-3xl font-bold text-white mb-8">Submitted Ideas</h2> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-white">
                {submission.firstName} {submission.lastName}
              </h3>
              <p className="text-gray-400">{submission.companyName || 'No Company Name'}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-400">Location</h4>
                <p className="text-white">{submission.location}</p>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400">Sectors</h4>
                <div className="flex flex-wrap gap-2">
                  <span
                    className="px-2 py-1 bg-blue-600 text-white text-sm rounded-full"
                  >
                    {submission.sector}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400">Team Rating</h4>
                <div className="space-y-2">
                  {Object.entries(submission.teamRating).map(([skill, rating]) => (
                    <div key={skill} className="flex items-center justify-between">
                      <span className="text-white capitalize">{skill.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={`${skill}-${star}`} className={`w-4 h-4 ${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-gray-400">Startup Stage</h4>
                <p className="text-white">{submission.startupStage}</p>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-400">
                  Submitted on {new Date(submission.submittedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormList;