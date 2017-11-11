import React from "react";

export const Main = ({ fluid, children }) =>
  <div className={`container${fluid ? "-fluid" : ""}`}>
    {children}
  </div>;
