
import { useState, useEffect } from "react";
import BrandLogo from "@/components/BrandLogo";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      from_company: formData.company,
      message: formData.message,
      to_email: 'Vidishapatel304@gmail.com' // Admin's email
    };

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        toast({
          title: "Message Sent!",
          description: "Your message has been successfully sent. We will get back to you soon.",
          variant: "success",
          className: "bg-green-500 text-white", // Added for better visibility
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: ""
        });
      }).catch((error) => {
        console.log(error.text);
        toast({
          title: "Error",
          description: "There was an error sending your message. Please try again later.",
          variant: "destructive",
          className: "bg-red-500 text-white", // Added for better visibility
        });
      }).finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <link rel="stylesheet" href="/fonts/kumar-one.css" />
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/60 backdrop-blur-lg shadow-lg border-b-2 border-orange-200 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Link to="/" className="flex items-center space-x-2 text-orange-700 hover:text-orange-900">
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
          <h1 className="text-5xl font-bold text-orange-800 mb-6 font-kumar-one">Get In Touch</h1>
          <p className="text-xl text-orange-700 max-w-3xl mx-auto">
            Ready to place an order or have questions about our products? We're here to help you with all your wholesale food supply needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Form */}
          <Card className="shadow-xl border-2 border-orange-200 bg-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-orange-800 mb-6 font-kumar-one">Send Us A Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-orange-700 mb-2">Name *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-orange-700 mb-2">Phone *</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Your phone number"
                      className="border-orange-200 focus:border-orange-400"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-700 mb-2">Email</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-700 mb-2">Company/Business Name</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your business name"
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-orange-700 mb-2">Message *</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Tell us about your requirements, quantity needed, or any questions you have..."
                    className="border-orange-200 focus:border-orange-400"
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-xl border-2 border-orange-200 bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-orange-800 mb-6 font-kumar-one">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-800">Phone</h3>
                      <p className="text-orange-700">+91 98252 22847</p>
                      <p className="text-sm text-orange-600">Call us for immediate assistance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageSquare className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-800">WhatsApp</h3>
                      <p className="text-orange-700">+91 98252 22847</p>
                      <p className="text-sm text-orange-600">Quick orders and inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-800">Email</h3>
                      <p className="text-orange-700">Vidishapatel304@gmail.com</p>
                      <p className="text-sm text-orange-600">For detailed inquiries</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-orange-800">Address</h3>
                      <p className="text-orange-700">Vadodara, Gujarat, India</p>
                      <p className="text-sm text-orange-600">Visit our stores for product viewing</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business Hours */}
            <Card className="shadow-xl border-2 border-orange-200 bg-white">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-orange-800 mb-6 font-kumar-one">Business Hours</h2>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-orange-800">Monday - Saturday</span>
                      <span className="text-orange-700">9:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-orange-800">Sunday</span>
                      <span className="text-orange-700">10:00 AM - 5:00 PM</span>
                    </div>
                    <p className="text-sm text-orange-600 mt-4">
                      Emergency orders can be placed via WhatsApp 24/7
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Google Maps */}
        <Card className="shadow-xl mb-12 border-2 border-orange-200 bg-white">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-orange-800 mb-6 font-kumar-one text-center">Find Us</h2>
            <div className="w-full h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.2937385277406!2d73.1954267!3d22.2961359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc5f6beef182f%3A0x353da210c8c7ed9d!2sHar%20Siddhi%20Trading!5e0!3m2!1sen!2sin!4v1671234567890!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions
        <Card className="shadow-xl bg-amber-600 text-white border border-orange-400">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-white mb-4 font-kumar-one">Need Immediate Assistance?</h2>
            <p className="mb-6 text-orange-100">Our team is ready to help you with bulk orders and product recommendations.</p>
            <div className="space-y-3">
              <Button className="w-full bg-white text-orange-800 hover:bg-orange-50">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: +91 98252 22847
              </Button>
              <Button className="w-full bg-white text-orange-800 hover:bg-orange-50">
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp: +91 98252 22847
              </Button>
            </div>
          </CardContent>
        </Card> */}
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

export default Contact;
