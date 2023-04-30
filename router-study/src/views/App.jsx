import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Menu from "../components/layout/Menu/Menu";
import Content from "../components/layout/Content/Content";

const App = (props) => (
  <main className="App">
    <BrowserRouter>
      <Menu />
      <Content />
    </BrowserRouter>
  </main>
)

export default App;
