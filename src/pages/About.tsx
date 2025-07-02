
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6">
              About Olwin Zula House
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Your trusted partner for premium wooden and acrylic zula swings in Hyderabad
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Olwin Zula House is a premium furniture company specializing in handcrafted wooden and acrylic zula swings. 
                Located in the heart of Hyderabad, we have been transforming homes and offices with our unique and comfortable swing designs.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our passion for quality craftsmanship and innovative design drives us to create pieces that not only serve as functional furniture 
                but also as beautiful additions to any space. Each swing is meticulously crafted using premium materials and traditional techniques.
              </p>
              <Link to="/products">
                <Button className="bg-amber-600 text-white hover:bg-amber-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105">
                  View Our Products
                </Button>
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/c1717f72-d605-4218-8342-a4804c6dcdc3.png"
                alt="Premium Wooden Zula Swing"
                className="w-full max-w-md rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Olwin Zula House
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Craftsmanship',
                description: 'Every piece is handcrafted with attention to detail and precision.',
                icon: '🔨'
              },
              {
                title: 'Premium Materials',
                description: 'We use only the finest wood and acrylic materials for durability.',
                icon: '🌟'
              },
              {
                title: 'Customer Satisfaction',
                description: 'Your comfort and satisfaction are our top priorities.',
                icon: '😊'
              },
              {
                title: 'Innovation',
                description: 'We constantly innovate to bring you unique and modern designs.',
                icon: '💡'
              },
              {
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible practices.',
                icon: '🌱'
              },
              {
                title: 'Professional Service',
                description: 'From consultation to installation, we provide expert service.',
                icon: '🤝'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
              Why Choose Olwin Zula House?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference with our premium quality and exceptional service
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                'Expert craftsmanship with years of experience',
                'Premium quality materials sourced carefully',
                'Custom designs tailored to your requirements',
                'Professional installation and support',
                'Competitive pricing with transparent costs',
                'Excellent after-sales service and warranty'
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <p className="text-lg text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img
                src="/lovable-uploads/745edff1-262d-43f6-a253-4ffaa9ab25a0.png"
                alt="Premium Zula Swing"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Browse our complete collection of premium zula swings and find the perfect piece for your space.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button className="bg-white text-amber-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200">
                Browse Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
