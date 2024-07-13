import React from 'react';

interface LinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ href, className, children }) => {
  return (
    <a href={href} className={`link ${className || ''}`}>
      {children}
    </a>
  );
};

export default Link;