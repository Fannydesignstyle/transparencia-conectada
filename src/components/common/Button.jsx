import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  className = '', 
  ...props 
}) => {
  const baseClasses = 'btn font-medium rounded-md transition-all duration-300 inline-flex items-center justify-center';
  
  const variantClasses = {
    primary: 'bg-primary-blue text-white hover:bg-primary-blue-light',
    secondary: 'bg-transparent text-primary-blue border-2 border-primary-blue hover:bg-primary-blue hover:text-white',
    outline: 'bg-transparent text-primary-blue border border-primary-blue hover:bg-primary-blue hover:text-white',
    ghost: 'bg-transparent text-primary-blue hover:bg-primary-blue-light'
  };
  
  const sizeClasses = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2',
    large: 'px-6 py-3 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
};

export default Button;