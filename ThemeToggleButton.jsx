import React from "react";
import { useTheme } from "./ThemeContext";

const Button = ({ onClick, children }) => (
  <button onClick={onClick} className="px-4 py-2 rounded-lg border bg-gray-200 dark:bg-gray-700">
    {children}
  </button>
);

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex justify-center p-4">
      <Button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </Button>
    </div>
  );
};

export default ThemeToggleButton;