import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Indigenous-inspired background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-red-900"></div>
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Decorative Aboriginal-inspired patterns using CSS */}
      <div className="absolute inset-0 opacity-20">
        {/* Concentric circles pattern */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border-4 border-amber-400 rounded-full"></div>
        <div className="absolute top-1/4 left-1/6 w-24 h-24 border-2 border-amber-300 rounded-full ml-4 mt-4"></div>
        <div className="absolute top-1/4 left-1/6 w-16 h-16 border-2 border-amber-200 rounded-full ml-8 mt-8"></div>
        
        {/* Dot patterns */}
        <div className="absolute top-1/3 right-1/4 grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-3 h-3 bg-amber-400 rounded-full"></div>
          ))}
        </div>
        
        {/* Wavy lines pattern */}
        <div className="absolute bottom-1/3 left-1/3">
          <svg width="200" height="60" viewBox="0 0 200 60" className="text-amber-300">
            <path d="M0,30 Q50,10 100,30 T200,30" stroke="currentColor" strokeWidth="3" fill="none"/>
            <path d="M0,40 Q50,20 100,40 T200,40" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M0,50 Q50,30 100,50 T200,50" stroke="currentColor" strokeWidth="2" fill="none"/>
          </svg>
        </div>
        
        {/* Additional circular elements */}
        <div className="absolute bottom-1/4 right-1/6 w-20 h-20 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full"></div>
        <div className="absolute top-1/2 left-1/12 w-16 h-16 bg-gradient-to-br from-yellow-400/30 to-amber-500/30 rounded-full"></div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-600/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-orange-600/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="flex flex-col items-center justify-center mb-8">
          <Heart className="w-16 h-16 text-amber-300 mb-6 animate-pulse" />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
            Welcome to
          </h1>
          <div className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-amber-200 via-yellow-200 to-orange-200 bg-clip-text text-transparent mb-2">
            Gaboodjoolup
          </div>
          <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-amber-200 tracking-wider">
            CAFE
          </div>
        </div>
        
        <p className="text-xl sm:text-2xl text-stone-200 mb-8 leading-relaxed max-w-4xl mx-auto">
          A place where Whadjuk Noongar culture thrives, opportunities flourish, 
          and community bonds strengthen through shared stories, traditional foods, 
          and meaningful connections on Country.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
            Explore Opportunities
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border-2 border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-amber-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Learn About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;