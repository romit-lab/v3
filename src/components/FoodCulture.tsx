import React from 'react';
import { ChefHat, Utensils, Leaf, Fish, Apple, Users } from 'lucide-react';

const FoodCulture: React.FC = () => {
  const noongarSeasons = [
    {
      name: "Birak (December-January)",
      description: "Hot dry season - time for fishing and gathering coastal foods",
      foods: ["Fresh fish", "Coastal berries", "Sea vegetables"]
    },
    {
      name: "Bunuru (February-March)", 
      description: "Hottest season - inland water sources and root vegetables",
      foods: ["Freshwater fish", "Root vegetables", "Native fruits"]
    },
    {
      name: "Djeran (April-May)",
      description: "Cooler weather begins - time for nut and seed gathering",
      foods: ["Native nuts", "Seeds", "Early winter vegetables"]
    },
    {
      name: "Makuru (June-July)",
      description: "Cold wet season - hearty stews and preserved foods",
      foods: ["Preserved meats", "Root stews", "Traditional breads"]
    },
    {
      name: "Djilba (August-September)",
      description: "Warming up - fresh greens and early spring foods",
      foods: ["Fresh greens", "Spring vegetables", "Young shoots"]
    },
    {
      name: "Kambarang (October-November)",
      description: "Wildflower season - abundant fresh foods and preparation",
      foods: ["Wildflower honey", "Fresh berries", "Seasonal vegetables"]
    }
  ];

  const kitchenPrograms = [
    {
      title: "Six Seasons Cooking Classes",
      description: "Learn to prepare traditional Noongar dishes following the seasonal calendar, taught by community Elders.",
      frequency: "Weekly",
      leader: "Community Elders & Trained Cooks"
    },
    {
      title: "Community Kitchen Co-op",
      description: "Shared kitchen space for families and community groups to prepare traditional foods together.",
      frequency: "Daily Access",
      leader: "Community-Managed"
    },
    {
      title: "Bushfood Workshops",
      description: "Learn about native ingredients sourced from local suppliers and traditional preparation methods.",
      frequency: "Monthly",
      leader: "Local Bushfood Experts"
    },
    {
      title: "Cultural Feast Catering",
      description: "Community-run catering service featuring traditional foods for events and celebrations.",
      frequency: "On-demand",
      leader: "Trained Community Cooks"
    }
  ];

  return (
    <section id="culture" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Food & Cultural Heritage
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Food is at the heart of our culture. Our community kitchen celebrates 
            traditional Whadjuk Noongar cuisine following the six seasons, while creating 
            opportunities for sharing knowledge and building connections on Country.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-amber-900 mb-8 text-center flex items-center justify-center">
            <Leaf className="w-8 h-8 mr-3 text-amber-600" />
            The Six Noongar Seasons
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {noongarSeasons.map((season, index) => (
              <div 
                key={index}
                className="bg-stone-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border-l-4 border-amber-600"
              >
                <h4 className="text-lg font-semibold text-amber-900 mb-3">
                  {season.name}
                </h4>
                <p className="text-stone-600 mb-4 text-sm">{season.description}</p>
                <div>
                  <h5 className="font-medium text-stone-800 mb-2">Traditional Foods:</h5>
                  <ul className="text-sm text-stone-600 space-y-1">
                    {season.foods.map((food, foodIndex) => (
                      <li key={foodIndex} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-2"></span>
                        {food}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
              <ChefHat className="w-8 h-8 mr-3 text-amber-600" />
              Kitchen Programs & Services
            </h3>
            <div className="space-y-6">
              {kitchenPrograms.map((program, index) => (
                <div 
                  key={index}
                  className="bg-amber-50 rounded-xl p-6 border-l-4 border-amber-600"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-semibold text-amber-900">
                      {program.title}
                    </h4>
                    <span className="text-sm text-amber-700 bg-white px-3 py-1 rounded-full">
                      {program.frequency}
                    </span>
                  </div>
                  <p className="text-stone-600 mb-3">{program.description}</p>
                  <div className="flex items-center text-sm text-amber-700">
                    <Users className="w-4 h-4 mr-2" />
                    Led by: {program.leader}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-6">
              Community Co-Design Process
            </h3>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-6 mb-6">
              <h4 className="text-lg font-semibold text-amber-900 mb-4">
                Who Contributes to Our Food Programs?
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Community Elders</h5>
                    <p className="text-stone-700 text-sm">Share traditional recipes and cooking methods</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Local Bushfood Suppliers</h5>
                    <p className="text-stone-700 text-sm">Provide native ingredients and seasonal guidance</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Trained Community Cooks</h5>
                    <p className="text-stone-700 text-sm">Lead cooking classes and manage catering services</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3 mt-2"></div>
                  <div>
                    <h5 className="font-medium text-amber-900">Youth & Families</h5>
                    <p className="text-stone-700 text-sm">Participate in learning and food-sharing events</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-stone-200">
              <h4 className="text-lg font-semibold text-amber-900 mb-4">
                This Month's Seasonal Events
              </h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium text-stone-800">Seasonal Harvest Feast</div>
                    <div className="text-sm text-stone-600">March 20th, 5:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium text-stone-800">Traditional Bread Making</div>
                    <div className="text-sm text-stone-600">March 25th, 2:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-amber-600 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium text-stone-800">Elder's Recipe Collection</div>
                    <div className="text-sm text-stone-600">March 30th, 10:00 AM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Community-Managed Kitchen Space
          </h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Our kitchen operates under community governance, with all proceeds 
            reinvested into programs and community development. Local Aboriginal 
            cooks lead all food preparation and cultural education.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-300">500+</div>
              <div className="text-sm text-amber-200">Meals Served Monthly</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-300">50+</div>
              <div className="text-sm text-amber-200">Traditional Recipes</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold text-amber-300">6</div>
              <div className="text-sm text-amber-200">Seasonal Menus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodCulture;