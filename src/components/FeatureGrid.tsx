import React from 'react';
import { Code2, Users, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = ''
}) => (
  <div className={`p-6 bg-gray-900/50 rounded-xl border border-gray-700 backdrop-blur ${className}`}>
    {icon}
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8 text-blue-400 mb-4" />,
      title: "Innovate",
      description: "Transform your software ideas into reality with our comprehensive platform."
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400 mb-4" />,
      title: "Collaborate",
      description: "Connect with experts and like-minded innovators in our growing community."
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400 mb-4" />,
      title: "Scale",
      description: "Take your project from concept to successful venture with our support."
    }
  ];

  return (
    <div className={`flex items-center justify-center px-4 py-2 transition-opacity duration-1000`}>
      <div className='max-w-4xl'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureGrid; 