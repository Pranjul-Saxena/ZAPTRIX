import React from "react";
import { useFormContext } from "react-hook-form";
import { FormData } from "../../validation/formSchema";
import { Star } from "lucide-react";

interface SecureSectorTeamProps {
  methods: any;
}

const SecureSectorTeam: React.FC<SecureSectorTeamProps> = ({ methods }) => {
  const {
    register,
    formState: { errors },
  } = methods;

  const sectors = [
    "FinTech",
    "EdTech",
    "HealthTech",
    "E-commerce",
    "AI/ML",
    "IoT",
    "Cybersecurity",
    "CleanTech",
    "AgriTech",
    "Other",
  ];

  const startupStages = [
    "Paper Plan",
    "MVP",
    "Early Traction",
    "Growth",
    "Scale",
  ];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Select Sector
        </label>
        <select
          {...register("sector")}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a sector</option>
          {sectors.map((sector) => (
            <option key={sector} value={sector}>
              {sector}
            </option>
          ))}
        </select>
        {errors.sector && (
          <p className="mt-1 text-sm text-red-500">{errors.sector.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Team Rating (1-5)
        </label>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Writing Code
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} className="cursor-pointer">
                  <input
                    type="radio"
                    {...register("teamRating.writingCode")}
                    value={rating}
                    className="hidden"
                  />
                  <Star
                    className={`w-6 h-6 ${
                      methods.watch("teamRating.writingCode") >= rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Building Products
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} className="cursor-pointer">
                  <input
                    type="radio"
                    {...register("teamRating.buildingProducts")}
                    value={rating}
                    className="hidden"
                  />
                  <Star
                    className={`w-6 h-6 ${
                      methods.watch("teamRating.buildingProducts") >= rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Selling to Customers
            </label>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((rating) => (
                <label key={rating} className="cursor-pointer">
                  <input
                    type="radio"
                    {...register("teamRating.sellingToCustomers")}
                    value={rating}
                    className="hidden"
                  />
                  <Star
                    className={`w-6 h-6 ${
                      methods.watch("teamRating.sellingToCustomers") >= rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                </label>
              ))}
            </div>
          </div>
        </div>
        {errors.teamRating && (
          <p className="mt-1 text-sm text-red-500">
            {errors.teamRating.message}
          </p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          Startup Stage
        </label>
        <select
          {...register("startupStage")}
          className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">Select a stage</option>
          {startupStages.map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
        {errors.startupStage && (
          <p className="mt-1 text-sm text-red-500">
            {errors.startupStage.message}
          </p>
        )}
      </div>
      <label htmlFor="terms" className="text-gray-400 ">
        <input type="checkbox" name="terms" required /> &nbsp; I agree to the{" "}
        <a href="/terms-and-conditions" target="_blank">
          Terms and Conditions<span className="text-red-500">*</span> for secure submission
        </a>
      </label>
      <br />
    </div>
  );
};

export default SecureSectorTeam;
