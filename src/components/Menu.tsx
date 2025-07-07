import React, { useState } from 'react';
import { Coffee, Utensils, Leaf, Star, Clock, Heart } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('breakfast');

  const menuCategories = [
    { id: 'breakfast', name: 'Breakfast', icon: Coffee },
    { id: 'lunch', name: 'Lunch', icon: Utensils },
    { id: 'traditional', name: 'Traditional Foods', icon: Leaf },
    { id: 'beverages', name: 'Beverages', icon: Coffee },
  ];

  const menuItems = {
    breakfast: [
      {
        name: "Wattle Seed Pancakes",
        description: "Fluffy pancakes infused with native wattle seed, served with seasonal bush honey and fresh berries",
        price: "$18",
        seasonal: "Kambarang (Spring)",
        dietary: ["V", "GF"]
      },
      {
        name: "Bush Tomato Scramble",
        description: "Free-range eggs scrambled with native bush tomatoes, spinach, and local goat cheese on sourdough",
        price: "$16",
        seasonal: "Year Round",
        dietary: ["V"]
      },
      {
        name: "Kangaroo Island Honey Toast",
        description: "Thick-cut sourdough with native honey, macadamia butter, and seasonal native fruits",
        price: "$14",
        seasonal: "Birak (Summer)",
        dietary: ["V"]
      },
      {
        name: "Traditional Damper",
        description: "House-made damper bread served warm with native pepper berry butter and seasonal preserves",
        price: "$12",
        seasonal: "Year Round",
        dietary: ["V"]
      }
    ],
    lunch: [
      {
        name: "Barramundi with Native Greens",
        description: "Pan-seared barramundi with saltbush, warrigal greens, and lemon myrtle quinoa",
        price: "$28",
        seasonal: "Djeran (Autumn)",
        dietary: ["GF", "DF"]
      },
      {
        name: "Kangaroo Medallions",
        description: "Ethically sourced kangaroo with native pepper berry crust, roasted root vegetables, and bush tomato jus",
        price: "$32",
        seasonal: "Makuru (Winter)",
        dietary: ["GF", "DF"]
      },
      {
        name: "Native Seed Salad Bowl",
        description: "Quinoa, native seeds, seasonal greens, finger lime, and Davidson plum vinaigrette",
        price: "$22",
        seasonal: "Djilba (Late Winter)",
        dietary: ["V", "GF", "DF"]
      },
      {
        name: "Emu Burger",
        description: "Lean emu patty with native pepper mayo, bush tomato relish, and seasonal greens on damper bun",
        price: "$24",
        seasonal: "Year Round",
        dietary: ["DF"]
      }
    ],
    traditional: [
      {
        name: "Six Seasons Tasting Plate",
        description: "A journey through Noongar seasons featuring traditional foods prepared by community Elders",
        price: "$35",
        seasonal: "Seasonal Rotation",
        dietary: ["GF", "DF"]
      },
      {
        name: "Bush Tucker Soup",
        description: "Hearty soup featuring native vegetables, herbs, and traditional preparation methods",
        price: "$18",
        seasonal: "Makuru (Winter)",
        dietary: ["V", "GF", "DF"]
      },
      {
        name: "Traditional Fish Preparation",
        description: "Fresh local fish prepared using traditional smoking and seasoning techniques",
        price: "$26",
        seasonal: "Birak (Summer)",
        dietary: ["GF", "DF"]
      },
      {
        name: "Native Fruit Platter",
        description: "Seasonal selection of native fruits including quandong, finger lime, and Davidson plum",
        price: "$16",
        seasonal: "Seasonal Availability",
        dietary: ["V", "GF", "DF"]
      }
    ],
    beverages: [
      {
        name: "Lemon Myrtle Tea",
        description: "Aromatic native tea with citrus notes, served hot or iced",
        price: "$6",
        seasonal: "Year Round",
        dietary: ["V", "GF", "DF"]
      },
      {
        name: "Wattle Seed Latte",
        description: "Rich coffee blend with native wattle seed, creating unique nutty chocolate flavors",
        price: "$7",
        seasonal: "Year Round",
        dietary: ["V"]
      },
      {
        name: "Davidson Plum Iced Tea",
        description: "Refreshing iced tea with tart Davidson plum and native mint",
        price: "$8",
        seasonal: "Bunuru (Hot Season)",
        dietary: ["V", "GF", "DF"]
      },
      {
        name: "Traditional Bush Tea Blend",
        description: "Carefully crafted blend of native herbs and leaves, recipe shared by community Elders",
        price: "$6",
        seasonal: "Year Round",
        dietary: ["V", "GF", "DF"]
      }
    ]
  };

  const getDietaryIcon = (dietary: string) => {
    switch (dietary) {
      case 'V': return { label: 'Vegetarian', color: 'bg-green-100 text-green-800' };
      case 'GF': return { label: 'Gluten Free', color: 'bg-blue-100 text-blue-800' };
      case 'DF': return { label: 'Dairy Free', color: 'bg-purple-100 text-purple-800' };
      default: return { label: '', color: '' };
    }
  };

  return (
    <section id="menu" className="py-16 sm:py-20 bg-gradient-to-br from-stone-50 to-amber-50 relative overflow-hidden">
      {/* Elegant floral background patterns */}
      <div className="absolute inset-0 opacity-5">
        {/* Floral corner decorations */}
        <div className="absolute top-8 left-8">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-amber-600">
            <circle cx="60" cy="60" r="3" fill="currentColor"/>
            <circle cx="45" cy="45" r="2" fill="currentColor"/>
            <circle cx="75" cy="45" r="2" fill="currentColor"/>
            <circle cx="45" cy="75" r="2" fill="currentColor"/>
            <circle cx="75" cy="75" r="2" fill="currentColor"/>
            <path d="M60,20 Q80,40 60,60 Q40,40 60,20" fill="currentColor" opacity="0.3"/>
            <path d="M20,60 Q40,80 60,60 Q40,40 20,60" fill="currentColor" opacity="0.3"/>
            <path d="M60,100 Q80,80 60,60 Q40,80 60,100" fill="currentColor" opacity="0.3"/>
            <path d="M100,60 Q80,80 60,60 Q80,40 100,60" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        <div className="absolute top-8 right-8">
          <svg width="120" height="120" viewBox="0 0 120 120" className="text-rose-400">
            <circle cx="60" cy="60" r="3" fill="currentColor"/>
            <circle cx="45" cy="45" r="2" fill="currentColor"/>
            <circle cx="75" cy="45" r="2" fill="currentColor"/>
            <circle cx="45" cy="75" r="2" fill="currentColor"/>
            <circle cx="75" cy="75" r="2" fill="currentColor"/>
            <path d="M60,20 Q80,40 60,60 Q40,40 60,20" fill="currentColor" opacity="0.3"/>
            <path d="M20,60 Q40,80 60,60 Q40,40 20,60" fill="currentColor" opacity="0.3"/>
            <path d="M60,100 Q80,80 60,60 Q40,80 60,100" fill="currentColor" opacity="0.3"/>
            <path d="M100,60 Q80,80 60,60 Q80,40 100,60" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        <div className="absolute bottom-8 left-8">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-green-400">
            <circle cx="50" cy="50" r="2" fill="currentColor"/>
            <path d="M50,10 Q70,30 50,50 Q30,30 50,10" fill="currentColor" opacity="0.3"/>
            <path d="M10,50 Q30,70 50,50 Q30,30 10,50" fill="currentColor" opacity="0.3"/>
            <path d="M50,90 Q70,70 50,50 Q30,70 50,90" fill="currentColor" opacity="0.3"/>
            <path d="M90,50 Q70,70 50,50 Q70,30 90,50" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
        <div className="absolute bottom-8 right-8">
          <svg width="100" height="100" viewBox="0 0 100 100" className="text-pink-400">
            <circle cx="50" cy="50" r="2" fill="currentColor"/>
            <path d="M50,10 Q70,30 50,50 Q30,30 50,10" fill="currentColor" opacity="0.3"/>
            <path d="M10,50 Q30,70 50,50 Q30,30 10,50" fill="currentColor" opacity="0.3"/>
            <path d="M50,90 Q70,70 50,50 Q30,70 50,90" fill="currentColor" opacity="0.3"/>
            <path d="M90,50 Q70,70 50,50 Q70,30 90,50" fill="currentColor" opacity="0.3"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-amber-800 via-rose-600 to-pink-600 bg-clip-text text-transparent">
              Our Menu
            </h2>
          </div>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating the six Noongar seasons through native ingredients and traditional preparation methods. 
            Each dish tells a story of Country, culture, and community, prepared with love and respect.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-rose-500 text-white shadow-lg'
                  : 'bg-white text-stone-700 hover:bg-amber-50 border border-stone-200'
              }`}
            >
              <category.icon className="w-5 h-5 mr-2" />
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-100 relative overflow-hidden"
            >
              {/* Decorative corner elements */}
              <div className="absolute top-3 right-3 w-8 h-8 opacity-20">
                <svg width="32" height="32" viewBox="0 0 32 32" className="text-rose-400">
                  <circle cx="16" cy="16" r="2" fill="currentColor"/>
                  <path d="M16,4 Q24,12 16,16 Q8,12 16,4" fill="currentColor" opacity="0.5"/>
                  <path d="M4,16 Q12,24 16,16 Q12,8 4,16" fill="currentColor" opacity="0.5"/>
                  <path d="M16,28 Q24,20 16,16 Q8,20 16,28" fill="currentColor" opacity="0.5"/>
                  <path d="M28,16 Q20,24 16,16 Q20,8 28,16" fill="currentColor" opacity="0.5"/>
                </svg>
              </div>

              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-amber-900 mb-2 flex items-center">
                    {item.name}
                    {activeCategory === 'traditional' && (
                      <Star className="w-5 h-5 text-amber-500 ml-2" />
                    )}
                  </h3>
                  <div className="flex items-center text-sm text-amber-700 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    {item.seasonal}
                  </div>
                </div>
                <div className="text-2xl font-bold text-rose-600 ml-4">
                  {item.price}
                </div>
              </div>

              <p className="text-stone-600 leading-relaxed mb-4">
                {item.description}
              </p>

              {/* Dietary indicators */}
              <div className="flex flex-wrap gap-2">
                {item.dietary.map((diet, dietIndex) => {
                  const dietInfo = getDietaryIcon(diet);
                  return (
                    <span
                      key={dietIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${dietInfo.color}`}
                    >
                      {diet}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Special Notice */}
        <div className="mt-16 bg-gradient-to-r from-amber-100 via-rose-50 to-pink-100 rounded-2xl p-8 border border-rose-200 relative overflow-hidden">
          {/* Decorative floral elements */}
          <div className="absolute top-4 left-4 w-12 h-12 opacity-20">
            <svg width="48" height="48" viewBox="0 0 48 48" className="text-rose-500">
              <circle cx="24" cy="24" r="3" fill="currentColor"/>
              <path d="M24,8 Q32,16 24,24 Q16,16 24,8" fill="currentColor" opacity="0.6"/>
              <path d="M8,24 Q16,32 24,24 Q16,16 8,24" fill="currentColor" opacity="0.6"/>
              <path d="M24,40 Q32,32 24,24 Q16,32 24,40" fill="currentColor" opacity="0.6"/>
              <path d="M40,24 Q32,32 24,24 Q32,16 40,24" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12 opacity-20">
            <svg width="48" height="48" viewBox="0 0 48 48" className="text-amber-500">
              <circle cx="24" cy="24" r="3" fill="currentColor"/>
              <path d="M24,8 Q32,16 24,24 Q16,16 24,8" fill="currentColor" opacity="0.6"/>
              <path d="M8,24 Q16,32 24,24 Q16,16 8,24" fill="currentColor" opacity="0.6"/>
              <path d="M24,40 Q32,32 24,24 Q16,32 24,40" fill="currentColor" opacity="0.6"/>
              <path d="M40,24 Q32,32 24,24 Q32,16 40,24" fill="currentColor" opacity="0.6"/>
            </svg>
          </div>

          <div className="text-center relative z-10">
            <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center justify-center">
              <Leaf className="w-8 h-8 mr-3 text-green-600" />
              Seasonal & Sustainable
            </h3>
            <p className="text-stone-700 leading-relaxed max-w-3xl mx-auto mb-6">
              Our menu changes with the six Noongar seasons to honor traditional food cycles and ensure 
              the freshest native ingredients. All dishes are prepared by community members using 
              traditional knowledge passed down through generations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/70 rounded-lg p-4 border border-rose-200">
                <h4 className="font-semibold text-amber-900 mb-2">Community Sourced</h4>
                <p className="text-sm text-stone-600">Ingredients sourced from local Aboriginal suppliers and community gardens</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4 border border-rose-200">
                <h4 className="font-semibold text-amber-900 mb-2">Traditional Methods</h4>
                <p className="text-sm text-stone-600">Cooking techniques taught by Elders and cultural knowledge holders</p>
              </div>
              <div className="bg-white/70 rounded-lg p-4 border border-rose-200">
                <h4 className="font-semibold text-amber-900 mb-2">Seasonal Rotation</h4>
                <p className="text-sm text-stone-600">Menu items change to reflect the natural cycles of Country</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-amber-600 to-rose-500 hover:from-amber-700 hover:to-rose-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;