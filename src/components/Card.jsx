import React from 'react';

const Card = ({ 
  children, 
  variant = 'default',
  className = ''
}) => {
  const baseClass = 'rounded-2xl p-8 shadow-lg border border-moda-pink hover:shadow-xl transition-shadow';
  
  const variants = {
    default: 'bg-white',
    service: 'bg-white text-center',
    testimonial: 'bg-white'
  };

  const variantClass = variants[variant] || variants.default;

  return (
    <div className={`${baseClass} ${variantClass} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
