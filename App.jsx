import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggleButton from "./ThemeToggleButton";

const App = () => {
  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold mb-4">Theme Switcher</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};

export default App;