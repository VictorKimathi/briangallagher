import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  variant = 'primary',
  className = '',
  onClick
}) => {
  const baseStyles = 'inline-block px-6 py-3 rounded-md font-medium transition-colors duration-200 text-center';
  const variantStyles = {
    primary: 'bg-[#F79D0C] hover:bg-[#e38d00] text-white',
    secondary: 'bg-[#F8E483] hover:bg-[#f5db60] text-gray-900',
    outline: 'bg-transparent border-2 border-[#F79D0C] text-[#F79D0C] hover:bg-[#F79D0C] hover:text-white'
  };
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  if (to) {
    return <Link to={to} className={styles}>
        {children}
      </Link>;
  }
  if (href) {
    return <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>;
  }
  return <button className={styles} onClick={onClick}>
      {children}
    </button>;
};
export default Button;