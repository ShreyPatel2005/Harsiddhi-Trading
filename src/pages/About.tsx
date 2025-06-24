
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Award, Users, Package, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg shadow-lg border-b-2 border-orange-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 text-amber-700 hover:text-amber-600">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="mt-20 container mx-auto px-4 py-12">
        {/* Hero Section with Background */}
        <div className="text-center mb-16 relative overflow-hidden rounded-lg"
             style={{backgroundImage: `url('/uploads/f3eea3ee-1dc9-4e52-98e4-e7da2fe884f6.png')`, 
                     backgroundSize: 'cover', backgroundPosition: 'center'}}>
          <div className="absolute inset-0 bg-amber-900/80"></div>
          <div className="relative z-10 p-12">
            <h1 className="text-5xl font-bold text-white mb-6 font-carter-one">About Harsiddhi Tradings Group</h1>
            <p className="text-xl text-amber-100 max-w-3xl mx-auto">
              Your trusted partner in wholesale food supplies and bakery equipment, serving the food industry across Gujarat for years
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-amber-900 mb-6 font-carter-one">Our Story</h2>
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
            <h3 className="text-2xl font-bold text-amber-900 mb-6 font-carter-one">Our Mission</h3>
            <p className="text-amber-800 mb-6">
              To empower food businesses with premium quality ingredients and equipment while providing exceptional service and competitive wholesale pricing.
            </p>
            <h3 className="text-2xl font-bold text-amber-900 mb-6 font-carter-one">Our Vision</h3>
            <p className="text-amber-800">
              To be Gujarat's leading wholesale supplier of food ingredients and bakery supplies, known for quality, reliability, and innovation.
            </p>
          </div>
        </div>

        {/* Store Images Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-carter-one">Our Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/uploads/f3eea3ee-1dc9-4e52-98e4-e7da2fe884f6.png" alt="Store Front" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-amber-900">Store Front</h4>
                <p className="text-amber-700 text-sm">Our welcoming storefront in Vadodara</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/uploads/ebd6a2f5-041c-4d39-b467-4f9e908cea7d.png" alt="Interior Products" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-amber-900">Interior View</h4>
                <p className="text-amber-700 text-sm">Organized inventory and product display</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/uploads/79b1ec7e-98dd-49c2-a3a0-e945f447a8a4.png" alt="Product Display" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-amber-900">Product Range</h4>
                <p className="text-amber-700 text-sm">Extensive selection of baking supplies</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img src="/uploads/6f529378-5eaf-4535-8770-7b8354bcc7fa.png" alt="Store Interior" className="w-full h-48 object-cover hover:scale-105 transition-transform" />
              <div className="p-4 bg-white">
                <h4 className="font-semibold text-amber-900">Store Layout</h4>
                <p className="text-amber-700 text-sm">Well-organized space for easy shopping</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center border border-amber-100">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-amber-900 mb-2">500+</h3>
              <p className="text-amber-700">Happy Customers</p>
            </CardContent>
          </Card>
          <Card className="text-center border border-amber-100">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-amber-900 mb-2">1000+</h3>
              <p className="text-amber-700">Products</p>
            </CardContent>
          </Card>
          <Card className="text-center border border-amber-100">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-amber-900 mb-2">10+</h3>
              <p className="text-amber-700">Years Experience</p>
            </CardContent>
          </Card>
          <Card className="text-center border border-amber-100">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-3xl font-bold text-amber-900 mb-2">100%</h3>
              <p className="text-amber-700">Quality Assured</p>
            </CardContent>
          </Card>
        </div>

        {/* Our Shops Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-amber-900 mb-12 font-carter-one">Our Specialized Shops</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-amber-100 to-stone-100 border border-amber-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-4 font-carter-one">Pavanputra Sales</h3>
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
                <h3 className="text-2xl font-bold text-amber-900 mb-4 font-carter-one">Harsiddhi Tradings</h3>
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

        {/* Contact Section */}
        <div className="bg-white rounded-lg p-8 shadow-lg text-center border border-amber-100">
          <h2 className="text-3xl font-bold text-amber-900 mb-4 font-carter-one">Visit Our Stores</h2>
          <p className="text-amber-800 mb-6">
            Located in the heart of Vadodara, Gujarat, our stores are equipped with extensive inventory and knowledgeable staff to assist you.
          </p>
          <div className="text-lg text-amber-800">
            <p className="mb-2"><strong>Address:</strong> Vadodara, Gujarat, India</p>
            <p className="mb-2"><strong>Phone:</strong> +91 98252 22847</p>
            <p><strong>Email:</strong> info@harsiddhitradings.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
