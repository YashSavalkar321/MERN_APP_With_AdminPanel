import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section
        id="error-page"
        className="min-h-screen flex items-center justify-center bg-gray-100"
      >
        <div className="text-center space-y-6 bg-white p-8 rounded shadow-lg">
          <h2 className="text-9xl font-bold text-red-600">404</h2>
          <h4 className="text-2xl font-semibold text-gray-800">
            Sorry! Page not found
          </h4>
          <p className="text-gray-600">
            Oops! It seems like the page you're trying to access doesn't exist.
            If you believe there's an issue, feel free to report it, and we'll
            look into it.
          </p>
          <div className="flex justify-center space-x-4">
            <NavLink
              to="/"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Return Home
            </NavLink>
            <NavLink
              to="/contact"
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300"
            >
              Report Problem
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};


export default Error;