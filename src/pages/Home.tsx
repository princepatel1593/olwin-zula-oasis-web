import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import DocumentTitle from '@/components/DocumentTitle';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/lovable-uploads/c193be04-623e-4a3a-9c86-318989da1ee6.png',
    '/lovable-uploads/5e1c33e2-a9ba-426c-91b2-96f6da933410.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <DocumentTitle />
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
                  <Button className="bg-white hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200" style={{ color: '#EA580C' }}>
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

        {/* About Olwin Zulahouse Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ color: '#EA580C' }}>
                About Olwin Zulahouse
              </h2>
              <p className="text-xl max-w-4xl mx-auto leading-relaxed" style={{ color: '#EA580C' }}>
                We specialize in creating unique, handcrafted zula furniture that transforms ordinary spaces into extraordinary experiences. Our team combines traditional craftsmanship with modern design to deliver custom zula solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                { 
                  title: 'Premium Zula Quality', 
                  desc: 'Handcrafted zula furniture with finest materials and attention to detail',
                  icon: '⭐'
                },
                { 
                  title: 'Custom Zula Design', 
                  desc: 'Tailored zula solutions to match your space and style preferences',
                  icon: '🎨'
                },
                { 
                  title: 'Expert Zula Service', 
                  desc: 'Professional zula installation and comprehensive after-sales support',
                  icon: '🔧'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3" style={{ color: '#EA580C' }}>{feature.title}</h3>
                  <p className="leading-relaxed" style={{ color: '#EA580C' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Zula Services Section */}
        <section className="py-20 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
                Our Zula Services
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Complete zula manufacturing and design solutions for your space
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { title: 'Custom Zula Swings', desc: 'Handcrafted zula hanging swings for indoor and outdoor spaces' },
                { title: 'Zula Beds', desc: 'Comfortable and stylish zula beds for ultimate relaxation' },
                { title: 'Zula Daybeds', desc: 'Premium zula daybeds for elegant outdoor living' },
                { title: 'Zula Customization', desc: 'Complete zula design consultation and custom implementation' }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                  <h3 className="text-lg font-semibold text-amber-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/services" onClick={() => window.scrollTo(0, 0)}>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200">
                  View All Zula Services
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
                Customer Reviews
              </h2>
              <p className="text-xl text-gray-600">
                What our customers say about our zula designs
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  review: "The zula swing designs are absolutely stunning! Perfect craftsmanship and unique style that transformed our garden space.",
                  name: "Rajesh Kumar",
                  location: "Banjara Hills"
                },
                {
                  review: "Exceptional quality zula furniture with attention to detail. Their custom zula bed is exactly what we wanted for our home.",
                  name: "Priya Sharma", 
                  location: "Gachibowli"
                },
                {
                  review: "Professional service and beautiful zula designs. The team understands customer needs and delivers beyond expectations.",
                  name: "Arjun Reddy",
                  location: "Kondapur"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-lg">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-amber-900">{testimonial.name}</p>
                    <p className="text-gray-600 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
