import React from 'react';
import './index.css';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`px-10 py-3 text-xl rounded font-bold bg-green-500 text-white ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
