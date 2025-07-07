import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Traditional Way", "South Perth, Whadjuk Country", "Western Australia, 6151"]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(08) 9123-4567", "(08) 9123-4568 (Programs)", "Emergency: (08) 9911-HELP"]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@gaboodjoolup.com.au", "jobs@gaboodjoolup.com.au", "programs@gaboodjoolup.com.au"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 7:00 AM - 6:00 PM", "Saturday: 8:00 AM - 5:00 PM", "Sunday: 9:00 AM - 4:00 PM"]
    }
  ];

  const consultationPartners = [
    "South West Aboriginal Land and Sea Council (SWALSC)",
    "Whadjuk Noongar Elders Council",
    "Local Aboriginal businesses and enterprises",
    "Noongar youth leaders and community representatives",
    "Traditional knowledge holders and cultural advisors"
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Connect With Our Community
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            We welcome all community members and visitors to Whadjuk Country. 
            Reach out to learn more about our programs, job opportunities, or to 
            schedule a visit to Gaboodjoolup Cafe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="bg-stone-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-amber-900 mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Interest
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors">
                    <option>Select your interest</option>
                    <option>Job Opportunities</option>
                    <option>Community Programs</option>
                    <option>Cultural Events</option>
                    <option>Facility Rental</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-3">
                    <info.icon className="w-5 h-5 text-amber-700" />
                  </div>
                  <h4 className="text-lg font-semibold text-amber-900">
                    {info.title}
                  </h4>
                </div>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-stone-700">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 sm:p-12 mb-16">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Our Consultation Partners
          </h3>
          <p className="text-stone-600 mb-6 text-center max-w-3xl mx-auto">
            We work closely with respected organizations and community leaders 
            to ensure our cafe serves the Whadjuk Noongar community appropriately 
            and respectfully.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {consultationPartners.map((partner, index) => (
              <div key={index} className="flex items-center bg-white rounded-lg p-4">
                <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                <span className="text-stone-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Visit Gaboodjoolup Cafe
          </h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Experience our beautiful facility, meet our community, and learn about 
            the opportunities available. We offer guided tours with cultural context 
            every weekday at 2:00 PM and 4:00 PM.
          </p>
          <button className="bg-white text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300">
            Schedule a Cultural Tour
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;