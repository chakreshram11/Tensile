import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TensileCanvas from '../components/TensileCanvas';
import BoxLinksSection from '../components/BoxLinksSection';
import BoxLinksSectionTwo from '../components/BoxLinksSectionTwo';
import TensileMeshComponent from '../components/TensileMeshComponent ';
import ScrollToTop from '../components/ScrollToTop';

const Home = () => {
  const boxes = [
    // Top Row
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'link',
      title: 'OUR WORK',
      description: 'Tensile offers a full turn-key service to our clients from initial design concepts through to installation.',
      link: '/ourwork',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    },
    // Bottom Row
    {
      type: 'link',
      title: 'PRODUCTS',
      description: 'From structural cables and rods, to tensioned mesh we have the fittings and the knowledge on their specification, application and installation.',
      link: '/products',
      image: 'https://images.unsplash.com/photo-1508736793122-f5165d18b7a6?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'image',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
    {
      type: 'link',
      title: 'CONSULTANCY',
      description: 'Our team of engineers & designers can work with you to create your signature design. We blend creativity with technology and help you choose the best tensile system.',
      link: '/consultancy',
      image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    },
  ];

    const boxesTwo = [
      { type: 'image', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80' }, // Top row, first box (square, image)
      { type: 'link', title: 'Your Tensile Architecture Specialist', description: 'Tensile design & construct are specialist suppliers and installers of tensile architectural solutions. From structural cables and rods to tensioned mesh we have the fittings and the knowledge on their specification, application and installation. Tensile uses the best products from around the globe to provide our clients with the right tensile member for their project. Tensile architecture is an exciting industry covering many facets from bracing cables to green facades through to new and creative balustrades.'}, // Top row, second box (rectangle, description)
      { type: 'link', title: '', description: 'Tensile were professional, flexible and efficient. They worked well with a variety of artists and other professionals to deliver a high quality result within the constraints of the job. (Sydney City Council)'}, // Bottom row, first box (square, description)
      { type: 'image', image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80' }, // Bottom row, second box (rectangle, image)
    ];

  const features = [
    {
      title: 'Innovative Design',
      description: 'Pioneering tensile membrane structures for unique architectural solutions.',
      image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Engineering Expertise',
      description: 'Decades of experience in tension systems and vertical gardens.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
    },
    {
      title: 'Sustainable Solutions',
      description: 'Eco-friendly designs using durable, recyclable materials.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add ScrollToTop to handle route changes */}
      <ScrollToTop />

      {/* Hero Section */}
      <div className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] overflow-hidden z-10">
        <TensileCanvas />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 to-black/70">
          <div className="container mx-auto px-6 h-full flex flex-col items-center justify-center text-white">
            <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                Architectural Tensile Excellence
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-xl">
                Crafting innovative tensile structures, vertical gardens, and tension systems for modern architecture.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 text-base sm:text-lg"
              >
                Get in Touch
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Box Links Section */}
      <div className="relative -mt-0 sm:-mt-40 md:-mt-48 z-20">
        <BoxLinksSection boxes={boxes} />
      </div>

      {/* Box Links Section Two with Background Image */}
      <div className="relative">
        {/* Background Image Section */}
        <div
          className="w-full h-80 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center bg-no-repeat relative before:content-[''] before:absolute before:inset-0 before:bg-gray-500/50"
        ></div>
        {/* Boxes Section */}
        <div className="relative">
          <BoxLinksSectionTwo boxes={boxesTwo} />
        </div>
        {/* Background Image Section */}
        <div
          className="w-full h-80 bg-[url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center bg-no-repeat relative before:content-[''] before:absolute before:inset-0 before:bg-gray-500/50"
        >
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <h2 className="text-white text-3xl md:text-4xl font-bold">
              It’s all in the detail.
            </h2>
          </div>
        </div>
        </div>
      <div>
        <TensileMeshComponent />
      </div>

      {/* Features Section */}
      <section className="py-16 z-10 sm:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="tracking-tight">Why Choose Our Tensile Solutions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 sm:h-56 object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-base">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;