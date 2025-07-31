import React from 'react';
import Button from './Button';
interface PortfolioCardProps {
  title: string;
  publication: string;
  description: string;
  imageUrl: string;
  articleUrl: string;
  category: string;
}
const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  publication,
  description,
  imageUrl,
  articleUrl,
  category
}) => {
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 bg-cover bg-center" style={{
      backgroundImage: `url(${imageUrl})`
    }}></div>
      <div className="p-6">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#F8E483] text-gray-800 rounded-full">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{publication}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button href={articleUrl} variant="outline">
          Read Article
        </Button>
      </div>
    </div>;
};
export default PortfolioCard;