import React from 'react';
import { Home, Trees, Mountain, Waves, Users, Palette } from 'lucide-react';

const Architecture: React.FC = () => {
  const architecturalFeatures = [
    {
      icon: Home,
      title: "Curved Community Spaces",
      description: "Our main gathering areas feature curved architecture that reflects connection to Country and natural flow.",
      details: ["Natural timber and stone construction", "Circular seating arrangements", "Open-air design for connection to land"]
    },
    {
      icon: Trees,
      title: "Seasonal Gardens",
      description: "Landscaped areas featuring native plants that reflect the six Noongar seasons.",
      details: ["Six-season garden layout", "Native plant medicine area", "Seasonal ceremony spaces"]
    },
    {
      icon: Mountain,
      title: "Storytelling Amphitheater",
      description: "Outdoor performance space designed for traditional storytelling and cultural presentations.",
      details: ["Natural stone seating", "Acoustic design for clear sound", "Weather protection canopy"]
    },
    {
      icon: Waves,
      title: "Water Features",
      description: "Traditional water elements that honor our connection to rivers and wetlands of Whadjuk Country.",
      details: ["Healing water garden", "Traditional food preparation area", "Ceremonial cleansing space"]
    }
  ];

  const coDesignProcess = [
    {
      title: "Elder & Community Consultation",
      description: "All design decisions guided by Whadjuk Noongar Elders and community representatives"
    },
    {
      title: "Cultural Architects",
      description: "Collaboration with Noongar architects and designers who understand Country"
    },
    {
      title: "Traditional Materials",
      description: "Use of locally sourced materials that connect to traditional building practices"
    },
    {
      title: "Seasonal Considerations",
      description: "Design that responds to the six Noongar seasons and natural cycles"
    }
  ];

  const sustainabilityFeatures = [
    "Solar panels integrated into curved roof design",
    "Rainwater collection system for seasonal gardens",
    "Natural ventilation following traditional principles",
    "Locally sourced building materials from Country",
    "Energy-efficient systems with cultural sensitivity",
    "Waste management systems that honor the land"
  ];

  return (
    <section className="py-16 sm:py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Co-Designed Architecture & Spaces
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Our cafe's design honors traditional Whadjuk Noongar connection to Country 
            while incorporating modern sustainability features. Every space is co-designed 
            with community input to support gathering, cultural practice, and spiritual connection.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {architecturalFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                  <feature.icon className="w-8 h-8 text-amber-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-amber-900">
                    {feature.title}
                  </h3>
                </div>
              </div>
              <p className="text-stone-600 mb-6">{feature.description}</p>
              <div className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    <span className="text-stone-700">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 sm:p-12 mb-16">
          <h3 className="text-2xl font-bold text-amber-900 mb-8 text-center flex items-center justify-center">
            <Users className="w-8 h-8 mr-3 text-amber-600" />
            Community Co-Design Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coDesignProcess.map((process, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border-l-4 border-amber-600">
                <h4 className="text-lg font-semibold text-amber-900 mb-3">
                  {process.title}
                </h4>
                <p className="text-stone-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Sustainable Design on Country
              </h3>
              <p className="text-amber-100 mb-6 leading-relaxed">
                Our commitment to caring for Country is reflected in every aspect of our 
                building design. We honor traditional Noongar principles of environmental 
                stewardship while creating a modern, efficient space for our community.
              </p>
              <button className="bg-white text-amber-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300">
                Take a Virtual Tour
              </button>
            </div>
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4">Sustainable Features</h4>
              <div className="space-y-3">
                {sustainabilityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-amber-300 rounded-full mr-3"></div>
                    <span className="text-amber-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-amber-900 mb-8 text-center flex items-center justify-center">
            <Palette className="w-8 h-8 mr-3 text-amber-600" />
            Community Art & Cultural Spaces
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-amber-800 mb-2">3,500</div>
              <div className="text-stone-600 mb-4">Square Feet</div>
              <p className="text-sm text-stone-600">Designed with community input and Elder guidance</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-amber-800 mb-2">6</div>
              <div className="text-stone-600 mb-4">Distinct Cultural Spaces</div>
              <p className="text-sm text-stone-600">Each space serves specific cultural and community functions</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-lg">
              <div className="text-3xl font-bold text-amber-800 mb-2">80+</div>
              <div className="text-stone-600 mb-4">Community Capacity</div>
              <p className="text-sm text-stone-600">Flexible spaces for gatherings of all sizes</p>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">
            Art & Cultural Expression
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-amber-900 mb-4">Community Art Wall</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Rotating Exhibitions</h5>
                    <p className="text-stone-700 text-sm">Featuring emerging Noongar artists</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Artist Workshops</h5>
                    <p className="text-stone-700 text-sm">Community workshops led by local artists</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Elder-Youth Collaborations</h5>
                    <p className="text-stone-700 text-sm">Intergenerational art projects telling cultural stories</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-amber-900 mb-4">Interactive Elements</h4>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Seasonal Gardens</h5>
                    <p className="text-stone-700 text-sm">Interactive spaces reflecting the six Noongar seasons</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Storytelling Spaces</h5>
                    <p className="text-stone-700 text-sm">Designed for sharing traditional stories and knowledge</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Cultural Learning Areas</h5>
                    <p className="text-stone-700 text-sm">Spaces for language, art, and cultural education</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;