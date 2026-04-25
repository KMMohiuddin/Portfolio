import React from 'react';
import clsx from 'clsx';

const Card = ({ 
  children, 
  className, 
  hover = true,
  ...props 
}) => {
  return (
    <div 
      className={clsx(
        'bg-white rounded-lg shadow-card p-6',
        hover && 'hover:shadow-card-hover transition-all duration-300 hover:transform hover:scale-105',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
