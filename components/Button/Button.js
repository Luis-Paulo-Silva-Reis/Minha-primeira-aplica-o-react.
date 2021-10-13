import React from 'react';

const Button = ({children, className, onClick}) => {
  return (
    <div>
      <button type="button" className={className} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
