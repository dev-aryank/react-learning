import React from "react";
import { useTheme } from "./useTheme";
import SignIn from "./SignIn";

const LearnCustomHook = () => {
  const { theme, setTheme } = useTheme("dark");

  return (
    <div>
      {/* <p>{theme}</p>
      <button
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Toggle
      </button> */}
      <SignIn />
    </div>
  );
};

export default LearnCustomHook;
