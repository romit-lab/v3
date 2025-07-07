import React from 'react';
import { Briefcase, Users, ChefHat, Hammer, GraduationCap, TrendingUp, Handshake } from 'lucide-react';

const JobOpportunities: React.FC = () => {
  const opportunities = [
    {
      icon: ChefHat,
      title: "Traditional Food Specialist",
      department: "Cultural Kitchen",
      type: "Full-time",
      description: "Share ancestral cooking knowledge and lead traditional food preparation workshops featuring the 6 Noongar seasons.",
      requirements: ["Knowledge of traditional Noongar cuisine", "Food safety certification", "Community leadership experience"]
    },
    {
      icon: GraduationCap,
      title: "Cultural Education Coordinator",
      department: "Community Programs",
      type: "Full-time",
      description: "Design and deliver educational programs that preserve and share Whadjuk Noongar culture and language.",
      requirements: ["Education background", "Cultural knowledge", "Program development skills"]
    },
    {
      icon: Hammer,
      title: "Facility Maintenance Specialist",
      department: "Operations",
      type: "Full-time",
      description: "Maintain our cafe spaces with care and respect for traditional architectural elements.",
      requirements: ["General maintenance skills", "Carpentry experience preferred", "Cultural sensitivity"]
    },
    {
      icon: Users,
      title: "Community Outreach Worker",
      department: "Community Services",
      type: "Part-time",
      description: "Connect with community members and support program participation through culturally appropriate engagement.",
      requirements: ["Strong communication skills", "Community connections", "Flexible schedule"]
    }
  ];

  const pathwayFeatures = [
    "Mentorship programs with experienced community leaders",
    "Training pathways in hospitality, customer service, and food production",
    "Leadership development opportunities",
    "Transition to governance and ownership roles over time",
    "Cultural leave for traditional ceremonies and obligations",
    "Professional development with cultural competency focus"
  ];

  const industryPartners = [
    {
      name: "Kuditj",
      description: "Providing specialized training in Aboriginal business practices and cultural protocols"
    },
    {
      name: "Gather Foods",
      description: "Supporting food service training and sustainable kitchen operations"
    },
    {
      name: "Waalitj Business Hub",
      description: "Offering business development support and entrepreneurship training"
    }
  ];

  return (
    <section id="opportunities" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Meaningful Employment Opportunities
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Join our team and be part of something bigger. We offer positions that 
            honor your skills, respect your culture, and provide pathways for 
            personal and professional growth within our community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {opportunities.map((job, index) => (
            <div 
              key={index}
              className="bg-stone-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-stone-200"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <job.icon className="w-6 h-6 text-amber-700" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-amber-900">
                      {job.title}
                    </h3>
                    <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-amber-700 font-medium mb-3">{job.department}</p>
                  <p className="text-stone-600 mb-4">{job.description}</p>
                  <div>
                    <h4 className="font-semibold text-stone-800 mb-2">Requirements:</h4>
                    <ul className="text-sm text-stone-600 space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 rounded-2xl p-8 sm:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-amber-900 mb-4 flex items-center">
                <TrendingUp className="w-8 h-8 mr-3 text-amber-600" />
                Career Progression & Ownership
              </h3>
              <p className="text-stone-600 mb-6 leading-relaxed">
                We operate as a social enterprise where proceeds are reinvested into 
                the community. Our commitment includes creating pathways for community 
                members to progress into leadership and eventual ownership roles.
              </p>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center">
                <Briefcase className="w-5 h-5 mr-2" />
                Apply Now
              </button>
            </div>
            <div className="space-y-3">
              {pathwayFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                  <span className="text-stone-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-8 sm:p-12 text-white text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Community-Led Employment</h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            All positions are designed with community input and Elder guidance. 
            We prioritize hiring from within our community and providing ongoing 
            support for career development and cultural obligations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-300">85%</div>
              <div className="text-sm text-amber-200">Community Hire Rate</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-300">40+</div>
              <div className="text-sm text-amber-200">Training Hours/Year</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-300">12</div>
              <div className="text-sm text-amber-200">Leadership Positions</div>
            </div>
          </div>
        </div>

        <div className="bg-stone-50 rounded-2xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center flex items-center justify-center">
            <Handshake className="w-8 h-8 mr-3 text-amber-600" />
            Industry Training Partners
          </h3>
          <p className="text-stone-600 mb-8 text-center max-w-3xl mx-auto">
            We work with respected industry partners to provide comprehensive training 
            and ongoing business support, ensuring our staff receive the highest quality 
            professional development while maintaining cultural integrity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryPartners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-600 hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-lg font-semibold text-amber-900 mb-3">
                  {partner.name}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-stone-600 text-sm">
              These partnerships ensure our team receives industry-leading training while 
              maintaining our commitment to Aboriginal business practices and cultural values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOpportunities;