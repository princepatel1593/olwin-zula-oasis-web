
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Custom Design & Manufacturing',
      description: 'We create bespoke zula swings tailored to your specific requirements, space, and style preferences.',
      icon: '🎨',
      features: ['Personalized design consultation', 'CAD drawings and previews', 'Material selection guidance', 'Size and style customization']
    },
    {
      title: 'Professional Installation',
      description: 'Our expert team ensures safe and secure installation of your zula swing with proper support and positioning.',
      icon: '🛠️',
      features: ['Site assessment', 'Professional mounting', 'Safety certification', 'Installation warranty']
    },
    {
      title: 'Quality Assurance',
      description: 'Every product undergoes rigorous quality checks to ensure durability, safety, and aesthetic appeal.',
      icon: '✅',
      features: ['Material quality testing', 'Structural integrity checks', 'Finish quality inspection', 'Safety standard compliance']
    },
    {
      title: 'Maintenance & Support',
      description: 'Comprehensive after-sales support including maintenance tips, repairs, and replacement parts.',
      icon: '🔧',
      features: ['Maintenance guidance', 'Repair services', 'Replacement parts', 'Technical support']
    },
    {
      title: 'Interior Design Consultation',
      description: 'Expert advice on integrating your zula swing into your existing interior design and space planning.',
      icon: '🏠',
      features: ['Space planning consultation', 'Design coordination', 'Color and style matching', 'Placement optimization']
    },
    {
      title: 'Warranty & Guarantee',
      description: 'Comprehensive warranty coverage on all our products with guaranteed quality and customer satisfaction.',
      icon: '🛡️',
      features: ['Product warranty', 'Workmanship guarantee', 'Customer satisfaction promise', 'Service support']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-amber-900 mb-4 md:mb-6">
              Our Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed px-4">
              From design to installation and beyond, we provide comprehensive services 
              to ensure your complete satisfaction with your zula swing purchase.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 md:p-8 rounded-lg hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-3xl md:text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-amber-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs md:text-sm text-gray-700">
                      <span className="text-amber-600 mr-2">✓</span>
                      <span className="flex-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-amber-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Simple, transparent, and customer-focused approach to delivering your perfect zula swing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your requirements and preferences' },
              { step: '02', title: 'Design', desc: 'Create custom design and get your approval' },
              { step: '03', title: 'Manufacturing', desc: 'Craft your swing with premium materials' },
              { step: '04', title: 'Installation', desc: 'Professional installation and final setup' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-600 text-white w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-amber-900 mb-2">{process.title}</h3>
                <p className="text-gray-600 text-sm md:text-base px-2">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl text-amber-100 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Contact us today to discuss your project and let us help you create the perfect zula swing for your space.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-6 md:px-8 py-2 md:py-3 rounded-full text-base md:text-lg font-semibold transition-all duration-200 hover:scale-105">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
