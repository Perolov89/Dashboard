import React, { useContext } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import ThemeContext from "../context/ThemeContext";

const ThemeIcon = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkmode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <button
      className={`rounded-1g border 1 border-neutral-400 p-2 absolute right-8 xl:right-32 shadow-lg ${
        darkMode ? "shadow-grey-800" : null
      }`}
      onClick={toggleDarkmode}
    >
      <MoonIcon
        className={`h-8 w-8 cursor-pointer stroke-1  ${
          darkMode
            ? "fill-yellow-400 stroke-yellow-400"
            : "fill-none stroke-neutral-400"
        }`}
      />
    </button>
  );
};

export default ThemeIcon;
