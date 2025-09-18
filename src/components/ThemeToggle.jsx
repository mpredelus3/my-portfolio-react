import React, { useEffect, useState } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  const getInitial = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitial);

  useEffect(() => {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(theme === "light" ? "light-mode" : "dark-mode");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle toggle-button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;
