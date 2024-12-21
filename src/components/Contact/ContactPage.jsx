import React from "react";

const Contact = () => {
  return (
    <section>
      {/* Background Image Section */}
      <div
        className="relative bg-cover bg-center h-[300px] flex justify-center items-center"
        style={{
          backgroundImage: `url('/images/Contact.jpg')`, // Replace with your image path
        }}
      >
        <h1 className="bg-white text-black text-3xl font-bold px-6 py-2 shadow-md">
          Contact
        </h1>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#f9f9f9] py-8 px-6 lg:px-20">
        <form className="max-w-3xl mx-auto">
          {/* Name Field */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Website/URL Field */}
          <div className="mb-6">
            <label
              htmlFor="website"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Website/URL
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Enter your website URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-medium mb-1"
            >
              Comment or Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your message"
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white text-gray-700 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-400"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
