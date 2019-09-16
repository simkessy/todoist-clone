import React, { createContext, useContext } from "react";

// Add hook
import { useProjects } from "../hooks";

// Create context
export const ProjectsContext = createContext();

export const ProjectsProvider = ({ children }) => {
  const { projects, setProjects } = useProjects();

  return (
    // Add hook values (state and state modifier) to context
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjectsValue = () => useContext(ProjectsContext);
