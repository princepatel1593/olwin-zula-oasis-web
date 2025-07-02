
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Wooden Zula Swing',
      category: 'Wooden',
      image: '/lovable-uploads/c193be04-623e-4a3a-9c86-318989da1ee6.png',
      description: 'Handcrafted wooden swing with premium cushioning and traditional design.',
      features: ['Premium wood construction', 'Weather-resistant finish', 'Comfortable cushioning', 'Traditional design']
    },
    {
      id: 2,
      name: 'Modern Wooden Zula Chair',
      category: 'Wooden',
      image: '/lovable-uploads/5e1c33e2-a9ba-426c-91b2-96f6da933410.png',
      description: 'Contemporary wooden swing chair perfect for modern homes and offices.',
      features: ['Modern ergonomic design', 'High-quality wood', 'Adjustable comfort', 'Space-saving design']
    },
    {
      id: 3,
      name: 'Luxury Hanging Zula Swing',
      category: 'Wooden',
      image: '/lovable-uploads/0b7dcc70-4020-48ef-b73c-d22d5be7efa5.png',
      description: 'Elegant hanging swing with rope suspension and plush seating.',
      features: ['Rope suspension system', 'Plush cushioning', 'Indoor/outdoor use', 'Luxury finish']
    },
    {
      id: 4,
      name: 'Traditional Wooden Swing Seat',
      category: 'Wooden',
      image: '/lovable-uploads/4d7ac444-84e3-420b-b198-924166203276.png',
      description: 'Classic wooden swing seat with traditional craftsmanship and comfort.',
      features: ['Traditional craftsmanship', 'Durable construction', 'Classic design', 'Premium comfort']
    },
    {
      id: 5,
      name: 'Single Person Acrylic Zula',
      category: 'Acrylic',
      image: '/lovable-uploads/5e1c33e2-a9ba-426c-91b2-96f6da933410.png',
      description: 'Modern acrylic swing seat designed for single person comfort and style.',
      features: ['Clear acrylic construction', 'Modern aesthetic', 'Single person design', 'Easy maintenance']
    },
    {
      id: 6,
      name: 'Designer Acrylic Swing',
      category: 'Acrylic',
      image: '/lovable-uploads/c193be04-623e-4a3a-9c86-318989da1ee6.png',
      description: 'Contemporary acrylic swing with unique design elements.',
      features: ['Contemporary design', 'Crystal clear acrylic', 'Unique styling', 'Versatile placement']
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
