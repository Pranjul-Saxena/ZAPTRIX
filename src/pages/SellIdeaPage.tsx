import React from "react";
import { Link } from "react-router-dom";
import { Lightbulb } from 'lucide-react';


const SellIdeaPage: React.FC = () => {
  return (
    <div className="max-w-4xl min-h-screen flex flex-col items-center justify-start bg-gray-900 text-white container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center pb-3 mb-8 mt-8 sm:mb-14 sm:mt-14 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        <span></span>Introducing: Sell Your Idea Program!
      </h1>
      <p className="px-8 py-4 text-white bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center">
        Have a brilliant idea but don’t know how to build it?
      </p>

      <div className="w-full space-y-8 mt-6">
        {/* Introduction */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">
            What is Sell Idea? at ZAPTRIX.
          </h2>
          <p className="text-gray-300">
            At ZAPTRIX, we believe that every idea deserves a chance — even
            if you don’t have the resources or team to bring it to life. With
            our Sell Your Idea feature, you can now submit your idea and get
            paid if it gets selected for execution.
          </p>
        </div>

        {/* Features */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">How It Works?</h3>
          <h4>When you submit your idea:</h4>
          <ul className="space-y-3 text-gray-300 pt-3">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                It gets securely documented and protected under our digital
                Non-Disclosure Agreement (NDA).
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                If our team selects your idea, we will get in touch to negotiate
                an agreement.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                You get rewarded for your creativity — either as a one-time
                payment, revenue share, or both.
              </span>
            </li>
          </ul>
        </div>

        {/* Why Trust */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">
            Why You Can Trust This Process
          </h3>
          <h4>
            All selected ideas are governed by proper legal agreements (NDA,
            MoU, or licensing).
          </h4>
          <ul className="space-y-3 text-gray-300 pt-3">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>You retain full credit as the idea originator..</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                We only proceed with execution after your consent and
                documentation.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Your idea stays protected within our platform until finalized
              </span>
            </li>
          </ul>
        </div>

        {/* Why Trust */}
        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
          <h3 className="text-xl font-semibold mb-4">
            You dream it, we build it — and you earn from it.
          </h3>
          <h4>
            Startups aren’t just for coders. It’s time ideas got the spotlight
            too.
          </h4>
          <br/>
          <h4>
            Submit your idea now through Secure Submit to be considered for
            execution and payout under the Sell Your Idea program.
          </h4>
        </div>

        {/* CTA */}
        <div className="text-center py-6">
          <p className="text-lg text-gray-300 mb-6">
            Make your move with confidence. Submit securely, build boldly.
          </p>
          <p className="text-xl font-medium text-purple-400">
            Secure Submit — because your ideas deserve protection
          </p>
        </div>
      </div>
    </div>
  );
};

export default SellIdeaPage;
