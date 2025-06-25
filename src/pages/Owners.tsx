
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { ArrowLeft, Mail, Phone, Award, Calendar, MapPin } from "lucide-react";

const Owners = () => {
  const owners = [
    {
      name: "Mahendra Patel",
      company: "Harsiddhi Tradings",
      role: "Founder & Managing Director",
      experience: "20+ Years",
      specialization: "Food Ingredients & Supply Chain",
      image: "/uploads/mahendra.png",
      description: "Leading expert in wholesale food ingredient distribution with extensive knowledge of quality control and supply chain management."
    },
    {
      name: "Hansaben Patel",
      company: "Harsiddhi Tradings",
      role: "Co-Founder & Operations Director",
      experience: "18+ Years",
      specialization: "Quality Control & Client Relations",
      image: "/uploads/hansaben.png",
      description: "Specialist in maintaining quality standards and building long-term client relationships in the food industry."
    },
    {
      name: "Vidisha Chauhan",
      company: "Pavanputra Sales",
      role: "Founder & CEO",
      experience: "15+ Years",
      specialization: "Bakery Equipment & Technology",
      image: "/uploads/vidisha.png",
      description: "Pioneer in introducing advanced bakery equipment and tools, helping modernize Gujarat's baking industry."
    },
    {
      name: "Sushil Chauhan",
      company: "Pavanputra Sales",
      role: "Co-Founder & Technical Director",
      experience: "16+ Years",
      specialization: "Technical Solutions & Customer Support",
      image: "/uploads/sushil.png",
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
          <h2 className="text-3xl font-bold text-orange-800 mb-6">
            Meet Our Leadership Team
          </h2>
          <p className="text-lg text-orange-700 max-w-6xl mx-auto leading-relaxed">
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
              <h3 className="text-2xl font-bold text-orange-800 mb-3">Harsiddhi Tradings Leadership</h3>
              <p className="text-orange-600 max-w-6xl mx-auto">
                Leading Gujarat's premium food ingredient supply with expertise in quality control and distribution
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {owners.filter(owner => owner.company === "Harsiddhi Tradings").map((owner, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-orange-200">
                  <div className="relative">
                    <img 
                      src={owner.image} 
                      alt={owner.name}
                      className="w-full h-86 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-orange-800 mb-1">{owner.name}</h4>
                      <p className="text-orange-700 font-medium text-sm">{owner.role}</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-700">{owner.experience} Experience</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Award className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-700">{owner.specialization}</span>
                      </div>
                    </div>
                    
                    <p className="text-orange-600 text-sm leading-relaxed mb-6">
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
              <h3 className="text-2xl font-bold text-orange-800 mb-3">Pavanputra Sales Leadership</h3>
              <p className="text-orange-600 max-w-4xl mx-auto">
                Driving innovation in professional bakery equipment and technology solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {owners.filter(owner => owner.company === "Pavanputra Sales").map((owner, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-orange-200">
                  <div className="relative">
                    <img 
                      src={owner.image} 
                      alt={owner.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="text-xl font-bold text-orange-800 mb-1">{owner.name}</h4>
                      <p className="text-orange-700 font-medium text-sm">{owner.role}</p>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center space-x-2 text-sm">
                        <Calendar className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-700">{owner.experience} Experience</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Award className="w-4 h-4 text-orange-600" />
                        <span className="text-orange-700">{owner.specialization}</span>
                      </div>
                    </div>
                    
                    <p className="text-orange-600 text-sm leading-relaxed mb-6">
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
            <h3 className="text-2xl font-bold text-orange-800 mb-4">Our Shared Values</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Built on a foundation of trust, quality, and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-gray-700" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Excellence</h4>
              <p className="text-gray-600 text-sm">
                Committed to delivering the highest quality products and services to every client
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-gray-700" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Local Expertise</h4>
              <p className="text-gray-600 text-sm">
                Deep understanding of Gujarat's market needs and business environment
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-gray-700" />
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
