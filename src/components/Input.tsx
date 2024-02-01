import React from "react";

interface InputProps {
  placeholder: string;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  value?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, setValue, value }) => {
  return (
    <input
      className="text-2xl font-bold w-full py-2 outline-none focus:border-b focus:border-sky-500"
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      value={value}
    />
  );
};

export default Input;
