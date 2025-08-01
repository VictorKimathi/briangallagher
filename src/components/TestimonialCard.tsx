import React from 'react';
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  highlighted?: string[];
}
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  title,
  highlighted = []
}) => {
  // Function to highlight specific phrases in the quote
  const highlightQuote = (text: string, phrases: string[]) => {
    if (phrases.length === 0) return text;
    let highlightedText = text;
    phrases.forEach(phrase => {
      const regex = new RegExp(`(${phrase})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="text-[#F79D0C] font-semibold">$1</span>');
    });
    return <div dangerouslySetInnerHTML={{
      __html: highlightedText
    }} />;
  };
  return <div className="bg-white rounded-lg shadow-md p-8">
      <div className="text-4xl text-[#F79D0C] font-serif mb-4">"</div>
      <blockquote className="text-lg text-gray-700 italic mb-6">
        {highlightQuote(quote, highlighted)}
      </blockquote>
      <div className="flex items-center justify-end">
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-gray-600">{title}</p>
        </div>
        
      </div>
      <div className="text-4xl text-[#F79D0C] font-serif mb-4">"</div>
      
    </div>;
};
export default TestimonialCard;