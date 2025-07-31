import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
// Sample portfolio data
const portfolioItems = [{
  id: 1,
  title: 'The Hidden Trails of Northern California',
  publication: 'Wild Root Journal',
  description: "An exploration of lesser-known hiking paths that offer stunning views and solitude in Northern California's wilderness.",
  imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  articleUrl: '#',
  category: 'Outdoor Adventure'
}, {
  id: 2,
  title: 'Sustainable Composting for Small Spaces',
  publication: 'Green Living Today',
  description: 'A practical guide to setting up and maintaining effective composting systems in urban apartments and small yards.',
  imageUrl: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  articleUrl: '#',
  category: 'Homesteading & Gardening'
}, {
  id: 3,
  title: 'DIY Rainwater Collection Systems',
  publication: 'Sustainable Home Magazine',
  description: 'Step-by-step instructions for building effective and affordable rainwater harvesting systems for home use.',
  imageUrl: 'https://images.unsplash.com/photo-1534269222346-5a896154c41d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  articleUrl: '#',
  category: 'Eco-Conscious & DIY Living'
}, {
  id: 4,
  title: 'Essential Gear for Winter Backpacking',
  publication: 'Outside & In Magazine',
  description: 'A comprehensive guide to selecting the right equipment for safe and comfortable multi-day hiking trips in cold weather conditions.',
  imageUrl: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80',
  articleUrl: '#',
  category: 'Outdoor Adventure'
}, {
  id: 5,
  title: "Beginner's Guide to Permaculture Gardening",
  publication: 'Grow Magazine',
  description: 'An introduction to permaculture principles and how to apply them in your home garden for sustainable, low-maintenance food production.',
  imageUrl: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  articleUrl: '#',
  category: 'Homesteading & Gardening'
}, {
  id: 6,
  title: 'Living Off-Grid: A Month in a Tiny House',
  publication: 'Minimalist Living',
  description: 'A personal account of spending a month in an off-grid tiny home, with insights on sustainable living practices and challenges.',
  imageUrl: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1530&q=80',
  articleUrl: '#',
  category: 'Eco-Conscious & DIY Living'
}, {
  id: 7,
  title: "Wildlife Tracking Basics: Reading Nature's Signs",
  publication: 'Nature Observer Quarterly',
  description: 'An introduction to identifying and interpreting animal tracks and signs in various environments.',
  imageUrl: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1574&q=80',
  articleUrl: '#',
  category: 'Outdoor Adventure'
}, {
  id: 8,
  title: 'Seasonal Planting Guide for the Pacific Northwest',
  publication: 'Regional Gardening',
  description: 'A month-by-month guide to what, when, and how to plant for optimal harvests in the unique climate of the Pacific Northwest.',
  imageUrl: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
  articleUrl: '#',
  category: 'Homesteading & Gardening'
}, {
  id: 9,
  title: 'Building a Solar Oven from Recycled Materials',
  publication: 'DIY Sustainable Projects',
  description: 'Step-by-step instructions for creating an effective solar oven using commonly available recycled materials.',
  imageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
  articleUrl: '#',
  category: 'Eco-Conscious & DIY Living'
}];
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const categories = ['All', 'Outdoor Adventure', 'Homesteading & Gardening', 'Eco-Conscious & DIY Living'];
  const filteredPortfolio = activeFilter === 'All' ? portfolioItems : portfolioItems.filter(item => item.category === activeFilter);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-24" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1475738972911-5b44ce979c37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
    }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            My Work: Stories from the Trail, Garden & Home
          </h1>
        </div>
      </section>
      {/* Portfolio Filter */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => <button key={category} onClick={() => setActiveFilter(category)} className={`px-6 py-2 rounded-full transition-colors duration-200 ${activeFilter === category ? 'bg-[#F79D0C] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {category}
              </button>)}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map(item => <PortfolioCard key={item.id} title={item.title} publication={item.publication} description={item.description} imageUrl={item.imageUrl} articleUrl={item.articleUrl} category={item.category} />)}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-700 text-lg">
              More samples available upon request.
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default Portfolio;