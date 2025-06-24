
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Phone, Mail, MapPin, Award, Users, Clock, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Updated carousel images without founder photos
  const carouselImages = [
    { url: "/uploads/store entrance.png" },
    { url: "/uploads/harsiddhi.png" },
    { url: "/uploads/pavanputra.png" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages]);

  useEffect(() => {
    // Smooth scroll to top on component mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <link rel="stylesheet" href="/fonts/kumar-one.css" />
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg shadow-lg border-b-2 border-orange-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button onClick={scrollToTop} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                <BrandLogo size="md" />
                <div>
                  <p className="text-lg text-orange-600 font-kumar-one font-bold">Wholesale Suppliers</p>
                </div>
              </button>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-orange-700 hover:text-orange-900 hover:bg-orange-100 px-3 py-2 rounded-md transition-all text-lg font-bold">Home</Link>
              <Link to="/owners" className="text-orange-700 hover:text-orange-900 hover:bg-orange-100 px-3 py-2 rounded-md transition-all text-lg font-bold">Our Team</Link>
              <Link to="/contact" className="text-orange-700 hover:text-orange-900 hover:bg-orange-100 px-3 py-2 rounded-md transition-all text-lg font-bold">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Add padding-top to account for fixed header */}
      <div className="mt-20 ">
        {/* Image Carousel */}
        <div className="relative w-full h-[80vh] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselImages.map((image, index) => (
              <div key={index} className="w-full h-full flex-shrink-0 relative">
                <img 
                  src={image.url} 
                  alt={`Slide ${index}`}
                  className="w-full h-full object-cover"
                />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
                </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 transition-all shadow-lg border-2 border"
          >
            <ChevronLeft className="w-6 h-6 text-orange-600" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white rounded-full p-3 transition-all shadow-lg border-2 border"
          >
            <ChevronRight className="w-6 h-6 text-orange-600" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all border-2 ${
                  currentSlide === index ? 'bg-white border-orange-400' : 'bg-white/50 border-white'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-amber-50">
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-5xl font-bold text-orange-800 mb-6 leading-tight font-kumar-one drop-shadow-sm">
              Professional Wholesale Supply Solutions
            </h2>
            <p className="text-xl text-orange-700 mb-12 max-w-2xl mx-auto font-semibold">
              Serving 500+ businesses across Gujarat with premium ingredients and equipment since 2010
            </p>

            {/* Main Business Divisions */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Pavanputra Sales */}
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8 text-gray-900">
                  <BrandLogo size="sm" className="mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-kumar-one text-blue-700">Pavanputra Sales</h3>
                  <p className="text-blue-600 mb-6 text-sm leading-relaxed font-semibold">
                    Professional bakery equipment, cake tins, moulds, and specialized baking tools
                  </p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-600 font-semibold">Cake Tins & Moulds</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-600 font-semibold">Food Colors & Supplies</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-blue-600 font-semibold">Premium Packaging</span>
                    </div>
                  </div>
                  
                  <Link to="/pavanputra">
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 text-sm font-bold rounded-lg shadow-lg border-2 border-blue-500">
                      Explore Bakery Supplies
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Harsiddhi Tradings */}
              <Card className="bg-gradient-to-br from-red-50 to-pink-100 border-2 border-red-200 shadow-xl hover:shadow-2xl transition-all">
                <CardContent className="p-8 text-gray-900">
                  <BrandLogo size="sm" className="mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 font-kumar-one text-red-700">Harsiddhi Tradings</h3>
                  <p className="text-red-600 mb-6 text-sm leading-relaxed font-semibold">
                    Premium wholesale ingredients, essences, compounds, and raw materials
                  </p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-red-600 font-semibold">Chocolate Compounds</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-red-600 font-semibold">Food Colors & Essences</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-red-600 font-semibold">Bulk Ingredients</span>
                    </div>
                  </div>
                  
                  <Link to="/harsiddhi">
                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 text-sm font-bold rounded-lg shadow-lg border-2 border-red-500">
                      Explore Ingredients
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section - Moved from About page */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            {/* Hero Section with Background */}
            <div className="text-center mb-16 relative overflow-hidden rounded-lg"
                 style={{backgroundImage: `url('/uploads/f3eea3ee-1dc9-4e52-98e4-e7da2fe884f6.png')`, 
                         backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-amber-900/80"></div>
              <div className="relative z-10 p-12">
                <h2 className="text-5xl font-bold text-white mb-6 font-carter-one">About Harsiddhi Tradings Group</h2>
                <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                  Your trusted partner in wholesale food supplies and bakery equipment, serving the food industry across Gujarat for years
                </p>
              </div>
            </div>

            {/* Story Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-3xl font-bold text-amber-900 mb-6 font-carter-one">Our Story</h3>
                <p className="text-amber-800 mb-4">
                  Harsiddhi Tradings Group was founded with a vision to provide high-quality food ingredients and bakery supplies to professional bakers, restaurants, and food manufacturers across Gujarat.
                </p>
                <p className="text-amber-800 mb-4">
                  Starting from humble beginnings in Vadodara, we have grown to become one of the most trusted names in wholesale food supplies, serving hundreds of businesses with dedication and expertise.
                </p>
                <p className="text-amber-800">
                  Our commitment to quality, competitive pricing, and exceptional customer service has made us the preferred choice for professional food establishments throughout the region.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8 shadow-lg border border-amber-100">
                <h4 className="text-2xl font-bold text-amber-900 mb-6 font-carter-one">Our Mission</h4>
                <p className="text-amber-800 mb-6">
                  To empower food businesses with premium quality ingredients and equipment while providing exceptional service and competitive wholesale pricing.
                </p>
                <h4 className="text-2xl font-bold text-amber-900 mb-6 font-carter-one">Our Vision</h4>
                <p className="text-amber-800">
                  To be Gujarat's leading wholesale supplier of food ingredients and bakery supplies, known for quality, reliability, and innovation.
                </p>
              </div>
            </div>

            {/* Store Images Gallery */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-amber-900 mb-12 font-carter-one">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="public/uploads/store entrance.png" alt="Store Front" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                  <div className="p-4 bg-white">
                    <h5 className="font-semibold text-amber-900">Store Front</h5>
                    <p className="text-amber-700 text-sm">Our welcoming storefront in Vadodara</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="public/uploads/harsiddhi.png" alt="Interior Products" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                  <div className="p-4 bg-white">
                    <h5 className="font-semibold text-amber-900">Interior View</h5>
                    <p className="text-amber-700 text-sm">Organized inventory and product display</p>
                  </div>
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="public/uploads/pavanputra.png" alt="Product Display" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                  <div className="p-4 bg-white">
                    <h5 className="font-semibold text-amber-900">Product Range</h5>
                    <p className="text-amber-700 text-sm">Extensive selection of baking supplies</p>
                  </div>
                </div>
                {/* <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="/uploads/6f529378-5eaf-4535-8770-7b8354bcc7fa.png" alt="Store Interior" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                  <div className="p-4 bg-white">
                    <h5 className="font-semibold text-amber-900">Store Layout</h5>
                    <p className="text-amber-700 text-sm">Well-organized space for easy shopping</p>
                  </div>
                </div> */}
              </div>
            </div>

            {/* Our Specialized Shops */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-center text-amber-900 mb-12 font-carter-one">Our Specialized Shops</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-amber-100 to-stone-100 border border-amber-200">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-amber-900 mb-4 font-carter-one">Pavanputra Sales</h4>
                    <p className="text-amber-800 mb-4">
                      Specialized in bakery equipment and cake decoration supplies, serving professional bakers and cake artists with premium quality products.
                    </p>
                    <ul className="space-y-2 text-amber-800">
                      <li>• Cake tins and baking moulds</li>
                      <li>• Food colors and flavoring agents</li>
                      <li>• Cake decorating tools and accessories</li>
                      <li>• Professional baking equipment</li>
                      <li>• Custom cake toppers and packaging</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-stone-100 to-amber-100 border border-amber-200">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-bold text-amber-900 mb-4 font-carter-one">Harsiddhi Tradings</h4>
                    <p className="text-amber-800 mb-4">
                      Wholesale supplier of food ingredients, essences, and compounds for restaurants, bakeries, and food manufacturers.
                    </p>
                    <ul className="space-y-2 text-amber-800">
                      <li>• Chocolate compounds and cocoa products</li>
                      <li>• Food colors and essences</li>
                      <li>• Baking ingredients and additives</li>
                      <li>• Dairy products and frozen items</li>
                      <li>• Professional food packaging solutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-orange-800 mb-4 font-kumar-one">Why Choose Harsiddhi Tradings?</h3>
              <p className="text-orange-600 max-w-2xl mx-auto text-lg font-semibold">
                Over 14 years of excellence serving Gujarat's leading businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-8 bg-white rounded-xl shadow-lg border-2 border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-orange-300">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-orange-700">Premium Quality</h4>
                <p className="text-orange-600 text-sm font-semibold">ISO certified products with rigorous quality control</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg border-2 border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-orange-300">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-orange-700">Expert Support</h4>
                <p className="text-orange-600 text-sm font-semibold">Dedicated specialists and technical support</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg border-2 border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-orange-300">
                  <Clock className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-orange-700">Fast Delivery</h4>
                <p className="text-orange-600 text-sm font-semibold">Same-day delivery in Vadodara, next-day across Gujarat</p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-xl shadow-lg border-2 border-orange-200">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-orange-300">
                  <Shield className="w-8 h-8 text-orange-600" />
                </div>
                <h4 className="text-xl font-bold mb-3 text-orange-700">Competitive Pricing</h4>
                <p className="text-orange-600 text-sm font-semibold">Bulk wholesale rates with flexible terms</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Showcase */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-orange-800 mb-4 font-kumar-one">Trusted by Industry Leaders</h3>
              <p className="text-orange-600 text-lg font-semibold">From boutique bakeries to large manufacturing units</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg">
                <h4 className="text-xl font-bold text-orange-700 mb-3">Artisan Bakeries</h4>
                <p className="text-orange-600 mb-3 text-sm font-semibold">Premium supplies for boutique operations</p>
                <div className="text-xs text-orange-500 font-bold">50+ Premium Bakeries</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg">
                <h4 className="text-xl font-bold text-orange-700 mb-3">Restaurant Chains</h4>
                <p className="text-orange-600 mb-3 text-sm font-semibold">Bulk ingredients for consistent quality</p>
                <div className="text-xs text-orange-500 font-bold">100+ Restaurants</div>
              </div>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg">
                <h4 className="text-xl font-bold text-orange-700 mb-3">Food Manufacturers</h4>
                <p className="text-orange-600 mb-3 text-sm font-semibold">Industrial-scale ingredient supply</p>
                <div className="text-xs text-orange-500 font-bold">25+ Manufacturing Units</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section
        <section className="py-10 bg-gradient-to-r from-yellow-500 through-orange-500 to-red-500">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold text-white mb-4 font-kumar-one drop-shadow-lg">Ready to Partner with Us?</h3>
            <p className="text-orange-100 mb-8 max-w-xl mx-auto text-lg font-semibold">
              Get competitive quotes and expert consultation for your business needs
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-3 text-sm font-bold shadow-lg border-2 border-orange-200">
                <Phone className="w-4 h-4 mr-2" />
                Call: +91 98252 22847
              </Button>
              <Button variant="outline" className="bg-white hover:text-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 text-sm font-bold shadow-lg border-2 border-orange-200">
                Contact Us
              </Button>
            </div>
          </div>
        </section> */}

        {/* Footer - Updated with calmer color and credit */}
        <footer className="bg-amber-100 text-gray-800 py-4">
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
    </div>
  );
};

export default Index;
