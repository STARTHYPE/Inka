import React, { FC } from "react";

export type InkaProviderProps = {
  children: React.ReactNode;
};

export const InkaProvider: FC<InkaProviderProps> = ({ children }) => {
  return (
    <>
      {children}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "700px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          bottom: "0",
          right: "0",
        }}
      ></div>
    </>
  );
};
