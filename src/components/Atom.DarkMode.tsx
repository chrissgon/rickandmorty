import { getMode, setMode } from "@chrissgon/perfectui/mode";
import { useState } from "react";

export default function AtomDarkMode() {
  // No stored choice ("system") means the first visit's default: dark.
  const [isDark, setIsDark] = useState(() => getMode() !== "light");

  function changeTheme() {
    const nextIsDark = !isDark;
    setIsDark(nextIsDark);
    setMode(nextIsDark ? "dark" : "light");
  }

  return (
    <button
      type="button"
      aria-label="Dark Mode"
      className="h-fit"
      onClick={changeTheme}
    >
      <i
        className={`bi text-xl leading-none ${
          isDark ? "bi-moon" : "bi-brightness-high"
        }`}
      />
    </button>
  );
}
