import React from "react";

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="
        container 
        max-w-xl 
        w-full 
        mx-auto 
        mt-10
      "
    >
      {children}
    </div>
  );
};

export default Container;
