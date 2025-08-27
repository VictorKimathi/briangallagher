import React, { useState } from 'react';
import PortfolioCard from '../components/PortfolioCard';
// Sample portfolio data
const portfolioItems = [{
  id: 1,
  title: 'How To Upcycle A Kiddie Pool Into A Tranquil Garden Water Wall',
  description: "Upcycling a kiddie pool into a garden water wall may sound unconventional, but it’s a simple, low-cost way to introduce flowing water to a garden or patio. No digging. No expensive kits. Just a shallow plastic pool repurposed as a concealed base for a vertical cascade.",
  imageUrl: 'f.jpg',
  articleUrl: 'How_To_Upcycle_A_Kiddie_Pool.pdf',
  category: 'DIY Upcycling & Outdoor Décor'
}, {
  id: 2,
  title: 'Why Ticks Are Thriving in Suburban Backyards (and What That Means for You)',
  description: 'Ticks used to be something you worried about on a hiking trail, not while planting tomatoes or kicking a ball around the backyard. But that’s changing fast. In recent years, more homeowners are reporting tick bites right outside their doors, often without venturing beyond the yard.',
  imageUrl: 'er.jpg',
  articleUrl: 'Why_Ticks_Are_Thriving_in_Suburban_Backyards,pdf',
  category: 'Pest Control & Outdoor Health'
}, {
  id: 3,
  title: 'Backyard Projects That Attract Songbirds All Year Long',
  description: 'Songbirds bring color, movement, and life to a backyard. Their presence can also improve a garden’s health by controlling insects and helping with pollination. However, attracting them requires providing food, water, and shelter in ways that meet their needs year-round. Since many birds rely on consistent resources, creating spaces that support them in every season is essential if you want them to visit regularly.',
  imageUrl: 'https://images.unsplash.com/photo-1534269222346-5a896154c41d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
  articleUrl: 'Backyard_Projects_That_Attract_Songbirds_All_Year_Long.pdf',
  category: 'Wildlife Gardening & Backyard Projects'
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
