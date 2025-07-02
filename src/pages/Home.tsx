
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
    }, 3000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
                Premium
                <span className="text-orange-600"> Zula </span>
                Swings
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Handcrafted wooden and acrylic swing seats that combine comfort, style, and durability. 
                Transform your space with our premium collection.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products">
                  <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105">
                    View Products
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200">
                    Get Quote
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image Display */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src={heroImages[currentImageIndex]}
                    alt="Olwin Zula House Products"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
                
                {/* Image Indicators */}
                <div className="flex justify-center mt-6 space-x-2 flex-wrap">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-amber-600 scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
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
          <Link to="/contact">
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
