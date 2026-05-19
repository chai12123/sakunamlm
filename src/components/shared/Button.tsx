import React from 'react';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'accent' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  href, 
  children, 
  className = '', 
  ...props 
}: Props) {
  
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-navy-900 text-white hover:bg-navy-800 focus:ring-navy-900",
    accent: "bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 hover:from-gold-300 hover:to-gold-500 shadow-md focus:ring-gold-500 font-semibold",
    outline: "border-2 border-navy-900 text-navy-900 hover:bg-navy-50 focus:ring-navy-900",
    ghost: "text-navy-900 hover:bg-navy-50 focus:ring-navy-900"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base md:text-lg",
    lg: "px-8 py-4 text-lg md:text-xl"
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
