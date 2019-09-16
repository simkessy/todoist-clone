import React, { createContext, useContext, useState } from "react";

// Create context
export const SelectedProjectContext = createContext();

export const SelectedProjectProvider = ({ children }) => {
  const { selectedProject, setSeletedProject } = useState("INBOX");

  return (
    // Add hook values (state and state modifier) to context
    <SelectedProjectContext.Provider
      value={{ selectedProject, setSeletedProject }}
    >
      {children}
    </SelectedProjectContext.Provider>
  );
};

export const useSelectedProjectsValue = () =>
  useContext(SelectedProjectContext);
