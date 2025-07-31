import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import { Compass, Leaf, Mountain, Home as HomeIcon } from 'lucide-react';
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[80vh] flex items-center" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
    }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Crafting Stories from the Wild: Outdoor Lifestyle & Sustainable
            Living
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Freelance content creator specializing in engaging, well-researched
            articles on outdoor adventure, homesteading, and eco-conscious
            living. Delivering voice-driven drafts that connect readers with the
            outdoors.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/portfolio" variant="primary">
              View Portfolio
            </Button>
            <Button to="/contact" variant="outline">
              Let's Collaborate
            </Button>
          </div>
        </div>
      </section>
      {/* About Brian Snapshot */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/3">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Brian Gallagher" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">About Brian</h2>
              <p className="text-lg text-gray-700 mb-6">
                Known for delivering clean, voice-driven drafts that connect
                readers with the outdoors whether it's through gear advice,
                gardening walkthroughs, or trail reports. Strong command of CMS
                tools, AP Style, and independent research. Works fast, delivers
                faster.
              </p>
              <Button to="/about" variant="secondary">
                Learn More About Me
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Services/Specialties */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Expertise & Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Mountain size={48} className="text-[#F79D0C]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Adventure & Lifestyle Features
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Engaging narratives and informative guides on hiking, camping,
                and outdoor exploration that inspire readers to experience
                nature firsthand.
              </p>
              <div className="text-center">
                <Link to="/portfolio" className="text-[#F79D0C] hover:underline font-medium">
                  View Related Work
                </Link>
              </div>
            </div>
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <Leaf size={48} className="text-[#F79D0C]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                Planting & Permaculture Content
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Practical guides and informative articles on sustainable
                gardening, permaculture principles, and growing your own food.
              </p>
              <div className="text-center">
                <Link to="/portfolio" className="text-[#F79D0C] hover:underline font-medium">
                  View Related Work
                </Link>
              </div>
            </div>
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex justify-center mb-4">
                <HomeIcon size={48} className="text-[#F79D0C]" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">
                DIY & Eco-Conscious Living
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Accessible guides to sustainable living practices, off-grid
                solutions, and DIY projects for a more environmentally friendly
                lifestyle.
              </p>
              <div className="text-center">
                <Link to="/portfolio" className="text-[#F79D0C] hover:underline font-medium">
                  View Related Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial Snippet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg shadow-md">
            <div className="text-4xl text-[#F79D0C] font-serif mb-4">"</div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
              Brian has an exceptional talent for making complex outdoor skills
              accessible to readers. His articles consistently drive engagement
              and inspire our audience to get outside and try something new.
            </blockquote>
            <div className="flex items-center justify-end">
              <div>
                <p className="font-semibold">Jane Smith</p>
                <p className="text-gray-600">
                  Editor, Outdoor Enthusiast Magazine
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button to="/testimonials" variant="secondary">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Ready to bring your outdoor story to life?
          </h2>
          <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
            Contact Brian Today
          </Button>
        </div>
      </section>
    </div>;
};
export default Home;