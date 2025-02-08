import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { toast } from "react-toastify";

const defaultContactForm = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);
  const [userData, setUserData] = useState(true);
  const { user, API} = useAuth();

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        setContact(defaultContactForm);
        const data = await response.json();
        console.log(data);
        toast.success("Message Sent Successfully");
      }
    } catch (error) {
      alert("Message Not Sent");
      console.log(error);
    }
  };

  
  useEffect(() => {
    if (user) {
      setContact({
        username: user.username || "",
        email: user.email || "",
        message: "",
      });
      setUserData(false);
    }
  }, [user]);

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
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <p className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Get in Touch
              </p>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-gray-900 text-transparent bg-clip-text">
                Contact Us
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="off"
                        value={contact.username}
                        onChange={handleInput}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        value={contact.email}
                        onChange={handleInput}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        autoComplete="off"
                        value={contact.message}
                        onChange={handleInput}
                        required
                        rows="6"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>

              {/* Image and Contact Info */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-3xl opacity-20 animate-pulse" />
                  <img
                    src="/images/support.png"
                    alt="we are always ready to help"
                    className="relative w-full max-w-md mx-auto rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Our Location</p>
                        <p className="text-gray-600">Phoenix Marketcity, Pune, Maharashtra</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Phone</p>
                        <p className="text-gray-600">+91 123 456 7890</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Email</p>
                        <p className="text-gray-600">contact@yashsavalkar.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent h-32" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          ></iframe>
        </section>
      </main>
    </>
  );
};

export default Contact;