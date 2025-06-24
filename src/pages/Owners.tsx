
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
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <BrandLogo size="sm" />
              <div>
                <h1 className="text-lg font-bold text-orange-800">Our Leadership Team</h1>
                <p className="text-xs text-orange-600">Meet the experts behind our success</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-20 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-800 mb-6">
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
                    
                    <div className="flex space-x-3">
                      <Link to="/contact" className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm">
                        <Phone className="w-3 h-3" />
                        <span>Contact</span>
                      </Link>
                      <Link to="/contact" className="flex items-center space-x-2 px-4 py-2 border border-orange-300 text-orange-700 rounded-lg hover:bg-orange-50 transition-colors text-sm">
                        <Mail className="w-3 h-3" />
                        <span>Email</span>
                      </Link>
                    </div>
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
                    
                    <div className="flex space-x-3">
                      <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors text-sm">
                        <Phone className="w-3 h-3" />
                        <span>Contact</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 border border-orange-300 text-orange-700 rounded-lg hover:bg-orange-50 transition-colors text-sm">
                        <Mail className="w-3 h-3" />
                        <span>Email</span>
                      </button>
                    </div>
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
    </div>
  );
};

export default Owners;
