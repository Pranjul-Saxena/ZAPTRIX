import React from "react";
import { Link } from "react-router-dom";

const SecureSubmitPage: React.FC = () => {
  return (
    <div className="max-w-4xl min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 mt-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        🔒 Secure Submit
      </h1>
      <Link
        to="/submit-submit-idea" // Replace with your actual route path
        className="px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
      >
        Submit Your Idea Securely
      </Link>

      <div className="w-full space-y-8 mt-4">
        {/* Introduction */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            Protect your big idea before it takes off
          </h2>
          <p className="text-gray-300">
            At ZAPTRIX, we understand how valuable your idea is. That's why
            we're launching Secure Submit — a dedicated, protected submission
            channel for innovators who want an extra layer of confidentiality
            and care.
          </p>
        </div>

        {/* Features */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">
            ✅ What makes it secure?
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Legally backed by our digital Non-Disclosure Agreement (NDA)
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Logged with timestamp, user ID, and IP for traceability
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Reviewed only by authorized team members under NDA</span>
            </li>
          </ul>
        </div>

        {/* Why Choose */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">
            💼 Why Choose Secure Submit?
          </h3>
          <p className="text-gray-300 mb-4">
            If you believe your idea holds real potential and you want to make
            sure it's protected at every step, Secure Submit is for you. Whether
            it's your first startup or your tenth, protecting your innovation is
            smart business.
          </p>
          <p className="text-gray-300 font-medium">
            💰 Cost: Only ₹99 per submission
            <br />
            <span className="text-sm text-gray-400">
              Just a small investment for your peace of mind.
            </span>
          </p>
        </div>

        {/* CTA */}
        <div className="text-center py-6">
          <p className="text-lg text-gray-300 mb-6">
            Make your move with confidence. Submit securely, build boldly.
          </p>
          <p className="text-xl font-medium text-purple-400">
            🔐 Secure Submit — because your ideas deserve protection
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecureSubmitPage;
