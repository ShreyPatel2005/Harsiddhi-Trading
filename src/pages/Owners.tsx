
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { ArrowLeft, Mail, Phone, Award, Calendar, MapPin, Users, Building2, Star, Target, Heart } from "lucide-react";

const Owners = () => {
  const owners = [
    {
      name: "Mahendra Patel",
      company: "Harsiddhi Tradings",
      role: "Founder & Managing Director",
      experience: "20+ Years",
      specialization: "Food Ingredients & Supply Chain",
      description: "Leading expert in wholesale food ingredient distribution with extensive knowledge of quality control and supply chain management."
    },
    {
      name: "Hansaben Patel",
      company: "Harsiddhi Tradings",
      role: "Co-Founder & Operations Director",
      experience: "18+ Years",
      specialization: "Quality Control & Client Relations",
      description: "Specialist in maintaining quality standards and building long-term client relationships in the food industry."
    },
    {
      name: "Vidisha Chauhan",
      company: "Pavanputra Sales",
      role: "Founder & CEO",
      experience: "15+ Years",
      specialization: "Bakery Equipment & Technology",
      description: "Pioneer in introducing advanced bakery equipment and tools, helping modernize Gujarat's baking industry."
    },
    {
      name: "Sushil Chauhan",
      company: "Pavanputra Sales",
      role: "Co-Founder & Technical Director",
      experience: "16+ Years",
      specialization: "Technical Solutions & Customer Support",
      description: "Technical expert providing comprehensive support and solutions for professional bakery operations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <link rel="stylesheet" href="/fonts/kumar-one.css" />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg shadow-lg border-b-2 border-orange-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-orange-700 hover:text-orange-900 transition-colors">
                <ArrowLeft className="w-6 h-6" />
                <span className="text-sm font-bold">Home</span>
              </Link>
            </div>
            <div className="hidden md:block"> {/* Hide on mobile */}
              <p className="text-lg text-red-600 font-kumar-one font-bold">Harsiddhi Tradings & Pavanputra Sales</p>
            </div>
            <div className="flex items-center space-x-3">
              <BrandLogo size="sm" />
            </div>
          </div>
        </div>
      </header>

      <div className="mt-20 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-6">
            <Users className="w-10 h-10 text-orange-600" />
          </div>
          <h2 className="text-4xl font-bold text-orange-800 mb-6 font-kumar-one">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-orange-700 max-w-4xl mx-auto leading-relaxed">
            With decades of combined experience in the food supply industry, our founders have built 
            a reputation for excellence, innovation, and unwavering commitment to quality. Together, 
            they lead two specialized divisions serving Gujarat's thriving food industry.
          </p>
        </div>

        {/* Company Sections */}
        <div className="space-y-16">
          {/* Harsiddhi Tradings Team */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Building2 className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-3">Harsiddhi Tradings Leadership</h3>
              <p className="text-orange-600 max-w-4xl mx-auto">
                Leading Gujarat's premium food ingredient supply with expertise in quality control and distribution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {owners.filter(owner => owner.company === "Harsiddhi Tradings").map((owner, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-4">
                        <Star className="w-10 h-10 text-orange-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-orange-800 mb-2">{owner.name}</h4>
                      <p className="text-orange-700 font-semibold text-lg mb-1">{owner.role}</p>
                      <p className="text-orange-600 text-sm">{owner.company}</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-center space-x-3 text-sm bg-orange-50 rounded-lg p-3">
                        <Calendar className="w-5 h-5 text-orange-600" />
                        <span className="text-orange-700 font-medium">{owner.experience} Experience</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-sm bg-orange-50 rounded-lg p-3">
                        <Award className="w-5 h-5 text-orange-600" />
                        <span className="text-orange-700 font-medium">{owner.specialization}</span>
                      </div>
                    </div>
                    
                    <p className="text-orange-600 text-sm leading-relaxed text-center">
                      {owner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pavanputra Sales Team */}
          <div>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-orange-800 mb-3">Pavanputra Sales Leadership</h3>
              <p className="text-orange-600 max-w-4xl mx-auto">
                Driving innovation in professional bakery equipment and technology solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {owners.filter(owner => owner.company === "Pavanputra Sales").map((owner, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-orange-100 rounded-full mb-4">
                        <Star className="w-10 h-10 text-orange-600" />
                      </div>
                      <h4 className="text-2xl font-bold text-orange-800 mb-2">{owner.name}</h4>
                      <p className="text-orange-700 font-semibold text-lg mb-1">{owner.role}</p>
                      <p className="text-orange-600 text-sm">{owner.company}</p>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-center space-x-3 text-sm bg-orange-50 rounded-lg p-3">
                        <Calendar className="w-5 h-5 text-orange-600" />
                        <span className="text-orange-700 font-medium">{owner.experience} Experience</span>
                      </div>
                      <div className="flex items-center justify-center space-x-3 text-sm bg-orange-50 rounded-lg p-3">
                        <Award className="w-5 h-5 text-orange-600" />
                        <span className="text-orange-700 font-medium">{owner.specialization}</span>
                      </div>
                    </div>
                    
                    <p className="text-orange-600 text-sm leading-relaxed text-center">
                      {owner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20 bg-white rounded-xl p-8 shadow-lg border-2 border-orange-200">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Our Shared Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on a foundation of trust, quality, and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Excellence</h4>
              <p className="text-gray-600 text-sm">
                Committed to delivering the highest quality products and services to every client
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Local Expertise</h4>
              <p className="text-gray-600 text-sm">
                Deep understanding of Gujarat's market needs and business environment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-orange-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Partnership</h4>
              <p className="text-gray-600 text-sm">
                Building long-term relationships based on trust and mutual success
              </p>
            </div>
          </div>
        </div>
        
      </div>
      {/* Footer - Updated with calmer color and credit */}
        <footer className="bg-amber-100 mt-10 border-round text-gray-800 py-4">
          <div className="container mx-auto px-4 items-center">
            <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <div className="flex items-center justify-center  space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span className="font-bold">Vadodara Locations</span>
                </div>
                <p className="text-slate-600 text-sm text-center font-semibold">Multiple warehouses for faster delivery</p>
              </div>
              <div className="justify-center">
                <div className="flex items-center justify-center  space-x-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-bold">24/7 Support</span>
                </div>
                <p className="text-slate-600 text-sm text-center font-semibold">Dedicated account managers</p>
              </div>
              <div>
                <div className="flex items-center justify-center  space-x-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-bold">Quick Response</span>
                </div>
                <p className="text-slate-600 text-sm text-center font-semibold">Same-day quotes and processing</p>
              </div>
            </div>
            <div className=" text-center mx-8 my-2 pt-8 border-t border-slate-600">
              <div className="flex items-center justify-center space-x-10 mb-3">
                <BrandLogo size="sm" />
              </div>
              <p className="text-slate-600 text-sm text-center font-kumar-one font-semibold">&copy; 2024 All rights reserved. Est. 2010, Vadodara, Gujarat</p>
              <p className="text-slate-800 text-xs mt-2">Website created by Shrey Patel</p>
            </div>
          </div>
        </footer>
    </div>
    
  );
};

export default Owners;
