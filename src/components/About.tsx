import React from 'react';
import { Users, Target, Compass, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: "Community First",
      description: "We prioritize the needs and voices of our Whadjuk Noongar community members in everything we do."
    },
    {
      icon: Target,
      title: "Meaningful Work",
      description: "Creating sustainable employment opportunities that honor cultural values and provide economic independence."
    },
    {
      icon: Compass,
      title: "Cultural Preservation",
      description: "Preserving and sharing traditional knowledge, stories, and practices for future generations."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-stone-100 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-amber-600 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-amber-600 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-amber-600 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 grid grid-cols-4 gap-1">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-amber-600 rounded-full"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Acknowledgment of Country Section */}
        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-8 sm:p-12 text-white mb-16 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 border-2 border-amber-300/30 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-amber-300/30 rounded-full"></div>
          <div className="absolute top-1/2 right-8 grid grid-cols-3 gap-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-amber-300/30 rounded-full"></div>
            ))}
          </div>
          
          <div className="text-center relative z-10">
            <div className="flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-amber-300 mr-3" />
              <h3 className="text-2xl sm:text-3xl font-bold">Acknowledgment of Country</h3>
            </div>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-amber-100 leading-relaxed mb-6">
                We acknowledge that Gaboodjoolup Cafe is located on Whadjuk Noongar Country, 
                in the area known as Boorloo (Perth). We pay our deepest respects to the 
                Traditional Owners of this land, the Whadjuk people of the Noongar Nation.
              </p>
              <p className="text-amber-200 leading-relaxed mb-6">
                We honor the Elders past, present and emerging, and acknowledge their 
                continuing connection to Country, culture, and community. We recognize 
                that sovereignty was never ceded and that this always was and always 
                will be Aboriginal land.
              </p>
              <p className="text-amber-100 leading-relaxed">
                Our cafe operates with deep respect for Noongar culture and traditions, 
                and we are committed to supporting the ongoing strength and resilience 
                of the Whadjuk Noongar community.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Our Purpose & Values
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Gaboodjoolup Cafe stands as a beacon of hope, 
            opportunity, and cultural celebration on Country. We are dedicated to creating 
            a space where tradition meets innovation, and where every member of 
            our community can thrive.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group relative overflow-hidden"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-2 right-2 w-8 h-8 border border-amber-200 rounded-full opacity-50"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 border border-amber-200 rounded-full opacity-50"></div>
              
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors duration-300 relative z-10">
                <value.icon className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-4">
                {value.title}
              </h3>
              <p className="text-stone-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-8 sm:p-12 text-white relative overflow-hidden">
          {/* Indigenous-inspired decorative patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-8 left-8 w-24 h-24 border-2 border-white rounded-full"></div>
            <div className="absolute top-12 left-12 w-16 h-16 border border-white rounded-full"></div>
            <div className="absolute bottom-8 right-8 grid grid-cols-5 gap-2">
              {[...Array(25)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
              ))}
            </div>
            <div className="absolute top-1/2 right-16">
              <svg width="100" height="40" viewBox="0 0 100 40" className="text-white">
                <path d="M0,20 Q25,5 50,20 T100,20" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path d="M0,30 Q25,15 50,30 T100,30" stroke="currentColor" strokeWidth="1" fill="none"/>
              </svg>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Building Bridges, Creating Futures
              </h3>
              <p className="text-amber-100 leading-relaxed text-lg">
                Our cafe serves as a vital hub where Whadjuk Noongar traditions are 
                celebrated, employment opportunities are created, and community 
                bonds are strengthened. Through innovative programs, cultural 
                events, and meaningful partnerships, we're building a brighter 
                future for our people on Country.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-amber-300">500+</div>
                <div className="text-sm text-amber-200">Community Members</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-amber-300">150+</div>
                <div className="text-sm text-amber-200">Jobs Created</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-amber-300">25+</div>
                <div className="text-sm text-amber-200">Programs</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-3xl font-bold text-amber-300">8</div>
                <div className="text-sm text-amber-200">Years Strong</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-amber-50 rounded-2xl p-8 relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute top-4 right-4 w-12 h-12 border border-amber-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-4 left-4 w-8 h-8 border border-amber-200 rounded-full opacity-30"></div>
          
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Community-Led Governance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="font-semibold text-amber-900 mb-2">Elder Advisory</h4>
              <p className="text-stone-600 text-sm">Guided by the wisdom and knowledge of our Elders</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="font-semibold text-amber-900 mb-2">Community Voice</h4>
              <p className="text-stone-600 text-sm">Decisions made with and by community members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="font-semibold text-amber-900 mb-2">Cultural Protocol</h4>
              <p className="text-stone-600 text-sm">All activities follow traditional cultural protocols</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;