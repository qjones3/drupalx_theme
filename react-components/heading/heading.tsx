import React from 'react';

interface HeadingProps {
  title: string;
  level: string;
  modifier: string;
  icon?: React.ReactNode;
  url?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, level, modifier, icon, url }) => {
  const headingLevel = level || 'h2';

  return (
    <React.Fragment>
      {title && (
        <{headingLevel} className={`heading ${modifier || ''}`}>
          {icon}
          {url ? <a href={url} className="text-decoration-none">{title}</a> : title}
        </{headingLevel}>
      )}
    </React.Fragment>
  );
};

export default Heading;