import React from 'react';
import { Sun, Facebook, Twitter, Instagram, Youtube, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    "About": ["Our Story", "Values & Purpose", "Leadership Team", "Annual Reports"],
    "Programs": ["Community Events", "Cultural Classes", "Employment Services", "Youth Programs"],
    "Services": ["Facility Rental", "Catering", "Consultation", "Cultural Tours"],
    "Resources": ["Job Board", "Community Calendar", "Cultural Resources", "Support Services"]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-amber-900 text-stone-100 relative overflow-hidden">
      {/* Indigenous-inspired background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 w-20 h-20 border-2 border-amber-300 rounded-full"></div>
        <div className="absolute top-16 right-16 w-16 h-16 border border-amber-300 rounded-full"></div>
        <div className="absolute bottom-12 left-1/4 grid grid-cols-4 gap-2">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-amber-300 rounded-full"></div>
          ))}
        </div>
        <div className="absolute bottom-20 right-1/3">
          <svg width="120" height="50" viewBox="0 0 120 50" className="text-amber-300">
            <path d="M0,25 Q30,10 60,25 T120,25" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M0,35 Q30,20 60,35 T120,35" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <Sun className="w-9 h-9 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 bg-clip-text text-transparent">
                  Gaboodjoolup
                </h3>
                <p className="text-sm text-amber-200 font-medium tracking-wide">
                  CAFE • Boorloo (Perth) - South Perth
                </p>
              </div>
            </div>
            <p className="text-amber-200 mb-6 leading-relaxed">
              Creating opportunities, preserving culture, and building community 
              through meaningful connections and shared experiences on Whadjuk Country.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-amber-800 rounded-lg flex items-center justify-center hover:bg-amber-700 transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-amber-200 hover:text-amber-100 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Country Acknowledgment */}
        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="bg-amber-800/50 rounded-lg p-6 mb-6 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 w-8 h-8 border border-amber-300/30 rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border border-amber-300/30 rounded-full"></div>
            
            <div className="flex items-center mb-3">
              <MapPin className="w-5 h-5 text-amber-300 mr-2" />
              <h4 className="font-semibold text-amber-100">Country Acknowledgment</h4>
            </div>
            <p className="text-amber-200 text-sm leading-relaxed">
              We acknowledge that Gaboodjoolup Cafe operates on Whadjuk Noongar Country. 
              We pay our respects to Elders past, present and emerging, and acknowledge 
              their continuing connection to Country, culture, and community. Sovereignty 
              was never ceded - this always was and always will be Aboriginal land.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-amber-200 text-sm mb-4 md:mb-0">
              <p>© 2024 Gaboodjoolup Cafe. All rights reserved.</p>
              <p className="text-xs mt-1">Operating with respect on Whadjuk Country</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-amber-200 hover:text-amber-100 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-100 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-amber-200 hover:text-amber-100 text-sm transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;