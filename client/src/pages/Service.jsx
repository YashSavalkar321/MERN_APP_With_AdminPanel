import React from "react";
import { useAuth } from "../store/auth";
import { DollarSign, Star } from "lucide-react";

export default function Service() {
  const { services } = useAuth();

  return (
    <main className="overflow-hidden">
      <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl" />
        </div>

        <div className="container relative mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              What We Offer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 text-transparent bg-clip-text">
              Our Services
            </h1>
          </div>

          {/* {services.length() === 0 ? (
            <div className="text-center py-20">
              <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
                <p className="text-gray-600 text-lg">
                  No services available at the moment.
                </p>
              </div>
            </div>
          ) : ( */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((currElem, index) => {
                const { provider, description, price, service, image } = currElem;

                return (
                  <div
                    key={index}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-video">
                      <img
                        src={image || "/images/design.png"}
                        alt={service}
                        className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                        <p className="text-white font-medium flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400" />
                          {provider}
                        </p>
                        <p className="text-white font-medium flex items-center gap-1">
                          <DollarSign className="w-4 h-4 text-green-400" />
                          {price}
                        </p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                        {service}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {description}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="px-6 pb-6">
                      <button className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Learn More
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          {/* )} */}
        </div>
      </section>
    </main>
  );
}