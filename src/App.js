import React from "react";
import { Header } from "./component/layouts/Header";
import { Content } from "./component/layouts/Content";
import "./App.scss";

import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App = () => (
  <SelectedProjectProvider>
    <ProjectsProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ProjectsProvider>
  </SelectedProjectProvider>
);
