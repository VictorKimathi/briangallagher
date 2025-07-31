import React from 'react';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';
// Sample testimonial data
const testimonials = [{
  id: 1,
  quote: 'Brian has an exceptional talent for making complex outdoor skills accessible to readers. His articles consistently drive engagement and inspire our audience to get outside and try something new.',
  name: 'Jane Smith',
  title: 'Editor, Outdoor Enthusiast Magazine',
  highlighted: ['exceptional talent', 'drive engagement', 'inspire']
}, {
  id: 2,
  quote: "Working with Brian has been a breath of fresh air. He delivers clean copy that requires minimal editing, meets every deadline, and truly understands our publication's voice. His knowledge of sustainable gardening practices is impressive.",
  name: 'Michael Johnson',
  title: 'Content Director, Green Living Today',
  highlighted: ['clean copy', 'meets every deadline', 'truly understands']
}, {
  id: 3,
  quote: "Brian's writing on DIY sustainability projects has become some of our most-shared content. He has a gift for breaking down complex concepts into approachable steps that our readers can actually follow.",
  name: 'Sarah Williams',
  title: 'Digital Editor, Sustainable Home Magazine',
  highlighted: ['most-shared content', 'gift for breaking down complex concepts']
}, {
  id: 4,
  quote: "I've worked with many outdoor writers, but Brian stands out for his authentic voice and deep knowledge of the subject matter. His trail reports and gear reviews come from real experience, and our readers can tell the difference.",
  name: 'David Chen',
  title: 'Founder, Trail Seekers Blog',
  highlighted: ['authentic voice', 'deep knowledge', 'real experience']
}, {
  id: 5,
  quote: 'Brian delivered our permaculture series on time and with exceptional attention to detail. His articles strike the perfect balance between being informative and engaging, which is exactly what our audience needs.',
  name: 'Emily Rodriguez',
  title: 'Managing Editor, Grow Magazine',
  highlighted: ['on time', 'exceptional attention to detail', 'perfect balance']
}, {
  id: 6,
  quote: "What impresses me most about Brian's work is how he seamlessly weaves practical advice into compelling narratives. His articles don't just tell readers what to do—they inspire them to take action while giving them the tools to succeed.",
  name: 'Thomas Wilson',
  title: 'Publisher, Nature & Home Quarterly',
  highlighted: ['seamlessly weaves', 'compelling narratives', 'inspire them to take action']
}];
const Testimonials = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-24" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1522794338816-ee3a17a00ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
    }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            What Clients Are Saying
          </h1>
        </div>
      </section>
      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map(testimonial => <TestimonialCard key={testimonial.id} quote={testimonial.quote} name={testimonial.name} title={testimonial.title} highlighted={testimonial.highlighted} />)}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold mb-6">
            Ready to achieve similar results?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let's discuss your project and create content that engages your
            audience and inspires action.
          </p>
          <Button to="/contact" variant="primary" className="text-lg px-8 py-4">
            Let's Discuss Your Project
          </Button>
        </div>
      </section>
    </div>;
};
export default Testimonials;