import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mt-8 mb-8">Contact Us</h1>
      <div className="max-w-xl mx-auto">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
            <input
              type="text"
              id="name"
              className="mt-1 p-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 p-1 block w-full rounded-md bg-gray-800 border-gray-700 text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage; 