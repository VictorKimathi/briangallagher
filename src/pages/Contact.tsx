import React, { useState } from 'react';
import { MapPinIcon, MailIcon, ClockIcon } from 'lucide-react';
import Button from '../components/Button';
const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formState);
    setIsSubmitted(true);
    setFormState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Reset submission state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center py-24" style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80')"
    }}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let's Connect
          </h1>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Information */}
            <div className="w-full lg:w-1/3">
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPinIcon className="text-[#F79D0C] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Location</h3>
                    <p className="text-gray-700">
                      Petaluma, California
                      <br />
                      <span className="text-gray-600">
                        Remote, flexible hours
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MailIcon className="text-[#F79D0C] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Email</h3>
                    <a href="mailto:gallagherb597@gmail.com" className="text-gray-700 hover:text-[#F79D0C] transition-colors duration-200">
                      gallagherb597@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="text-[#F79D0C] mr-4 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Availability</h3>
                    <p className="text-gray-700">
                      Flexible schedule
                      <br />
                      <span className="text-gray-600">Quick response time</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  I'm always keen to discuss new projects related to outdoor
                  lifestyle, DIY, adventure travel, and sustainable living. Feel
                  free to reach out!
                </p>
              </div>
            </div>
            {/* Contact Form */}
            <div className="w-full lg:w-2/3 bg-gray-50 rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-8">Send a Message</h2>
              {isSubmitted ? <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-6">
                  <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                  <p>
                    Thank you for reaching out. I'll get back to you as soon as
                    possible.
                  </p>
                </div> : <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
                        Name
                      </label>
                      <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F79D0C] focus:border-transparent" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                        Email
                      </label>
                      <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F79D0C] focus:border-transparent" />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">
                      Subject
                    </label>
                    <input type="text" id="subject" name="subject" value={formState.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F79D0C] focus:border-transparent" />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
                      Message
                    </label>
                    <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F79D0C] focus:border-transparent"></textarea>
                  </div>
                  <div>
                    <Button variant="primary" className="w-full md:w-auto px-8 py-3">
                      Send Message
                    </Button>
                  </div>
                </form>}
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Contact;