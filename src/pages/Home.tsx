
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/lovable-uploads/c193be04-623e-4a3a-9c86-318989da1ee6.png',
    '/lovable-uploads/5e1c33e2-a9ba-426c-91b2-96f6da933410.png',
    '/lovable-uploads/0b7dcc70-4020-48ef-b73c-d22d5be7efa5.png',
    '/lovable-uploads/4d7ac444-84e3-420b-b198-924166203276.png',
    '/lovable-uploads/c1717f72-d605-4218-8342-a4804c6dcdc3.png',
    '/lovable-uploads/f2ff2ad8-f6dc-4be1-9f87-7f2bc61c93aa.png',
    '/lovable-uploads/93138346-b9fb-4d1a-bb07-19addb3d8726.png',
    '/lovable-uploads/4536c53b-fc36-421c-84b2-90bc99eb6cf4.png',
    '/lovable-uploads/716bf613-7ba0-4e9c-97d7-3073d9d31ea8.png',
    '/lovable-uploads/745edff1-262d-43f6-a253-4ffaa9ab25a0.png',
    '/lovable-uploads/7015a7e0-bafc-484e-8e9e-430e546f8568.png',
    '/lovable-uploads/1875ab75-dcc1-4fee-82be-1743b994b122.png',
    '/lovable-uploads/534102ae-b531-4524-bf01-0d6668636531.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Full Screen Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroImages[currentImageIndex]}
            alt="Olwin Zula House Products"
            className="w-full h-full object-cover transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium
              <span className="text-orange-400"> Zula </span>
              Swings
            </h1>
            <p className="text-2xl lg:text-3xl mb-4 font-semibold text-orange-300">
              Transforming Spaces with Unique Zula Design
            </p>
            <p className="text-xl lg:text-2xl mb-8 leading-relaxed text-gray-200">
              Handcrafted wooden and acrylic swing seats that combine comfort, style, and durability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105">
                  View Products
                </Button>
              </Link>
              <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200">
                  Get Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentImageIndex 
                  ? 'bg-orange-400 scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Business Hours Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-8">
            Business Hours
          </h2>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Monday - Saturday:</span>
                <span className="text-amber-600 font-bold">9:00 AM - 7:00 PM</span>
              </div>
              <div className="border-t pt-4 flex justify-between items-center">
                <span className="font-semibold text-gray-700">Sunday:</span>
                <span className="text-amber-600 font-bold">10:00 AM - 5:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
              Why Choose Olwin Zula House?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to delivering exceptional quality and service in every swing we create.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Premium Materials', desc: 'High-quality wood and acrylic materials', icon: '🌳' },
              { title: 'Handcrafted Quality', desc: 'Each swing is carefully handcrafted', icon: '👐' },
              { title: 'Custom Designs', desc: 'Tailored to your specific needs', icon: '🎨' },
              { title: 'Expert Service', desc: 'Professional installation and support', icon: '⭐' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a personalized quote and let us help you create the perfect relaxation spot.
          </p>
          <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105">
              Get Your Quote Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
