import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import FeatureGrid from "../components/FeatureGrid";
import AboutUs from "../components/AboutUs1";
import { Rocket } from "lucide-react";
import { getFormData } from "../services/firebaseService";
import RotatingZ from "../components/RotatingZ";

const HomePage: React.FC = () => {
  const [ideasCount1, setIdeasCount] = useState(0);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const data = await getFormData();
        setIdeasCount(data.length);
        // console.log(data.length);
      } catch (err) {
        console.log("Failed to fetch submissions");
        console.error("Error fetching submissions:", err);
      } finally {
        // console.log(false);
      }
    };

    fetchSubmissions();
  }, []);
  return (
    <>
      <RotatingZ />

      <HeroSection
        ideasCount={ideasCount1}
        onSubmitClick={() => {}}
        onViewSubmissions={() => {}}
      />
      <HowItWorks />
      {/* <RotatingZ /> */}

      <div className="text-white p-0 m-4">
        <div className="relative overflow-hidden px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-300 mb-6">
              Turn Your Ideas Into
              <span className="text-indigo-600"> Reality</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-8">
              Join a community of innovators, entrepreneurs, and developers.
              Build, collaborate, and scale your software ideas on the Zaptrix
              platform.
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center gap-2">
                Get Started <Rocket className="w-5 h-5 text-blue-100" />
              </button>
            </div>
          </div>
          <RotatingZ />

          <FeatureGrid />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AboutUs />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
