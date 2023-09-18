import "./styles.css";

import React, { useState } from "react";
import GridComponent from "./GridComponent";

function App() {
  return (
    <div className="app-container">
      <h1>Grid Component</h1>
      <GridComponent size={3} />
    </div>
  );
}

export default App;
