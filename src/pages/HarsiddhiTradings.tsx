
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Phone, ArrowLeft, Award, Truck, Beaker } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const HarsiddhiTradings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    {
      name: "Chocolates",
      products: ["Chocolate Compound Slabs", "Choco Chips", "Couverture Chocolate", "Chocolate Slabs", "Chocolate fillings", "Ready to eat Chocolates"],
      description: "Premium chocolate products for professional use",
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Ingredients",
      products: ["Frozen Fruit", "Frozen Puree", "Baking Flour", "Mixes and Powders", "Baking Additives", "Fruit Tins", "Dry Fruits And Nuts", "Filling And Toppings", "Flavours", "Extract", "Sugar", "Whipping Cream", "Dairy Products", "Biscuits And Confectionary", "Margarine And Fat", "Ready To Cook"],
      description: "Essential ingredients for food manufacturing",
      image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Food Colors",
      products: ["Icing Gel Color", "Oil Candy Color", "Liquid Food Color", "Airbrush Color", "Whipping Powder", "Oil Powder", "All Purpose Color", "Buttercream and Ganache Colors"],
      description: "Professional-grade food coloring solutions",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Edible Decoratives",
      products: ["Luster Dust", "Gold Leaf", "Silver Leaf", "Sprinkles", "Dazzling Drips", "Sparkling Flakes", "Precut Wafter paper", "Petal Dust", "Rice Paper", "Sugar Sheet", "Wafer Paper", "Crispearls", "Fondants Sugar Paste", "Pens and Markers", "Gel and Glaze"],
      description: "Premium edible decorations and finishing touches",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Non Edible Decoratives",
      products: ["Happy Birthday Cake Toppers", "Happy Anniversary Cake Toppers", "Cake Dummies", "Sphere Balls", "Cake Dummy / Thermocol Shapes", "Cake Candles", "Figurines", "Balloons", "Decorative Flowers", "Occasion Based Topper", "Theme and Cartoon Topper", "Numerical Topper", "Floral tape wire and buds", "Stick And Straws"],
      description: "Non-edible decorative accessories",
      image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Packaging",
      products: ["Plain White Cakes Boxes", "Glass Jars and Bottles", "PVC/Plastic Boxes", "Eco Friendly Packaging", "Paper Bags", "Wooden Disposables", "Decorative Ribbons", "Foils Wrappers and Tiles"],
      description: "Professional packaging solutions",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Cocoa Products",
      products: ["Cocoa Powder", "Cocoa Butter"],
      description: "Premium cocoa-based ingredients",
      image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    <div className="min-h-screen bg-white">
      <link rel="stylesheet" href="/fonts/kumar-one.css" />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg shadow-lg border-b-2 border-orange-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <BrandLogo size="sm" />
              <div>
                <h1 className="text-lg font-bold text-gray-800 font-kumar-one">Harsiddhi Tradings</h1>
                <p className="text-xs text-gray-600">Premium Food Ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-20 container mx-auto px-4 py-8">
        {/* Hero Section with Background Image */}
        <div className="text-center mb-12 bg-white rounded-xl p-12 shadow-sm relative overflow-hidden border border-gray-200"
             style={{backgroundImage: `url('/uploads/a7f0fad2-821d-4a78-b295-65525b21995a.png')`, 
                     backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'overlay'}}>
          <div className="absolute inset-0 bg-white/90"></div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-kumar-one">
              Premium Food Ingredients
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-8 text-lg">
              Wholesale supplier of premium essences, compounds, chocolates, and professional ingredients
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Beaker className="w-5 h-5 text-red-500" />
                <span className="font-medium">1500+ Ingredients</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Award className="w-5 h-5 text-red-500" />
                <span className="font-medium">FDA Approved</span>  
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-700">
                <Truck className="w-5 h-5 text-red-500" />
                <span className="font-medium">Bulk Supply</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search ingredients or categories..."
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

        {/* Categories Display - Minimal Design */}
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
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {category.products.map((product, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between py-3 px-4 bg-gray-50 rounded-lg transition-colors border border-gray-200 cursor-pointer">
                          <span className="text-sm text-gray-700 font-medium">{product}</span>
                          <div className="w-2 h-2 bg-red-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity"></div>
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
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8 font-kumar-one">Why Choose Harsiddhi Tradings?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Beaker className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Laboratory Tested</h4>
              <p className="text-gray-600 text-sm">Rigorous quality testing for purity and safety</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Bulk Supply</h4>
              <p className="text-gray-600 text-sm">Large quantity orders with competitive pricing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-gray-600" />
              </div>
              <h4 className="text-lg font-semibold mb-3 text-gray-900">Certified Suppliers</h4>
              <p className="text-gray-600 text-sm">FDA approved and certified manufacturers</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gray-900 rounded-xl p-8 shadow-sm text-center">
          <h3 className="text-2xl font-bold text-white mb-4 font-kumar-one">Need Industrial-Scale Ingredients?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto text-sm">
            Get wholesale pricing and technical specifications for your requirements
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
            <Button className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 text-sm font-medium">
              <Phone className="w-4 h-4 mr-2" />
              Call: +91 98252 22847
            </Button>
            <Button variant="outline" className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-2 text-sm font-medium">
              Request Technical Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarsiddhiTradings;
