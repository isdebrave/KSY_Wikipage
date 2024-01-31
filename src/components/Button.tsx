import React from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  color: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, color }) => {
  return (
    <button
      onClick={onClick}
      className={`
        text-white
        ${color}
        w-fit 
        p-2 
        rounded-md 
        hover:brightness-95
      `}
    >
      {label}
    </button>
  );
};

export default Button;
