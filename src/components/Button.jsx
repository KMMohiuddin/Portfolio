import React from 'react';
import clsx from 'clsx';

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className,
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-600',
    secondary: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-500',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50',
    outlineLight: 'border-2 border-white text-white hover:bg-white hover:text-primary-600',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button 
      className={clsx(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
