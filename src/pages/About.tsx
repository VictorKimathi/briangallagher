import React from 'react';
import Button from '../components/Button';
import { Compass, Mountain, HomeIcon, Leaf } from 'lucide-react';
const About = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-24" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
    }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Meet Brian Gallagher
          </h1>
        </div>
      </section>
      {/* Profile Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Brian Gallagher" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 mb-6">
                With three years of experience as a freelance outdoor lifestyle
                writer, I specialize in creating engaging, well-researched
                content that connects readers with the natural world. My work
                spans outdoor adventure, homesteading practices, and
                eco-conscious living, all delivered with a voice that inspires
                action and appreciation for our environment.
              </p>
              <p className="text-lg text-gray-700">
                I pride myself on converting technical knowledge into content
                that's practical, accessible, and deeply readable. Whether I'm
                writing about trail reports, gardening techniques, or
                sustainable living practices, my goal is always the same: to
                create content that motivates readers to step outside and engage
                with the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Approach/Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">
            My Approach to Content Creation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-[#F79D0C] mr-3">01</span>
                Voice-Driven Drafts
              </h3>
              <p className="text-gray-700">
                I deliver clean, voice-driven content that resonates with
                readers and reflects your brand's unique tone and values. My
                writing doesn't just inform—it engages and inspires action.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-[#F79D0C] mr-3">02</span>
                Accessible Expertise
              </h3>
              <p className="text-gray-700">
                I transform complex technical knowledge into content that's
                practical, accessible, and engaging. Readers come away with a
                clear understanding and the confidence to apply what they've
                learned.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-[#F79D0C] mr-3">03</span>
                Rapid Turnaround
              </h3>
              <p className="text-gray-700">
                I understand the importance of deadlines in publishing. My
                commitment to efficiency means your content is delivered on
                time, every time, without sacrificing quality.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-[#F79D0C] mr-3">04</span>
                Research Excellence
              </h3>
              <p className="text-gray-700">
                With a strong command of independent research and AP Style, I
                ensure that all content is accurate, well-sourced, and
                professionally presented.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Interests Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">
            Beyond the Keyboard: When I'm Not Writing...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <Mountain className="text-[#F79D0C] mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Multi-day Hiking Trips
                </h3>
                <p className="text-gray-700">
                  I regularly embark on extended hiking adventures, exploring
                  trails and wilderness areas that inform my writing and deepen
                  my connection to the outdoors.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Compass className="text-[#F79D0C] mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Wildlife Tracking
                </h3>
                <p className="text-gray-700">
                  I study and practice wildlife tracking techniques, which
                  enhances my understanding of natural ecosystems and provides
                  unique perspectives for my nature writing.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <HomeIcon className="text-[#F79D0C] mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Off-grid Architecture
                </h3>
                <p className="text-gray-700">
                  I'm fascinated by tiny homes and off-grid living solutions,
                  exploring sustainable building practices and minimalist
                  lifestyle approaches.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <Leaf className="text-[#F79D0C] mr-4 flex-shrink-0" size={24} />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  DIY Sustainability
                </h3>
                <p className="text-gray-700">
                  I practice what I preach through hands-on projects in
                  composting and rainwater catchment, constantly seeking new
                  ways to live more sustainably.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-[#F79D0C]">
            <p className="text-lg italic">
              "My ultimate goal is writing pieces that make readers want to
              close their laptop and step outside—to experience the natural
              world firsthand and engage with it in meaningful ways."
            </p>
          </div>
        </div>
      </section>
      {/* Education */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">
              Santa Rosa Junior College
            </h3>
            <p className="text-gray-600 mb-4">
              Associate of Arts – Environmental Studies, Graduated 2015
            </p>
            <p className="text-gray-700">
              My formal education in environmental studies provides a strong
              foundation for my writing about ecological topics, sustainability
              practices, and our relationship with the natural world.
            </p>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">
            Interested in working together?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create content that inspires your audience to engage with the
            outdoors and live more sustainably.
          </p>
          <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>;
};
export default About;