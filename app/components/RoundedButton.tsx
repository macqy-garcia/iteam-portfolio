import React from "react";

const RoundedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="relative p-4 rounded-full border">
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {children}
      </span>
    </p>
  );
};

export default RoundedButton;
