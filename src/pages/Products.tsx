
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Wooden Zula Swing (Single)',
      category: 'Wooden',
      image: '/lovable-uploads/c1717f72-d605-4218-8342-a4804c6dcdc3.png',
      description: 'Handcrafted wooden swing with premium cushioning and traditional design.',
      features: ['Premium wood construction', 'Weather-resistant finish', 'Comfortable cushioning', 'Traditional design'],
      price: '₹44,000 - ₹50,000'
    },
    {
      id: 2,
      name: 'Modern Acrylic Zula Chair',
      category: 'Acrylic',
      image: '/lovable-uploads/f2ff2ad8-f6dc-4be1-9f87-7f2bc61c93aa.png',
      description: 'Contemporary acrylic swing chair perfect for modern homes and offices.',
      features: ['Modern ergonomic design', 'High-quality acrylic', 'Adjustable comfort', 'Space-saving design'],
      price: '₹25,000 - ₹27,000'
    },
    {
      id: 3,
      name: 'Luxury Hanging Zula Swing',
      category: 'Wooden',
      image: '/lovable-uploads/93138346-b9fb-4d1a-bb07-19addb3d8726.png',
      description: 'Elegant hanging swing with rope suspension and plush seating.',
      features: ['Rope suspension system', 'Plush cushioning', 'Indoor/outdoor use', 'Luxury finish'],
      price: '₹40,000 - ₹42,000'
    },
    {
      id: 4,
      name: 'Premium Double Seater Swing',
      category: 'Wooden',
      image: '/lovable-uploads/4536c53b-fc36-421c-84b2-90bc99eb6cf4.png',
      description: 'Spacious double seater swing with premium materials and comfort.',
      features: ['Double seater design', 'Premium materials', 'Enhanced comfort', 'Sturdy construction'],
      price: '₹89,000 - ₹92,000'
    },
    {
      id: 5,
      name: 'Acrylic Designer Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/716bf613-7ba0-4e9c-97d7-3073d9d31ea8.png',
      description: 'Modern acrylic swing with unique design elements and comfort.',
      features: ['Designer acrylic construction', 'Modern aesthetic', 'Single person design', 'Easy maintenance'],
      price: '₹40,000 - ₹44,000'
    },
    {
      id: 6,
      name: 'Transparent Acrylic Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/745edff1-262d-43f6-a253-4ffaa9ab25a0.png',
      description: 'Crystal clear acrylic swing with contemporary design.',
      features: ['Crystal clear acrylic', 'Contemporary design', 'Unique styling', 'Versatile placement'],
      price: '₹40,000 - ₹44,000'
    },
    {
      id: 7,
      name: 'Luxury Wooden Swing with Cushions',
      category: 'Wooden',
      image: '/lovable-uploads/7015a7e0-bafc-484e-8e9e-430e546f8568.png',
      description: 'Premium wooden swing with luxury cushions and elegant design.',
      features: ['Luxury wooden frame', 'Premium cushions', 'Elegant design', 'Superior comfort'],
      price: '₹65,000 - ₹70,000'
    },
    {
      id: 8,
      name: 'Decorative Wooden Swing',
      category: 'Wooden',
      image: '/lovable-uploads/1875ab75-dcc1-4fee-82be-1743b994b122.png',
      description: 'Beautiful decorative wooden swing with intricate patterns.',
      features: ['Decorative patterns', 'Handcrafted details', 'Premium wood', 'Artistic design'],
      price: '₹40,000 - ₹45,000'
    },
    {
      id: 9,
      name: 'Traditional Wooden Swing',
      category: 'Wooden',
      image: '/lovable-uploads/534102ae-b531-4524-bf01-0d6668636531.png',
      description: 'Classic traditional wooden swing with authentic craftsmanship.',
      features: ['Traditional craftsmanship', 'Authentic design', 'Durable construction', 'Classic appeal'],
      price: '₹85,000+'
    }
  ];

  const categories = ['All', 'Wooden', 'Acrylic'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 mb-6">
              Our Products
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover our premium collection of wooden and acrylic zula swings, 
              each piece carefully crafted to provide comfort and elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 bg-white rounded-full p-2 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-amber-600 hover:bg-amber-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-amber-900">{product.name}</h3>
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-amber-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="text-2xl font-bold text-amber-600">{product.price}</p>
                  </div>

                  <Link to="/contact">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 rounded-lg transition-colors duration-200">
                      Get Quote
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Custom Designs Available
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Don't see exactly what you're looking for? We specialize in custom designs tailored to your specific requirements.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 hover:scale-105">
              Discuss Custom Design
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
