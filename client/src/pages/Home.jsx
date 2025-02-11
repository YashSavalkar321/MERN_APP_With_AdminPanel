import { useAuth } from "../store/auth";

const Home = () => {
  const { user } = useAuth();
  const username = user.username;

  return (
    <>
      <main className="overflow-hidden">
        {/* First Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-purple-100/50 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-100/50 blur-3xl" />
          </div>

          <div className="container relative mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-block">
                  <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    We are the Web Developers 
                  </p>  
                </div>
                <div className="space-y-2">
                  <p className="text-lg text-gray-600">Welcome back, <span className="font-semibold text-indigo-600">{username}</span> 👋</p>
                  <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 text-transparent bg-clip-text">
                    Welcome to my Fully Functional Mern Website
                  </h1>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Are you ready to take your business to the next level with
                  cutting-edge IT solutions? Look no further! We specialize in providing innovative IT services and solutions
                  tailored to meet your unique needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact">
                    <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Connect Now
                    </button>
                  </a>
                  <a href="/services">
                    <button className="w-full sm:w-auto px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>

              <div className="relative flex justify-center">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <img
                  src="/images/home.png"
                  alt="Hero"
                  className="relative w-4/5 max-w-md transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Second Hero Section */}
        <section className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-transparent" />
          <div className="container relative mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative flex justify-center order-2 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse" />
                <img
                  src="/images/design.png"
                  alt="Services"
                  className="relative w-4/5 max-w-md transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="space-y-8 order-1 md:order-2">
                <div className="inline-block">
                  <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    We are here to help you
                  </p>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 text-transparent bg-clip-text">
                  Get Started Today
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ready to take the first step towards a more efficient and secure
                  IT infrastructure? Contact us today for a free consultation and
                  let's discuss how I can help your business thrive
                  in the digital age.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact">
                    <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-full font-medium transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Connect Now
                    </button>
                  </a>
                  <a href="/services">
                    <button className="w-full sm:w-auto px-8 py-4 border-2 border-indigo-600 text-indigo-600 rounded-full font-medium hover:bg-indigo-50 transition-all duration-200 transform hover:scale-105">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;