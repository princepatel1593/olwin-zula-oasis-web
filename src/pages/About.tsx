
import React from 'react';

const About = () => {
  const values = [
    {
      title: 'Passion',
      description: 'We are passionate about creating beautiful, functional furniture that enhances your living space.',
      icon: '❤️'
    },
    {
      title: 'Quality',
      description: 'Every piece is crafted with meticulous attention to detail using only the finest materials.',
      icon: '✨'
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We work closely with you to bring your vision to life.',
      icon: '🤝'
    },
    {
      title: 'Reliability',
      description: 'Count on us for timely delivery, professional service, and long-lasting products.',
      icon: '🛡️'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6">
              About Olwin Zula House
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Where craftsmanship meets comfort. We specialize in creating premium wooden and acrylic zula swings 
              that transform spaces into personal sanctuaries of relaxation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded with a vision to bring comfort and elegance to every home, Olwin Zula House has become 
                  synonymous with premium swing furniture in Hyderabad. Our journey began with a simple belief: 
                  that everyone deserves a peaceful corner in their home where they can unwind and rejuvenate.
                </p>
                <p>
                  What started as a small workshop has grown into a trusted name in the furniture industry, 
                  serving customers across the region with handcrafted swing seats that blend traditional 
                  craftsmanship with modern design sensibilities.
                </p>
                <p>
                  Located in the heart of Hyderabad at Jubilee Hills, we continue to innovate and create 
                  furniture pieces that not only serve a functional purpose but also add aesthetic value to your living spaces.
                </p>
              </div>
            </div>
            <div className="lg:order-first">
              <img
                src="/lovable-uploads/5e1c33e2-a9ba-426c-91b2-96f6da933410.png"
                alt="Our Craftsmanship"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-amber-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape the quality of service we provide to our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-amber-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto leading-relaxed">
            To create exceptional furniture that enhances the quality of life for our customers. We strive to combine 
            traditional craftsmanship with innovative designs, delivering products that stand the test of time while 
            providing unmatched comfort and style.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
