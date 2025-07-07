import React from 'react';
import { Calendar, Users, Star, BookOpen, Music, Palette } from 'lucide-react';

const CommunityPrograms: React.FC = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Elder Storytelling Circle",
      schedule: "Every Wednesday, 2:00 PM",
      description: "Traditional stories and wisdom shared by community elders.",
      participants: "All ages welcome"
    },
    {
      icon: Music,
      title: "Traditional Music & Dance",
      schedule: "Saturdays, 10:00 AM",
      description: "Learn and practice traditional songs, dances, and instruments.",
      participants: "Youth & Adults"
    },
    {
      icon: Palette,
      title: "Aboriginal Art Workshop",
      schedule: "Fridays, 6:00 PM",
      description: "Create traditional and contemporary Aboriginal art forms.",
      participants: "All skill levels"
    },
    {
      icon: Users,
      title: "Community Feast",
      schedule: "Monthly - First Sunday",
      description: "Shared meal featuring traditional foods and recipes.",
      participants: "Entire community"
    }
  ];

  const upcomingEvents = [
    {
      date: "March 15",
      title: "Traditional Food Festival",
      time: "11:00 AM - 4:00 PM",
      description: "Celebration of Aboriginal cuisine with cooking demonstrations and tastings."
    },
    {
      date: "March 22",
      title: "Job Fair & Skills Workshop",
      time: "9:00 AM - 3:00 PM",
      description: "Connect with local employers and develop professional skills."
    },
    {
      date: "April 5",
      title: "Spring Ceremony",
      time: "Sunrise",
      description: "Traditional spring welcoming ceremony and community gathering."
    }
  ];

  return (
    <section id="programs" className="py-16 sm:py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-amber-900 mb-4">
            Community Programs & Events
          </h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Our programs are designed to strengthen community bonds, preserve cultural 
            traditions, and provide opportunities for learning and growth for all ages.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Regular Programs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {programs.map((program, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                      <program.icon className="w-6 h-6 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-amber-900">
                        {program.title}
                      </h4>
                      <p className="text-sm text-amber-700 flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {program.schedule}
                      </p>
                    </div>
                  </div>
                  <p className="text-stone-600 mb-3">{program.description}</p>
                  <div className="flex items-center text-sm text-stone-500">
                    <Users className="w-4 h-4 mr-1" />
                    {program.participants}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-900 mb-6">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-amber-600"
                >
                  <div className="flex items-center mb-2">
                    <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
                      {event.date}
                    </div>
                    <Star className="w-4 h-4 text-amber-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-amber-900 mb-2">
                    {event.title}
                  </h4>
                  <p className="text-amber-700 text-sm mb-2">{event.time}</p>
                  <p className="text-stone-600 text-sm">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-900 to-orange-800 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            Join Our Community
          </h3>
          <p className="text-amber-100 mb-6 max-w-2xl mx-auto">
            Whether you're looking to learn, share, or simply connect with others, 
            our programs offer something for everyone. All community members are 
            welcome to participate.
          </p>
          <button className="bg-white text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-300">
            Get Program Schedule
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityPrograms;