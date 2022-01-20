import React from "react";
import styles from "./Styling/App.module.css"

// Components
import { Navbar } from "./Components/Navbar";

function App() {
  return (
    <div className={styles.app}>
      <Navbar/>
    </div>
  );
}

export default App;
