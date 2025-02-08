import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { CheckCircle } from "lucide-react";

const About = () => {
  const { user } = useAuth();

  return (
    <>
      <main className="overflow-hidden">
        <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Content Section */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    About Our Company
                  </p>
                  <p className="text-lg text-gray-600">
                    {user ? (
                      <>Welcome back, <span className="font-semibold text-indigo-600">{user.username}</span> 👋</>
                    ) : (
                      "Welcome to our Website 👋"
                    )}
                  </p>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 text-transparent bg-clip-text">
                    Why Choose Us?
                  </h1>
                </div>

                {/* Features Grid */}
                <div className="grid gap-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 p-1">
                      <CheckCircle className="w-6 h-6 text-indigo-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Expertise</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Our team consists of experienced IT professionals who are passionate about
                        staying up-to-date with the latest industry trends.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 p-1">
                      <CheckCircle className="w-6 h-6 text-indigo-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Customization</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We understand that every business is unique. That's why we create
                        solutions that are tailored to your specific needs and goals.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 p-1">
                      <CheckCircle className="w-6 h-6 text-indigo-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Customer-Centric</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We prioritize your satisfaction and provide top-notch support to
                        address your IT concerns.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 p-1">
                      <CheckCircle className="w-6 h-6 text-indigo-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Affordability</h3>
                      <p className="text-gray-600 leading-relaxed">
                        We offer competitive pricing without compromising on the quality
                        of our services.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 p-1">
                      <CheckCircle className="w-6 h-6 text-indigo-600 group-hover:text-purple-600 transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Reliability</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Count on us to be there when you need us. We're committed to ensuring
                        your IT environment is reliable and available 24/7.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <NavLink to="/contact">
                    <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Connect Now
                    </button>
                  </NavLink>
                  <button className="w-full sm:w-auto px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-3xl opacity-20 animate-pulse" />
                <img
                  src="/images/about.png"
                  alt="coding buddies"
                  className="relative w-4/5 max-w-md rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;