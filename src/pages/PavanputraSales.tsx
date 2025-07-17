import BrandGrid from '@/components/BrandGrid';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Phone, ArrowLeft, Star, Award, Truck } from "lucide-react";
import Cake3D from '@/components/3dCake';
import BrandLogo from "@/components/BrandLogo";

const PavanputraSales = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Smooth scroll to top on component mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    
    
    {
      name: "Cocoa Products",
      products: ["Cocoa Powder", "Cocoa Butter"],
      description: "Premium cocoa-based ingredients",
      image: ""
    },
    {
      name: "Chocolate",
      products: ["Chocolate Compound Slabs", "Choco Chips", "Couverture Chocolate", "Chocolate Slabs", "Chocolate fillings", "Ready to eat Chocolates"],
      description: "Premium chocolate products for professional use",
      image: "https://imgs.search.brave.com/rvYgxEPy8uKztnpqfUdDTyKX18M3ecZlyRifqjvsuXY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL3NsYWJz/LXdoaXRlLW1pbGst/ZGFyay1jaG9jb2xh/dGUtMjYwbnctMTQx/NTU0Mzc2NS5qcGc"
    },
    {
      name: "Essence",
      products: ["Flavouring Essence", "Liquid Essence", "Oil Essence", "Gel Essence", "Splash Essence"],
      description: "Essence for food manufacturing",
      image: "https://imgs.search.brave.com/xt7Laq8DZtkRf_KGqADWc5JRCRdOqdsmsxKpuStEnqU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/YXJpb3VzLWhvbGkt/Y29sb3ItcG93ZGVy/LWJvd2wtYmxhY2st/YmFja2dyb3VuZF8y/My0yMTQ3OTQ5MDM0/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"
    },
    {
      name: "Food Colors",
      products: ["Icing Gel Color", "Oil Candy Color", "Liquid Food Color", "Airbrush Color", "Whipping Powder", "Oil Powder", "All Purpose Color", "Buttercream and Ganache Colors"],
      description: "Professional-grade food coloring solutions",
      image: "https://imgs.search.brave.com/xt7Laq8DZtkRf_KGqADWc5JRCRdOqdsmsxKpuStEnqU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by92/YXJpb3VzLWhvbGkt/Y29sb3ItcG93ZGVy/LWJvd2wtYmxhY2st/YmFja2dyb3VuZF8y/My0yMTQ3OTQ5MDM0/LmpwZz9zZW10PWFp/c19oeWJyaWQmdz03/NDA"
    },
    {
      name: "Cake Tins",
      products: ["Round Tin", "Square Tin"],
      description: "Professional-grade aluminum and steel cake tins",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcJ-WOqRN0fmMB6e2JvljoBDuUfPVqwkdgg&simage.png"
    },
    {
      name: "SMT Milk Powder",
      products: ["Milk Powder"],
      description: " Premium milk powder products for professional use",
      image: "https://imgs.search.brave.com/rvYgxEPy8uKztnpqfUdDTyKX18M3ecZlyRifqjvsuXY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZS5zaHV0dGVyc3Rv/Y2suY29tL2ltYWdl/LXBob3RvL3NsYWJz/LXdoaXRlLW1pbGst/ZGFyay1jaG9jb2xh/dGUtMjYwbnctMTQx/NTU0Mzc2NS5qcGc"
    },
    {
      name: "Cake Moulds",
      products: ["Special Moulds", "Bread Moulds", "Cupcake And Muffin Moulds", "Pie And Tart Moulds", "Silicone Bakeware"],
      description: "Precision moulds for consistent baking results",
      image: ""
    },
    
    {
      name: "Paper Products", 
      products: ["Paper Liners", "Bake And Serve Liners", "Parchment And Baking Paper"],
      description: "Premium baking papers and liners",
      image: ""
    },
    {
      name: "Cake Accessories",
      products: ["Cake Rings", "Cake Base and Boards", "Cake And Cup Cake Stands"],
      description: "Professional accessories for cake presentation",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBJjzJS-6BW9eCzaW2vtMKaRhZ1tdKDLCoQ&s"
    },
    {
      name: "Packaging",
      products: ["Brownie Boxes", "Cup Cake Boxes", "Fancy Boxes", "Monogram Boxes", "Plain White Cakes Boxes"],
      description: "Premium packaging solutions for your products",
      image: ""
    },
    {
      name: "Custom Products",
      products: ["Edible Photo Print", "Customized Cake Topper", "Customized Baking Tray", "Customized Thermocol Cake Dummy", "Customized Sticker And Ribbon"],
      description: "Bespoke solutions for unique requirements",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Display",
      products: ["Photo Props", "Display"],
      description: "Attractive display solutions for showcasing",
      image: ""
    }
  ];
  // Add after the categories array
const brandCategories = [
  {
    title: "Cocoa Products",
    brands: [
      { name: "Jindal", logo: "Jindal.jpg" },
      { name: "Cargil", logo: "Cargil.jpg" },
      { name: "Bakers Villa", logo: "BakersVille.jpg" },
      { name: "Vanhouten", logo: "VanHouten.png" }
    ]
  },
  {
    title: "SMT Milk Powder",
    brands: [
      { name: "Sagar", logo: "Sagar.png" },
      { name: "Paras", logo: "Paras.jpg" },
      { name: "Chandrakamal", logo: "ChandraKamal.png" },
      { name: "Hatsun", logo: "Hatsun.jpg" },
      { name: "Sonai", logo: "Sonai.jpg" },
      { name: "Amul" },
      { name: "Shridhi Gold" }
    ]
  },
  {
    title: "Essence",
    brands: [
      { name: "IFF", logo: "IFF.jpg" },
      { name: "CEC", logo: "CEC.png" },
      { name: "Lux", logo: "Lux.png" },
      { name: "Eagle", logo: "Eagle.png" },
      { name: "Monika" },
      { name: "Nandi" },
      { name: "Lilly brand" }
    ]
  },
  {
    title: "Chocolate ",
    brands: [
      { name: "Veenar" }
    ]
  }
];

  const filteredCategories = categories.filter(category => {
    const matchesCategory = selectedCategory === "All" || category.name === selectedCategory;
    const matchesSearch = searchTerm === "" || 
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.products.some(product => product.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200">
      <link rel="stylesheet" href="/fonts/kumar-one.css" />
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg shadow-lg border-b-2 border-orange-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                <ArrowLeft className="w-6 h-6" />
                <span className=" text-sm font-bold">Home</span>
              </Link>
            </div>
            <div className="flex items-center pl-10 space-x-3">
              <BrandLogo size="sm" />
              <div>
                <h1 className="text-sm text-center font-bold text-gray-800 font-kumar-one">Pavanputra Sales</h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-20">
        <div className="container px-4 py-8">
          {/* Hero Section with 3D Cake Background - Fixed camera distance */}
          <div className="relative mb-12 bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="p-8 z-10 relative">
                <h2 className="text-4xl font-bold text-gray-900 mb-6 font-kumar-one">
                  Professional Bakery Equipment
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Complete range of premium baking equipment, cake tins, decorative supplies, and packaging solutions
                </p>
                
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Star className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">500+ Products</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Award className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">ISO Certified</span>  
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Truck className="w-5 h-5 text-blue-500" />
                    <span className="font-medium">Same Day Delivery</span>
                  </div>
                </div>
              </div>
              
              <div className="h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
                <Cake3D  />
              </div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search categories or products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-2 text-sm border border-gray-200 focus:border-gray-400 rounded-lg"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg bg-white text-sm font-medium focus:border-gray-400 focus:outline-none"
              >
                <option value="All">All Categories</option>
                {categories.map(category => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Categories Display - Added borders to products */}
          <div className="space-y-6">
            {filteredCategories.map((category) => (
              <div key={category.name} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/4 h-48 md:h-auto relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${category.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-transparent"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-start p-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-kumar-one">{category.name}</h3>
                        <p className="text-gray-200 text-sm">{category.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-3/4 p-6">
                    {(() => {
                      const categoryToBrandMap = {
                        "Colors": "Essence"
                      };
                      const brandCategory = brandCategories.find(bc => 
                        bc.title === (categoryToBrandMap[category.name] || category.name)
                      );
                      return brandCategory && (
                        <div className="mb-6">
                          <BrandGrid
                            title={`Available Brands for ${category.name}`}
                            brands={brandCategory.brands}
                          />
                        </div>
                      );
                    })()}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {category.products.map((product, index) => (
                        <div key={index} className="group">
                          <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200 hover:border-gray-300">
                            <span className="text-sm text-gray-700 font-medium">{product}</span>
                            <div className="w-2 h-2 bg-blue-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-100">
                      <Link to="/contact">
                        <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 text-sm">
                          <Phone className="w-3 h-3 mr-2" />
                          Contact for Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          
          {/* Service Highlights */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 font-kumar-one">Why Choose Pavanputra Sales?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-gray-600" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Premium Quality</h4>
                <p className="text-gray-600 text-sm">Products from certified manufacturers with quality guarantees</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-gray-600" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Bulk Discounts</h4>
                <p className="text-gray-600 text-sm">Special wholesale rates for large quantity orders</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-gray-600" />
                </div>
                <h4 className="text-lg font-semibold mb-3 text-gray-900">Expert Support</h4>
                <p className="text-gray-600 text-sm">Technical guidance from baking experts</p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-12 bg-gray-900 rounded-xl p-8 shadow-sm text-center">
            <h3 className="text-2xl font-bold text-white mb-4 font-kumar-one">Ready to Upgrade Your Equipment?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
              Get competitive wholesale pricing and expert consultation
            </p>
            <div className="flex flex-col md:flex-row gap-3 justify-center">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 text-sm font-medium">
                <Phone className="w-4 h-4 mr-2" />
                Call: +91 98252 22847
              </Button>
              <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 text-sm font-medium">
                WhatsApp Catalog
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PavanputraSales;
