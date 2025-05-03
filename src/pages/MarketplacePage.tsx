import React from 'react';
import FormList from '../components/FormList';

const MarketplacePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-8">Developer Marketplace</h1>
      <div className="max-w-6xl mx-auto">
        <FormList />
      </div>
    </div>
  );
};

export default MarketplacePage; 